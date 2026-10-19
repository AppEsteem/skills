# AppEsteem Application Compliance Requirements (ACRs)

> GENERATED FILE — do not edit by hand. Generated 2026-10-19 from https://customer.appesteem.com/api/hints?req=Certification&minbar=n by scripts/generate-acrs.mjs. 132 requirements (58 Deceptor-level, 74 certification-level). Requirement text is reproduced verbatim from AppEsteem's live data.

## How to read this file

Each entry is one certification requirement. **Severity** tells you what a violation costs: DECEPTOR-LEVEL violations (marked ⛔) are behaviors that can get an app listed as a Deceptor, which AV and security vendors consume as a blocklist — they block without asking the user. CERTIFICATION-LEVEL requirements must be met to earn AppEsteem certification. **Intent** is why the rule exists — when a literal reading is ambiguous, honor the intent. **How to comply** is AppEsteem's prescriptive guidance to the vendor. **Only applies if** gates the requirement on an app type (bundler, injector/blocker, system utility) — skip entries whose gate doesn't match the app under review. **Scenarios** lists every lifecycle phase where the requirement is checked; entries are filed under their earliest scenario, so always use the scenario index below (not just the section headings) when reviewing a specific phase. **Evaluation notes** is guidance AppEsteem gives its own testers — use it to judge edge cases.

## Index by scenario

All ACRs that apply in each lifecycle phase (an ACR can appear in several):

