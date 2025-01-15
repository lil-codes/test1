<!doctype html>
<html <?php language_attributes(); ?>>

<head>
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<?php wp_head(); ?>
</head>

<body <?php body_class(); ?>>
	<?php wp_body_open(); ?>

	<div class="wrapper">

		<header class="main-header container container_header">

			<div class="logo main-header__logo">
				<a href="<?php echo esc_url( home_url( '/' ) ); ?>" class="main-header__link">
					We
				</a>
			</div>

			<nav id="site-navigation" class="main-navigation main-header__navigation">
				<div class="menu-button">
					<span></span>
					<span></span>
					<span></span>
				</div>
			</nav>

		</header>