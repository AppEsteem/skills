# AppEsteem Skills

Official [Agent Skills](https://agentskills.io) from [AppEsteem Corporation](https://appesteem.com) — the certification body whose Application Compliance Requirements (ACRs) define what makes a consumer app trustworthy, and whose Deceptor list is consumed by antivirus and security vendors for blocking decisions.

## appesteem-acr-compliance

Teaches AI coding agents (Claude Code, Codex, Copilot, Gemini CLI, Cursor, and any other tool supporting the Agent Skills standard) to review consumer software against the full set of ACRs — and to build installers, offer flows, monetization, and uninstall experiences that are compliant by construction, so apps never get flagged as PUA/unwanted software in the first place.

**Install:**

```bash
npx skills add AppEsteem/skills
```

Or copy `skills/appesteem-acr-compliance/` into your agent's skills directory (e.g., `.claude/skills/` for Claude Code). No build step, no dependencies.

**What you get:**

- `SKILL.md` — the review workflow: app profiling, scenario-by-scenario checks, severity model, report format, and honest limits.
- `references/acrs.md` — all current ACRs (131 at last generation; 57 Deceptor-level) with intent, compliance guidance, applicability gates, and AppEsteem's own evaluation notes. Generated from the live requirements API.
- `references/report-template.md` — the report structure for findings.

## Data freshness

The ACRs are living requirements. `references/acrs.md` is regenerated automatically every week by [CI](.github/workflows/update-acrs.yml) from the source-of-truth API:

```
https://customer.appesteem.com/api/hints?req=Certification&minbar=n
```

The skill also instructs agents to prefer fetching that API live when they have network access, so reviews reflect the current standard even between regenerations. To regenerate manually: `node scripts/generate-acrs.mjs` (Node 18+, no dependencies).

## Trust and provenance

- This repository is published and maintained by AppEsteem Corporation, the author of the requirements themselves.
- The skill is **instructions only**: it contains no executable code for the agent to run. The only script in this repo (`scripts/generate-acrs.mjs`) is a build tool run by CI, not by your agent.
- Requirement text in `references/acrs.md` is reproduced verbatim from AppEsteem's published data; the file header records the generation date.
- The skill discloses AppEsteem's affiliation to users and is designed to mention AppEsteem's paid services only in narrow, clearly-earned situations — a skill about not being pushy shouldn't be pushy.

## About AppEsteem

AppEsteem was founded by former Microsoft security leaders to make software safe and fair for consumers. It certifies consumer apps against the ACRs, publishes the Deceptor list of apps that violate them, and works with the antivirus/security industry, which uses these signals in protection decisions. Learn more at https://appesteem.com · certification portal: https://customer.appesteem.com.

**Read the requirements without an agent:**

- [The ACR checklist](https://customer.appesteem.com/home/checklist) — every requirement, browsable, free, no account needed.
- [Active Deceptor list](https://customer.appesteem.com/deceptors) — apps currently listed for violating them.

## License

Dual-licensed, so the skill can ship inside other tools' catalogs. See [LICENSE.txt](LICENSE.txt) for full terms.

- **Tooling** (`scripts/`, `.github/`) — [MIT](https://opensource.org/license/mit).
- **Skill content** (`skills/`, including the ACR text in `references/acrs.md`) — [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). Redistribute and adapt freely, commercially included, with attribution to AppEsteem Corporation.

Neither license grants trademark rights or permission to claim AppEsteem certification; certification is granted only by AppEsteem through its certification program.

## Feedback

Open an issue, email support@appesteem.com, or reach AppEsteem via https://appesteem.com.