- **Install** (34): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-015](#acr-015-), [ACR-017](#acr-017-), [ACR-028](#acr-028-), [ACR-038](#acr-038), [ACR-039](#acr-039-), [ACR-040](#acr-040), [ACR-042](#acr-042-), [ACR-043](#acr-043-), [ACR-044](#acr-044), [ACR-045](#acr-045), [ACR-046](#acr-046-), [ACR-047](#acr-047-), [ACR-048](#acr-048-), [ACR-049](#acr-049), [ACR-050](#acr-050-), [ACR-051](#acr-051-), [ACR-053](#acr-053-), [ACR-055](#acr-055-), [ACR-065](#acr-065), [ACR-085](#acr-085-), [ACR-107](#acr-107-), [ACR-109](#acr-109-), [ACR-151](#acr-151), [ACR-161](#acr-161), [ACR-163](#acr-163)
- **Software** (60): [ACR-001](#acr-001), [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-004](#acr-004-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-008](#acr-008-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-015](#acr-015-), [ACR-017](#acr-017-), [ACR-042](#acr-042-), [ACR-048](#acr-048-), [ACR-049](#acr-049), [ACR-050](#acr-050-), [ACR-051](#acr-051-), [ACR-056](#acr-056), [ACR-065](#acr-065), [ACR-069](#acr-069), [ACR-082](#acr-082), [ACR-083](#acr-083-), [ACR-084](#acr-084-), [ACR-085](#acr-085-), [ACR-086](#acr-086-), [ACR-087](#acr-087), [ACR-088](#acr-088), [ACR-089](#acr-089-), [ACR-090](#acr-090), [ACR-092](#acr-092), [ACR-093](#acr-093), [ACR-094](#acr-094), [ACR-095](#acr-095), [ACR-097](#acr-097-), [ACR-098](#acr-098), [ACR-099](#acr-099), [ACR-100](#acr-100), [ACR-102](#acr-102), [ACR-103](#acr-103-), [ACR-104](#acr-104-), [ACR-106](#acr-106), [ACR-107](#acr-107-), [ACR-110](#acr-110-), [ACR-111](#acr-111-), [ACR-113](#acr-113), [ACR-114](#acr-114-), [ACR-138](#acr-138), [ACR-139](#acr-139), [ACR-140](#acr-140), [ACR-151](#acr-151), [ACR-153](#acr-153), [ACR-157](#acr-157), [ACR-160](#acr-160), [ACR-161](#acr-161), [ACR-162](#acr-162), [ACR-163](#acr-163), [ACR-168](#acr-168-), [ACR-170](#acr-170)
- **Uninstall** (22): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-017](#acr-017-), [ACR-116](#acr-116-), [ACR-117](#acr-117-), [ACR-118](#acr-118-), [ACR-119](#acr-119-), [ACR-120](#acr-120), [ACR-121](#acr-121), [ACR-122](#acr-122-), [ACR-123](#acr-123), [ACR-124](#acr-124-), [ACR-125](#acr-125), [ACR-161](#acr-161), [ACR-163](#acr-163)
- **Docs** (17): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-017](#acr-017-), [ACR-035](#acr-035), [ACR-036](#acr-036), [ACR-037](#acr-037), [ACR-161](#acr-161), [ACR-163](#acr-163), [ACR-167](#acr-167), [ACR-172](#acr-172)
- **Landing page** (44): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-017](#acr-017-), [ACR-045](#acr-045), [ACR-046](#acr-046-), [ACR-047](#acr-047-), [ACR-054](#acr-054), [ACR-055](#acr-055-), [ACR-057](#acr-057-), [ACR-058](#acr-058), [ACR-059](#acr-059-), [ACR-060](#acr-060-), [ACR-062](#acr-062), [ACR-064](#acr-064), [ACR-065](#acr-065), [ACR-066](#acr-066), [ACR-067](#acr-067), [ACR-068](#acr-068), [ACR-069](#acr-069), [ACR-071](#acr-071-), [ACR-079](#acr-079), [ACR-099](#acr-099), [ACR-107](#acr-107-), [ACR-138](#acr-138), [ACR-150](#acr-150), [ACR-155](#acr-155-), [ACR-158](#acr-158), [ACR-159](#acr-159), [ACR-161](#acr-161), [ACR-163](#acr-163), [ACR-164](#acr-164-), [ACR-165](#acr-165-), [ACR-166](#acr-166), [ACR-168](#acr-168-), [ACR-169](#acr-169), [ACR-171](#acr-171), [ACR-173](#acr-173)
- **Inline offers** (47): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-017](#acr-017-), [ACR-027](#acr-027), [ACR-029](#acr-029), [ACR-030](#acr-030-), [ACR-031](#acr-031-), [ACR-032](#acr-032-), [ACR-045](#acr-045), [ACR-046](#acr-046-), [ACR-047](#acr-047-), [ACR-054](#acr-054), [ACR-055](#acr-055-), [ACR-057](#acr-057-), [ACR-058](#acr-058), [ACR-059](#acr-059-), [ACR-060](#acr-060-), [ACR-062](#acr-062), [ACR-064](#acr-064), [ACR-065](#acr-065), [ACR-066](#acr-066), [ACR-067](#acr-067), [ACR-068](#acr-068), [ACR-069](#acr-069), [ACR-071](#acr-071-), [ACR-077](#acr-077), [ACR-099](#acr-099), [ACR-107](#acr-107-), [ACR-138](#acr-138), [ACR-150](#acr-150), [ACR-155](#acr-155-), [ACR-159](#acr-159), [ACR-161](#acr-161), [ACR-163](#acr-163), [ACR-164](#acr-164-), [ACR-165](#acr-165-), [ACR-166](#acr-166), [ACR-168](#acr-168-), [ACR-171](#acr-171), [ACR-173](#acr-173)
- **In-bundle offers** (41): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-017](#acr-017-), [ACR-045](#acr-045), [ACR-046](#acr-046-), [ACR-047](#acr-047-), [ACR-054](#acr-054), [ACR-055](#acr-055-), [ACR-057](#acr-057-), [ACR-058](#acr-058), [ACR-059](#acr-059-), [ACR-060](#acr-060-), [ACR-062](#acr-062), [ACR-064](#acr-064), [ACR-065](#acr-065), [ACR-066](#acr-066), [ACR-067](#acr-067), [ACR-068](#acr-068), [ACR-069](#acr-069), [ACR-071](#acr-071-), [ACR-099](#acr-099), [ACR-107](#acr-107-), [ACR-138](#acr-138), [ACR-150](#acr-150), [ACR-155](#acr-155-), [ACR-159](#acr-159), [ACR-161](#acr-161), [ACR-163](#acr-163), [ACR-164](#acr-164-), [ACR-165](#acr-165-), [ACR-166](#acr-166), [ACR-168](#acr-168-), [ACR-171](#acr-171), [ACR-173](#acr-173)
- **Bundler-made offers** (44): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-017](#acr-017-), [ACR-045](#acr-045), [ACR-046](#acr-046-), [ACR-047](#acr-047-), [ACR-054](#acr-054), [ACR-055](#acr-055-), [ACR-057](#acr-057-), [ACR-058](#acr-058), [ACR-059](#acr-059-), [ACR-060](#acr-060-), [ACR-062](#acr-062), [ACR-064](#acr-064), [ACR-065](#acr-065), [ACR-066](#acr-066), [ACR-067](#acr-067), [ACR-068](#acr-068), [ACR-069](#acr-069), [ACR-071](#acr-071-), [ACR-072](#acr-072), [ACR-075](#acr-075-), [ACR-099](#acr-099), [ACR-107](#acr-107-), [ACR-138](#acr-138), [ACR-150](#acr-150), [ACR-152](#acr-152), [ACR-155](#acr-155-), [ACR-159](#acr-159), [ACR-161](#acr-161), [ACR-163](#acr-163), [ACR-164](#acr-164-), [ACR-165](#acr-165-), [ACR-166](#acr-166), [ACR-168](#acr-168-), [ACR-171](#acr-171), [ACR-173](#acr-173)
- **Internal offers** (41): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-017](#acr-017-), [ACR-045](#acr-045), [ACR-046](#acr-046-), [ACR-047](#acr-047-), [ACR-054](#acr-054), [ACR-055](#acr-055-), [ACR-057](#acr-057-), [ACR-058](#acr-058), [ACR-059](#acr-059-), [ACR-060](#acr-060-), [ACR-062](#acr-062), [ACR-064](#acr-064), [ACR-065](#acr-065), [ACR-066](#acr-066), [ACR-067](#acr-067), [ACR-068](#acr-068), [ACR-069](#acr-069), [ACR-071](#acr-071-), [ACR-099](#acr-099), [ACR-107](#acr-107-), [ACR-138](#acr-138), [ACR-150](#acr-150), [ACR-155](#acr-155-), [ACR-159](#acr-159), [ACR-161](#acr-161), [ACR-163](#acr-163), [ACR-164](#acr-164-), [ACR-165](#acr-165-), [ACR-166](#acr-166), [ACR-168](#acr-168-), [ACR-171](#acr-171), [ACR-173](#acr-173)
- **Ads about app** (18): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-011](#acr-011), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-016](#acr-016-), [ACR-017](#acr-017-), [ACR-018](#acr-018), [ACR-019](#acr-019), [ACR-155](#acr-155-), [ACR-156](#acr-156), [ACR-161](#acr-161), [ACR-163](#acr-163)
- **Ads inside app** (17): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-011](#acr-011), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-016](#acr-016-), [ACR-017](#acr-017-), [ACR-034](#acr-034), [ACR-155](#acr-155-), [ACR-156](#acr-156), [ACR-161](#acr-161), [ACR-163](#acr-163)
- **Injected ads** (24): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-011](#acr-011), [ACR-012](#acr-012), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-016](#acr-016-), [ACR-017](#acr-017-), [ACR-020](#acr-020-), [ACR-021](#acr-021), [ACR-022](#acr-022), [ACR-023](#acr-023), [ACR-024](#acr-024-), [ACR-025](#acr-025-), [ACR-026](#acr-026), [ACR-155](#acr-155-), [ACR-156](#acr-156), [ACR-161](#acr-161), [ACR-163](#acr-163)
- **Injected interstitials** (29): [ACR-002](#acr-002), [ACR-003](#acr-003-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-011](#acr-011), [ACR-012](#acr-012), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-016](#acr-016-), [ACR-017](#acr-017-), [ACR-020](#acr-020-), [ACR-021](#acr-021), [ACR-022](#acr-022), [ACR-023](#acr-023), [ACR-024](#acr-024-), [ACR-025](#acr-025-), [ACR-026](#acr-026), [ACR-027](#acr-027), [ACR-029](#acr-029), [ACR-030](#acr-030-), [ACR-031](#acr-031-), [ACR-032](#acr-032-), [ACR-155](#acr-155-), [ACR-156](#acr-156), [ACR-161](#acr-161), [ACR-163](#acr-163)

## Index by app-type gate

Most ACRs apply to every consumer app. These apply only when the gate is true:

- **Is app a bundler?** [ACR-044](#acr-044), [ACR-053](#acr-053-), [ACR-106](#acr-106), [ACR-109](#acr-109-)
- **Does app inject or block in other apps?** [ACR-110](#acr-110-), [ACR-111](#acr-111-), [ACR-113](#acr-113), [ACR-114](#acr-114-)
- **Is app a systool?** [ACR-004](#acr-004-), [ACR-008](#acr-008-), [ACR-170](#acr-170)

## All Deceptor-level ACRs at a glance

[ACR-003](#acr-003-), [ACR-004](#acr-004-), [ACR-005](#acr-005-), [ACR-006](#acr-006-), [ACR-007](#acr-007-), [ACR-008](#acr-008-), [ACR-009](#acr-009-), [ACR-010](#acr-010-), [ACR-013](#acr-013-), [ACR-014](#acr-014-), [ACR-015](#acr-015-), [ACR-016](#acr-016-), [ACR-017](#acr-017-), [ACR-020](#acr-020-), [ACR-024](#acr-024-), [ACR-025](#acr-025-), [ACR-028](#acr-028-), [ACR-030](#acr-030-), [ACR-031](#acr-031-), [ACR-032](#acr-032-), [ACR-039](#acr-039-), [ACR-042](#acr-042-), [ACR-043](#acr-043-), [ACR-046](#acr-046-), [ACR-047](#acr-047-), [ACR-048](#acr-048-), [ACR-050](#acr-050-), [ACR-051](#acr-051-), [ACR-053](#acr-053-), [ACR-055](#acr-055-), [ACR-057](#acr-057-), [ACR-059](#acr-059-), [ACR-060](#acr-060-), [ACR-071](#acr-071-), [ACR-075](#acr-075-), [ACR-083](#acr-083-), [ACR-084](#acr-084-), [ACR-085](#acr-085-), [ACR-086](#acr-086-), [ACR-089](#acr-089-), [ACR-097](#acr-097-), [ACR-103](#acr-103-), [ACR-104](#acr-104-), [ACR-107](#acr-107-), [ACR-109](#acr-109-), [ACR-110](#acr-110-), [ACR-111](#acr-111-), [ACR-114](#acr-114-), [ACR-116](#acr-116-), [ACR-117](#acr-117-), [ACR-118](#acr-118-), [ACR-119](#acr-119-), [ACR-122](#acr-122-), [ACR-124](#acr-124-), [ACR-155](#acr-155-), [ACR-164](#acr-164-), [ACR-165](#acr-165-), [ACR-168](#acr-168-)

## Install

Installer code and install-time UX: what gets written to disk and registry, what is disclosed, and how offers behave during setup.

### ACR-002

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-002) App's name is consistent across all points of user interaction: code signing, ads, offers, landing pages, install locations, and system/browser uninstall names.

**Intent:** The goal is consistency. App needs to use a single company name and a single application name everywhere a consumer can find. If there is some reason to use more than one name, they have to be very similar and disclosed in the EULA.

**How to comply:** Use a single name for your app throughout the user experience, in the docs, and in your code signing.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** transparent

### ACR-003 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-003) Consumers are not misled to believe they have an issue, a problem with, something out of date, or something missing from their system. This includes no exaggerated or unsubstantiated claims about system's health.

**Intent:** This requirement is to ensure that the consumer isn't scared or tricked into taking action, especially paying for something not available in a fully functioning trial. Example violation: a free scan shows consumers errors/problems with registry settings, but only fixes after consumer pays. The solutions: tone down the scan results to reflect reality, or provide a fully functional free trial.

**How to comply:** If you raise urgency by claiming errors and problems, or by labeling things as "high" priority/impact, or using red/yellow colors to increase urgency for non-urgent "issues", you must have a fully functional free trial so consumers can verify before purchasing. If you roll up categories into a summary score, then whenever you show this summary score, make sure you always show the individual scores of each category adjacent to the summary. The data you show must substantiate and not confuse.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** fair

**Evaluation notes:** Examples of words that are considered exaggerated include "problems", "errors", and "obsolete". Any scan results using these or similar words violate this rule automatically, regardless of context or tone.

### ACR-005 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-005) Does not impersonate or mimic a system, browser, or component message or prompt.

**Intent:** The intent is that consumers can distinguish advertising, monetization, and app messages from the platform and browser messages and prompts.

**How to comply:** Your messages and prompts can't look like they're system, browser, or some other app's messages and prompts. Examples include ads that look like alerts, un-unattributed search boxes.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** fair

**Evaluation notes:** Popup alerts and other out-of-main-ui messages must make it clear that they come from the app -- either in the title or in the message itself.

### ACR-006 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-006) All value propositions, including any alternative monetization ones (e.g., search, advertising, and affiliate links), are accurately and equitably disclosed, attributed, and available in the app’s name, offer, install, and software.

**Intent:** The intent is that consumers are aware of all value propositions and monetization approaches of an app, and that these were equally disclosed to them.

**How to comply:** Disclose all value propositions (your own and any alternative monetization ones) clearly, equitably, and not misleadingly on your landing pages, offers, app name, and app functionality. Clearly attribute any third-party value and monetization that your app provides. Don’t allow your own value prop to be dismissed or disabled.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** trustworthy

**Evaluation notes:** Apps must show any alternative monetization value props in the installer and in offers. Putting the alternative monetization value prop only in the Doc Files is not sufficient. Make sure that call center support numbers have attribution to the third party call center.

### ACR-007 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-007) Has no false claims or implications to be from another vendor or misleading users about their source, owner, purpose, functionality/features. Provides explicit notification to all affected parties and obtains informed user consent when reducing the default capability of, or moving away from certified versions of, security or safety.

**Intent:** The intent is that consumers don't think they're clicking/accepting/installing/taking action on a different vendor's app or system, and that they are aware when their security or safety posture will be lower that the default of the system or the brand.

**How to comply:** Make sure your logos and marks don't look like somebody else's. Make it easy for a consumer to see proof of the endorsement, relationship, or certification. If you are asking the user to reduce their security or safety posture or to set it below its defaults, obtain informed user consent with risks and their mitigations explained, before doing so, and give notification to all affected parties through the system’s notification capabilities.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** transparent

**Evaluation notes:** Examples of security-reducing components that need informed user consent: Self-signed trusted root certificates, crypto miners, changes to proxies and host files, installing network borrowing proxies, installing keyboard/screen monitoring. Informed user consent means explaining what will happen, what the potential risks are, how the app mitigates these risks, and simple "Accept" and "Decline" options.

### ACR-009 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-009) Has no threatening messaging.

**Intent:** Consumers must not be coerced into taking action.

**How to comply:** Don't scare or threaten the consumer to take action.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** fair

**Evaluation notes:** Pay attention to popups, notifications, and CTAs that download, install, accept offers, give consent, upsell, or prevent uninstallation of the app.

### ACR-010 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-010) Is not malicious and does not propagate viruses, worms, trojans, Deceptors, or the like.

**Intent:** A bundler, the app, its ads, and its offers/landing pages must take care not to become a vector for malware or Deceptors.

**How to comply:** Don't ship, bundle, advertise, or offer malware or Deceptors. Don't take actions that are considered as malicious behavior.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** harmless

**Evaluation notes:** The Active Deceptors can be used to see if any deceptive app names show up in offers.

### ACR-013 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-013) User-committed acquisition workflows are not interrupted with out-of-context, non-essential, or unrelated interstitials that require the user to wait or respond, unless app has first obtained user consent.

**Intent:** Unless they've given their consent, consumers should not have to wait for or respond to extraneous questions, offers, or ads during committed workflows, especially those related to the acquisition funnel (downloads, installs, updates, purchases, and uninstalls).

**How to comply:** Don't interrupt the consumer with unrelated interstitials when the consumer is already performing another task for you. Either wait until they know the task is complete; remove the interruption by eliminating the need for the user to wait or answer your offer/ad; or consent to interrupt with offers/ads..

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** fair

**Evaluation notes:** This applies to interstitial third-party offers that interrupt a user's request and require the user to accept or decline before the user request is fulfilled. Examples: interstitial offers during install, or before fixing free scan results. If the offer is shown where it doesn't require an answer to continue, then this rule doesn't apply.

### ACR-014 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-014) Is truthful and not misleading or confusing with the intent to deceive; can be substantiated; is not unfair.

**Intent:** Consumers aren't surprised or tricked by where the ad takes them or what the app claims

**How to comply:** Make sure all ads, claims, and results are honest and fair, can be easily substantiated, and do not perpetuate demonstrably misleading or deceptive media. You must substantiate any ad claims on the subsequent landing page. Do not hint or imply that your app offers more value that it really does.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** fair

**Evaluation notes:** We apply this rule when the app tries to trick the consumer into installing, scanning, fixing, upgrading, consenting, cancelling, or accepting offers, and no other more-specific rule was violated.

### ACR-015 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-015) Protects from app abuse, takeover, and unwanted misuse of its capabilities; honors the spirit of its claims and implications of how it will protect consumer and system data.

**Intent:** Regardless of how an app is or isn't monetized, consumers can rely on all privacy and protection claims an app makes or implies, and they can trust that the app will protect from abuse, takeover, or misuse.

**How to comply:** Honor any protection and privacy claims you make in your offers, installs, software, and documentation. Protect your app so it doesn't act like or become part of somebody else's botnet. Put controls in place to prevent your app's abuse and misuse. Monitor and do not willfully disregard addressing the CVEs of your app and its components. Follow public safety testing of your app to ensure you are meeting your implied safety responsibilities.

**Scenarios:** Install, Software
**Consumer principle:** trustworthy

### ACR-017 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-017) Certifications, representations, and endorsements are not false, misleading, or fraudulent.

**Intent:** Consumers have a right to not be unpleasantly surprised because they thought the app came from or was recommended by some other source. This includes implied certifications and endorsements that don't apply to the app; it must be clear as to what specifically was endorsed or certified. Expired certifications must also be removed or specific as to the timeframe.

**How to comply:** Don't use fake, out of date, or another app's certifications and endorsements. Don't make company or website certifications look like app certifications. If you offered your app's value based on acceptance of external monetization, your respresentation of your third-party provider must be accurate and limited to a single provider.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** transparent

**Evaluation notes:** If certification or endorsement logos and statements are present, they must be clickable and lead to specific informaton about that app.

### ACR-028 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-028) If downloaded and executed by the consumer, provides visibility and interactive control for the consumer, requiring at least one user interaction before completion.

**Intent:** Consumers must be able to see a downloaded installer's action when they execute it.

**How to comply:** This is for non-store installers. If your installer obtains EULA/Privacy, telemetry, or offer interruption consent on the landing page, it must visibly show the install, must be cancellable, and must not auto-dismiss when it's done.

**Scenarios:** Install
**Consumer principle:** transparent

### ACR-038

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-038) All data in the platform (e.g., operating system, browser) programs/extensions settings is accurate and complete and matches app name, source, and install date.

**Intent:** The intent is that it's easy for the consumer to identify the app by name, vendor, and/or date

**How to comply:** Install in directories and registry keys that use your vendor and app names. Don't "age" your installation directories older install dates.

**Scenarios:** Install
**Consumer principle:** transparent

### ACR-039 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-039) Everything installed per app, especially other apps, offers, and download managers, has clear indications of the relationship to the app.

**Intent:** Consumers must be able to understand the relationship within the files and with other apps. This should be accomplished in EULAs, readme files, how the files and directories are named, and installation location

**How to comply:** If you install other separate apps, disclose that you're doing this, and name/install them in a way that's easy for the consumer to recognize that they came with your app. If the consumer wanted a carrier and you are launching a third-party download manager, disclose this up front and make it clear during the install and in the filename that this is the case. If your install has other offers, make sure the offers stand out as separate from your carrier so consumers can clearly see this distinction. If you installed a third party monetizer as part of the value prop of your app, the monetizer must show this relationship.

**Scenarios:** Install
**Consumer principle:** transparent

**Evaluation notes:** Look which files gets installed. If they're third party executables or DLLs that are signed by others, check the screen disclosures as well as the Doc Files (EULA/Terms, Privacy, and readme) to make sure they are disclosed.

### ACR-040

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-040) Installation location is by default in standard locations, and identifies the name, source, and the actual install date.

**Intent:** Consumers must be able to identify the app inside of the location. If some files must be installed elsewhere, a README file could be used to explain this to the consumer

**How to comply:** Install your app in standard locations, and don't use different app names, vendor names, or installation dates.

**Scenarios:** Install
**Consumer principle:** transparent

### ACR-042 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-042) No other apps or unrelated components are installed or used before obtaining the consumer's permission through explicit user action.

**Intent:** Installs must only come after consumer-accepted offers.

**How to comply:** Do not install unrelated components or apps if you haven't gotten explicit permission (more than opt-out) from the consumer to do so. If you offered your app's value based on acceptance of external monetization, you can only monetize how and for whom you said you would, and you must  obtain explicit user permission if you wish to do otherwise. The only consents you gather as landing-page-only (not in the installer) are EULA/Privacy, telemetry, and offer interruption. All other consents must be done in the installer or software.

**Scenarios:** Install, Software
**Consumer principle:** trustworthy

**Evaluation notes:** Check that no additional 3rd party PE files are dropped or run prior to user acceptance of the offer to install additional software.

### ACR-043 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-043) Nothing is installed that was not disclosed.

**Intent:** Anything installed, even if not enabled by default, must be disclosed in the offer and in the docs. This includes third party components, and components digitally signed by other parties.

**How to comply:** Disclose whatever you install, especially if the app name or vendor name doesn't match in the installation location, registry, or the code signing certificate. This is especially true when a major feature of your app comes from others; make sure this is disclosed.

**Scenarios:** Install
**Consumer principle:** trustworthy

**Evaluation notes:** Check the screen disclosures as well as the Doc Files (EULA/Terms, Privacy, and readme) before failing this.

### ACR-044

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-044) Prior to installation, the name of the carrier and the name and significant functions of bundler are visible to the consumer and clearly disclosed.

**Intent:** Consumers must be made aware and accept everything installed.

**How to comply:** Show carrier and explain the value of the bundler or download manager.

**Only applies if:** Is app a bundler?

**Scenarios:** Install
**Consumer principle:** transparent

### ACR-045

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-045) The app's purpose/intent, main effects on the consumer's computer, and its significant functions and settings changes are described in clear and straightforward language that is clearly visible and easy to read on the screen.

**Intent:** The intent is that consumers can actually read and understand the offer and install choices. No confusing language, no tiny fonts or crazy colors. Be as clear as possible regarding the features, what is free, and what the consumer will be asked to pay for later.

**How to comply:** State in your offers and install screens exactly what the consumer is going to get. If you will be making more offers or upselling them, tell them.

**Scenarios:** Install, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** fair

### ACR-046 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-046) Disclosures and options are conspicuous and visible without requiring scrolling or other user actions. The method to enable and disable options is clear and conspicuous.

**Intent:** The intent is that the consumer can see everything on one easy-to-read, easy-to-access, screen

**How to comply:** Don't make it difficult for the consumer to find your required disclosures and options. Be sure disclosures and options for non-expected behaviors are clear and conspicuous.

**Scenarios:** Install, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

**Evaluation notes:** Disclosures that affect payments/renewals/negative options, make system changes, or reduce security, must be located close to the CTA button.

### ACR-047 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-047) Does not deceive or mislead consumers to take any action that they previously declined or cancelled.

**Intent:** No means no. Consumers must not be misled to restart a cancelled installation or declined offer

**How to comply:** Don't make the same offer twice. Don't prompt to restart installations after cancellation.

**Scenarios:** Install, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** fair

**Evaluation notes:** This only applies once the user explicitly declines something. For example, if an non-interstitial offer is shown and ignored by the user, don't fail this when that offer is shown again.

### ACR-048 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-048) Does not hide and/or limit the consumer's ability to close, delete, disable, or uninstall the app.

**Intent:** Consumers must be able to use the standard platform interfaces for closing, disabling, and removing apps.

**How to comply:** Don't change or disable the standard system or browser interaction features (like close, delete, disable, or uninstall). If you are borrowing consumer resources, you must allow the consumer to immediately cancel any current borrowing activity.

**Scenarios:** Install, Software
**Consumer principle:** harmless

**Evaluation notes:** Examples: disabled 'X' (close) button during install without explaining why, no way to turn off an app's background services, no way to disable scheduled tasks or launching at startup, no way to pause or stop borrowing, apps that keep running after the user exits them.

### ACR-049

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-049) Existing app shortcuts and launch points are not altered or replaced.

**Intent:** Consumers must not be surprised by changes

**How to comply:** A consumer's existing shortcuts are not yours to change.

**Scenarios:** Install, Software
**Consumer principle:** trustworthy

### ACR-050 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-050) User consent dialogs and features settings from the browser, search, or operating system, and existing security/safety apps, are not circumvented or blocked. Does not ask for more than the minimum permissions necessary to fulfill its offered value proposition.

**Intent:** The platforms and browsers and security/safety products must be able to do their protection unimpeded

**How to comply:** Don't bypass any system, search, or browser protections. You can decorate or handhold to help prompt the consumer, but you cannot answer on their behalf. Do not "reserve" permissions for future use, or ask for more than your app currently needs to fulfill its offered value proposition. Do not collect background location unless this is a core feature of the app. Only collect location when initiated by an in-app user action.

**Scenarios:** Install, Software
**Consumer principle:** trustworthy

**Evaluation notes:** UAC bypass tasks and firewall changes that are disclosed in the Doc files are acceptable.

### ACR-051 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-051) Uses available APIs to change browser settings and behaviors. If no API is available, browser is not extensible.

**Intent:** Browsers have their own ways of managing extensibility and settings and obtaining user consent. Apps must honor those ways.

**How to comply:** Use approved browser APIs, and don't use undocumented methods.

**Scenarios:** Install, Software
**Consumer principle:** conforming

**Evaluation notes:** Browsers have protections (require user consent in the browser) for changing search and for installing extensions. It's a violation to bypass these protections.

### ACR-053 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-053) If more than two offers will made before, during, or after install, all but the final offer has a "skip offers" option.

**Intent:** The intent is the user can stop a long offer flow chain.

**How to comply:** Have an easy way to skip the remaining offers if you have more than two of them anywhere in the the install flow (including after install).

**Only applies if:** Is app a bundler?

**Scenarios:** Install
**Consumer principle:** respectful

**Evaluation notes:** This only applies to additional interstitial offers that must be answered to proceed with the install. It doesn't apply to installing the carrier app.

### ACR-055 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-055) Accept, cancel, skip, and decline options are obvious and/or explained to the consumer, consistently simple, and consistent across the install and offer experiences.

**Intent:** No attempting to mislead, shortcut, or even "guilt" the consumer. For instance, don't say "No, I don't want friends" on the decline button. Declines and skips must be no more difficult to perform than accepts. Also, bundlers can't have the buttons work differently for different offers.

**How to comply:** Make your offer and install choices simple, clear, not tricky, and consistent across all offers being made. Make sure it doesn't take more user actions to decline or skip than it does to accept.

**Scenarios:** Install, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

**Evaluation notes:** This applies to any offer or CTA that attempts to mislead the meaning of the button to get the user to install. It doesn't apply to advertising.

### ACR-065

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-065) Show both links and assent language to the app's EULA and/or Terms of Service, Returns and Cancellation Policy, Privacy Policy.

