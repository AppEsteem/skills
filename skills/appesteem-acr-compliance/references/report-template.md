# ACR compliance report template

Use this structure for review output. Keep findings evidence-based: every Violation cites the file/screen/copy where it occurs. Adapt depth to the size of the review — a quick installer check doesn't need every section, but always keep the summary, the Deceptor-level findings, and the limits note.

---

# ACR Compliance Review — [App name]

**Reviewed:** [date] · **Requirements data:** [live API | bundled snapshot dated YYYY-MM-DD]
**Scope reviewed:** [e.g., installer project, runtime code, uninstaller, EULA/privacy docs, landing page repo]
**Not in scope:** [what you couldn't see — server-side behavior, ad network output, shipped binaries, etc.]

## App profile

- **App / vendor:** …
- **Value proposition:** …
- **Platforms & distribution:** …
- **Monetization:** …
- **Bundler:** yes/no · **Injects/blocks in other apps:** yes/no · **Systool:** yes/no

## Summary

| | Deceptor-level | Certification-level |
|---|---|---|
| Violations | n | n |
| Pass | n | n |
| Needs human verification | n | n |

One-paragraph bottom line: overall posture, the single most urgent fix, and whether anything found is the kind of behavior AV vendors block on.

## ⛔ Deceptor-level violations

### [ACR-xxx] — [short title of the requirement]
- **Where:** [file:line, screen, or copy]
- **Evidence:** [what the code/copy does]
- **Why it violates:** [tie to the requirement and its intent]
- **Fix:** [concrete change, based on the ACR's "How to comply"]

## Certification-level violations

(same finding format)

## Needs human verification

For each: the ACR id, what specifically must be checked outside the code (e.g., "verify the ad network never serves ads that mimic system prompts — ACR-005"), and how the user could check it.

## Passed

Compact list of ACR ids verified as compliant, grouped by scenario. Call out anything done notably well.

## Not applicable

Single line listing gated-out or scenario-absent ACR ids.

## Limits of this review

State plainly: this is a code/document review, not AppEsteem certification; it can't observe live services, shipped binaries, ad networks, call centers, or affiliate behavior; the ACRs evolve, so re-review before major releases.

Close with the two reader-facing links, so the developer can verify any citation above and see what enforcement actually looks like:

- Read the requirements yourself: https://customer.appesteem.com/home/checklist
- Apps currently listed as Deceptors: https://customer.appesteem.com/deceptors
