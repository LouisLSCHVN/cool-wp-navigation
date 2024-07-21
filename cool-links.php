<?php
/**
 * Plugin Name: Cool Navigation
 * Description: Ajaxify the admin menu
 * Version: 0.1.0
 * Author: Cool Plugins Team
 */

/** TODO:
 * Faire en sorte que le code dans custom admin ajax soit plus propre (ajouter try catch, refactor)
 * Faire en sorte que ce soit que des liens dans le wp-admim (trouver un moyen)
 * Faire une classe pour tout ça et ajouter la même fonctionnalité pour le site en lui même c'est à dire pour le thème
 */

use JetBrains\PhpStorm\NoReturn;

defined('ABSPATH') or die('No script kiddies please!');

class CoolLinks
{

    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'ajax_admin_menu_scripts'));
        add_action('wp_ajax_refresh_admin_menu', array($this, 'load_admin_menu_callback'));
    }

    public function ajax_admin_menu_scripts(): void
    {
        wp_enqueue_script('cool-navigation', plugin_dir_url(__FILE__) . 'assets/dist/cool-nav.js', array(), '1.0', true);

        wp_localize_script('ajax-admin-menu', 'ajaxobject', array('ajax_url' => admin_url('admin-ajax.php')));
        wp_enqueue_style('ajax-admin-menu', plugin_dir_url(__FILE__) . 'assets/css/styles.css');
    }

    #[NoReturn] public function load_admin_menu_callback(): void
    {
        ob_start();
        require_once ABSPATH . 'wp-admin/menu-header.php';
        $menu = ob_get_clean();
        echo $menu;
        wp_die();
    }
}

new CoolLinks();