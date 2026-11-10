---
title: "How to Migrate Hosting in India Without Downtime (2026)"
description: "Move your website to a new host in India with zero downtime: free migration, the TTL trick, DNS switch and email transfer — step by step."
date: 2026-11-10
category: hosting
tags: [hosting-migration-india, wordpress-migration, dns-propagation, zero-downtime-migration, website-transfer, free-migration]
products: [hostinger, milesweb, bluehost]
tools: [hosting-compare]
faq:
  - q: "Will my website go down during a hosting migration?"
    a: "No — not if you follow the right order. First build a complete copy of your site on the new host, test it, and only then change your DNS. Your old site stays live throughout the transfer, so visitors never notice anything. Downtime only happens when people change DNS first, or migrate without a backup. Hostinger's official migration guide says the same thing: point your domain only after the migration is complete, so the original website stays online until the transfer finishes."
  - q: "Is hosting migration free, or does it cost extra?"
    a: "All three big hosts — Hostinger, MilesWeb and Bluehost — migrate WordPress sites for free. You only pay for the new hosting plan; the migration itself costs ₹0. Bluehost allows up to 5 sites free in the first 30 days, with an average migration time of about 2 minutes according to its India page; extra sites are listed at ₹799 for up to 5 additional sites on the Bluehost India page (verified 5 November 2026, not re-checked today). If your site is built on a custom builder such as Shopify, Squarespace or Wix, the free migration tool will not work — that is a manual rebuild, not a transfer."
  - q: "How long does DNS propagation take after a migration?"
    a: "It depends on the old TTL of your DNS record. If you lowered the TTL to 300 seconds (5 minutes) 24–48 hours before the switch, most visitors will see the new site within 5–15 minutes. If the TTL was 24 hours (86,400 seconds) and you never lowered it, some visitors may keep seeing the old site for up to 24 hours. A nameserver change is the slowest option — for .com and .net domains the registry delegation TTL is 48 hours, and you cannot shorten it."
  - q: "Will my email stop working during the migration?"
    a: "It can — because free migration usually does not include email. Hostinger's official guide states clearly that you have to migrate your email manually. The right order is: create the same email addresses on the new host before the DNS switch, copy the old mailbox data over IMAP, and only change the MX record once the new mailboxes are ready. Then do one final sync after the DNS switch to catch any mail that arrived at the old mailbox during the move. If you use Google Workspace or Zoho Mail, this problem does not exist at all, because your email is separate from your hosting."
  - q: "When should I cancel my old hosting after migrating?"
    a: "Wait at least 7 days. Even after DNS propagation looks complete, some visitors, email servers and search-engine crawlers can still reach the old server. Use those 7 days to test everything on the new site — forms, checkout, login, email — and only then cancel the old plan. If your renewal date is close, turn off auto-renew on the old host and keep the 7-day buffer; starting a migration on the last day of your old plan is the single biggest mistake you can make."
  - q: "What is the easiest way to migrate a WordPress site?"
    a: "Use the new host's free migration service — you barely have to do anything yourself. On Hostinger, go to Websites > Migrations in hPanel, give your WordPress admin or cPanel login (or upload a backup file), and their team copies the files and database, usually in 30 minutes and up to 24 hours. On MilesWeb, raise a support ticket to request the migration. On Bluehost, the free Migrator plugin moves 1 WordPress site free, and up to 5 sites free in the first 30 days. Only use manual migration (FTP + phpMyAdmin) when no free option is available."
verdict: "Downtime during a hosting migration is not a technical necessity — it is the result of doing things in the wrong order. Copy first, DNS last, lower the TTL 24 hours early, and migrate email separately: remember those four things and your site will not go down for a single minute. Starting with Hostinger or MilesWeb's free migration is the lowest-effort route."
lastVerified: "2026-11-10"
---

## The short answer: copy first, DNS last

Got a shock when the renewal bill arrived? Or your site has slowed down and support has stopped answering? Switching hosts can be the right move — but most people hold back for one reason: **will my site go down during the migration?**

That fear makes sense. Your blog gets daily visitors, orders come in, your Google ranking is built up. One wrong step and the site disappears for hours.

The good news: **zero-downtime hosting migration is entirely possible** — and you do not need a technical degree for it. You only need the right order: build the copy on the new server first, test it, and switch the DNS last. This guide walks through that whole process step by step, with official sources and prices verified live on 10 November 2026. It is based on public specs, official migration guides and pricing pages — nothing here was bought or personally tested, so you will find no "I tested it myself" claim, only what the official pages actually say, including where they contradict themselves.

## Why does downtime happen? Three common mistakes

Downtime is not a technical necessity. It almost always comes from one of these three mistakes:

