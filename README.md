# related-selector

Class used for implementing [Related ORM](https://www.npmjs.com/package/ee-orm) selector extensions

[![npm](https://img.shields.io/npm/dm/related-selector.svg?style=flat-square)](https://www.npmjs.com/package/related-selector)
[![Travis](https://img.shields.io/travis/eventEmitter/related-selector.svg?style=flat-square)](https://travis-ci.org/eventEmitter/related-selector)
[![node](https://img.shields.io/node/v/related-selector.svg?style=flat-square)](https://nodejs.org/)


## API

A selector extensions for the [Related ORM](https://www.npmjs.com/package/ee-orm) must implement the class provided by this module. It must call its super `init` method and can and override the `render` method. The selector may also expose a regular [Related ORM Extension](https://www.npmjs.com/package/ee-orm-extension) so it can modify all parts of a query at any time.


