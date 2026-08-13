#!/usr/bin/env node
/**
 * generate-acrs.mjs — Regenerates references/acrs.md from AppEsteem's live ACR hints API.
 *
 * Zero dependencies. Requires Node 18+.
 *
 * Usage:
 *   node scripts/generate-acrs.mjs                       # fetch live data, write default output
 *   node scripts/generate-acrs.mjs --input data.json     # use a local JSON snapshot instead of fetching
 *   node scripts/generate-acrs.mjs --out path/to/acrs.md # custom output path
 *   node scripts/generate-acrs.mjs --include-examples    # include good/bad example image links
 *
 * Run by CI (.github/workflows/update-acrs.yml) on a schedule so the bundled
 * snapshot in the skill tracks the live requirements.
 */

import { readFile, writeFile } from "node:fs/promises";
import process from "node:process";

const API_URL =
  "https://customer.appesteem.com/api/hints?req=Certification&minbar=n";
const DEFAULT_OUT = "skills/appesteem-acr-compliance/references/acrs.md";

// Canonical lifecycle order. Each ACR is filed under the FIRST of its scenarios
// in this order, and its full scenario coverage is listed in its entry.
const SCENARIO_ORDER = [
  "Install",
  "Software",
  "Uninstall",
  "Docs",
  "Landing page",
  "Inline offers",
  "In-bundle offers",
  "Bundler-made offers",
  "Internal offers",
  "Ads about app",
  "Ads inside app",
  "Injected ads",
  "Injected interstitials",
];

const SECTION_NOTES = {
  Install:
    "Installer code and install-time UX: what gets written to disk and registry, what is disclosed, and how offers behave during setup.",
  Software:
    "Runtime behavior of the app itself: processes, monetization, data handling, updates, and interaction with the system, browser, and other apps.",
  Uninstall:
    "The uninstall experience: standard removal, cleanup, reverting changes, and no tricks to deter removal.",
  Docs: "The app's documents: EULA/Terms of Service, Privacy Policy, and Returns and Cancellation Policy.",
  "Landing page": "The app's download/marketing landing pages.",
  "Inline offers": "Interstitial offers made on landing pages.",
  "In-bundle offers": "Offers presented inside a bundle.",
  "Bundler-made offers": "Offers made by a bundler or download manager.",
  "Internal offers": "Offers the app makes for its own upsells and features.",
  "Ads about app": "Advertising that promotes the app.",
  "Ads inside app": "Advertising displayed within the app's own UI.",
  "Injected ads": "Ads the app injects into browsers, email clients, or the desktop.",
  "Injected interstitials":
    "Interstitial pages/popups the app injects into browsers.",
};

// Minimum record count we consider a healthy API response. Protects CI from
// committing a truncated or broken file if the API misbehaves.
const MIN_EXPECTED = 50;

const REQUIRED_FIELDS = [
  "id",
  "requirement",
  "details",
  "conditionalQuestion",
  "prescription",
  "scenarios",
  "isDeceptor",
  "usc",
  "instructions",
];

function parseArgs(argv) {
  const args = { input: null, out: DEFAULT_OUT, url: API_URL, examples: false };
  for (let i = 2; i < argv.length; i++) {
    switch (argv[i]) {
      case "--input":
        args.input = argv[++i];
        break;
      case "--out":
        args.out = argv[++i];
        break;
      case "--url":
        args.url = argv[++i];
        break;
      case "--include-examples":
        args.examples = true;
        break;
      default:
        console.error(`Unknown argument: ${argv[i]}`);
        process.exit(2);
    }
  }
  return args;
}

async function loadData(args) {
  if (args.input) {
    return JSON.parse(await readFile(args.input, "utf8"));
  }
  const res = await fetch(args.url, {
    headers: { accept: "application/json" },
  });
  if (!res.ok) {
    throw new Error(`API returned HTTP ${res.status} for ${args.url}`);
  }
  return res.json();
}

function validate(data) {
  if (!Array.isArray(data)) throw new Error("API response is not an array");
  if (data.length < MIN_EXPECTED) {
    throw new Error(
      `Only ${data.length} ACRs returned (expected at least ${MIN_EXPECTED}); refusing to write a possibly-truncated file`
    );
  }
  const seen = new Set();
  for (const acr of data) {
    for (const f of REQUIRED_FIELDS) {
      if (!(f in acr)) throw new Error(`ACR ${acr.id ?? "?"} missing field: ${f}`);
    }
    if (seen.has(acr.id)) throw new Error(`Duplicate ACR id: ${acr.id}`);
    seen.add(acr.id);
  }
}

const displayId = (id) => id.toUpperCase(); // acr-044 -> ACR-044
const deceptorFlag = (acr) => (acr.isDeceptor ? " ⛔" : "");
const heading = (acr) => `${displayId(acr.id)}${deceptorFlag(acr)}`;

// Mirrors github-slugger (trim, strip punctuation/symbols, lowercase, spaces ->
// hyphens) so links resolve against the rendered headings. The ⛔ on Deceptor
// entries is stripped but its leading space survives as a trailing hyphen, so
// anchors must be derived from the heading text rather than the bare id.
const anchor = (acr) =>
  heading(acr)
    .trim()
    .replace(/[^\p{L}\p{N}\p{M}\-_ ]/gu, "")
    .toLowerCase()
    .replace(/ /g, "-");

const link = (acr) => `[${displayId(acr.id)}](#${anchor(acr)})`;

function primaryScenario(acr) {
  for (const s of SCENARIO_ORDER) if (acr.scenarios.includes(s)) return s;
  return "Other";
}

function severityLine(acr) {
  return acr.isDeceptor
    ? "**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user."
    : "**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.";
}

