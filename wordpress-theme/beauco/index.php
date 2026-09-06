<?php
/**
 * Generic fallback template.
 *
 * This theme is built around two custom page templates
 * (template-home.php and template-bloom.php). This file only exists
 * because WordPress requires every theme to have an index.php — it's
 * used if a post or an un-templated page is ever created.
 */
?>
<!DOCTYPE html>
<html <?php language_attributes(); ?>>
<head>
<meta charset="<?php bloginfo( 'charset' ); ?>">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title><?php wp_title( '' ); ?></title>
<?php wp_head(); ?>
<style>
  .beauco-fallback { max-width: 720px; margin: 0 auto; padding: 80px 32px; }
  .beauco-fallback h1 { font-family: var(--font-jost); text-transform: uppercase; color: var(--bc-ink); }
  .beauco-fallback .content { color: var(--bc-body); font-size: 17px; }
  .beauco-fallback a.home-link { display: inline-block; margin-top: 24px; color: var(--bc-accent); font-weight: 600; }
</style>
</head>
<body <?php body_class( 'bc-page' ); ?>>
<main class="beauco-fallback">
  <?php if ( have_posts() ) : while ( have_posts() ) : the_post(); ?>
    <h1><?php the_title(); ?></h1>
    <div class="content"><?php the_content(); ?></div>
  <?php endwhile; else : ?>
    <h1>Nothing here</h1>
  <?php endif; ?>
  <a class="home-link" href="<?php echo esc_url( home_url( '/' ) ); ?>">&larr; Back to the homepage</a>
</main>
<?php wp_footer(); ?>
</body>
</html>