**1. Changing DNS first, building the copy later.** The biggest mistake. The moment DNS points at the new server, visitors start arriving there — and if the site does not exist there yet, they see an error. The correct order is the reverse.

**2. Migrating without a backup.** If the transfer fails halfway or the database gets corrupted, and you have no backup, getting the site back can take hours. A backup is the insurance for a migration — do not start without one.

**3. Forgetting email.** People migrate the site, switch the DNS, and then discover that business emails have stopped arriving. Email does not move automatically with the site — it needs its own plan, covered in detail below.

Avoid these three, and migration becomes boring — and boring is good.

## The golden rule of zero downtime: copy first, DNS last

The whole process runs on one principle:

> **Get the new site fully ready and tested first — and only then tell the world about the new server (the DNS switch).**

That means:

- Your old site stays **live during the transfer**. Visitors never notice a thing.
- You can test the new copy at leisure, without affecting a single visitor.
- Even after the DNS switch, the old server keeps running for a few days, so you can go back if something goes wrong.

Hostinger says exactly this in its official migration guide: **point your domain only after the migration is complete**, so the original website stays online until the transfer finishes. That is not a marketing line — it is the core of zero downtime.

## Step by step: hosting migration without downtime

### Step 1: Take a full backup (30 minutes)

Before anything else, download a full backup of your old site — files and database both. On WordPress, use a free plugin such as UpdraftPlus, or take a full backup from cPanel. Save the backup on your own computer; do not rely only on the old server.

This step feels boring, but it is the step that turns a failed migration from a hours-long disaster into a 10-minute problem.

### Step 2: Lower the DNS TTL 24–48 hours before the switch

This is the most important step, and the most ignored one. TTL (Time To Live) tells DNS servers around the world how long to cache your domain's record.

**24–48 hours before the switch**, set your A record's TTL to **300 seconds (5 minutes)**. Then, when you change the DNS, most visitors will see the new site within minutes.

Remember: **changing the TTL does not take effect immediately.** The old TTL keeps the old record cached for as long as it was set. That is why this has to be done before the switch — lowering the TTL on the day of the switch achieves nothing.

If your domain is on Cloudflare or a registrar, change the TTL there; if your nameservers belong to your host, change it there.

### Step 3: Buy the new hosting plan

Now choose your new host and buy a plan. A shared or cloud plan is enough for a migration — you only need a VPS if the site is very large.

What will it cost? The prices below were verified live on 10 November 2026. Pay special attention to the renewal price: the intro price applies only to the first term. If you are migrating to escape a renewal shock, checking the new host's renewal price first is the most important thing you can do — otherwise, three years later, the same story repeats. Our [Hostinger renewal price guide](/en/hostinger-renewal-price-increase-alternatives/) explains the full renewal maths.

### Step 4: Request the free migration

Now use the new host's free migration service — you do not need to copy files yourself:

- **{{aff:hostinger|Hostinger}}:** In hPanel, go to **Websites > Migrations** and click **Migrate website**. Give your WordPress admin login or cPanel login, or upload a backup file. Their team copies the files and database — usually in 30 minutes, sometimes up to 24 hours. You can submit up to 5 active requests at a time. Hostinger's own page says "We migrate your existing site for free" — verified live on 10 November 2026.
- **{{aff:milesweb|MilesWeb}}:** Raise a support ticket to request the migration. Under their Terms of Service, free migration is available on shared, cloud, WordPress and managed VPS plans. Third-party reviews say you get 1 free migration with no backup-size limit — that is not confirmed on the official page, so ask about the size limit when you raise the ticket. MilesWeb's hosting page lists "Free website migration" under "Included in every plan", and its FAQ promises "instant website migration".
- **{{aff:bluehost|Bluehost}}:** The free Migrator plugin moves 1 WordPress site for free. According to the current India page, up to 5 sites are free in the first 30 days, with an average time of 2 minutes. Extra sites are listed at ₹799 (for up to 5 additional sites) on the Bluehost India page — that figure is from the 5 November 2026 check and is labelled here, not re-verified today.

One thing to watch when you submit the request: **if two-factor authentication or an anti-bot check is on for your old site's admin login, turn it off temporarily** — otherwise the host's team will not be able to log in at all.

### Step 5: Test the new copy — without changing DNS

After the migration finishes, the host gives you a temporary URL or preview link. Check all of this on it:

- Do the homepage and inner pages open properly?
- Do images and media load?
- Do login, contact forms and checkout (if any) work?
- Does the admin panel (wp-admin) open properly?

If anything looks broken, get it fixed now — your old site is still live, so there is no rush. Switch the DNS only when the new copy is 100% right.

### Step 6: Switch the DNS

Now the moment has come. Point your domain's DNS records (A record or nameserver) at the new host. You will find the new host's nameservers or IP address in their dashboard or welcome email.

