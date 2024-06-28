# The remoteStorage Protocol

remoteStorage is a creative combination of existing protocols and standards. It
aims to re-use existing technologies as much as possible, adding just a small
layer of standardization on top to facilitate its usage for per-user storage
with simple permissions and offline-capable data sync.

## Discovery: [WebFinger](https://webfinger.net/)

In order for apps to know where to ask for permissions and sync data, you
give them a user address, which looks the same as an email or XMPP address
(and could be one, too). With that address, apps retrieve storage information
for the username on that domain/host.

[Check out a live example for a 5apps user](https://client.webfinger.net/lookup?resource=tony%405apps.com).

<img src="/img/webfinger-connect.png" role="presentation" />

## Authorization: [OAuth 2.0](https://oauth.net/)

User data is scoped by so-called categories, which are essentially base
directories, for which you can give either read-only or read/write permission.
Apps will use OAuth scopes to ask for access to one or more categories.

In this example screenshot, [Litewrite](https://litewrite.net/) is asking for
read/write access to the "documents" category, using the OAuth scope
`documents:rw`. If you allow access, the app will retrieve a bearer token, with
which it can read and write to your storage, until you revoke that access on
your server.

<img src="/img/oauth-dialog.png" role="presentation" />

## Data Storage & Sync: [HTTP REST](https://en.wikipedia.org/wiki/Representational_state_transfer)

remoteStorage defines a simple key/value store for apps to save and retrieve
data. The basic operations are GET/PUT/DELETE requests for specific
files/documents.

In addition to that – and the only special feature aside from plain HTTP –
there are directory listings, formatted as JSON-LD. They contain both the
content type and size, as well as ETags, which can be used to implement sync
mechanisms. The files and listings themselves also carry ETag headers for
sync/caching and conditional requests.

<img src="/img/screenshot-folder-description.png" role="presentation" />

## Specification

Visit the [IETF
Datatracker](https://datatracker.ietf.org/doc/html/draft-dejong-remotestorage)
or [GitHub](https://github.com/remotestorage/spec) for the full protocol
specification.
