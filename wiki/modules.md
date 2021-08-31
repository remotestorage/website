---
title: Data modules
parent: Wiki
---

This page was moved from the old wiki and is in the process of being revised.
{: .fs-5 .ls-10 .code-example }

Data modules are **small add-on libraries** for remoteStorage.js, which
extend it for storing certain types of data. App developers can create
and use these modules to access and manage the same data in different
apps.

Data modules are currently **defined per category** (the base
directories, which an app requests/receives access permissions for). For
example, there's a "bookmarks" module, which can be used to manage data
in the "/bookmarks" directory of a user's storage account.

A module defines **data types**, which will be used to validate incoming
data as well as adding [JSON-LD](https://json-ld.org/) contextual
metadata. Type formats are being defined using [JSON
Schema](http://json-schema.org/), and incoming data is validated against
the schemas defined in the module by remoteStorage.js.

## Current status

*(May 2017)* We used to maintain data modules in a single [shared
repository on GitHub](https://github.com/remotestorage/modules) until
recently. However, with the library layout and module loading changes in
the upcoming remoteStorage.js 1.0, we decided to migrate all modules to
their own user-managed repositories and use
[npm](https://www.npmjs.com/) for module- and package management.

We're encouraging module authors to use the tag/category/keyword
"remotestorage-module" on GitHub, npm, etc. so that app developers can
easily find rs.js data modules in the future.

## Resources

  - [Data modules
    documentation](https://remotestoragejs.readthedocs.io/en/latest/data-modules.html)
