<?php
/**
 * Template Name: About Us
 *
 * Assign this template to a Page (e.g. slug "about").
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>About Us &mdash; Beau &amp; Co. Marketing</title>
<meta name="description" content="Versatile, people-first, twenty-five years in. Kerri Beaulieu and the Beau &amp; Co. marketing practice, Hamilton, Ontario.">
<?php wp_head(); ?>
</head>
<body <?php body_class( 'bc-page' ); ?>>

<header class="bc-header">
  <div class="container">
    <a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="logo">
      <img src="<?php echo beauco_image( 'p18.png' ); ?>" alt="Beau &amp; Co. Marketing">
    </a>
    <nav class="bc-nav">
      <a href="#top" class="is-current">About Us</a>
      <a href="<?php echo esc_url( beauco_template_page_url( 'template-bloom.php', '/bloom/' ) ); ?>">Bloom Bus</a>
      <a href="mailto:kerri@beauco.ca" class="btn">Let&rsquo;s Talk</a>
    </nav>
  </div>
</header>

<main id="top">

  <section class="about-hero">
    <div class="container">
      <div>
        <span class="eyebrow">About us</span>
        <h1>Versatile.<br>People-first.<br>Twenty-five<br>years in.</h1>
        <p>Beau &amp; Co. is a senior marketing practice built on a simple idea: the strategy is only as good as the execution behind it. We embed alongside your team, take on the work nobody has capacity for, and stay until the objectives are met.</p>
      </div>
      <div class="about-portrait">
        <img src="<?php echo beauco_image( 'kerri-portrait.png' ); ?>" alt="Kerri Beaulieu">
      </div>
    </div>
  </section>

  <section class="about-who">
    <div class="container">
      <div>
        <span class="eyebrow">Who you&rsquo;re working with</span>
        <h2>Kerri Beaulieu</h2>
        <div class="about-who-role">Senior Marketing &amp; Communications Leader</div>
      </div>
      <div>
        <p>Twenty-five years developing and executing integrated marketing strategies across B2B, consumer services and regulated industries. A track record of leading high-performing teams, building brands from the ground up, and driving growth through a balance of strategic planning and hands-on execution.</p>
        <p>The work runs cross-functionally with sales, operations and executive teams, aligning marketing effort with business goals. It thrives in entrepreneurial environments and complex rollouts, including a brand refresh across 35 independent businesses, with deep understanding of trade sectors like HVAC and plumbing.</p>
        <p class="emphasis">Collaborative, down-to-earth, and genuinely fun to work with.</p>
      </div>
    </div>
  </section>

  <section class="about-strengths">
    <div class="container">
      <h2>What we bring<br>to the table.</h2>
      <div class="about-strengths-grid">
        <div>
          <h3>Relationship Building &amp; Collaboration</h3>
          <p>Expert at building and leveraging key relationships, learned through years of cross-functional collaboration. A stakeholder management group stood up quickly while leading a large-scale internal intranet overhaul. Make people feel part of the process, get stronger buy-in.</p>
        </div>
        <div>
          <h3>Project Management</h3>
          <p>Execution is my superpower. I thrive on launching products, programs and special projects. I am organized, systemized and stop at nothing until all objectives are met. Furthermore, I love a good deadline, and you won&rsquo;t see me missing any of them.</p>
        </div>
        <div>
          <h3>Strategic Marketing Planning</h3>
          <p>Comprehensive strategic marketing initiatives, using a multichannel approach across email campaigns, targeted newsletters, social content calendars, programmatic ad placements and integrated SEO/SEM to maximize reach and engagement.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="about-career">
    <div class="container">
      <div class="about-career-intro">
        <span class="eyebrow">The road here</span>
        <h2>Where the work was done.</h2>
      </div>
      <div class="about-career-table">
        <div class="about-career-row">
          <div>
            <h3>Channel Marketing Manager</h3>
            <div class="about-career-org">Moen Canada &middot; Oakville, ON</div>
            <div class="about-career-dates">2024 &ndash; 2026</div>
          </div>
          <p>Wholesale channel marketing across multiple Strategic Business Units, working with Sales, Product Marketing and Global Brand Management on go-to-market strategy for new product launches. Launched the 2025 literature suite: the national product catalogue, a highly designed style guide, and a new wholesale-exclusive brochure. Ran a new merchandising program end to end &mdash; RFP, vendor selection, prototyping, and going directly into the marketplace &mdash; delivering a more showroom-ready Gallery wall at approximately 45% cost savings.</p>
        </div>
        <div class="about-career-row">
          <div>
            <h3>Marketing Manager</h3>
            <div class="about-career-org">ClimateCare Co-operative &middot; Burlington, ON</div>
            <div class="about-career-dates">2018 &ndash; 2024</div>
          </div>
          <p>Integrated marketing and communications for a co-operative of 35 independent heating and air conditioning companies across Ontario, on a $450K annual budget. Cut $100K a year in operating cost by bringing key functions in-house, delivered a full brand refresh with no extra budget, and added $26K in monthly recurring revenue through the &ldquo;Just Offer It&rdquo; employee incentive program at 5.7x ROI.</p>
        </div>
        <div class="about-career-row">
          <div>
            <h3>Senior Marketing Manager</h3>
            <div class="about-career-org">Investment Planning Counsel &middot; Mississauga, ON</div>
            <div class="about-career-dates">2013 &ndash; 2018</div>
          </div>
          <p>Product marketing for a high-net-worth asset platform, adding $500 million in gross sales over twelve months by refining positioning and messaging with cross-functional teams. Supported 500 financial advisors, rebuilt a fragmented advisor marketing group, and led a corporate-wide digital overhaul: three public websites and a 3,000-user intranet, with 89% of advisors registered within two weeks.</p>
        </div>
        <div class="about-career-row">
          <div>
            <h3>Product Manager</h3>
            <div class="about-career-org">Counsel Portfolio Services &middot; Mississauga, ON</div>
            <div class="about-career-dates">2008 &ndash; 2013</div>
          </div>
          <p>Grew assets under management from $1 billion to $4 billion in five years through product roadmap, brand management and sales support. Led go-to-market for 12 new Corporate Class funds ($27 million in six months) and three Income Funds ($190 million in eighteen months), and orchestrated ten cross-functional product launches spanning eight departments.</p>
        </div>
        <div class="about-career-row">
          <div>
            <h3>Associate Product Manager</h3>
            <div class="about-career-org">CIBC Wood Gundy &middot; Toronto, ON</div>
            <div class="about-career-dates">2005 &ndash; 2007</div>
          </div>
          <p>Product feature releases, rebrand collateral, and an approval process with a tracking system built for audit. Grew participation in the consulting service by 120% by directly recruiting Investment Advisors, taking program assets to an all-time high of $9B. Won the &ldquo;Aspire Higher&rdquo; award for client service.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="about-credentials">
    <div class="container">
      <div>
        <h3>Education</h3>
        <div class="about-degree">
          <div class="about-degree-name">Post Graduate Diploma, International Business</div>
          <div class="about-degree-school">Sheridan College</div>
        </div>
        <div class="about-degree">
          <div class="about-degree-name">Bachelor of Arts, Human Geography</div>
          <div class="about-degree-school">McMaster University</div>
        </div>
      </div>
      <div>
        <h3>Continuing education</h3>
        <div class="about-courses">
          Strategic Brand Management &amp; Product Marketing, Schulich SEEC<br>
          E-Marketing, Strategies for Success, Schulich SEEC<br>
          Digital Marketing Strategy, CMA<br>
          Content Strategy, CMA<br>
          Presentation Skills that Sell, CMA<br>
          Leadership Training Program, Fred Pryor<br>
          Canadian Securities Course, Canadian Securities Institute
        </div>
      </div>
      <div>
        <h3>Skills</h3>
        <div class="about-skills">
          <span>Brand Management</span>
          <span>Go-to-Market Strategy</span>
          <span>Positioning &amp; Messaging</span>
          <span>Product Launches</span>
          <span>Content Strategy</span>
          <span>Digital Marketing</span>
          <span>Event Planning</span>
          <span>Budget Management</span>
          <span>Agency Relations</span>
          <span>Art Direction</span>
          <span>Stakeholder Management</span>
        </div>
      </div>
    </div>
  </section>

  <section class="about-beyond">
    <div class="container">
      <div class="about-beyond-intro">
        <span class="eyebrow">Beyond the office</span>
        <h2>The rest of it.</h2>
      </div>
      <div class="about-beyond-grid">
        <div>
          <h3>Mom</h3>
          <p>Teens and chickens.</p>
        </div>
        <div>
          <h3>Yoga</h3>
          <p>I&rsquo;m super zen, at least on the mat.</p>
        </div>
        <div>
          <h3>Ecstatic dance</h3>
          <p>Yes, it&rsquo;s a thing.</p>
        </div>
        <div>
          <h3>Upcycling furniture</h3>
          <p>My house is very colourful.</p>
        </div>
        <div>
          <h3>Travel</h3>
          <p>I&rsquo;ve made it to 30 countries so far.</p>
        </div>
        <div>
          <h3>Hiking</h3>
          <p>I reached 17K feet on Mt. Kenya, barely.</p>
        </div>
      </div>
    </div>
  </section>

  <section class="bc-bloom-band">
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

  <section class="bc-talk">
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
