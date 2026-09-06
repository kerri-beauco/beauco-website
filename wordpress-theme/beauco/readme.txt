=== Beau & Co. ===
Requires at least: 6.0
Tested up to: 6.7
Requires PHP: 7.4

Custom theme for beauco.ca — the Beau & Co. Marketing homepage, the
About Us page, and the Bloom Bus community-initiative page.

== Setup ==

1. Install and activate the theme (Appearance → Themes → Add New → Upload
   Theme, or unzip into wp-content/themes/).
2. Create a Page, assign it the "Home — Beau & Co." template (Page
   Attributes panel), then go to Settings → Reading and set it as the
   site's static homepage.
3. Create a Page titled "About Us" (slug "about") and assign it the
   "About Us" template.
4. Create a Page titled "Bloom Bus" (slug "bloom") and assign it the
   "Bloom Bus" template.
5. Go to Settings → Permalinks and click Save once (this makes the page
   URLs and in-page section anchors resolve cleanly).
6. In the Behold (behold.so) dashboard, add your live domain to the
   feed's allowed-domains list — the Instagram grid on the Bloom page
   renders nothing until that's done.

The three templates find each other automatically: the nav and footer
links look up whichever Page has the relevant template assigned, so the
slugs above are suggestions, not requirements.

== Content notes ==

- All text content is hard-coded in template-home.php,
  template-about.php and template-bloom.php — this theme intentionally
  does not use the block editor for these pages, to preserve the exact
  typography and spacing from the design. Edit the PHP directly for copy
  changes.
- The Beau & Co. footer is shared between the home and About pages and
  lives in template-parts/footer-beauco.php — edit it once, both pages
  update. The Bloom page has its own navy footer, inline in
  template-bloom.php.
- Photography lives in assets/images/. The drop-*.webp files are
  review-grade exports sized for the boxes they sit in; the Bloom hero
  (drop-bloom-hero.webp) especially should be replaced with a
  full-resolution original before heavy promotion.
