<?php
/**
 * Template Name: Home — Beau & Co.
 *
 * Assign this template to a Page, then set that Page as the site's static
 * homepage under Settings → Reading.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php echo esc_html( get_the_title() ? get_the_title() . ' — Beau & Co. Marketing' : 'Beau & Co. Marketing' ); ?></title>
<meta name="description" content="Senior marketing leadership that embeds alongside your team. Beau &amp; Co. Marketing, Hamilton, Ontario.">
<?php wp_head(); ?>
</head>
<body <?php body_class( 'bc-page' ); ?>>

<header class="bc-header">
  <div class="container">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>#top" class="logo">
      <img src="<?php echo beauco_image( 'p18.png' ); ?>" alt="Beau &amp; Co. Marketing">
    </a>
    <nav class="bc-nav">
      <a href="<?php echo esc_url( beauco_template_page_url( 'template-about.php', '/about/' ) ); ?>">About Us</a>
      <a href="<?php echo esc_url( beauco_template_page_url( 'template-bloom.php', '/bloom/' ) ); ?>">Bloom Bus</a>
      <a href="mailto:kerri@beauco.ca" class="btn">Let&rsquo;s Talk</a>
    </nav>
  </div>
</header>

<main id="top">

  <section class="bc-hero">
    <div class="container">
      <div>
        <span class="eyebrow">Senior marketing leadership that embeds alongside your team</span>
        <h1>We make<br>work move.</h1>
        <p>Our passion is breathing life back into any project. It&rsquo;s that second set of eyes when you&rsquo;ve lived and breathed it for too long. It&rsquo;s that massive, high-impact project no one wants to tackle. It&rsquo;s that sales team rebuilding the same deck every week, when the tools are already built and sitting there.</p>
        <p>Let us tackle what&rsquo;s been holding your team back. We&rsquo;ll bring structure, clarity, and immediate momentum &mdash; bringing your team along for the ride.</p>
        <a href="mailto:kerri@beauco.ca" class="btn bc-btn-primary">Let&rsquo;s Talk <?php beauco_arrow_icon(); ?></a>
      </div>
      <div class="bc-hero-figure">
        <img src="<?php echo beauco_image( 'kerri-hero.png' ); ?>" alt="Kerri Beaulieu">
      </div>
    </div>
  </section>

  <section class="bc-marquee">
    <div class="bc-marquee-track">
      <?php
      $services = array(
        'Marketing Operations & Enablement',
        'Brand Strategy & Rebrands',
        'Campaign & Product Launches',
        'Client Experience Design',
        'Employee Engagement',
        'Event Planning',
      );
      foreach ( array_merge( $services, $services ) as $service ) {
        echo '<span>' . esc_html( $service ) . '</span>';
      }
      ?>
    </div>
  </section>

  <section class="bc-services" id="work">
    <div class="container">
      <div class="bc-services-intro">
        <h2>Give us<br>your mess.<br>We&rsquo;ll make a<br>plan. <span class="accent">Fast.</span></h2>
        <div class="bc-services-photo">
          <img src="<?php echo beauco_image( 'bc-working.png' ); ?>" alt="Working through a plan together">
        </div>
      </div>
      <div class="bc-services-grid">
        <div>
          <h3>Marketing Operations &amp; Enablement</h3>
          <p>The systems, process, and tools underneath everything else. We audit what you have, fix the workflows, and get teams using what you already pay for.</p>
        </div>
        <div>
          <h3>Brand Strategy &amp; Rebrands</h3>
          <p>Senior strategy, full execution, and the adoption that makes it stick. Repositioning and identity work for established brands, built for adoption.</p>
        </div>
        <div>
          <h3>Campaign &amp; Product Launches</h3>
          <p>Strategy through delivery, fully owned, start to finish. We build the plan, rally the teams, and drive every moving piece to launch day, so nothing slips and execution is flawless.</p>
        </div>
        <div>
          <h3>Client Experience Design</h3>
          <p>From first impression to last, we walk the whole path your customer walks, spotting every gap between teams, until it all feels like one brand.</p>
        </div>
        <div>
          <h3>Employee Engagement</h3>
          <p>Embedded facilitation that gets teams pulling in the same direction, and the follow-through that keeps them there long after the session ends.</p>
        </div>
        <div>
          <h3>Event Planning</h3>
          <p>White-glove, thoughtful, creative events people actually remember. We handle every detail so you can be fully present for the ones that matter.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bc-brands">
    <div class="container">
      <div class="bc-brands-label">The brands I&rsquo;ve had the pleasure to work with</div>
      <div class="bc-brands-row">
        <img src="<?php echo beauco_image( 'w-climatecare2.png' ); ?>" alt="ClimateCare" style="height:34px">
        <img src="<?php echo beauco_image( 'w-moen.png' ); ?>" alt="Moen" style="height:32px">
        <img src="<?php echo beauco_image( 'w-wg3.png' ); ?>" alt="CIBC Wood Gundy" style="height:50px">
        <img src="<?php echo beauco_image( 'w-ipc3.png' ); ?>" alt="Investment Planning Counsel" style="height:48px">
        <img src="<?php echo beauco_image( 'w-counsel2.png' ); ?>" alt="Counsel Portfolio Services" style="height:38px">
      </div>
    </div>
  </section>

  <section class="bc-results">
    <div class="container">
      <div class="bc-results-intro">
        <span class="eyebrow">Twenty-five years of receipts</span>
        <h2>Execution is the superpower.</h2>
      </div>
      <div class="bc-stats">
        <div class="bc-stat">
          <div class="figure">$500M</div>
          <p>Gross sales added in twelve months by refining product positioning and messaging with cross-functional teams.</p>
        </div>
        <div class="bc-stat">
          <div class="figure">$1B&ndash;$4B</div>
          <p>Assets under management grown over five years through product roadmap, brand management and sales support.</p>
        </div>
        <div class="bc-stat">
          <div class="figure">5.7x</div>
          <p>Campaign ROI on an employee incentive program that added $26K in monthly recurring revenue.</p>
        </div>
        <div class="bc-stat">
          <div class="figure">35</div>
          <p>Independent companies carried through a full brand refresh, delivered with no extra budget.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bc-kerri">
    <div class="container">
      <div class="bc-kerri-photo">
        <img src="<?php echo beauco_image( 'kerri-portrait.png' ); ?>" alt="Kerri Beaulieu">
      </div>
      <div>
        <span class="eyebrow">Who you&rsquo;re working with</span>
        <h2>Kerri Beaulieu</h2>
        <div class="bc-kerri-role">Senior Marketing &amp; Communications Leader</div>
        <p class="bio">Twenty-five years building integrated marketing across B2B, consumer services and regulated industries. Brands built from the ground up, teams led through complex rollouts, and growth driven by a balance of strategic planning and hands-on execution.</p>
        <p class="bio">The work runs cross-functionally with sales, operations and executive teams. The approach is collaborative, down-to-earth, and genuinely fun to work with.</p>
        <div class="bc-strengths">
          <div>
            <h3>Relationship Building</h3>
            <p>Making people feel part of the process, which is what gets stronger buy-in.</p>
          </div>
          <div>
            <h3>Project Management</h3>
            <p>Organized, systemized, and stopping at nothing until every objective is met.</p>
          </div>
          <div>
            <h3>Strategic Planning</h3>
            <p>Multichannel programs built to reach the right people and hold their attention.</p>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section class="bc-bloom-band" id="bloom">
    <div class="container">
      <div class="bc-bloom-band-copy">
        <span class="eyebrow">Our community initiative</span>
        <h2>We move ourselves so we can make your work move.</h2>
        <p>Great work starts with people who feel energized, connected and alive. That spirit fuels Bloom, our community initiative bringing people together through movement, music and nourishment. And yes, we have a bus.</p>
        <a href="<?php echo esc_url( beauco_template_page_url( 'template-bloom.php', '/bloom/' ) ); ?>" class="btn bc-btn-primary">Meet Bloom <?php beauco_arrow_icon(); ?></a>
      </div>
      <div class="bc-bloom-band-figure">
        <img src="<?php echo beauco_image( 'bus-side.png' ); ?>" alt="Kerri driving the Bloom Bus">
      </div>
    </div>
  </section>

  <section class="bc-talk" id="talk">
    <div class="container">
      <div>
        <h2>Let&rsquo;s figure out<br>what&rsquo;s in the way.</h2>
        <a href="mailto:kerri@beauco.ca" class="btn bc-btn-primary">Let&rsquo;s Talk <?php beauco_arrow_icon(); ?></a>
      </div>
      <div class="bc-talk-copy">
        <p>We love a good work conversation, and we&rsquo;ll probably ask about your life outside it too. What&rsquo;s the hurdle? What do you actually want for your team? Book 15 minutes and feel a little lighter afterwards.</p>
        <p class="emphasis">If you&rsquo;ve read this far, just book the call. No conversation is too big or too small.</p>
      </div>
    </div>
  </section>

</main>

<?php get_template_part( 'template-parts/footer-beauco' ); ?>

<?php wp_footer(); ?>
</body>
</html>
