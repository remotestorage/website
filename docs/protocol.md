---
layout: default
title: Protocol
nav_order: 2
---

# Protocol

## Unhosted Architecture

remoteStorage is the first open protocol to enable truly [unhosted](https://unhosted.org) web apps. That means users are in full control of their precious data and where it is stored, while app developers are freed of the burden of hosting, maintaining and protecting a central database.

### Traditional Web Apps

In hosted web stacks such as LAMP, .Net, Ruby on Rails, Django, etc…, the developer hosts the app and data, while the user controls device.

<img src="https://remotestorage.io/img/explainer-1-traditional-webapp-scoured.svg" role="presentation" />


### [No-Backend](https://nobackend.org) Web Apps

In 100% client-side apps that use CouchDB, Hoodie, Firebase, Parse, Kinto, etc…, the developer provides the app and data, while user controls the device.

<img src="https://remotestorage.io/img/explainer-2-no-backend-scoured.svg" role="presentation" />

### [Unhosted](https://unhosted.org) Web Apps

In 100% client-side apps that use remoteStorage, Google Drive, Dropbox, etc…, the developer provides only the app, while the user controls the device and data.

<img src="https://remotestorage.io/img/explainer-3-unhosted-scoured.svg" role="presentation" />


## Using existing standards

remoteStorage is a creative combination of existing protocols and standards. It aims to re-use existing technologies as much as possible, adding just a small layer of standardization on top to facilitate its usage for per-user storage with simple permissions and offline-capable data sync.

### Discovery: [WebFinger](https://webfinger.net/)

In order for apps to know where to ask permission and later actually sync user data, users give them a user address, basically like with E-Mail or Jabber/XMPP. With that address, apps retrieve storage information for the username on that domain/host.

[Check out a live example for a 5apps user](https://client.webfinger.net/lookup?resource=tony%405apps.com).

<img src="https://remotestorage.io/img/webfinger-connect.png" role="presentation" />

### Authorization: [OAuth 2.0](https://oauth.net/)

User data is scoped by so-called categories, which are essentially base directories, for which you can give apps read-only or read/write permission. Apps will use OAuth scopes to ask for access to one or more categories.

In the example screenshot, [Litewrite](https://litewrite.net/) is asking for read/write access to the "documents" category, using the OAuth scope `documents:rw`. If you allow access, the app will retrieve a bearer token, with which it can read and write to your storage, until you revoke that access on your server.

<img src="https://remotestorage.io/img/oauth-dialog.png" role="presentation" />

### Data Storage & Sync: [HTTP REST](https://en.wikipedia.org/wiki/Representational_state_transfer)

remoteStorage defines a simple key/value store for apps to save and retrieve data. The basic operations are GET/PUT/DELETE requests for specific files/documents.

In addition to that – and the only special feature aside from plain HTTP – there are directory listings, formatted as JSON-LD. They contain both the content type and size, as well as ETags, which can be used to implement sync mechanisms. The files and listings themselves also carry ETag headers for sync/caching and conditional requests.

<img src="https://remotestorage.io/img/screenshot-folder-description.png" role="presentation" />
