# Moving beauco.ca from Wix to WordPress

This covers the two things left to actually get live: getting WordPress
hosting running with this theme, and cutting the domain over from Wix
without a gap in service. I can't do either of these steps directly (no
hosting or registrar access from here) — this is the exact sequence to
follow.

## Before you start: one thing to check

**Is your domain registered *through* Wix, or registered elsewhere and just
pointed at Wix?** This changes step 2 below.

- Log into Wix → Settings → Domains. If it says "Purchased from Wix" (or
  similar), your domain lives at Wix as the registrar.
- If it says something like "Connected domain" and names an external
  registrar, the domain was bought elsewhere (Namecheap, GoDaddy, Google
  Domains, etc.) and just has its DNS/nameservers pointed at Wix.

If you're not sure, check your email for the original domain purchase
receipt — it'll name the registrar.

## 1. Get WordPress hosting

You need a host that runs WordPress (PHP 8.1+, MySQL/MariaDB). Any
mainstream WordPress host works — a few reasonable options if you don't
already have a preference:

- **Managed WordPress hosts** (simplest, a bit more expensive): WP Engine,
  Kinsta, Flywheel.
- **General shared/cloud hosting with one-click WordPress installs**
  (cheaper, still solid): SiteGround, Bluehost, Cloudways, DreamHost.

Sign up, and use the host's "Install WordPress" flow (nearly all of them
have one). You'll end up with:
- A temporary URL to your new site (something like `yoursite.hostname.com`
  or an IP address) — use this to build on before the domain is pointed at
  it.
- A WordPress admin login (`/wp-admin`).

## 2. Install the theme

1. In this repo, `wordpress-theme/beauco/` is the full theme. Zip it:
   ```bash
   cd wordpress-theme
   zip -r beauco-wordpress-theme.zip beauco
   ```
2. In WordPress admin: **Appearance → Themes → Add New → Upload Theme**,
   choose the zip, install, then **Activate**.
   (Alternative: unzip it and upload the `beauco` folder to
   `wp-content/themes/` over FTP/SFTP or your host's file manager.)

## 3. Set up the two pages

1. **Pages → Add New.** Title it "Home". In the Page panel on the right,
   under **Template**, choose **Home — Beau & Co.** Publish.
2. **Settings → Reading** → "Your homepage displays" → **A static page** →
   set Homepage to the page you just made.
3. **Pages → Add New** again. Title it "Bloom Bus" (slug will auto-fill to
   `bloom`). Under **Template**, choose **Bloom Bus**. Publish.
4. **Settings → Permalinks** → click **Save Changes** once (no need to
   change anything) — this flushes WordPress's URL rules so `/bloom/` and
   the in-page section links (`#work`, `#book`, etc.) resolve correctly.
5. Visit the temporary URL and click through both pages before moving on.

## 4. Behold (Instagram widget on the Bloom page)

Log into your Behold dashboard → the feed for this site → add your real
domain (`beauco.ca`, and `www.beauco.ca` if you use that) to the allowed
domains list. Until you do this the widget area on `/bloom/` will render
empty — that's expected on the temporary host URL too.

## 5. Point the domain at the new host

This is the part that actually takes the site live, and it's where a typo
causes downtime — go slow.

**If the domain is registered through Wix:**
Wix domains can either stay registered at Wix while you point them
elsewhere (via DNS records), or be transferred out entirely. You don't
need to transfer registrars to move hosting — simpler is to keep the
domain at Wix and just change its DNS:
1. In Wix → Domains → your domain → **DNS Records** (or "Advanced" /
   "Manage DNS").
2. Your new WordPress host will give you either (a) an **A record** IP
   address to point `@` (root domain) at, plus a **CNAME** for `www`, or
   (b) a full set of **nameservers** to switch to. Use whichever your host
   tells you to use — check their "connect a domain" or "point DNS" docs.
3. Remove any existing Wix-pointing A/CNAME records for the root and `www`
   before adding the new ones, so they don't conflict.

**If the domain is registered elsewhere (Namecheap, GoDaddy, etc.) and just
points at Wix:**
1. Log into that registrar, not Wix.
2. Find DNS management for the domain.
3. Same as above: replace the existing A/CNAME records (or nameservers)
   with what your new WordPress host provides.

**Either way:**
- DNS changes can take anywhere from a few minutes to ~48 hours to
  propagate everywhere, though it's usually under an hour.
- Once it propagates, your host should auto-provision an SSL certificate
  (Let's Encrypt, typically automatic on modern hosts) — give it a little
  time after DNS resolves, then confirm `https://beauco.ca` loads padlocked.
- Don't cancel/close the Wix site immediately. Keep it (even on Wix's free
  tier if that's an option) for a week or two as a fallback until you've
  confirmed the new site is fully working and DNS has propagated
  everywhere.

## 6. After cutover

- Update Facebook/LinkedIn footer links (currently `#` placeholders) —
  edit the `href="#"` values in `template-home.php` /
  `template-bloom.php`.
- Swap in the four outstanding photos (Kerri's portrait, two polaroid
  shots, the bus-interior shot) — see `readme.txt` in the theme folder for
  exactly how.
- Consider setting up a real SMTP/transactional-mail plugin (e.g. WP Mail
  SMTP) if you ever add a contact form — plain WordPress mail delivery is
  unreliable on most hosts.
