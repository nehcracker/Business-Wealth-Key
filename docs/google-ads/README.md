# Google Ads Campaign Setup — Business Wealth Key

**Campaigns:** Business Prosperity Rituals + Psychic Consultations & Online Readings  
**Structure:** SKAG (Single Keyword Ad Group) — 4 ad groups per campaign  
**Ad format:** Responsive Search Ads (RSA)

---

## How to Get These Campaigns Live

### Path A — Google Ads Editor Import (Do This Today)

This is the fastest path. No API. No developer setup. Works now.

**Step 1 — Download Google Ads Editor (free)**
- https://ads.google.com/home/tools/ads-editor/
- Sign in with your Google Ads account

**Step 2 — Download your account**
- Open Google Ads Editor → File → Open → select your account → Download recent changes

**Step 3 — Import a campaign CSV**
- File → Import → Import file…
- Select `prosperity-rituals-campaign.csv` (or psychic-consultations)
- Editor will show a column-mapping screen — map any unrecognised columns
- Review the data → Accept all

**Step 4 — Repeat for the second campaign**
- File → Import → Import file… → select `psychic-consultations-campaign.csv`

**Step 5 — Verify before publishing**

Check these in the Editor before posting:
- [ ] All 4 ad groups present in each campaign
- [ ] Each ad group has keywords with Exact + Phrase + Broad match types
- [ ] Each ad group has one RSA with 15 headlines and 4 descriptions
- [ ] Final URLs are correct (service page URLs — see note below)
- [ ] Daily budget set to your starting amount
- [ ] Bid strategy: Manual CPC (change to Target CPA after 30+ conversions)
- [ ] Campaign Type: Search only (NOT Display)
- [ ] Add shared negative keywords (see `negative-keywords.csv`)

**Step 6 — Add negative keywords**
- In Editor: select a campaign → Keywords tab → Negatives
- Import from `negative-keywords.csv` OR add manually
- Apply the same negatives to both campaigns

**Step 7 — Post to Google Ads**
- File → Post to Google Ads
- Review warnings → Post

---

### Path B — Google Ads API via Claude Code (Advanced)

This lets Claude Code create and manage campaigns via conversation. Requires a one-time setup.

**What you need:**
1. A Google Ads Manager Account (MCC)
2. A Google Ads Developer Token — apply at: https://ads.google.com/aw/apiaccess
3. OAuth2 credentials from Google Cloud Console
4. A Google Ads MCP server configured in Claude Code

**To set up the MCP server:**
```bash
# In Claude Code settings, add this MCP server entry:
{
  "mcpServers": {
    "google-ads": {
      "command": "npx",
      "args": ["@google-ads-mcp/server"],
      "env": {
        "GOOGLE_ADS_DEVELOPER_TOKEN": "your-token",
        "GOOGLE_ADS_CLIENT_ID": "your-oauth-client-id",
        "GOOGLE_ADS_CLIENT_SECRET": "your-oauth-client-secret",
        "GOOGLE_ADS_REFRESH_TOKEN": "your-refresh-token",
        "GOOGLE_ADS_CUSTOMER_ID": "your-account-id"
      }
    }
  }
}
```

**Developer token note:** Google requires applying for API access and approving your use case. Basic access (test account) is granted quickly; Standard access (live account) requires a review. Start the application now if you want API access later — it can take 1–2 weeks.

**Realistic timeline:** Use Path A to get campaigns live immediately. Apply for the developer token in parallel. Once approved, Claude Code can manage bids, pause underperformers, and create new ad variations via conversation.

---

## Landing Page Note

The CSV files point to the existing service pages:
- Prosperity Rituals → `https://businesswealthkey.com/services/prosperity-rituals`
- Psychic Consultations → `https://businesswealthkey.com/services/psychic-consultations`

