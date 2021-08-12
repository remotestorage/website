## Basic information

When in doubt, consult the [API
docs](https://remotestorage.github.io/remotestorage.js/files/remotestorage-js.html),
or ask on IRC (\#remotestorage on Freenode), or on [the
forums](https://community.remotestorage.io/).

...

## Get started

### Choose a build

There are a number of different builds available.

#### Standard

Files `remotestorage.js` and `remotestorage.min.js` (minified version).

Contains all components of remotestorage.js for running in a browser.

#### Without local cache

Files `remotestorage-nocache.js` and `remotestorage-nocache.min.js`.

Versions without any caching features included. Use this if you want
your app to write directly to the remote server without caching any data
in the browser’s storage (localStorage or IndexedDB).

*Hint: Even if you "disable" or not enable caching for paths in the
normal build, it will still cache outgoing changes. The only way to make
sure something landed on the server immediately is to use this no-cache
build.*

#### AMD

Files `remotestorage.amd.js` (with cache) and
`remotestorage-nocache.amd.js` (without cache, see
[below](#Without_local_cache "wikilink")).

remoteStorage.js wrapped for use with
[AMD](https://en.wikipedia.org/wiki/Asynchronous_module_definition)
loaders such as [RequireJS](http://requirejs.org/).

### Get remoteStorage.js

#### Bower

`bower install -S remotestorage`

#### npm

`npm install --save remotestoragejs`

For node.js apps, check out the [node.js
howto](https://github.com/remotestorage/remotestorage.js/blob/master/doc/nodejs.md)
for more information.

##### Webpack

If you downloaded the latest release using `npm install
remotestoragejs`, you can use the following line in your code:

``` javascript
require('remotestoragejs/release/stable/remotestorage.amd.js');
// window.RemoteStorage is now available
```

You also need to define a shim for `XMLHttpRequest` such that Webpack
won't be looking for it. In your `webpack.config.js`:

``` javascript
var webpack = require("webpack");
  
module.exports = {
  externals: [
    {xmlhttprequest: "{XMLHttpRequest:XMLHttpRequest}"}
  ],
}
```

We know that this sort of usage is not very aesthetic and are working on
fixing it.

#### Git

` git clone `<https://github.com/remotestorage/remotestorage.js.git>

You can find the release builds in the `release/` dir.

#### Direct Download

The latest stable release files can be downloaded [directly from our
GitHub
repository](https://github.com/remotestorage/remotestorage.js/tree/master/release/stable).

You can download an archive of the whole repository from the [releases
page](https://github.com/remotestorage/remotestorage.js/releases),
unpack it on your computer, and find the release builds in
`release/stable/`.

#### CDN

` `<http://cdnjs.com/libraries/remoteStorage/>

Content Delivery Network (CDN) provided by cdnjs.com.

### Add a data module

The remoteStorage [ protocol](Protocol "wikilink") requires apps to be
authorized for one or more base directories in order to read and write
data. These are called categories, and they provide the scope for both
per-app as well as common data.

The remoteStorage community aims to create standard formats for objects
stored in common categories, in order to make stored data
interchangeable between applications. For example a to-do list app could
access the same task list as a time tracking app. Both would claim
access to the "tasks" category and manipulate "todo" objects in folders
therein.

remoteStorage.js uses per-category [ data
modules](Data_Modules "wikilink"), which provide functionality for
manipulating data within their scope (e.g. "documents", "contacts",
"bookmarks"). You can choose from a variety of common modules that
already exist, or build your own.

#### Using an existing data module

Existing data modules are found in the [modules
repository](https://github.com/remotestorage/modules), under
[`dist/`](https://github.com/remotestorage/modules/dist). Their
documentation can be found in the [modules
docs](https://remotestorage.github.io/modules). *Beware that most common
data modules are still under development.*

If there's no data module that fits your data, you can either extend one
or write your own — and hopefully propose a new common module.

##### Example

This example uses the [bookmarks
module](https://github.com/remotestorage/modules/blob/master/dist/bookmarks.js).
You may find helpful to take a look at the [bookmarks module
docs](http://remotestorage.github.io/modules/files/bookmarks-js.html).

First, we import `remotestorage.js` and our chosen module
`remotestorage-bookmarks.js`.

``` html5
<!-- Require remotestorage.js -->
<script src="remotestorage.js"></script>

<!-- Require the bookmarks module -->
<script src="remotestorage-bookmarks.js"></script>
```

Then, we can store a bookmark.

``` javascript
// Store archive-bookmark

remoteStorage.bookmarks.archive.store({
  url: 'http://jsunconf.eu',
  title: 'JS unconference in Hamburg',
  tags: ['javascript', 'conference']
}).then(
  function(bookmark){
    console.log(bookmark);
  },
  function(err){
    console.log('Error', err)
  },
);
```

Later on, we can request all archive-bookmarks:

``` javascript
// Get all archive-bookmarks

remoteStorage.bookmarks.archive.getAll().then(
  function(bookmarks){
    console.log('Got bookmarks: ', bookmarks);
  },
  function(){
    console.log('Something wrong is not right!')
  },
);
```

#### Writing your own data module

If none of the available fit your data, you can define your own data
module.

##### Choosing a category (or multiple)

remoteStorage data is stored in directories – also known as "categories"
– for which your app requests access (either read-only or full). Data
modules use root directories, i.e. right below `/`. Please choose the
category carefully, regarding the category name to it's content and it's
relation to other data modules.

E.g. For a bookmark managing app, `/bookmarks` would be a GOOD choice of
category, while `/stuff` or `/app` would be BAD.

##### Define a module

The module name defines which root folder it will use, e.g. the
following module named `bookmarks` uses the folder `/bookmarks`. This
does NOT give read/write permissions to the end-script, which should do
it through
[remoteStorage.access.claim](https://remotestorage.github.io/remotestorage.js/files/access-js.html#RemoteStorage.Access.claim).

You can find further information on the docs on
[RemoteStorage.defineModule](https://remotestorage.github.io/remotestorage.js/files/modules-js.html).

There are two helpers, which are instances of
[RemoteStorage.BaseClient](https://remotestorage.github.io/remotestorage.js/files/baseclient-js.html):

:;privateClient

::Helper to read/write to the user's private directories, e.g. `/notes`,
`/tasks`.

:;publicClient

  - 
    
      -   
        Helper to read/write to the user's public directories, e.g.
        `/public/shares`.

Defining a data module:

``` javascript
RemoteStorage.defineModule('bookmarks', // <-- Module name
  function(privateClient, publicClient) {

  // Declare types here

  var bookmarks = {
    // Declare functions here
  }

  // Return and export public functions
  return { exports: bookmarks };
});
```

##### Declare types

For that purpose, RemoteStorage aims to use
[JSON-LD](http://json-ld.org).

RemoteStorage modules use [JSON-LD](http://json-ld.org) to define the
type of data it handles. A first step in that direction, is to add a
`@context` attribute to all JSON data put into remoteStorage. You can
declare a new type with
[declareType()](https://remotestorage.github.io/remotestorage.js/files/baseclient/types-js.html#RemoteStorage.BaseClient.declareType).
Here is a simplified example:

``` javascript
privateClient.declareType('archive-bookmark', {
  "type": "object",
  "properties": {
    "id": {
      "type": "string"
    },
    "url": {
    "type": "string",
    "format": "uri"
    },
    "title": {
      "type": "string"
    },
    "tags": {
      "type": "array",
      "default": []
    }
  },
  "required": [ "id", "title", "url" ]
});
```

##### Declare functions

Now that you have a standard for your data, you can use type-checking
functions to handle it, e.g.
[privateClient.storeObject](https://remotestorage.github.io/remotestorage.js/files/baseclient-js.html#RemoteStorage.BaseClient.storeObject).

Assuming that `bookmarks` is publicly exported, you could define a
public function as below:

``` javascript
var bookmarks = {
  archive: {
    store: function(bookmark) {
      bookmark.id = urlHash(bookmark.url);
      var path = "archive/" + bookmark.id;
      return privateClient.storeObject("archive-bookmark", path, bookmark).
        then(function() {
          console.log(bookmark.id);
          return bookmark;
        });
      }
   }
};
```

#### Use remoteStorage.scope() instead of a data module

You can instantiate a
[BaseClient](https://remotestorage.github.io/remotestorage.js/files/baseclient-js.html)
for a specific path using the
[remoteStorage.scope()](https://remotestorage.github.io/remotestorage.js/files/remotestorage-js.html#RemoteStorage.scope)
function, and then use BaseClient methods directly in your code. This is
meant primarily for development, but might make sense to use in shipped
code in small apps as well.

``` javascript
remoteStorage.access.claim('bookmarks', 'rw');
var baseClient = remoteStorage.scope('/bookmarks/archive/');

baseClient.getListing('/').then(function(listing){
  console.log(listing); // logs the directory listing of '/bookmarks/archive/'
});
```

### Configuring caching

#### Caching strategies

For each subtree, you can set the caching strategy to ‘ALL’, ‘SEEN’
(default), and ‘FLUSH’.

  - ALL  
    Once all outgoing changes have been pushed, sync will start
    retrieving nodes to cache pro-actively. If a local copy exists of
    everything, it will check on each sync whether the ETag of the root
    folder changed, and retrieve remote changes if they exist.
  - SEEN  
    Same as ALL but only for documents and folders that have been either
    read from or written to at least once since connecting to the
    current remote backend, plus their parent/ancestor folders up to the
    root (to make tree-based sync possible).
  - FLUSH  
    Only caches outgoing changes, and forgets them as soon as they have
    been saved to remote successfully.

#### Example

[remoteStorage.Caching](https://remotestorage.github.io/remotestorage.js/files/caching-js.html)
manages caching configuration. Enabling caching for a given path with
strategy 'ALL' is as simple as:

``` javascript
remoteStorage.caching.enable('/bookmarks/archive/');
```

### Adding the connect widget

![Connect widget](widget.png "Connect widget")

The remoteStorage widget is the easiest way to allow your users to
connect to their personal storage server. By default it is part of every
app that uses remoteStorage.js. So every time a user sees the widget,
they know that they can use their own storage with an app. You can
customize the widget's appearance to better match your app's design, of
course. It is as simples as:

``` javascript
remoteStorage.displayWidget();
```

*Hint: The widget should be called only AFTER claiming access for a
category.*

## Cordova

Since version 0.12.0, you can use remoteStorage.js in packaged
[Cordova](https://cordova.apache.org/) apps on a variety of platforms.
Support is built into the library by default, but there are a couple of
extra steps to make it work:

### Install the Cordova [InAppBrowser plugin](https://github.com/apache/cordova-plugin-inappbrowser)

The OAuth dialog for the user will be opened in an in-app-browser window
in your app. Install the plugin like so:

`cordova plugin add cordova-plugin-inappbrowser`

### Configure a redirect URI for your Cordova app

...

`remoteStorage.setCordovaRedirectUri('`<https://app.example.com>`')`

## Tips and Tricks

### Running a local RS server for app development

You can find server programs on the [Servers](Servers "wikilink") page.
*php-remote-storage* is the recommended solution for app development at
the moment.

### Inspecting the local cache

**Firefox:**

First you need to enable the "Storage" tab for your Developer Tools
window:

1.  Open DevTools
2.  Click the gear in the top right corner
3.  Click the checkbox named "Storage" in the list on the left

Now you'll see an additional tab next to your Network tab, where you can
inspect the various Web Storage layers. remoteStorage.js will usually
store data in IndexedDB, but may fall back to localStorage in some
exceptions.

**Chrome/Chromium:**

You can find both localStorage and IndexedDB data in the "Resources" tab
in the Developer Tools window.

### Resetting the local cache

This will clear all data out of your local cache (usually IndexedDB):

``` javascript
 remoteStorage.local.reset()
```

If you're connected to a remote storage, disconnecting will also clear
all caches:

``` javascript
 remoteStorage.disconnect()
```