**Intent:** The offers and the app user experience (or readme files if no user experience) need to link back to the app docs.

**How to comply:** Put links to your EULA/Terms of Service, your returns policy if applicable, and your privacy policy.

**Scenarios:** Install, Software, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** transparent

### ACR-085 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-085) Does not collect, handle, or transmit sensitive information such as banking details without proper encryption and user consent from all affected parties.

**Intent:** Vendors have an obligation to protect consumer data. If the data is sensitive enough to require encryption, it is important enough to require direct user consent from anybody affected.

**How to comply:** Obtain explicit consent for any sensitive or personally-identifiable information you collect from any affected party. Unless it's a special debug session, encrypt this information when you handle it or store it locally. Always encrypt this information when transmitting it.

**Scenarios:** Install, Software
**Consumer principle:** respectful

**Evaluation notes:** This applies to keyloggers, which need to encrypt any personal data collected. It also applies to privacy apps that show user passwords: these apps must require user authentication before showing the passwords. It also applies to apps that install or use search (like web browsers offering Yahoo, Google, or Bing search). For these apps, the user search information must only flow to that search provider, and not also be sent through or to a third party. The only time an app can send search data to itself is if the app is offers its own search and acts like a full search proxy with its own search branding.

### ACR-107 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-107) Obtained proper authorization from the carrier, the offers, the ads, and any third party components included.