The SKAG spec (`2026-06-11-prosperity-rituals-seo-skag-design.md`) calls for dedicated `/lp/` landing pages for maximum Quality Score. Build these before scaling budget:
- `/lp/ritual-for-business-success`
- `/lp/luck-rituals-for-business`
- `/lp/financial-blockage-removal`
- `/lp/remove-spiritual-blockages`
- `/lp/psychic-business-consultation`
- `/lp/online-psychic-reading`
- `/lp/spiritual-medium`
- `/lp/best-online-psychic`

Each `/lp/` page: no navbar/footer, H1 = exact keyword, single CTA → `/contact#consultation-form`, `noindex` meta tag.

---

## Campaign Settings Summary

| Setting | Prosperity Rituals | Psychic Consultations |
|---|---|---|
| Daily budget | $40 | $40 |
| Networks | Search only | Search only |
| Bid strategy | Manual CPC | Manual CPC |
| Exact match CPC | $3.00 | $3.00 |
| Phrase match CPC | $2.00 | $2.00 |
| Broad match CPC | $1.50 | $1.50 |

### Geographic Targeting (set manually in Google Ads UI after import)

**Tier 1:** New York, Los Angeles, Miami, London, Dubai, Toronto, Sydney  
**Tier 2:** Houston, Atlanta, Chicago, Manchester, Birmingham, Vancouver, Melbourne, Singapore

---

## Performance Benchmarks (Review at 30 days)

| Metric | Target |
|---|---|
| Quality Score | ≥ 7 (aim 8–10) |
| CTR | ≥ 4% |
| Cost per enquiry | ≤ $30 |
| Impression share | Track — increase budget if >80% lost to budget |

When any ad group has 30+ clicks: switch that group to Target CPA bidding at $25 CPA. Keep others on Manual CPC until data accumulates.

---

## Files in This Directory

### Original campaigns

| File | Contents |
|---|---|
| `prosperity-rituals-campaign.csv` | 4 ad groups — business rituals, blockage removal |
| `psychic-consultations-campaign.csv` | 4 ad groups — psychic consultations & readings |

### Expansion campaigns (B–E)

| File | Campaign | Daily Budget | Ad Groups | Keywords |
| --- | --- | --- | --- | --- |
| `campaign-b-psychic-readings.csv` | **Campaign B** — Psychic & Spiritual Readings | $40 | AG1 Psychic Business, AG2 Online Psychic Reading, AG3 Spiritual Medium, AG4 Best Online Psychic | 11 keywords + 4 RSAs |
| `campaign-c-money-wealth.csv` | **Campaign C** — Money & Wealth Rituals | $40 | AG1 Money Rituals (5k/mo), AG2 Wealth Rituals, AG3 Prosperity Rituals | 14 keywords + 3 RSAs |
| `campaign-d-luck-success.csv` | **Campaign D** — Luck & Success Rituals | $30 | AG1 Luck Rituals, AG2 Success Rituals, AG3 Business Luck | 14 keywords + 3 RSAs |
| `campaign-e-business-spiritual.csv` | **Campaign E** — Business Spiritual Guidance | $35 | AG1 Ritual for Business Success, AG2 Business Breakthrough, AG3 Wealth Activation | 11 keywords + 3 RSAs |
| `negative-keywords.csv` | Shared negatives | — | Covers all 5 campaigns | 49 negatives |

### Rollout order (recommended)

1. **Phase 1 (now):** Campaign B + Campaign C — highest volume and most buyer signals
2. **Phase 2 (day 30):** Add Campaign D — once Phase 1 CPAs are confirmed
3. **Phase 3 (day 60):** Add Campaign E — niche, low volume, premium audience

### Landing pages needed before scaling budget

| Page to build | Serves |
|---|---|
| `/lp/money-rituals` | Campaign C AG1 — 5,000 searches/month |
| `/lp/online-psychic-reading` | Campaign B AG2 — high volume |
| `/lp/blockage-removal` | Original prosperity campaign AG3/AG4 |
| `/lp/ritual-for-business-success` | Campaign E AG1 |
| `/lp/wealth-activation` | Campaign E AG3 |
