<?php
/**
 * Template Name: Bloom Bus
 *
 * Assign this template to a Page (e.g. slug "bloom") from the Page
 * Attributes panel in the block editor.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>Bloom Bus &mdash; Beau &amp; Co.</title>
<meta name="description" content="Bloom is Beau & Co.'s community initiative. Join a Bloom adventure, or book the 12-seat Bloom Bus for one of your own.">
<?php wp_head(); ?>
</head>
<body <?php body_class( 'bloom-page' ); ?>>

<header class="bloom-header">
  <div class="container">
    <div class="bloom-header-left">
      <a href="<?php echo esc_url( beauco_template_page_url( 'template-home.php', '/' ) ); ?>" class="bloom-back-link">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M19 12H5M11 6l-6 6 6 6"></path></svg>
        Beau &amp; Co.
      </a>
      <a href="#top">
        <img src="<?php echo beauco_image( 'p01.png' ); ?>" alt="Bloom Bus">
      </a>
    </div>
    <nav class="bloom-nav">
      <a href="#ride">The Ride</a>
      <a href="#book">Book The Bus</a>
      <a href="#next">Follow Along</a>
      <a href="#story">Our Story</a>
    </nav>
    <div>
      <a href="#book" class="btn bloom-btn-navy">Book The Bus</a>
    </div>
  </div>
</header>

<main id="top">

  <section class="bloom-hero">
    <div class="bloom-hero-media">
      <img src="<?php echo beauco_image( 'hero.jpg' ); ?>" alt="The Bloom Bus">
    </div>
    <div class="bloom-hero-overlay"></div>
    <div class="bloom-hero-scrim"></div>
    <div class="bloom-hero-copy">
      <div class="container">
        <span class="bloom-hero-pill">A Beau &amp; Co. community initiative</span>
        <h1>Get on the bus.<br>Go somewhere good.</h1>
        <p>Join a Bloom adventure, or book the bus for one of your own.</p>
        <div class="bloom-hero-actions">
          <a href="#book" class="btn bloom-btn-filled">Ride With Us <?php beauco_arrow_icon(); ?></a>
          <a href="#book" class="btn bloom-btn-outline-white">Book The Bus <?php beauco_arrow_icon(); ?></a>
        </div>
      </div>
    </div>
  </section>

  <section class="bloom-ride" id="ride">
    <div class="container">
      <div class="bloom-ride-intro">
        <h2>The ride is part<br>of the experience.</h2>
        <div class="bloom-ride-copy">
          <p>Music on. Snacks packed. Good people beside you.</p>
          <p>The Bloom Bus turns getting there into part of the story. We use it for our own adventures, and you can book it for yours.</p>
        </div>
      </div>
      <div class="bloom-polaroids">
        <div class="polaroid polaroid--1">
          <img src="<?php echo beauco_image( 'p03.jpg' ); ?>" alt="Boarding the bus">
        </div>
        <div class="polaroid polaroid--2">
          <img src="<?php echo beauco_image( 'p04.jpg' ); ?>" alt="On board, pink light">
        </div>
        <div class="polaroid polaroid--3">
          <img src="<?php echo beauco_image( 'p05.jpg' ); ?>" alt="In front of the bus">
        </div>
        <div class="polaroid polaroid--4">
          <?php beauco_photo_placeholder( 'snacks, music, the aisle' ); ?>
        </div>
        <div class="polaroid polaroid--5">
          <?php beauco_photo_placeholder( 'arriving somewhere good' ); ?>
        </div>
      </div>
    </div>
  </section>

  <section class="bloom-paths">
    <div class="bloom-path bloom-path--light">
      <div class="bloom-path-photo">
        <img src="<?php echo beauco_image( 'p06.jpg' ); ?>" alt="Guests on a Bloom adventure">
      </div>
      <h3>Come with us.</h3>
      <p>We find the good stuff. You get on the bus. Dance parties, retreats, concerts, wellness experiences, day trips and whatever else catches our attention.</p>
      <a href="#next" class="btn bloom-btn-outline-navy">See Bloom Adventures <?php beauco_arrow_icon(); ?></a>
    </div>
    <div class="bloom-path bloom-path--accent">
      <div class="bloom-path-photo">
        <img src="<?php echo beauco_image( 'p07.jpg' ); ?>" alt="The bus in the city at dusk">
      </div>
      <h3>Make it yours.</h3>
      <p>Got somewhere to go? Book the Bloom Bus for weddings, wine tours, parties, family adventures, concerts, retreats, corporate outings and private events.</p>
      <a href="#book" class="btn bloom-btn-white">Book The Bus <?php beauco_arrow_icon(); ?></a>
    </div>
  </section>

  <section class="bloom-alone">
    <div class="container">
      <div class="bloom-alone-copy">
        <h2>Come alone.<br><span class="accent">Don&rsquo;t arrive alone.</span></h2>
        <p><strong>Bloom is about getting people together.</strong> That&rsquo;s it.</p>
      </div>
      <div class="bloom-alone-figure">
        <img src="<?php echo beauco_image( 'p08.jpg' ); ?>" alt="Getting people together on the Bloom Bus">
      </div>
    </div>
  </section>

  <section class="bloom-book" id="book">
    <div class="container">
      <div class="bloom-book-intro">
        <span class="eyebrow">Book the bus</span>
        <h2>Where are we going?</h2>
      </div>
      <div class="bloom-tiles">
        <div class="bloom-tile bloom-tile--1">
          <img src="<?php echo beauco_image( 'p10.jpg' ); ?>" alt="Private adventures">
          <div class="bloom-tile-gradient"></div>
          <div class="bloom-tile-copy">
            <span class="num">01</span>
            <h4>Private Adventures</h4>
            <p>Weddings, birthdays, concerts, girls&rsquo; trips, family days and celebrations.</p>
          </div>
        </div>
        <div class="bloom-tile bloom-tile--2">
          <?php beauco_photo_placeholder( 'inside the bus', true ); ?>
          <div class="bloom-tile-gradient"></div>
          <div class="bloom-tile-copy">
            <span class="num">02</span>
            <h4>Events + Venues</h4>
            <p>Make transportation part of your guest experience.</p>
          </div>
        </div>
        <div class="bloom-tile bloom-tile--3">
          <img src="<?php echo beauco_image( 'corporate.jpg' ); ?>" alt="Corporate and community">
          <div class="bloom-tile-gradient"></div>
          <div class="bloom-tile-copy">
            <span class="num">03</span>
            <h4>Corporate + Community</h4>
            <p>Team outings, retreats, conferences and something different from another dinner.</p>
          </div>
        </div>
      </div>
      <div class="bloom-book-cta">
        <span class="eyebrow">Something else in mind?</span>
        <h3>Good. We like unusual ideas.</h3>
        <a href="mailto:kerri@beauco.ca" class="btn bloom-btn-filled">Tell Us Where You Want To Go <?php beauco_arrow_icon(); ?></a>
      </div>
    </div>
  </section>

  <section class="bloom-onboard">
    <div class="container">
      <div class="bloom-onboard-intro">
        <span class="eyebrow">On board</span>
        <h2>What the Bloom Bus feels like.</h2>
      </div>
      <div class="bloom-film-grid">
        <div class="bloom-film-tile">
          <img src="<?php echo beauco_image( 'p11.jpg' ); ?>" alt="Good music">
          <div class="bloom-film-tile-gradient"></div>
          <span>Good music.</span>
        </div>
        <div class="bloom-film-tile">
          <img src="<?php echo beauco_image( 'p12.jpg' ); ?>" alt="Good snacks">
          <div class="bloom-film-tile-gradient"></div>
          <span>Good snacks.</span>
        </div>
        <div class="bloom-film-tile">
          <img src="<?php echo beauco_image( 'p13.jpg' ); ?>" alt="New people, old friends">
          <div class="bloom-film-tile-gradient"></div>
          <span>New people.<br>Old friends.</span>
        </div>
        <div class="bloom-film-tile">
          <img src="<?php echo beauco_image( 'p07.jpg' ); ?>" alt="No parking, no designated driver">
          <div class="bloom-film-tile-gradient"></div>
          <span>No parking.<br>No designated driver.</span>
        </div>
      </div>
      <div class="bloom-onboard-close">
        <div class="line1">You just get on.</div>
        <div class="line2">We take it from there.</div>
      </div>
    </div>
  </section>

  <section class="bloom-instagram" id="next">
    <div class="container">
      <div class="bloom-instagram-head">
        <div>
          <span class="eyebrow">Follow along</span>
          <h2>Adventures get posted here first.</h2>
        </div>
        <a href="https://www.instagram.com/kerri_beauco/" target="_blank" rel="noopener" class="bloom-instagram-link">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5"></rect><circle cx="12" cy="12" r="4"></circle><circle cx="17.5" cy="6.5" r="1.2" fill="currentColor" stroke="none"></circle></svg>
          @kerri_beauco
        </a>
      </div>
      <behold-widget feed-id="gWGcfVYWdDdkl80JKfxG" style="display:block"></behold-widget>
    </div>
  </section>

  <section class="bloom-story" id="story">
    <div class="container">
      <div class="bloom-story-heading">
        <h2>How we got here</h2>
      </div>
      <div class="bloom-story-row">
        <div class="bloom-story-card">
          <div class="photo"><img src="<?php echo beauco_image( 'p16.jpg' ); ?>" alt="Movement"></div>
          <div class="label">Movement</div>
        </div>
        <div class="bloom-story-arrow">&rarr;</div>
        <div class="bloom-story-card">
          <div class="photo"><img src="<?php echo beauco_image( 'p07.jpg' ); ?>" alt="Road trips"></div>
          <div class="label">Road trips</div>
        </div>
        <div class="bloom-story-arrow">&rarr;</div>
        <div class="bloom-story-card">
          <img src="<?php echo beauco_image( 'kerri-bus.jpg' ); ?>" alt="The Bloom Bus">
          <div class="label">The bus</div>
        </div>
      </div>
      <div class="bloom-story-copy">
        <p>Bloom started with movement &mdash; small gatherings, music, dancing, women getting out of their heads and back into themselves. Then came the road trips. Then we realized something: half the magic was happening on the way there. So we bought a bus.</p>
      </div>
    </div>
  </section>

  <section class="bloom-why">
    <div class="container">
      <h2>Why does a marketing<br>company own a bus?</h2>
      <p>Because people do their best work when they have lives that make them feel alive.</p>
      <p>Move. Connect. Play. Explore. Meet people. Try things. And apparently, we needed a bus.</p>
      <div class="bloom-why-figure">
        <img src="<?php echo beauco_image( 'bus-side.png' ); ?>" alt="The Bloom Bus">
      </div>
      <div class="bloom-why-credit">
        <span>A community initiative by</span>
        <img src="<?php echo beauco_image( 'p18.png' ); ?>" alt="Beau &amp; Co. Marketing">
      </div>
    </div>
  </section>

  <section class="bloom-cta">
    <div class="container">
      <h2>So, where are<br>we going?</h2>
      <div class="bloom-cta-actions">
        <a href="#book" class="btn bloom-btn-white">Join An Adventure <?php beauco_arrow_icon(); ?></a>
        <a href="mailto:kerri@beauco.ca" class="btn bloom-btn-outline-white">Book The Bloom Bus <?php beauco_arrow_icon(); ?></a>
      </div>
      <div class="bloom-cta-partner">Hosting an event or venue? <a href="mailto:kerri@beauco.ca">Partner with Bloom &rarr;</a></div>
    </div>
  </section>

</main>

<footer class="bloom-footer">
  <div class="container">
    <div class="bloom-footer-grid">
      <div class="bloom-footer-logo">
        <img src="<?php echo beauco_image( 'p01.png' ); ?>" alt="Bloom Bus">
      </div>
      <div>
        <h4>Explore</h4>
        <a href="#ride">The Ride</a>
        <a href="#book">Book The Bus</a>
        <a href="#next">Follow Along</a>
        <a href="#story">Our Story</a>
      </div>
      <div>
        <h4>Social</h4>
        <a href="https://www.instagram.com/kerri_beauco/" target="_blank" rel="noopener">Instagram</a>
        <a href="https://www.facebook.com/kerri.beaulieu" target="_blank" rel="noopener">Facebook</a>
      </div>
      <div>
        <h4>Contact</h4>
        <a href="mailto:kerri@beauco.ca">kerri@beauco.ca</a>
        <a href="tel:+14168340444">416.834.0444</a>
        <span>Hamilton, ON</span>
      </div>
    </div>
    <div class="bloom-footer-bottom">
      <span>&copy; <?php echo esc_html( date( 'Y' ) ); ?> Bloom Bus &middot; a Beau &amp; Co. community initiative</span>
      <span>Site in progress &middot; page draft</span>
    </div>
  </div>
</footer>

<?php wp_footer(); ?>
</body>
</html>
