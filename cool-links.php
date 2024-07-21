<?php
/**
 * Plugin Name: Cool Navigation
 * Description: Ajaxify the admin menu
 * Version: 0.1.0
 * Author: Cool Plugins Team
 */

use JetBrains\PhpStorm\NoReturn;

defined('ABSPATH') or die('No script kiddies please!');

class CoolLinks
{

    public function __construct()
    {
        add_action('admin_enqueue_scripts', array($this, 'ajax_admin_menu_scripts'));
        add_action('wp_ajax_refresh_admin_menu', array($this, 'load_admin_menu_callback'));
        add_action('wp_ajax_wp_admin_ajax_form_submit',  array($this,'handle_admin_ajax_form_submit'));
    }

    public function ajax_admin_menu_scripts(): void
    {
        wp_enqueue_script('cool-navigation', plugin_dir_url(__FILE__) . 'assets/dist/cool-nav.js', array(), '1.0', true);

        wp_localize_script('cool-navigation', 'wpAjaxFormsData', array(
            'ajaxurl' => admin_url('admin-ajax.php'),
            'nonce' => wp_create_nonce('wp_admin_ajax_forms_nonce')
        ));
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

    public function handle_admin_ajax_form_submit(): void
    {
        check_ajax_referer('wp_admin_ajax_forms_nonce', 'nonce');

        if (!current_user_can('manage_options')) {
            wp_send_json_error(array('message' => 'Permissions insuffisantes.'));
        }

        // Traiter la soumission du formulaire ici
        $post_data = $_POST;
        unset($post_data['action']);
        unset($post_data['nonce']);

        // Effectuer les actions nécessaires avec $post_data
        // Par exemple, mettre à jour des options, des posts, etc.

        // Simuler une redirection ou un rafraîchissement de contenu
        wp_send_json_success(array(
            'redirect' => admin_url('options-general.php'),
            'message' => 'Formulaire traité avec succès.'
        ));
    }
}

new CoolLinks();