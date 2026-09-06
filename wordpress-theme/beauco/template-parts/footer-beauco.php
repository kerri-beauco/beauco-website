<?php
/**
 * Shared footer for the Beau & Co.-branded pages (home + about).
 * The Bloom Bus page has its own navy footer, inline in template-bloom.php.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}
?>
<footer class="bc-footer">
  <div class="container">
    <div class="bc-footer-grid">
      <div class="bc-footer-logo">
        <img src="<?php echo beauco_image( 'p18.png' ); ?>" alt="Beau &amp; Co. Marketing">
      </div>
      <div>
        <h4>Navigation</h4>
        <a href="<?php echo esc_url( home_url( '/' ) ); ?>">Home</a>
        <a href="<?php echo esc_url( beauco_template_page_url( 'template-about.php', '/about/' ) ); ?>">About Us</a>
        <a href="<?php echo esc_url( beauco_template_page_url( 'template-bloom.php', '/bloom/' ) ); ?>">Bloom Bus</a>
      </div>
      <div>
        <h4>Social</h4>
        <a href="https://www.facebook.com/kerri.beaulieu" target="_blank" rel="noopener">Facebook</a>
        <a href="https://www.instagram.com/kerri_beauco/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.linkedin.com/in/kerribeaulieu/" target="_blank" rel="noopener">LinkedIn</a>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="mailto:kerri@beauco.ca">kerri@beauco.ca</a>
        <a href="tel:+14168340444">Tel. 416.834.0444</a>
        <span>Hamilton, ON</span>
      </div>
    </div>
    <div class="bc-footer-bottom">
      <span>&copy; <?php echo esc_html( date( 'Y' ) ); ?> Beau &amp; Co. Marketing</span>
    </div>
  </div>
</footer>
