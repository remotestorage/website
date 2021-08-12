---
layout: default
title: Developer portal
parent: Wiki
---

# Protocol

-   [Overview](/Protocol "Protocol")
-   [Latest spec draft](https://tools.ietf.org/html/draft-dejong-remotestorage)

# App Development

-   [Tips and Considerations](/App_Development:_Tips_and_Considerations "App Development: Tips and Considerations")

# remoteStorage.js

[remoteStorage.js](https://github.com/remotestorage/remotestorage.js/) is a JavaScript library that does all the heavy-lifting of connecting remoteStorage accounts, caching, synchronizing and storing user data. It is well-tested in all modern browsers, and also works in Cordova apps and node.js programs.

As the reference client, maintained by the RS core team, it always supports the latest protocol versions (but is reasonably backwards-compatible as well).

## Core

-   [Documentation](https://remotestoragejs.readthedocs.io/)
-   [GitHub](https://github.com/remotestorage/remotestorage.js/)
-   [npm package](https://www.npmjs.com/package/remotestoragejs)
-   [Adding a new storage back-end](/RemoteStorage.js:Adding_a_new_storage_back-end "RemoteStorage.js:Adding a new storage back-end")
-   [Private browsing mode](/RemoteStorage.js:Private_browsing_mode "RemoteStorage.js:Private browsing mode")

## Data modules

-   [Documentation](https://remotestoragejs.readthedocs.io/en/latest/data-modules.html)

## Hosting

### Domains

Apps should always be hosted under their own domain or subdomain, as
opposed to hosting several apps in subdirectory URLs of a common domain.
This is due to the Web's per-origin security model, where things like
Web storage, permissions, etc. are scoped by origin, i.e. by
"domain/host:port".

### HTTPS/TLS

Apps should always be available via HTTPS. HTTP should redirect to the
same URI on HTTPS.

...

## OAuth

### Client ID

Due to there being no client registration for OAuth apps on the Open
Web, most remoteStorage servers currently require the `client_id`
parameter to be the same base URL as the `redirect_uri`.

# Private browsing

remoteStorage.js supports Private/Incognito browsing mode in modern
browsers. However, depending on browser support it cannot use all or any
local [Web Storage](https://www.w3.org/TR/webstorage/) backends.

## Safari

IndexedDB and localStorage are stubbed but not functional in Private
windows (in version 9.1). RS.js stores all data in memory, so it is lost
when connecting a remote storage (except for the WebFinger discovery
data, which is transported via the OAuth `state` parameter).

**Caveat:** do not get fooled by Safari's Web Inspector. It displays the
localStorage content for the origin, but not IndexedDB.

## Chrome

...

## Firefox

...
