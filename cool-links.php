<?php
/**
 * Plugin Name: Cool Navigation
 * Description: Ajaxify the admin menu
 * Version: 0.1.0
 * Author: Cool Plugins Team
 */

use JetBrains\PhpStorm\NoReturn;

defined('ABSPATH') or die('Hey, you can\t access this file!');

class CoolLinks
{

    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'cool_menu_scripts'));
        add_action('wp_enqueue_scripts', array($this, 'cool_theme_scripts'), 5);
    }

    public function cool_menu_scripts(): void
    {
        wp_enqueue_script('cool-navigation-admin', plugin_dir_url(__FILE__) . 'assets/dist/cool-nav.js', array("wp-util"), '1.0', true);
        wp_enqueue_style('cool-nav-menu', plugin_dir_url(__FILE__) . 'assets/css/styles.css');
    }

    public function cool_theme_scripts(): void
    {
        wp_enqueue_script('cool-navigation-theme', plugin_dir_url(__FILE__) . 'assets/dist/cool-nav-theme.js', array("wp-util"), '1.0', false);
    }
}

new CoolLinks();