**A nameserver change and an A record change are different:** changing an A record changes only one record and propagates within minutes to a few hours, depending on TTL. A nameserver change is slow — for .com and .net domains the registry delegation TTL is 48 hours, and you cannot shorten it. If you use a DNS provider such as Cloudflare, changing only the A record is enough, and it is faster than a nameserver change.

### Step 7: Do not cancel the old hosting for 7 days

This is the last step, and the one where most people make the mistake — they cancel the old plan the moment they switch the DNS. **Wait at least 7 days.**

Why? Because some visitors, some email servers and some search-engine crawlers may still reach the old server. Within those 7 days, test everything on the new site — forms, checkout, login, email — and only then cancel the old plan. If your renewal date is near, turn off auto-renew on the old host and keep the 7-day buffer. Starting a migration on the last day is the biggest mistake of all.

After the DNS switch, set the TTL back to a normal value (3,600 seconds or more) — keeping a very low TTL permanently adds load on DNS servers.

## Free migration: Hostinger vs MilesWeb vs Bluehost

All three hosts offer free migration, but the terms differ:

| Host | Free migration | What is included | What is NOT included | How to request |
| --- | --- | --- | --- | --- |
| {{aff:hostinger\|Hostinger}} | Free, on Web/Cloud/Agency plans | Website files + database | Email, cron jobs, DNS records, custom SSL, FTP accounts | hPanel > Websites > Migrations |
| {{aff:milesweb\|MilesWeb}} | Free, on managed hosting | Files + database; email/DNS "subject to compatibility" (ToS) | Sites in proprietary/restricted formats | Support ticket |
| {{aff:bluehost\|Bluehost}} | Free, 1 WordPress site; up to 5 sites in the first 30 days | Content, themes, plugins | Extra sites paid (₹799, for up to 5 additional sites — 5 Nov, labelled) | Free Migrator plugin |

One more important point: **Hostinger does not offer free migration on VPS plans** — it is only for Web, Cloud and Agency plans. And if your site is built on Shopify, Squarespace, Wix or the GoDaddy Website Builder, the free migration tool will not work — such a site has to be rebuilt on the new host.

![Hostinger India shared hosting page on 10 November 2026 — Single ₹69/mo, Premium ₹139/mo, Unlimited ₹199/mo and Cloud Startup ₹599/mo, all on a 48-month term with renewal prices](/screenshots/hostinger-plans-migration-2026-en.png)
*Hostinger's plans verified live on 10 November 2026 — the Sale Season banner shows no end date, and the hero's "from ₹139/mo" sits oddly next to the Single plan at ₹69/mo*

![MilesWeb India web hosting page on 10 November 2026 — Starter ₹69/mo, Premium ₹99/mo, Unlimited ₹149/mo and Cloud Startup ₹299/mo, with the Diwali sale countdown at 10 days 12 hours](/screenshots/milesweb-plans-migration-2026-en.png)
*MilesWeb's plans verified live on 10 November 2026 — the Diwali sale is still running, with about 10 days left on the countdown (no calendar end date is printed)*

![Bluehost India pricing page on 10 November 2026 — Starter ₹199/mo, Business ₹279/mo and eCommerce Essentials ₹649/mo, each with "Free Site Migration Tool" on the card](/screenshots/bluehost-plans-migration-2026-en.png)
*Bluehost's plans verified live on 10 November 2026 — the cheaper price set for the fifth consecutive check, with "Free Site Migration Tool" printed on every card*

## How much does a migration cost?

The migration itself is free — the only cost is the new hosting plan. Prices verified live on 10 November 2026:

| Host | Starting plan | Intro price | Renewal price | Term |
| --- | --- | --- | --- | --- |
| {{aff:hostinger\|Hostinger}} | Premium | ₹139/mo | ₹449/mo | 48 months |
| {{aff:milesweb\|MilesWeb}} | Starter | ₹69/mo | ₹149/mo | 36 months (+18% GST) |
| {{aff:bluehost\|Bluehost}} | Starter | ₹199/mo | ₹349/mo | 36 months |

Two things to note. First, **MilesWeb's Diwali sale is still running** — the countdown showed 10 days 12 hours left at 11:20 IST on 10 November, which works out to around 20 November, but no calendar end date is printed on the page, so treat that as an estimate from the countdown, not an announced date. Second, **Bluehost's prices show an A/B test in progress** — on 27 October 2026 the Starter plan showed ₹383/mo, while on 30 October, 1, 6, 8 and 10 November it showed ₹199/mo. The price you see at checkout is the final one; both sets are mentioned here so you know the difference exists.

There are two small extra costs that can appear: if your site is very large and the free migration does not cover it (rare), and if you buy a paid migration service — Bluehost's paid service is reported by third-party reviews at $149.99 (about ₹9,200), but that is not confirmed on the official page. For a normal WordPress blog, neither is needed.

