## 0.10.0 (11.02.17)
*  Add support for unit and integration tests with Mocha & Chai
*  Added example unit and integration tests

## 0.9.1 (25.01.17)
*  Extract paths in webpack config to separate file, share values between scripts
*  Move all config files (sans postcss config) files to package.json or /config folder

## 0.9.0 (14.01.17)
*  Use extract-text-webpack-plugin to extract all css to separate CSS bundle
*  Add hashes to generated bundle filenames in prod
*  Disable service worker in dev environment, remove from dev config
*  Upgrade to webpack 2.2.0-rc.4

## 0.8.0 (12.01.17)
*  Integrate autoprefixer in webpack dev and prod environments
*  Remove NoErrorsPlugin() from webpack dev configuration
*  Add new 'hostbuild' npm script

## 0.7.0 (08.01.17)
*  Convert application into a Progressive Web Application
*  Add support for service worker, manifest, use offline-plugin for webpack
*  Add favicon support
*  create /public folder which gets bundled with build

## 0.6.1 (07.01.17)
*  Remove deprecated hot reloading entry from webpack dev config
*  Fix proptype validation error for CustomInput

## 0.6.0 (07.01.17)
*  Add eslint using airbnb's config and integrate it with dev environment
*  Update codebase to comply with code style requirements
*  Add support for .jsx file extension

## 0.5.1 (07.01.17)
*  Fix redux example by completing partial action type renaming
*  Update example application to better demonstrate client and server interaction through redux
*  Bump dependency versions

## 0.5.0 (07.01.17)
*  Add production build support
*  Add build and stats script for webpack to generate stats.json 

## 0.4.0 (27.12.16)
*  Add Redux support
*  Add support for thunks through redux-pack
*  Integrate with Redux DevTools chrome plugin
*  Update example to demonstrate async actions and load delays

## 0.3.0 (26.12.16)
*  Add Sass stylesheet support

## 0.2.0 (25.12.16)
*  Replace webpack-dev-server with webpack-dev-middleware and add webpack-hot-middleware
*  Application now serves both API and output files from same port using a single express server