**Intent:** The intent is that apps install only authorized apps and components, honor vendor takedown notices, and either have direct authorization/licensing/partnerships or honor vendor restrictions placed on padsites.org or in licenses.

**How to comply:** Only offer and carry authorized apps. Only install components following licensing restrictions. Honor takedown requests, and follow limitations expressed in licenses and on padsites.org. When features of your app are based on opensource, be sure you follow their requirements.

**Scenarios:** Install, Software, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** transparent

**Evaluation notes:** Most third-party components require notices of use in the Doc Files. Some offers are just not allowed (mostly for apps from large software vendors): for instance non-Microsoft apps offering to install Microsoft software, non-Adobe apps offering to install Adobe Acrobat.

### ACR-109 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-109) Only downloads and/or installs apps that the consumer chose and agreed to install.

**Intent:** Consumers get to choose what gets installed. No "bonuses"

**How to comply:** Don't pre-download or install if the consumer hasn't yet accepted the offer.

**Only applies if:** Is app a bundler?

**Scenarios:** Install
**Consumer principle:** trustworthy

**Evaluation notes:** This applies to apps getting installed by a bundler without an offer acceptance. It doesn't apply to third-party libraries or additional executables that are part of the app being installed.

### ACR-151

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-151) Browser settings and behavior changes obtain informed user consent if this is not handled by the browser.

**Intent:** When a browser is extensible and does not obtain user consent, it's the job of the app to do so.

**How to comply:** If the browser doesn't prompt for consent, you must.

**Scenarios:** Install, Software
**Consumer principle:** trustworthy

### ACR-161

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-161) If including quotes from external sources, includes references to those sources, doesn't distort the original message, reflects the source's current opinion, applies to the specific app, and doesn't represent something that would be deceptive if the vendor represented it directly.

**Intent:** The intent is that apps can't mislead consumers by including quotes out-of-context or misrepresenting them. For example, including quotes from external consumer reviews must reference the original review.

**How to comply:** If you quote your customers, put links back to their sources so consumers can verify they're real. If there is no link you can make, show how and when you obtained the quote. Be sure the source still agrees with their statement as you modify your app, and be sure you're not using quotes to say things you wouldn't be allowed to say yourself.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** transparent

### ACR-163

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-163) App does not require one-to-one interaction in order to purchase, activate, obtain a refund, or receive support. If a one-to-one interaction option is offered, it must be no more prominent than the non-interactive option.

**Intent:** The intent is that consumers should be able to administer and get support for their app without requiring one-to-one (call, chat, chatbot) support, as these could be high pressure 1:1 scenarios where they'll be asked to make purchases, and later feel they've been cheated. The options to avoid one-to-one interaction must be at least equally accessible, prominent, and clear to the consumer in all cases. Equally prominent means they get equal real estate, displayed side by side, equal-sized font and placement.

**How to comply:** Offer non-interactive ways of communicating, and advertise them just as prominently as your monetized call center ways.

**Scenarios:** Install, Software, Uninstall, Docs, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** trustworthy

## Software

Runtime behavior of the app itself: processes, monetization, data handling, updates, and interaction with the system, browser, and other apps.

### ACR-001

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-001) Adhere to the extension and API policies and any other applicable platform policies when accessing platform services.

**Intent:** Intent is for apps to not hack the platform to get around consumer-protecting restrictions, but use the interfaces as intended.

**How to comply:** Use the system, browser, and app APIs provided, and adhere to their policies.

**Scenarios:** Software
**Consumer principle:** conforming

### ACR-004 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-004) When showing free scan results with the intent to monetize, results are substantiated and avoid any exaggerated sense of urgency, and app provides free fixes, either during an immediate, fully functional free trial of at least 24 hours for all free scan results shown, or when the fix is not anticipated to be permanent. Free trial does not pre-collect payment details or use negative options to charge consumer unless free trial is an immediate, fully-functional trial lasting at least seven days.

**Intent:** Because they offer hard-to-verify services at a vulnerable time for a consumer, System Utilities must take great care to avoid any sense of coercing the consumer to take action when they provide free scans, especially without immediate fully functional free trials.

**How to comply:** Make sure your free scan results are truthful and complete; they provide details; they are not mapped to any kind of priority via graphics of gauges and meters, and they don’t differentiate urgency via color, sound, or non-specific judgment words stronger than “issue”, unless there is an immediate, material, and substantiated threat to the system or consumer. If you use a traffic light color (red, orange, yellow, green) to show free scan results, use just one and do not show results in any other color.  If you do not offer an immediate fully functional free trial lasting at least 7 days, you must not pre-collect payment details, require other forms of monetization, use a negative option to get paid, or collect any personal data beyond a name and email before providing free fixes. You must not charge the consumer to fix free scan results if your fix is only temporary, unless you have already provided an immediate fully functional trial lasting at least 24 hours. Provide free fixes within 48 hours of scan.

**Only applies if:** Is app a systool?

**Scenarios:** Software
**Consumer principle:** fair

**Evaluation notes:** Always applies when a free-scan systool upsells a recurring subscription, as then it's not a one-time fix. If free scan results are shown using traffic light colors (green/yellow/orange/red), this can be the only color used for all scan results, as they are not allowed to differentiate with colors. Free scan results cannot use graphs, gauges, or dials to show results -- they must only use words. Free scan results can't use words like "problems" and "errors" or their equivalent. All free scan results that aren't sold as one-time fixes must be able to be fixed for free. All free scan results must have substantiation with links back to details - these may be on a results page, or they may show up as a popup alert, or they may show up on an upgrade offer page. Users must be able to fix all free scan results, and not limited by any quota beyond time: unrestricted, fully functional trials must provide at least 24 hours of free fixes. Free fixes can be delayed for up to 48 hours. Unless it's a fully functional trial lasting at least seven days, no payment information can be required for the user to obtain free fixes.

### ACR-008 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-008) If app must provide free fixes to free scan results, the details regarding the free fix must be obvious, mentioned within the app itself, not solely part of a purchase flow, available simultaneously with a purchase flow, and no more difficult to obtain than the fully functional version.

**Intent:** The intent is that consumers can find the free options in the software as easily as they can find the purchase option.

**How to comply:** Make sure your free fixes can be found by the consumer without them first thinking they must purchase. Give the free option equal prominence to the paid option. Make sure the consumers know the free fix is available in the software, and not just in the shopping cart. Don't make obtaining the free fix difficult or tedious.

**Only applies if:** Is app a systool?

**Scenarios:** Software
**Consumer principle:** transparent

**Evaluation notes:** Only applies when free fixes to free scan results are required, as defined in ACR-004.

### ACR-056

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-056) App features and functionalities match the description presented in the offer.

**Intent:** Consumers must be offered what will be installed, not something else

**How to comply:** The features in your app must match what you told the consumer at offer time.

**Scenarios:** Software
**Consumer principle:** transparent

### ACR-069

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-069) Discloses and justifies any charges for apps or services that are freely available elsewhere.

**Intent:** Consumers have a right to know if the app is a repackage of something available for free elsewhere. Vendors have a duty to explain why they are charging for it. This applies at offer time as well in the app's "About" page

**How to comply:** Explain why you're charging for something that's free elsewhere. If you are borrowing  resources, provide references to how consumers can use the resources themselves.

**Scenarios:** Software, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

### ACR-082

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-082) App is not designed for the purpose of engaging in activity that violates applicable laws.

**Intent:** Apps built with the intent to act unlawfully will not be certified.

**How to comply:** Don't break applicable laws. For instance, key generators won't be certified.

**Scenarios:** Software
**Consumer principle:** ethical

### ACR-083 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-083) App updates do not install or uninstall other apps and unrelated components without explicit offers following these requirements.

**Intent:** Updates must not become a means to avoid following the offer requirements.

**How to comply:** Make offers and get acceptance before you install unrelated components or other apps.

**Scenarios:** Software
**Consumer principle:** trustworthy

**Evaluation notes:** This applies when the software is updating itself to a more recent version. The requirement is to be sure that any additional software beyond the update isn't installed unless it's accepted by the user.

### ACR-084 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-084) Does not attempt to hide or disguise its presence or whether it is active.

**Intent:** Consumers have a right to know what is running on their systems.

**How to comply:** Don't cloak the existence of your app, hide its location on the file system, or pretend the app is not running. If you have a separate process that periodically runs, make sure you disclose it in the EULA and provide options in your user experience to control it. If consumers expect your app to exit when they close its main window closes, then do so, or notify them why your app needs to keep running. If your app sends popup notifications, make sure these can be disabled. If you are borrowing consumer resources, your user experience must be visible, with no option to disable all visiblity, when a borrowing deal is in place, and must clearly indicate whenever borrowing is active.

**Scenarios:** Software
**Consumer principle:** trustworthy

**Evaluation notes:** If the user closes an app's user interface and the app continues to run in the background or via the systray with no notifications that it continues to run, this rule fails unless the app has a value proposition that requires it to run all the time (like antivirus).

### ACR-086 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-086) Does not hide from any affected consumers how it collects, stores, or transmits their user activities, and to whom it provides user data.

**Intent:** The intent is apps do not steal information from unsuspecting users of a computer. For instance, an app shouldn't collect entered URLs or typed passwords unless this is the stated pupose of the app and was disclosed in the value prop.

**How to comply:** If you record user activities, make sure your value prop is clear that you're doing this, and that all affected parties are aware of what you’re collecting and to whom you are providing the data. Use the system notification capabilities to provide this notification at every startup and use of the software.

**Scenarios:** Software
**Consumer principle:** respectful

**Evaluation notes:** This applies to keyloggers, or apps that offer to monitor (or spy) on spouses/children/employees computer activity. To pass this rule, the app must either put an icon in the systray, or provide system notifications at startup/login, so the targeted user knows they're being monitored. Many keyloggers fail this rule because the only way to see their user interface if through "hot keys" that the installing user (not the targeted user) knows.

### ACR-087

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-087) Does not decrease computer reliability or performance.

**Intent:** Vendors have an obligation to treat the consumer's computing experience as a priority. This includes anything that affects reliability and performance, including introducing vulnerabilities that could be exploited.

