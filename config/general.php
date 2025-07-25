<?php

/**
 * General Configuration
 *
 * All of your system's general configuration settings go in here. You can see a
 * list of the available settings in vendor/craftcms/cms/src/config/GeneralConfig.php.
 *
 * @see \craft\config\GeneralConfig
 */

return [
	// Global settings
	'*' => [
		// Default Week Start Day (0 = Sunday, 1 = Monday...)
		'defaultWeekStartDay' => 1,

		// Whether generated URLs should omit "index.php"
		'omitScriptNameInUrls' => true,

		// Control Panel trigger word
		'cpTrigger' => 'admin',

		// The secure key Craft will use for hashing and encrypting data
		'securityKey' => getenv('SECURITY_KEY'),

		'aliases' => [
			'@baseUrl' => getenv('BASE_URL'),
			'@basePath' => getenv('BASE_PATH'),
			'@assetsBaseUrl' => getenv('BASE_URL') . "/uploads",
			'@assetsBasePath' => getenv('BASE_PATH') . "/uploads",
		],
	],

	// Dev environment settings
	'dev' => [
		// Dev Mode (see https://craftcms.com/guides/what-dev-mode-does)
		'devMode' => true,
	],

	// Staging environment settings
	'staging' => [
		// Set this to `false` to prevent administrative changes from being made on staging
		'allowAdminChanges' => false,
	],

	// Production environment settings
	'production' => [
		// Set this to `false` to prevent administrative changes from being made on production
		'allowAdminChanges' => false,
	],
];
