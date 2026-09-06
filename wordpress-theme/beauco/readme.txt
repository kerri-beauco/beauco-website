=== Beau & Co. ===
Requires at least: 6.0
Tested up to: 6.7
Requires PHP: 7.4

Custom theme for beauco.ca — the Beau & Co. Marketing homepage and the
Bloom Bus community-initiative page.

== Setup ==

1. Install and activate the theme (Appearance → Themes → Add New → Upload
   Theme, or unzip into wp-content/themes/).
2. Create a Page, assign it the "Home — Beau & Co." template (Page
   Attributes panel), then go to Settings → Reading and set it as the
   site's static homepage.
3. Create a second Page (e.g. titled "Bloom Bus", slug "bloom") and
   assign it the "Bloom Bus" template.
4. Go to Settings → Permalinks and click Save once (this makes the
   /bloom/ URL and in-page section anchors resolve cleanly).
5. In the Behold (behold.so) dashboard, add your live domain to the
   feed's allowed-domains list — the Instagram grid on the Bloom page
   renders nothing until that's done.

== Content notes ==

- All text content is hard-coded in template-home.php and
  template-bloom.php — this theme intentionally does not use the block
  editor for these two pages, to preserve the exact typography/spacing
  from the design. Edit the PHP directly for copy changes.
- Four photos are still outstanding (Kerri's portrait, two polaroid
  shots, and the bus-interior shot) and render as a labelled "Photo
  needed" placeholder. To swap one in: upload the photo to the Media
  Library, copy its file into assets/images/, and replace the matching
  beauco_photo_placeholder(...) call in the template with an <img>
  tag (see the surrounding examples in the same file).
- Facebook and LinkedIn footer links are still "#" placeholders.
