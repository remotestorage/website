---
title: Protocol
parent: Wiki
---

The remoteStorage protocol is a creative combination of existing protocols and standards (mainly [HTTP](https://en.wikipedia.org/wiki/Hypertext_Transfer_Protocol), [CORS](https://en.wikipedia.org/wiki/Cross-origin_resource_sharing), [Webfinger](https://webfinger.net/), [OAuth 2](http://oauth.net/)). It aims to re-use existing technologies as much as possible, adding just a small layer of standardization on top to facilitate its usage for per-user storage with simple permissions and offline-capable data sync. See [this quick explainer](https://remotestorage.io/#explainer-protocol) for some more info, and the spec itself for details.

## Contents

 \[[hide](#)\] 

-   [1 History](#History)
-   [2 Process](#Process)
-   [3 Versioning](#Versioning)
    -   [3.1 Current versions](#Current_versions)
    -   [3.2 Deprecated versions](#Deprecated_versions)
-   [4 Useful resources](#Useful_resources)

## History

The first draft of the remoteStorage protocol was originally developed by Michiel B. de Jong as part of the [Unhosted](https://unhosted.org) project in 2011 and has been published at a [W3C Community Group](https://www.w3.org/community/unhosted/), which has since been deprecated. Since December 2012, the protocol specification drafts [are published as Internet Drafts at the IETF](https://datatracker.ietf.org/doc/draft-dejong-remotestorage/).

## Process

Every 6 months (max. 185 days) a new draft version is published, incorporating feedback and contributions from developers, providers and users. All discussion and spec development is done in open collaboration on [the public GitHub repository](https://github.com/remotestorage/spec). Everyone is invited to open new GitHub issues and/or pull requests with their questions, feedback, and changes.

## Versioning

**Authors of remoteStorage-enabled apps** are encouraged to use a **recent version of remotestorage.js**, which aims to support each new spec version on the day it is released, at the latest.

**Implementers of remoteStorage servers and clients** are encouraged to always offer support for the **latest three versions of the spec**.

**Storage providers** should aim to expose **the previous version of this spec**, so that app authors have six months to update their apps before they become potentially incompatible.

The latest three versions can be thought of as _new_, _live_, and _old_. When for instance version 03 was published, version 02 moved from _new_ to _live_, and version 01 moved from _live_ to _old_. So during the six months after version k is published, apps should add support for the _new_ version k, while still supporting _live_ version k-1 and _old_ version k-2. Storage providers should aim to switch from _old_ version k-2 to _live_ version k-1 as soon as possible after version k is released.

You can find various formats of all draft content in the [IETF version tracker](https://datatracker.ietf.org/doc/draft-dejong-remotestorage/).

### Current versions

| Version | Status | Published | Breaking changes |
| --- | --- | --- | --- |
| [17](https://tools.ietf.org/html/draft-dejong-remotestorage-17) | New | Jun 2021 | no |
| [16](https://tools.ietf.org/html/draft-dejong-remotestorage-16) | Live | Dec 2020 | no |
| [15](https://tools.ietf.org/html/draft-dejong-remotestorage-15) | Old | Jun 2020 | no |

### Deprecated versions

Please visit the [IETF data tracker](https://datatracker.ietf.org/doc/draft-dejong-remotestorage/) to access previous versions of the spec.

## Useful resources

-   MDN offers [a great collection of articles on all aspects of HTTP](https://developer.mozilla.org/en-US/docs/Web/HTTP), including caching and CORS.