**How to comply:** Don't make the system, browser, or other apps less reliable, less secure, or less performant. If you are installing third party components as part of your value proposition, you are responsible for (and you must take responsiblity in the EULA or Terms of Service) for any issues or vulnerabilities introduced by the components you include.

**Scenarios:** Software
**Consumer principle:** harmless

### ACR-088

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-088) Does not open browser or new application windows without user actions and consumer authorization.

**Intent:** This is tied to user actions. For instance, an uninstall can display a browser survey, because the user took action. But starting scans post-install without any user action is not permitted.

**How to comply:** Use standard notifications, and don't pop up browsers or application windows not tied to direct user actions.

**Scenarios:** Software
**Consumer principle:** respectful

### ACR-089 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-089) Does not automatically or unexpectedly send spam, make calls, or click on ads and links.

**Intent:** The intent is to not to take actions that emulate consumer behavior in undesirable ways. For example, no "like" buttons that auto-send emails, reviews, or messages; and no auto-clicking on ads and links.

**How to comply:** Don't take actions on behalf of the consumer that the consumer wouldn't want you to do, and the the recipient of the behavior doesn't expect to be automated. Be clear what actions you will take on the consumer's behalf.

**Scenarios:** Software
**Consumer principle:** trustworthy

**Evaluation notes:** Check network traffic events to see if this is happening. For instance, network borrowing apps should be monitored to see what network traffic they perform. They should never send emails, and never click through ads.

### ACR-090

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-090) Does not use any means to artificially inflate impressions, clicks, reviews, or installs; either directly or through third-party encouragement.

**Intent:** The intent is to allow consumer encouragement to like/leave reviews/etc, but to stop this happening automatically

**How to comply:** Don't auto-post reviews, or use any method that would falsely try to raise app reputation.

**Scenarios:** Software
**Consumer principle:** transparent

### ACR-092

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-092) Each installer, app, and update is digitally code-signed by the source disclosed in the offer and install, and each digital signature clearly and transparently identifies the entity that signed the component.

**Intent:** The app name and the vendor name must remain consistent. Vendors have an obligation to be transparent about who actually owns and signs the app.

**How to comply:** Disclose any differences between the vendor name in the digital certificate and what you claim in the offers, install, and software.

**Scenarios:** Software
**Consumer principle:** transparent

### ACR-093

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-093) Explicit, informed user consent is obtained before app affects the integrity of other programs, including disabling/circumventing security and protection measures and intercepting/redirecting network traffic, unless this behavior is the value proposition of the app and is integral to the functionality and the stated purpose of the app.

**Intent:** Taking these kinds of actions are allowed only when these actions are the main purpose of the consumer installing the app

**How to comply:** Unless your app is a security app, don't disable system, browser, or another app's security.

**Scenarios:** Software
**Consumer principle:** harmless

### ACR-094

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-094) Explicit, informed user consent is obtained before app impairs usability of the system or remaps inputs, unless this behavior is the value proposition of the app and is integral to the functionality and the stated purpose of the app.

**Intent:** Taking these kinds of actions are allowed only when these actions are the main purpose of the consumer installing the app

**How to comply:** Unless your app is a tool to do so (like a KVM switch), don't remap inputs or affect system, browser, or another app's functionality.

**Scenarios:** Software
**Consumer principle:** harmless

### ACR-095

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-095) Explicit, informed user consent is obtained before third-party apps are disabled, re-enabled, installed, reinstalled, or uninstalled, unless this behavior is the value proposition of the app and is integral to the functionality and the stated purpose of the app.

**Intent:** Taking these kinds of actions are allowed only when these actions are the main purpose of the consumer installing the app

**How to comply:** Unless your app is an app manager, don't modify other non-related apps in the system or browser.

**Scenarios:** Software
**Consumer principle:** harmless

### ACR-097 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-097) App does not attempt to evade security investigation or detection, and does not attempt to hide or cloak the software's behavior.

**Intent:** Looking for security products and then changing behavior is not allowed. Even the intent to change or cloak behavior is not allowed.

**How to comply:** Don't evade security products, or act differently when security or monitoring products are present. If your app has a reason to act differently in a virtual or sandbox environment, call it out in the EULA or in a popup, so it's clear that you're not evading.

**Scenarios:** Software
**Consumer principle:** harmless

**Evaluation notes:** Example violations: an app setting the firewall without disclosing this in the Doc Files or providing an explanation in the UI; offering to disable anti-virus protection; acting differently on a virtual machine than a physical machine. If the app does actions like this, they must be explained in the Doc Files as to why the app needs to do this.

### ACR-098

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-098) App does not prevent the consumer from controlling the app, or interfere with control of or access to any other app already installed on the system.

**Intent:** Consumers have the right to run the app they install, and other apps on the machine without any impedance.

**How to comply:** Support the system or browser standard ways to interact with apps (open, close, minimize, disable, etc.), and don't block other apps from doing the same. If you are borrowing consumer resources, you must allow the consumer to adjust the rate and schedule of the borrowing.

**Scenarios:** Software
**Consumer principle:** harmless

### ACR-099

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-099) Uninstall information for non-desktop apps is easily accessible, simple to perform, and clearly identifiable after the software has been installed.

**Intent:** The reason this is also required on the offer page is because consumers tend to return to the starting point to figure out how to remove.

**How to comply:** Include uninstall information or a link to it.

**Scenarios:** Software, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** respectful

### ACR-100

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-100) Updates to the app obtain user consent for material changes to functionality, terms, and privacy policies.

**Intent:** At the time of the update, apps need to obtain consent if they have material changes to what was originally agreed to.

**How to comply:** Don't let your updates make material changes without obtaining consent. Don't update EULAs and privacy policies without in-app notification with appropriate links. Don't put in your terms or policies that any updates will be automatically accepted.

**Scenarios:** Software
**Consumer principle:** trustworthy

### ACR-102

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-102) App's content, if automatically generated, offers additional value to consumer.

**Intent:** Apps must have their own intrinsic value and make that value accessible. For instance, apps can't just reformat existing websites and call it good

**How to comply:** Add unique value to content you display, and make that value accessible. Don't just scrape other app or website content.

**Scenarios:** Software
**Consumer principle:** trustworthy

### ACR-103 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-103) App has an accessible primary function and a value proposition that can be verified, and that goes beyond launching another app, theme, extension, search, or web page.

**Intent:** Apps must have their own intrinsic value that is easily accessible by the consumer.

**How to comply:** Make your app have its own value that can be measured by the consumer. Make it do more than just wrapping another app or launching a web page or document. Make sure that this extra value is accessible to consumers and not just described in the offer or advertisement. If you are a download manager, make sure your carrier meets this requirement.

**Scenarios:** Software
**Consumer principle:** trustworthy

**Evaluation notes:** Examples of violations: driver updaters that can't update drivers; antimalware that can't detect malware; adblockers that don't block ads; vpns that don't send network traffic through network servers.

### ACR-104 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-104) Does not change or offer other search providers, or redirect and/or block searches, queries, user-entered URLs, and/or access to other sites unless this functionality is the value proposition of the app, and the app provided the consumer with clear notification and attribution.

**Intent:** Taking these kinds of actions are allowed only when these actions are one of the main reasons why the consumer is installing the app. Note this is in software and not just browser extensions.

**How to comply:** If your app changes, offers, redirects (e.g., search providers, dialogs, and requests) or blocks internet or specific site access, make clear notifications and attributes whenever you do so. If you didn't offer your app this way, don't do this.

**Scenarios:** Software
**Consumer principle:** trustworthy

**Evaluation notes:** Apps can't change default search in browsers unless this was in their value proposition on their landing page and during install. It isn't sufficient to just put this in the Doc Files. The attribution must be right: for instance, if a browser offers a private search engine, it can't show a Yahoo, Google, or Bing logo.

### ACR-106

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-106) Neither the offers nor the carrier are Deceptor apps

**Intent:** The intent is that consumers can trust certified bundlers and download managers to never carry or offer them Deceptor apps.

**How to comply:** Never offer Deceptor apps and never carry Deceptor apps in your bundles and download managers.

**Only applies if:** Is app a bundler?

**Scenarios:** Software
**Consumer principle:** harmless

### ACR-110 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-110) Does not hijack existing monetization relationships by cookie stuffing, replacing hyperlinks, replacing ads, or other related techniques.

**Intent:** Intent is that app should not divert others' paid efforts or relationships.

**How to comply:** Don't hijack existing monetization relationships for your own purposes. Don't replace existing ads with your own.

**Only applies if:** Does app inject or block in other apps?

**Scenarios:** Software
**Consumer principle:** trustworthy

**Evaluation notes:** This applies to web browser extensions that do ad injection. Network traffic may be able to show addtional network traffic from browsers if this is happening.

### ACR-111 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-111) Has given clear notification and obtained explicit, informed user consent for modifying or manipulating webpage content and redirecting web traffic.

**Intent:** Since this affects a consumer's experience with web pages, content/ad injection, blocking, and manipulation is only allowed with direct user consent about this behavior.

**How to comply:** Obtain consent before manipulating content and ads in ways unintended by the publisher. Be clear in the offer or software about what kind of injection, manipulation, or removals your app will perform. Do not mislead or confuse in description or screenshots.

**Only applies if:** Does app inject or block in other apps?

**Scenarios:** Software
**Consumer principle:** trustworthy

**Evaluation notes:** Applies to ad blockers, ad injectors, and search engines. Check Doc Files for notification, and the install screens or first-time run for user consent.

### ACR-113

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-113) Injected hyperlinks are identified differently than normal hyperlinks and have clear attribution to the app that did the injection.

**Intent:** The intent is that the consumer can recognize the difference. Double-underlines, for example, with attribution shown in a hover.

**How to comply:** Keep injected hyperlinks distinct from what the publisher used on the website.

**Only applies if:** Does app inject or block in other apps?

**Scenarios:** Software
**Consumer principle:** trustworthy

### ACR-114 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-114) If injecting, provides a standard uninstall method for the app using the same name as shown in the ads it produces.

**Intent:** Note that ads must meet the injected ads requirements

**How to comply:** Name your injector the same name that you put into the injected ads.

**Only applies if:** Does app inject or block in other apps?

**Scenarios:** Software
**Consumer principle:** trustworthy

**Evaluation notes:** This applies to web browser extensions that do ad injection.

### ACR-138

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-138) Has a simple, easy-to-understand consumer value proposition.

**Intent:** Consumers must be able to understand what the app does, what value they will receive, and how they will be expected to pay for that value.

**How to comply:** Explain your value prop in simple terms of benefits and costs. If you are monetizing through an external provider as part of the offered and accepted value proposition, you must use the same aligned scale for explaining both the benefits and the costs (e.g., expected cost per month vs benefit per month).

**Scenarios:** Software, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** transparent

### ACR-139

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-139) Monetization approach can be easily disabled by the consumer when the monetization is external to the app and is not part of the offered and accepted value proposition.

