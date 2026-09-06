<?php
/**
 * Theme setup, asset enqueueing and small helpers for the Beau & Co. theme.
 */

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

define( 'BEAUCO_VERSION', '1.0.0' );

function beauco_setup() {
	add_theme_support( 'title-tag' );
	add_theme_support( 'post-thumbnails' );
	add_theme_support( 'html5', array( 'search-form', 'gallery', 'caption' ) );
}
add_action( 'after_setup_theme', 'beauco_setup' );

function beauco_assets() {
	wp_enqueue_style(
		'beauco-google-fonts',
		'https://fonts.googleapis.com/css2?family=Jost:wght@300;400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap',
		array(),
		null
	);

	wp_enqueue_style( 'beauco-style', get_stylesheet_uri(), array( 'beauco-google-fonts' ), BEAUCO_VERSION );

	// The Behold Instagram widget only needs to load on the Bloom Bus page.
	// `type="module"` scripts are deferred by the browser automatically.
	if ( is_page_template( 'template-bloom.php' ) ) {
		wp_enqueue_script( 'behold-widget', 'https://w.behold.so/widget.js', array(), null, true );
	}
}
add_action( 'wp_enqueue_scripts', 'beauco_assets' );

/**
 * The Behold script must load as a module. WordPress core doesn't expose a
 * `type="module"` option, so add it via the script_loader_tag filter.
 */
function beauco_module_script_tag( $tag, $handle ) {
	if ( 'behold-widget' === $handle ) {
		$tag = str_replace( ' src', ' type="module" src', $tag );
	}
	return $tag;
}
add_filter( 'script_loader_tag', 'beauco_module_script_tag', 10, 2 );

/**
 * Theme image helper: assets/images/{file} inside the theme.
 */
function beauco_image( $file ) {
	return esc_url( get_template_directory_uri() . '/assets/images/' . ltrim( $file, '/' ) );
}

/**
 * Find the permalink of the WordPress Page that has a given page template
 * assigned, so the header/footer nav can link between the two pages
 * regardless of what slugs the pages end up with.
 */
function beauco_template_page_url( $template_file, $fallback_path = '/' ) {
	static $cache = array();

	if ( isset( $cache[ $template_file ] ) ) {
		return $cache[ $template_file ];
	}

	$pages = get_pages();
	foreach ( $pages as $page ) {
		if ( get_page_template_slug( $page->ID ) === $template_file ) {
			$cache[ $template_file ] = get_permalink( $page->ID );
			return $cache[ $template_file ];
		}
	}

	$cache[ $template_file ] = home_url( $fallback_path );
	return $cache[ $template_file ];
}

/**
 * Right-arrow icon used inside most buttons.
 */
function beauco_arrow_icon() {
	echo '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" aria-hidden="true"><path d="M5 12h14M13 6l6 6-6 6"></path></svg>';
}

/**
 * Reusable "photo needed" placeholder, used for design sections where the
 * final photography hasn't been supplied yet. Swap the surrounding <img>
 * back in once a real photo is uploaded to the Media Library.
 */
function beauco_photo_placeholder( $label, $dark = false ) {
	$class = 'photo-placeholder' . ( $dark ? ' photo-placeholder--dark' : '' );
	echo '<div class="' . esc_attr( $class ) . '">';
	echo '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" d="M4 7h3l1.5-2h7L17 7h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1Z"></path><circle cx="12" cy="13" r="3.2"></circle></svg>';
	echo '<span>Photo needed &mdash; ' . esc_html( $label ) . '</span>';
	echo '</div>';
}