If you want to see the total budget for a blog, including domain + hosting, our [domain-hosting combo guide for blogs](/en/blog-ke-liye-domain-hosting-combo-offer/) has the full maths. For a business site where a GST invoice matters, see our [shared hosting guide with GST invoice](/en/shared-hosting-small-business-gst-invoice-india/). And to compare plans side by side, use the [hosting comparison tool](/tools/hosting-compare/).

## Email migration — the most forgotten step

This is where most people get stuck. **Free migration usually does not include email.** Hostinger's official guide states clearly that you have to migrate your email manually. MilesWeb's Terms of Service say email migration is "subject to compatibility" — in other words, there is no guarantee.

The right order is:

1. **Create the same email addresses on the new host before the DNS switch** — for example info@yourdomain.com.
2. **Copy the old mailbox data over IMAP.** A free email client such as Thunderbird can connect both accounts (old + new) at once and copy mails by drag-and-drop. Or use the host's email import tool.
3. **Change the MX record only when the new mailboxes are ready.** The MX record tells the world where your domain's email goes — it has to change together with the DNS switch.
4. **Do one final sync after the DNS switch** — copy any mail that arrived in the old mailbox during the move into the new mailbox.

If you use a third-party email service such as Google Workspace or Zoho Mail, this problem does not exist at all — your email is separate from your hosting, so the migration has no effect on it. For business email, that setup is usually better anyway.

## DNS propagation: how long will it take?

This is the most asked question, and the answer depends on TTL:

| TTL before the switch | When most visitors see the new site |
| --- | --- |
| 60 seconds | 1–2 minutes |
| 300 seconds (5 minutes) | 5–15 minutes |
| 3,600 seconds (1 hour) | 1–2 hours |
| 86,400 seconds (24 hours) | Up to 24 hours |

And remember: **a nameserver change is different.** When you change nameservers, the registry delegation TTL of 48 hours applies for .com/.net domains — so a nameserver change can take up to 48 hours, whatever TTL you set. That is why changing only the A record is better when possible.

To check propagation, put your domain into a free service such as dnschecker.org and see which IP different locations around the world are showing.

## Post-migration checklist

After the DNS switch, check these 7 things:

1. **SSL certificate** — Is the free SSL installed on the new host? Does the site open over https, or does it show "Not Secure"? Details are in our [free SSL hosting guide](/en/free-ssl-hosting-india-shared-plans/).
2. **All pages and images** — Any broken links or missing images?
3. **Forms and checkout** — Does the contact form submit? If you have WooCommerce, place a test order.
4. **Email send/receive** — Send a mail from the new mailbox and receive one to test it.
5. **Google Search Console** — Is the site being crawled on the new server? Any errors?
6. **Speed** — Is the site faster or slower on the new host? Check once on GTmetrix.
7. **Backup schedule** — Is automatic backup switched on at the new host? Hostinger and MilesWeb both offer daily/weekly backups, but check the schedule.

## Research methodology

This article is based on an analysis of official sources — no site was personally migrated or tested, and no such claim is made anywhere in the article. Sources:

- **Hostinger official migration guide** (hostinger.com support page, updated ~2 November 2026) — free migration eligibility, timing, and what is included and excluded.
- **Hostinger, MilesWeb and Bluehost pricing pages** — checked live in the browser on 10 November 2026 (plan cards, renewal prices, sale banners and free-migration wording, with screenshots).
- **Bluehost India page** — free migration terms ("up to 5 sites free in first 30 days", 2-minute average).
- **MilesWeb Terms of Service** (carried from the 5 November 2026 Hindi original, not re-opened today) — free migration terms and their position on email/DNS.
- **DNS propagation guides** (dev.to, Valimail, Copahost, ipme) — the technical maths behind TTL and propagation time.
- **Plan prices:** live browser verification on 10 November 2026 (Hostinger, MilesWeb, Bluehost plan cards); all three hosts' figures are identical to the 1, 5, 6 and 8 November checks. Bluehost's two different price sets (₹199 vs ₹383 Starter) are both stated in the article.
- **Third-party-reported (not confirmed on the official page):** MilesWeb "1 free migration, no size limit" and Bluehost paid migration $149.99 — written in the article as reported only.

All prices and policies are as of 10 November 2026 (lastVerified). Hosting companies change prices and offers regularly, so always check the final price at checkout.

## The final word

There is no reason to fear a hosting migration — just do not get the order wrong. Take a backup, lower the TTL first, get the copy made through free migration, test it, and only then change the DNS. Plan email separately, and keep the old host running for 7 days.

And if you are migrating because the renewal price shocked you, do not forget to check the new host's renewal price in advance — otherwise, three years from now, you will be reading this article again.