**Intent:** If an app is monetized through another app or settings of the system or browser, consumers must be able to disable the monetization.

**How to comply:** Disclose how you monetize. Allow the consumer to disable any monetization that is unrelated to your app's value prop.

**Scenarios:** Software
**Consumer principle:** trustworthy

### ACR-140

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-140) Monetization approach is clearly and visibly linked to the app when the monetization is external to the app and is part of the offered and accepted value proposition.

**Intent:** The intent is that the consumer always knows why they have an external monetization app installed.

**How to comply:** If you offered your app's value based on acceptance of external monetization, the monetization must show the consumer the benefit they're receiving.

**Scenarios:** Software
**Consumer principle:** trustworthy

### ACR-153

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-153) Unless app is disclosed and accepted as a direct enhancement to an existing app, consumers can accept/decline offers for, install, use, and uninstall independently of any other app.

**Intent:** The intent is that each app is independent from each other. Vendors must never require consumers to install another app to get their functionality.

**How to comply:** Apps that aren't direct enhancements need their own offers and install/uninstall methods. Platform-based apps are extensions and not direct enhancements.

**Scenarios:** Software
**Consumer principle:** trustworthy

### ACR-157

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-157) The signing certificates disclosed and used in the app have not been used to sign distributed uncertified apps. The developer account used allows certifier administration and has not been used to distribute uncertified apps.

**Intent:** The intent is for a separation between certified and uncertified activity to preserve reputation for just the certified apps. This includes using a distinct signing certificate for certified apps and install packages, and distinct developer accounts that allow monitoring and administration by the certifier.

**How to comply:** Use a digital signing certificate that's never been used on non-certified apps. Provide us with monitoring access to platform app store accounts (such as Chrome's).

**Scenarios:** Software
**Consumer principle:** harmless

### ACR-160

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-160) Has comprehensive controls in place to ensure verbal offers follow the spirit of these requirements when using call centers as a means to up-sell and cross-sell or otherwise monetize the app.

**Intent:** If call centers are used to monetize the app, use a certified call center. If you use or staff your own call center, or use an uncertified call center, you must self-certify using our Call Center Requirements as part of your app certification request.

**How to comply:** Use certified call centers, or work with us to self-certify the call center you're using, if you're making offers during 1:1 interactions.

**Scenarios:** Software
**Consumer principle:** fair

### ACR-162

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-162) Does not send spam or collect data that could be used to spam without obtaining user consent.

**Intent:** Apps must neither send spam nor collect emails, phone numbers, or contacts without appropriate user consent

**How to comply:** Obtain consent if you collect consumer information that could be used for spam (email or messaging accounts or phone numbers).

**Scenarios:** Software
**Consumer principle:** harmless

### ACR-168 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-168) If additional offers may be made to the consumer as a result of one-to-one interactions, this must be clearly and simply disclosed alongside the interaction option. One-to-one interaction options for app purchase and app feature activation must have corresponding non-interactive options that are no less prominent than the interactive options.

**Intent:** Consumers should not be surprised when they are offered additional things when calling for support, refunds, cancellation, purchase, or activation. Consumers must have non-interactive means to purchase or activate features in their app. Equal prominence means equal real estate, displayed side by side, equal-sized font and placement, with no visual cues to influence the interactive option choice. Note that this applies to post-purchase pages as well.

**How to comply:** State that additional offers will be made next to every monetized 1:1 interaction option. Display non-interactive ways to accomplish the same goals, and display these just as prominently.

**Scenarios:** Software, Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

**Evaluation notes:** If, during a support call, the user is offered to purchase support plans and other apps, then wherever the app displays a support phone number, there must be accompanying text next to the number that says offers may be made during the call.

### ACR-170

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-170) Any functionality that requires consumer payment to be activated must be able to demonstrate its value prior to payment or have both an interactive as well as an online, non-interactive, easy-to-find mechanism for cancellation and returns.

**Intent:** Consumers struggle to understand the value a systool offers. The intent is to either offer a very simple return model that is easy to find, or provide a means a consumer can verify the premium features' value before paying. This demonstration of value may be limited through trial periods, throttles, partial delivery, or other means. For example, if the value is to speed up the computer, just identifying the options does not suffice.

**How to comply:** Anything you charge for must have a way to either fully test before purchase, or a simple way to return.

**Only applies if:** Is app a systool?

**Scenarios:** Software
**Consumer principle:** trustworthy

## Uninstall

The uninstall experience: standard removal, cleanup, reverting changes, and no tricks to deter removal.

### ACR-116 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-116) Can be uninstalled by platform standard features (e.g., operating system's or browsers uninstall and disable features).

**Intent:** Consumers are trained by platforms on how to disable and uninstall. Apps must support these methods.

**How to comply:** Support the standard uninstall methods provided by the system or browser.

**Scenarios:** Uninstall
**Consumer principle:** conforming

**Evaluation notes:** Check Uninstallers Written to verify that the app registered an uninstall capability.

### ACR-117 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-117) Does not engage in any deceptive behaviors to deter uninstallation.

**Intent:** Some examples of bad behavior: making false or misleading claims about potential negative effects, suggesting uninstallation is complete when it is not, charging fees to uninstall, making uninstallation conditional on downloading or installing other apps, making the default option to be anything other than uninstall

**How to comply:** Don't lie to the consumer when they're trying to uninstall.

**Scenarios:** Uninstall
**Consumer principle:** fair

**Evaluation notes:** Additional example: graying out the uninstall option in uninstall confirmation prompts

### ACR-118 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-118) Does not install, retain, or reinstall any apps or executables without user consent during the uninstall process.

**Intent:** Leaving executables on the system requires user consent.

**How to comply:** Don't leave executables behind. If you really cannot remove them, notify the consumer on what they need to do to clean up. You can leave configuration information behind if you inform the consumer you're doing so.

**Scenarios:** Uninstall
**Consumer principle:** trustworthy

**Evaluation notes:** Check Kept Files to verify that all app-related programs were not retained. Check Kept Tasks to verify that any installed scheduled task was removed. Check Kept Trusted Roots.

### ACR-119 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-119) Functionally removes all monetization components of the app.

**Intent:** The intent is that once the consumer uninstalls the app, the monetization is gone. Vendors must not monetize after uninstallation. For instance, if search was changed or affiliate IDs added, app must not leave these set when app is uninstalled.

**How to comply:** When you uninstall your app, uninstall your monetization. If you changed search when you installed your extension, change it back. Set to browser default if you can't remember what it was. If your monetization is external to the app and was part of the offered and accepted value proposition, remove the monetization component during the app uninstall.

**Scenarios:** Uninstall
**Consumer principle:** trustworthy

**Evaluation notes:** Check that offered/accepted borrowing apps were uninstalled as part of the app's uninstallation process. Check that search provider changes are reset.

### ACR-120

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-120) If an uninstallation confirmation prompt shows a substitution app, the substitution app is not the same app, offers a comparable value proposition, and the prompt is merely an ad that neither interferes with the uninstallation of the original app nor triggers the installation of the substitute app.

**Intent:** Uninstall confirmation time is not a time to sell unrelated apps. Re-advertising the same app is confusing, and advertising a lower price makes consumers feel they were misled earlier. There is room for a single advertisement of comparable value proposition.

**How to comply:** Make no more than one confirmation prompt at uninstall. In that prompt, you can advertise one comparable value (not the same) app. Make sure the ad leads to a compliant offer when it's clicked.

**Scenarios:** Uninstall
**Consumer principle:** trustworthy

### ACR-121

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-121) Offers the ability to be completely removed, not just disabled.

**Intent:** Apps must be able to be uninstalled.

**How to comply:** Allow your app to be uninstalled.

**Scenarios:** Uninstall
**Consumer principle:** trustworthy

### ACR-122 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-122) Once app is disabled or deleted, it isn't re-enabled by itself or another app.

**Intent:** Apps must obey the wishes of the consumer to disable and uninstall

**How to comply:** Don't pretend to uninstall or find ways to get your app re-enabled.

**Scenarios:** Uninstall
**Consumer principle:** trustworthy

**Evaluation notes:** Check that after uninstalls are done, there are no remaining scheduled tasks or ASEPs that could trigger a reinstall.

### ACR-123

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-123) Reverts any system or setting changes to the state of the user's system prior to the original app installation, or provides clearly labelled and prominent instructions how to complete the reversion manually.

**Intent:** The intent is that when the app is uninstalled, the system and browser configuration are also disabled. Vendors must attempt to revert the system back to what it was before the app was installed.

**How to comply:** If you changed settings, change them back. If you find this impossible and have a great reason why, make it straightforward for the consumer to do it themselves.

**Scenarios:** Uninstall
**Consumer principle:** trustworthy

### ACR-124 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-124) Uninstallation doesn't add unnecessary friction for the consumer. Shows no more than one uninstallation confirmation prompt with obvious and clear options presented to the consumer to continue with the uninstallation or keep the product, and no more than one suggested substitution app.

**Intent:** The consumer must be able to perform the uninstall quickly and efficiently.

**How to comply:** Don't make it difficult for consumers to uninstall your app. Only one confirmation prompt, and only one substitution offer, is allowed per uninstalled app.

**Scenarios:** Uninstall
**Consumer principle:** fair

**Evaluation notes:** Count how many non-OS confirmation prompts are shown at uninstall time. If more than one, it's a violation.

### ACR-125

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-125) Uninstallation does not impact unrelated files.

**Intent:** The uninstall must be limited to the files created during the install of and running of the app.

**How to comply:** Don't change non-related system, browser, or other app settings.

**Scenarios:** Uninstall
**Consumer principle:** harmless

## Docs

The app's documents: EULA/Terms of Service, Privacy Policy, and Returns and Cancellation Policy.

### ACR-035

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-035) EULA/Terms of Service, Returns and Cancellation Policy, and Privacy Policy include the name of the App and the identity of, and contact information for, the source.

**Intent:** Contact information includes a way for the consumer to get support or process a return

**How to comply:** Put the name of your app, your vendor name, and how to contact you for support or refund in all of your docs.

**Scenarios:** Docs
**Consumer principle:** transparent

### ACR-036

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-036) Material functionality embedded from third parties is disclosed and described in the EULA, Terms of Service, Returns and Cancellation Policy, and/or Privacy Policy, as applicable.

**Intent:** Apps can't hide what they use from others, and must honor open source requirements

**How to comply:** If you install third party components, disclose them in the EULA. Even if you have an agreement that limits what you can say, you must make at least a generic statement of what you are including.

**Scenarios:** Docs
**Consumer principle:** transparent

### ACR-037

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-037) Privacy Policy describes specific types of collected and/or transmitted sensitive information and an explanation of how it may be used.

**Intent:** All certified apps must have a privacy policy

**How to comply:** Make sure your privacy policy is accurate. If you know that customers would be unpleasantly surprised by how you were using their data, don't bury this fact. Make sure they're aware.

