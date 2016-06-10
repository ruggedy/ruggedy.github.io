/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
var map = {
    'angular2-modal': 'vendor/angular2-modal'
};
/** User packages configuration. */
var packages = {
    'angular2-modal': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'index.js'
    },
    'angular2-modal/platform-browser': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'index.js'
    },
    'angular2-modal/plugins/bootstrap': {
        format: 'cjs',
        defaultExtension: 'js',
        main: 'index.js'
    }
};
////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
var barrels = [
    // Angular specific barrels.
    '@angular/core',
    '@angular/common',
    '@angular/compiler',
    '@angular/http',
    '@angular/router',
    '@angular/platform-browser',
    '@angular/platform-browser-dynamic',
    // Thirdparty barrels.
    'rxjs',
    'angular2-modal',
    // App specific barrels.
    'app',
    'app/shared',
    'app/landing',
    'app/header',
    'app/projects',
    'app/skills',
    'app/qualification',
    'app/personal',
    'app/assited-projects',
    'app/assisted-projects',
    'app/folder',
    'app/footer',
];
var cliSystemConfigPackages = {};
barrels.forEach(function (barrelName) {
    cliSystemConfigPackages[barrelName] = { main: 'index' };
});
// Apply the CLI SystemJS configuration.
System.config({
    map: {
        '@angular': 'vendor/@angular',
        'rxjs': 'vendor/rxjs',
        'main': 'main.js',
        'modal': 'vendor/angular2-modal'
    },
    packages: cliSystemConfigPackages
});
// Apply the user's configuration.
System.config({ map: map, packages: packages });
//# sourceMappingURL=system-config.js.map