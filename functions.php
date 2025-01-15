<?php

if ( ! defined( '_S_VERSION' ) ) {
	// Replace the version number of the theme on each release.
	define( '_S_VERSION', '1.0.0' );
}

function test_site_setup() {
	
	load_theme_textdomain( 'test-site', get_template_directory() . '/languages' );
	
	add_theme_support( 'title-tag' );

	add_theme_support( 'post-thumbnails' );

	register_nav_menus(
		array(
			'menu-1' => esc_html__( 'Primary', 'test-site' ),
		)
	);

	add_theme_support(
		'html5',
		array(
			'search-form',
			'comment-form',
			'comment-list',
			'gallery',
			'caption',
			'style',
			'script',
		)
	);

}
add_action( 'after_setup_theme', 'test_site_setup' );


/**
 * Enqueue scripts and styles.
 */
function test_site_scripts() {
	wp_enqueue_style( 'test-site-style', get_template_directory_uri() . '/assets/css/main.css', array(), _S_VERSION );
	
	wp_enqueue_script( 'test-site-scripts', get_template_directory_uri() . '/assets/js/main.js', array(), _S_VERSION, true );
	wp_script_add_data( 'test-site-scripts', 'async', true );

	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'test_site_scripts' );

require get_template_directory() . '/inc/template-tags.php';

require get_template_directory() . '/inc/template-functions.php';