**Scenarios:** Docs
**Consumer principle:** respectful

### ACR-167

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-167) App must offer a returns and cancellation policy that, if a System Utility, provides at least a 30-day refund of anything paid, and a cancellation of any recurring service. The returns and cancellations can request a single exit survey question, but must not demand an answer. Return requests must be acknowledged within a single business day and contain a clearly stated timeline for processing that must not exceed ten business days.

**Intent:** The intent is to prevent consumers from feeling cheated when they pay, and are not put through difficulties when trying to cancel or return an app or app service.

**How to comply:** If you charge for your app, you must have a returns and cancellation policy. If you charge for your System Utility, you must offer at least a 30-day refund period, with fast processing and no added friction, for all charges.

**Scenarios:** Docs
**Consumer principle:** trustworthy

### ACR-172

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-172) Affiliate programs require affiliates to clearly and conspicuously disclose their endorsement, publish only authentic experiences and opinions, and commit to remediate violations.

**Intent:** The intent is to have affiliate programs adhere to FTC's Guides Concerning the Use of Endorsements and Testimonials in Advertising.

**How to comply:** Don't use affiliates to say things you can't say yourself. If you use affiliates either directly or through outsourcing or other networks, hold them accountable to the FTC Endorsements Guides, and monitor them for compliance.

**Scenarios:** Docs
**Consumer principle:** trustworthy

## Landing page

The app's download/marketing landing pages.

### ACR-054

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-054) Accept and decline options have equal prominence.

**Intent:** Equal prominence means equal real estate. If you require an answer and you have a big fat accept button, you need a big fat decline button.

**How to comply:** Don't hide or obscure the decline option. Note that you only need decline options when you require the consumer to respond to the offer (e.g., making an additional offer when the consumer is trying to install a carrier).

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

### ACR-057 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-057) Provides a clear way for consumers to accept or decline.

**Intent:** Offers need to be straightforward and open about how to accept or reject the offer.

**How to comply:** Make the way you get the consumer to accept or decline your offer clear and straightforward.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

**Evaluation notes:** This applies to third-party interstitial offers that require the user to respond before continuing. If the offer can be ignored without blocking the user and without "opting in" to an accept of the offer, it doesn't need a decline.

### ACR-058

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-058) Clearly explains how the app monetizes, and if it is supported by advertisements.

**Intent:** Consumers have a right to know how they "pay" for an app, both directly and indirectly

**How to comply:** Disclose, and don't hide, how you are monetizing your app. If you offered your app's value based on acceptance of external monetization, you must disclose the third party in a way the consumer can verify them and their relationship to you.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

### ACR-059 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-059) Clearly marked as an offer, clearly implies it is optional, and only claims to be recommended when the recommender is explicitly disclosed.

**Intent:** Offers need to be recognizable as offers. Recommendations must be claimed by whoever is making them.

**How to comply:** Mark all offers as optional, and make it clear they are optional and not required. If you say the offer is recommended, you must truthfully show who is making the recommendation: the installer/bundler, or the carrier.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

**Evaluation notes:** This applies to any offer to install software other than the installation of the main app itself.

### ACR-060 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-060) Discloses any applicable third-party offer provider.

**Intent:** Consumers need clarity on who is responsible for the offer and verifying that it is legitimate and trustworthy.

**How to comply:** If your app bundles offers from an offer provider, make sure you disclose the public name of this provider, with a link to their site for more details, in each offer.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

**Evaluation notes:** This applies to any offer to install software other than the installation of the main app itself.

### ACR-062

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-062) Discloses if and how the app may affect any other programs or settings on the user's device.

**Intent:** Offers need to be clear how the app will impact other settings and other apps

**How to comply:** Disclose at offer time if you will be changing programs or settings on the system or browser.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** transparent

### ACR-064

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-064) Does not download without a user action on a clearly-labelled download button.

**Intent:** Downloads must be consumer-initiated and not automatic. Button must be clear that this is a download.

**How to comply:** Only download after the consumer has clicked the download button. No automatic downloads, or downloads after pressing "yes" or "accept".

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

### ACR-066

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-066) Shows app brand, name, and source.

**Intent:** Offers must disclose this, as consumers have a right to know what they're agreeing to. The intent is that vendors are proud enough by what they do to stand behind their names.

**How to comply:** Display your brand, your vendor name, and your app name.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** transparent

### ACR-067

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-067) The means to opt-in, opt-out, or decline an offer or particular feature or functionality is not displayed as if inactive or otherwise disabled.

**Intent:** Displaying the words isn't enough; consumers must be able to easily choose.

**How to comply:** Don't make the decline or opt-out choices look inactive or disabled.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

### ACR-068

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-068) When viewed in totality, offer is clear and understandable to the consumer.

**Intent:** A bunch of correct words that meet these requirements is not enough; the offer must make sense

**How to comply:** Your offer has to make sense to a regular consumer; it can't be just a bunch of words that meet these requirements.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

### ACR-071 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-071) Each offer must be able to be accepted or declined independently.

**Intent:** The intent is that consumers aren't forced to accept bundles of offers and "free bonuses" in the shopping cart.

**How to comply:** Never apply a single acceptance to multiple offers. If you add a free bonus into the shopping cart, it must be able to be declined.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

**Evaluation notes:** This also fails in the case of when the user cannot install the carrier if he declines an offer to install a third-party app that isn't required for the app to function. Check the disclosures in the offer to see if it's required.

### ACR-079

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-079) There are no barriers preventing consumer from navigating away.

**Intent:** No interstitials bringing consumers back to the page, no "are you sure" popups

**How to comply:** Don't prompt, trick, or try to stop consumers from leaving your page.

**Scenarios:** Landing page
**Consumer principle:** respectful

### ACR-150

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-150) Has no false claims of endorsements or partnerships.

**Intent:** Partnerships must be two-way; endorsements must be real and relevant to the app

**How to comply:** Make only truthful and relevant claims of endorsements and partnerships.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** transparent

### ACR-155 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-155) Ads and offers are not inserted to masquerade as part of existing committed user workflows.

**Intent:** Intent: no tricking the consumer into thinking this is the normal flow once the consumer commits to download/purchase/accept/uninstall. For instance: an interstitial offer on another app's landing page must not look like it's part of the other app's download or install flow, and an interstitial ad should not look like it's part of a consumer purchase.

**How to comply:** Don't link your ad or offer to the workflow. It must be clear that the ad or offer is separate from what the consumer was attempting to do, and not part of that flow.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers, Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** transparent

**Evaluation notes:** Check that any offers to install or purchase other apps clearly state they are offers and don't masquerade as EULA acceptance or features of the app.

### ACR-158

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-158) App does not engage in any SEO poisoning techniques.

**Intent:** No using SEO poisoning techniques to drive traffic or eliminate competition. Vendor is responsible for ensuring neither they nor their affiliates use these techniques

**How to comply:** Don't buy fake or unrelated traffic where the consumer will be surprised to end up on your landing page.

**Scenarios:** Landing page
**Consumer principle:** transparent

### ACR-159

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-159) All functionality that requires consumer payment in order to be activated is clearly marked as such.

**Intent:** The intent is that the consumer isn't surprised to discover that the functionality that was offered to them is behind a paywall. If apps wish to avoid listing this, they can offer full functionality in a trial period and disclose that it's a trial

**How to comply:** Eitiher provide a fully-functional trial of all your app features, or make it clear in the offer which features require payment to be used.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** transparent

### ACR-164 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-164) If receiving consumer payment/billing information, consumers are notified, and are informed at signup time how and when they will be notified, of the expiration of time-bound discounts, trial periods, or other negative options and how they can opt out.

**Intent:** The intent is to remind the consumer what they purchased when they provide their payment details, and also once the benefit of the negative offer ends. The notice reminds the consumer what they accepted. Note that opt-out methods must conform to requirements on one-to-one interactions.

**How to comply:** Send reminders and options to opt out both at sign up and when negative option periods (e.g., trial period, first six months free) are ending. Disclose how and when you will do this in the EULA and in the shopping cart.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

**Evaluation notes:** Check only if user purchases through a shopping cart. Check disclosures on the screen and followup emails that the user receives after purchasing.

### ACR-165 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-165) If offering time-bound discounts, trial period, or other negative options, discloses clear and simple material terms before receiving consumer payment/billing information, obtains consent before charging, and offers simple online methods to stop recurring charges. App cannot claim it is free if payment details are collected in advance.

**Intent:** Any negative offer must be clear to the consumer about all the conditions before the transaction is completed. The intent is to align with ROSCA, a US law governing Internet negative option sales. Apps must comply to ROSCA if they offer any negative options, as defined by the FTC's Telemarketing Sale Rule.

**How to comply:** Have clear financial terms in your offers, shopping carts, and thank you pages. Obtain consumer consent before charging, and make it as easy as purchasing to stop recurring charges online. Don't claim your app is free if you're collecting payment details.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

**Evaluation notes:** If purchasing a negative option, the shopping cart must show the non-discounted price that the user will pay once the negative option term is over, and when those payments will automatically start.

### ACR-166

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-166) An app service agreement renewal or license renewal must only be accomplished as an offer accepted by the consumer.

**Intent:** This requirement is to prevent apps from auto-renewing (and auto-charging/billing) an app's expired service agreements and licenses. If a service agreement or license is not perpetual and thus expires, the consumer must be presented and accept a new offer before renewing and getting charged/billed.

**How to comply:** Honor your non-perpetual EULA and terms of service dates, and re-obtain consumer permission before extending these dates.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

### ACR-169

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-169) If affiliation was not clearly and conspicuously disclosed when the content of a web page or email drove affiliate traffic to an app's landing page, landing page must clearly and conspicuously disclose that an affiliate will be benefitting from the consumer's action.

**Intent:** Consumers must be advised if the publisher of the content is receiving any benefits from the subsequent installation or purchase of the app. If an affiliate id is passed, it must be disclosed. Disclosure must be directly in the content nearby the link, and not buried in a footer or behind another link.

**How to comply:** Require your affiliates to disclose to consumers, right at the link, that they benefit from the install or sale of your app. If they don't disclose this relationship, you must.

**Scenarios:** Landing page
**Consumer principle:** trustworthy

### ACR-171

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-171) Offers requiring recurring or additional payments that were not pre-disclosed must not be opt-out.

**Intent:** Consumers must provide a positive action to accept offers and shopping carts that charges or will charge them more than the offer disclosed.

**How to comply:** Don't pre-check recurring or additional payments if this is the first time the consumer has learned about them. If you didn't clearly pre-disclose them, your shopping cart must make all recurring, additional, and future payment options opt-in.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

### ACR-173

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-173) Pricing must be clear and unambiguous as to what and how often the consumer will ultimately be charged.

**Intent:** The intent is that the consumer knows what they will be charged at purchase/renewal time, and how often they will be charged.