function renderAcr(acr, includeExamples) {
  const lines = [];
  lines.push(`### ${heading(acr)}`);
  lines.push("");
  lines.push(severityLine(acr));
  lines.push("");
  lines.push(`**Requirement:** ${acr.requirement.trim()}`);
  lines.push("");
  if (acr.details.trim()) lines.push(`**Intent:** ${acr.details.trim()}`, "");
  if (acr.prescription.trim())
    lines.push(`**How to comply:** ${acr.prescription.trim()}`, "");
  if (acr.conditionalQuestion.trim())
    lines.push(`**Only applies if:** ${acr.conditionalQuestion.trim()}`, "");
  lines.push(`**Scenarios:** ${acr.scenarios.join(", ")}`);
  lines.push(`**Consumer principle:** ${acr.usc}`);
  if (acr.instructions.trim())
    lines.push("", `**Evaluation notes:** ${acr.instructions.trim()}`);
  if (includeExamples) {
    if (acr.goodExamples?.length)
      lines.push(
        "",
        `**Good examples:** ${acr.goodExamples.map((u) => `<${u}>`).join(" · ")}`
      );
    if (acr.badExamples?.length)
      lines.push(
        "",
        `**Bad examples:** ${acr.badExamples.map((u) => `<${u}>`).join(" · ")}`
      );
  }
  lines.push("");
  return lines.join("\n");
}

function buildMarkdown(data, includeExamples) {
  const generated = new Date().toISOString().slice(0, 10);
  const deceptors = data.filter((a) => a.isDeceptor);
  const byId = (a, b) => a.id.localeCompare(b.id);

  // Group ACRs by primary scenario.
  const sections = new Map(SCENARIO_ORDER.map((s) => [s, []]));
  sections.set("Other", []);
  for (const acr of data) sections.get(primaryScenario(acr)).push(acr);
  for (const list of sections.values()) list.sort(byId);

  const out = [];
  out.push("# AppEsteem Application Compliance Requirements (ACRs)");
  out.push("");
  out.push(
    `> GENERATED FILE — do not edit by hand. Generated ${generated} from ${API_URL} by scripts/generate-acrs.mjs. ${data.length} requirements (${deceptors.length} Deceptor-level, ${data.length - deceptors.length} certification-level). Requirement text is reproduced verbatim from AppEsteem's live data.`
  );
  out.push("");
  out.push("## How to read this file");
  out.push("");
  out.push(
    "Each entry is one certification requirement. **Severity** tells you what a violation costs: DECEPTOR-LEVEL violations (marked ⛔) are behaviors that can get an app listed as a Deceptor, which AV and security vendors consume as a blocklist — they block without asking the user. CERTIFICATION-LEVEL requirements must be met to earn AppEsteem certification. **Intent** is why the rule exists — when a literal reading is ambiguous, honor the intent. **How to comply** is AppEsteem's prescriptive guidance to the vendor. **Only applies if** gates the requirement on an app type (bundler, injector/blocker, system utility) — skip entries whose gate doesn't match the app under review. **Scenarios** lists every lifecycle phase where the requirement is checked; entries are filed under their earliest scenario, so always use the scenario index below (not just the section headings) when reviewing a specific phase. **Evaluation notes** is guidance AppEsteem gives its own testers — use it to judge edge cases."
  );
  out.push("");

  // Scenario index.
  out.push("## Index by scenario");
  out.push("");
  out.push(
    "All ACRs that apply in each lifecycle phase (an ACR can appear in several):"
  );
  out.push("");
  for (const s of SCENARIO_ORDER) {
    const ids = data
      .filter((a) => a.scenarios.includes(s))
      .sort(byId)
      .map(link);
    out.push(`- **${s}** (${ids.length}): ${ids.join(", ")}`);
  }
  out.push("");

  // Conditional gates index.
  out.push("## Index by app-type gate");
  out.push("");
  out.push(
    "Most ACRs apply to every consumer app. These apply only when the gate is true:"
  );
  out.push("");
  const gates = [...new Set(data.map((a) => a.conditionalQuestion).filter(Boolean))];
  for (const g of gates) {
    const ids = data
      .filter((a) => a.conditionalQuestion === g)
      .sort(byId)
      .map(link);
    out.push(`- **${g}** ${ids.join(", ")}`);
  }
  out.push("");

  // Deceptor-level quick list.
  out.push("## All Deceptor-level ACRs at a glance");
  out.push("");
  out.push(
    deceptors
      .sort(byId)
      .map(link)
      .join(", ")
  );
  out.push("");

  // Sections.
  for (const s of [...SCENARIO_ORDER, "Other"]) {
    const list = sections.get(s);
    if (!list?.length) continue;
    out.push(`## ${s}`);
    out.push("");
    if (SECTION_NOTES[s]) out.push(SECTION_NOTES[s], "");
    for (const acr of list) out.push(renderAcr(acr, includeExamples));
  }

  out.push("---");
  out.push("");
  out.push(
    `Source of truth: ${API_URL} — fetch it directly for the most current requirements. Published by AppEsteem Corporation, https://appesteem.com.`
  );
  out.push("");
  return out.join("\n");
}

async function main() {
  const args = parseArgs(process.argv);
  const data = await loadData(args);
  validate(data);
  const md = buildMarkdown(data, args.examples);
  await writeFile(args.out, md, "utf8");
  console.log(
    `Wrote ${args.out}: ${data.length} ACRs (${data.filter((a) => a.isDeceptor).length} Deceptor-level), ${md.length} bytes`
  );
}

main().catch((err) => {
  console.error(`generate-acrs failed: ${err.message}`);
  process.exit(1);
});
