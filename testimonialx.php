<?php
/**
 * Plugin Name:       TestimonialX - Elevate Your Website's Credibility with 15+ Stunning Testimonial Styles
 * Description:       TestimonialX is a powerful Gutenberg Block Plugin that revolutionizes the way you showcase testimonials on your website. With its collection of 15+ professionally designed and fully customizable styles, TestimonialX enables you to effortlessly create captivating testimonial blocks that captivate your visitors and boost your brand's credibility.
 * Requires at least: 5.8
 * Requires PHP:      7.0
 * Version:           1.0.1
 * Author:            ultraDevs
 * Author URI:        https://ultradevs.com
 * License:           GPL-2.0-or-later
 * License URI:       https://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain:       testimonialx-block
 *
 * @package UDtestimonial
 */

if (! defined('ABSPATH') ) {
	exit; // Exit if accessed directly.
}

if (! function_exists('tb_fs') ) {
	// Create a helper function for easy SDK access.
	function tb_fs()
	{
		global $tb_fs;

		if (! isset($tb_fs) ) {
			// Include Freemius SDK.
			include_once dirname(__FILE__) . '/freemius/start.php';

			$tb_fs = fs_dynamic_init(
				array(
				'id'                  => '16288',
				'slug'                => 'testimonialx-block',
				'premium_slug'        => 'easy-dropbox-integration-premium',
				'type'                => 'plugin',
				'public_key'          => 'pk_7821dcc1d7f663cf6b57fb30972c2',
				'is_premium'          => false,
				'has_addons'          => false,
				'has_paid_plans'      => false,
				'menu'                => array(
					'first-path'     => 'plugins.php',
				),
				)
			);
		}

		return $tb_fs;
	}

	// Init Freemius.
	tb_fs();
	// Signal that SDK was initiated.
	do_action('tb_fs_loaded');
}

function ultradevs_block_testimonial_block_init()
{
	register_block_type(__DIR__ . '/build/blocks/testimonial');

	// Add localized data.
	$localized_data = array(
	'isPro' => false
	);
	wp_localize_script('ultradevs-testimonial-editor-script', 'udTestimonialBlock', $localized_data);
}
add_action('init', 'ultradevs_block_testimonial_block_init');


// Create Block Category.
function ud_testimonial_custom_block_category( $categories )
{
	return array_merge(
		array(
		array(
				'slug'  => 'testimonial',
				'title' => __('Testimonial', 'testimonialx-block'),
		),
		),
		$categories
	);
}
global $wp_version;
add_filter('block_categories' . ( version_compare($wp_version, '5.8', '>=') ? '_all' : '' ), 'ud_testimonial_custom_block_category', 99);