**How to comply:** If you show an effective monthly rate as your comparison price, make sure the period and the total charge is also clear.

**Scenarios:** Landing page, Inline offers, In-bundle offers, Bundler-made offers, Internal offers
**Consumer principle:** trustworthy

## Inline offers

Interstitial offers made on landing pages.

### ACR-027

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-027) Attributes the app clearly and recognizably at the top of the browser screen. States that the interstitial is an advertisement or offer.

**Intent:** It must be clear that the interstitial is an ad/offer, and which app injected the ad/which app is being offered.

**How to comply:** If you're injecting an offer, say it's an offer. Put the injetctor app name into all injected interstitials, and make sure ads say they're ads.

**Scenarios:** Inline offers, Injected interstitials
**Consumer principle:** transparent

### ACR-029

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-029) Consumer can continue to the intended page without waiting.

**Intent:** Delays get in the way of the website experience (injected), and doesn't allow quick dismissal (offers)

**How to comply:** Do not inject countdown interstitials.

**Scenarios:** Inline offers, Injected interstitials
**Consumer principle:** respectful

### ACR-030 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-030) Consumer can navigate away from interstitials (and interstitial will close), including at a minimum a close button. If the interstitial restricts access to publisher content, then the consumer must be able to use the back button, the address bar, and clicking outside the ad or offer as methods to close the interstitial.

**Intent:** The intent is to not force the consumer to choose or interact before proceeding with their intention.

**How to comply:** Don't make it difficult for the consumer to close your injected interstitials (overlays, in focus pop-ups, selected new tabs). If your interstitial restricts access to the content, make sure it can be closed simply.

**Scenarios:** Inline offers, Injected interstitials
**Consumer principle:** harmless

**Evaluation notes:** This only applies to popup ads and interstitial web pages injected by an ad injector inside a browser.

### ACR-031 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-031) Interstitials are not chained together.

**Intent:** One interstitial only can be injected. One interstitial offer can be added to a landing page.

**How to comply:** Don't chain together your interstitials ads and offers.

**Scenarios:** Inline offers, Injected interstitials
**Consumer principle:** respectful

**Evaluation notes:** This only applies to popup ads and interstitial web pages injected by an ad injector inside a browser.

### ACR-032 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-032) Shown only after the consumer clicks to do something besides exiting the page. If interstitial displays in a different window or tab, shown only after a positive user action.

**Intent:** Except when they're in the same window and tab, interstitials must be tied to positive and intentional user actions.

**How to comply:** Don't launch new windows or new tabs on page entry. If the consumer is trying to exit, don’t inject or offer with any interstitial. Wait for a postive user action.

**Scenarios:** Inline offers, Injected interstitials
**Consumer principle:** respectful

**Evaluation notes:** This only applies to popup ads and interstitial web pages injected by an ad injector inside a browser.

### ACR-077

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-077) Shown only on the app's or carrier app's landing page.

**Intent:** Interstitial offers are either organic (inline installs with ad-driven traffic) or offers attached to another carrier. These kinds of offers can only be attached to landing pages.

**How to comply:** Only make inline offers from carrier landing pages.

**Scenarios:** Inline offers
**Consumer principle:** respectful

## Bundler-made offers

Offers made by a bundler or download manager.

### ACR-072

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-072) Each offer is only offered once.

**Intent:** No doubling up the same offer.

**How to comply:** Don't offer the same thing more than once.

**Scenarios:** Bundler-made offers
**Consumer principle:** trustworthy

### ACR-075 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-075) No apps are installed, and no more apps are offered, when the consumer cancels or declines the carrier, or the carrier install fails.

**Intent:** Cancellation by the consumer, or carrier install failure, means nothing at all gets installed: no carrier, no offered apps, no settings changes

**How to comply:** Uninstall any offers you installed when the consumer cancels the carrier install, or the carrier install fails. If you can't do this on cancel, put up clear and simple instructions.

**Scenarios:** Bundler-made offers
**Consumer principle:** trustworthy

**Evaluation notes:** Applies when cancelling the install. Check Kept Files and Start Menu Items.

### ACR-152

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-152) Consumer has a means to cancel or decline the installation of the carrier.

**Intent:** The intent is that the consumer can cancel everything from any point in the offer process.

**How to comply:** Provide a means for the consumer to exit without installing the carrier.

**Scenarios:** Bundler-made offers
**Consumer principle:** trustworthy

## Ads about app

Advertising that promotes the app.

### ACR-011

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-011) Associated calls to action are clearly attributed to the ad and not the web page/app.

**Intent:** It must be clear that an ad is an ad. Consumers must not be tricked into clicking an ad when they mean to click content.

**How to comply:** Keep your ads separated from the content so the consumer is clear which is which.

**Scenarios:** Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** transparent

### ACR-016 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-016) Downloads are not launched directly from advertisements.

**Intent:** Ads lead to offers, not directly to downloads.

**How to comply:** Do not initiate your download directly from an ad. If you want to have this experience, turn your ad into an inline offer and comply with those requirements.

**Scenarios:** Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** trustworthy

**Evaluation notes:** Use the file events to be sure that any software downloads or installs only occur after the user accepts an offer, and not when the user clicks on an ad.

### ACR-018

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-018) Does not claim to aid in activity that violates applicable laws.

**Intent:** Apps can't be advertised as a means to break the law

**How to comply:** Don't advertise your app with ads that offer to help the consumer break the law.

**Scenarios:** Ads about app
**Consumer principle:** ethical

### ACR-019

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-019) Controls are in place to ensure that app is marketed only as authorized.

**Intent:** Affiliates must have explicit permission to advertise, and controls must be in place to ensure their adherence. If app is available for download sites, it must be listed on padsites.org. Vendors have an obligation to control and monitor who markets their apps

**How to comply:** If you're using affiliates, put your affiliate program and policies online, and have controls in place to monitor and eliminate affiliates who break your rules.

**Scenarios:** Ads about app
**Consumer principle:** transparent

### ACR-156

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-156) Has a broader or equal age appropriateness rating than the app.

**Intent:** Vendors have a duty to ensure that ads about, within, and injected by an app cannot have a more restricted appropriateness rating than the app

**How to comply:** Don't display ads that are not fit for the app's age appropriateness group.

**Scenarios:** Ads about app, Ads inside app, Injected ads, Injected interstitials
**Consumer principle:** ethical

## Ads inside app

Advertising displayed within the app's own UI.

### ACR-034

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-034) Follows these requirements and relevant platform policies for advertising.

**Intent:** if an app monetizes by displaying ads within its user experience, the vendor is obligated to monitor to ensure that the ads follow these guidelines as well as any inherited guidelines

**How to comply:** Follow these requirements for the ads you display, and follow any policies inherited from the system or browser.

**Scenarios:** Ads inside app
**Consumer principle:** conforming

## Injected ads

Ads the app injects into browsers, email clients, or the desktop.

### ACR-012

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-012) Consumers can close ads by obvious means via user interaction.

**Intent:** If an app injects ads, each ad must be able to be closed (e.g., Google AdChoices)

**How to comply:** Whatever you inject into browsers, email clients, and desktops must be able to be easily closed.

**Scenarios:** Injected ads, Injected interstitials
**Consumer principle:** respectful

### ACR-020 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-020) Easily distinguishable from the web site's existing ads and web site content.

**Intent:** Injected ads must be identifiable as injected and not part of the website

**How to comply:** The ads you inject into browsers, email clients, and desktops must clearly indicate your app was responsible.

**Scenarios:** Injected ads, Injected interstitials
**Consumer principle:** transparent

**Evaluation notes:** Check that any ads placed outside of the app's main ui in browser or on the desktop can be recognized as coming from the app. This only applies to interstitial web pages injected by an ad injector inside a browser.

### ACR-021

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-021) Has attribution containing the app name, providing the ability to disable the injected ad. Clicking leads to a link to an info page that has links to the app's EULA, official website, an option to "opt out" of the ad injection, and app uninstall instructions.

**Intent:** All injected ads must have detailed attribution as well as ways to prevent the app from injecting ads

**How to comply:** Whatever you inject into browsers, email clients, or desktops must show your app name and you must make it easy to disable the injection.

**Scenarios:** Injected ads, Injected interstitials
**Consumer principle:** transparent

### ACR-022

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-022) Does not interfere with the consumer's ability to navigate.

**Intent:** Injected ads cannot take over the website on which they inject

**How to comply:** Whatever you inject into browsers, email clients, and desktops cannot get in the way of or block the non-injected experience.

**Scenarios:** Injected ads, Injected interstitials
**Consumer principle:** respectful

### ACR-023

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-023) Does not transmit personally identifiable information unless entered explicitly by the consumer in the ad.

**Intent:** Personally identifiable information is any information that can lead to the identification of the consumer

**How to comply:** Don't send PII from the ads you inject into browsers, email clients, desktops, unless the ad specifically prompts the consumer for it and the consumer knows it's being collected (example: joining an email notification list).

**Scenarios:** Injected ads, Injected interstitials
**Consumer principle:** respectful

### ACR-024 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-024) Honors the relevant passed-through platform policies and terms of use for advertising, content, and search advertising.

**Intent:** Injectors have an obligation to honor a platform’s desires. Injected ads must honor appropriate platform policies.

**How to comply:** Don't break the rules of the platform upon which you're injecting. This may include policies from the program and from the OS.

**Scenarios:** Injected ads, Injected interstitials
**Consumer principle:** conforming

**Evaluation notes:** This only applies to interstitial web pages injected by an ad injector inside a browser.

### ACR-025 ⛔

**Severity: DECEPTOR-LEVEL** — violating this can get the app listed as a Deceptor; AV/security vendors block Deceptors without prompting the user.

**Requirement:** (ACR-025) Injects no more than one interstitial ad, one non-interstitial ad, five hyperlink-based ads, and one search box per page.

**Intent:** The intent is that ad injectors must limit how much they change the consumers’ expected experience.

**How to comply:** Do not inject on a page more than a single ad that comes between a user action and desired intent, Limit the non-interstitial ads and search dialogs you inject from each page.

**Scenarios:** Injected ads, Injected interstitials
**Consumer principle:** respectful

**Evaluation notes:** This only applies to interstitial web pages injected by an ad injector inside a browser.

### ACR-026

**Severity: CERTIFICATION-LEVEL** — required to pass AppEsteem certification.

**Requirement:** (ACR-026) Is never on sites or portions of sites designed primarily for children under the age of 13.

**Intent:** The intent is that ads are never injected on sites designed for children under the age of 13, because children can't distinguish the ads.

**How to comply:** Keep your injected content off kid sites.

**Scenarios:** Injected ads, Injected interstitials
**Consumer principle:** ethical

---

Source of truth: https://customer.appesteem.com/api/hints?req=Certification&minbar=n — fetch it directly for the most current requirements. Published by AppEsteem Corporation, https://appesteem.com.
