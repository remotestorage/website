---
title: Developer portal
parent: Wiki
---

This page was moved from the old wiki and is in the process of being revised.

## Core

-   [Documentation](https://remotestoragejs.readthedocs.io/)
-   [GitHub](https://github.com/remotestorage/remotestorage.js/)
-   [npm package](https://www.npmjs.com/package/remotestoragejs)
-   [Adding a new storage back-end](/RemoteStorage.js:Adding_a_new_storage_back-end "RemoteStorage.js:Adding a new storage back-end")

# Tips and Considerations

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

## OAuth

### Client ID

Due to there being no client registration for OAuth apps on the Open
Web, most remoteStorage servers currently require the `client_id`
parameter to be the same base URL as the `redirect_uri`.

## Private browsing

remoteStorage.js supports Private/Incognito browsing mode in modern
browsers. However, depending on browser support it cannot use all or any
local [Web Storage](https://www.w3.org/TR/webstorage/) backends.

### Safari

IndexedDB and localStorage are stubbed but not functional in Private
windows (in version 9.1). RS.js stores all data in memory, so it is lost
when connecting a remote storage (except for the WebFinger discovery
data, which is transported via the OAuth `state` parameter).

**Caveat:** do not get fooled by Safari's Web Inspector. It displays the
localStorage content for the origin, but not IndexedDB.
