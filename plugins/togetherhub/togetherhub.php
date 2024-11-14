<?php
namespace Grav\Plugin;

use Composer\Autoload\ClassLoader;
use Grav\Common\Plugin;
use Grav\Common\Utils;
use Grav\Common\User\Interfaces\UserInterface;
use RocketTheme\Toolbox\Event\Event;

/**
 * Class TogetherhubPlugin
 * @package Grav\Plugin
 */
class TogetherhubPlugin extends Plugin
{
    /**
     * @return array
     *
     * The getSubscribedEvents() gives the core a list of events
     *     that the plugin wants to listen to. The key of each
     *     array section is the event that the plugin listens to
     *     and the value (in the form of an array) contains the
     *     callable (or function) as well as the priority. The
     *     higher the number the higher the priority.
     */
   public static function getSubscribedEvents()
    {
        return [
            'onPluginsInitialized' => ['onPluginsInitialized', 0],
            'onAdminTwigTemplatePaths' => ['onAdminTwigTemplatePaths', 0],
            'onAssetsInitialized' => ['onAssetsInitialized', 0]
        ];
    }

    /**
     * Composer autoload
     *
     * @return ClassLoader
     */
    public function autoload(): ClassLoader
    {
        return require __DIR__ . '/vendor/autoload.php';
    }

    /**
     * Initialize the plugin
     */
    public function onPluginsInitialized(): void
    {
        // Don't proceed if we are in the admin plugin
        if ($this->isAdmin()) {
        }

        // Enable the main events we are interested in
        $this->enable([
            // Put your main events here
        ]);
    }

    public function getAdminRoute()
    {
        return $this->config->get('plugins.admin.route');
    }


    public function onAssetsInitialized()
    {
        if ($this->isAdmin()) {
            $assets = $this->grav['assets'];
            $assets->addJs('plugins://togetherhub/js/togetherjs.js');
            $assets->addcss('plugins://togetherhub/css/togetherjs.css');
        }

    }

    public function onAdminTwigTemplatePaths($event)
    {
        $event['paths'] = array_merge($event['paths'], [__DIR__ . '/admin/templates']);
        return $event;
    }
    
}
