---
title: Home
nav_order: 1
permalink: /
---

<div class="OLSKCommonCard">
  <img src="https://remotestorage.io/img/icon.svg" role="presentation" />
  <div>
    <h1 style="margin: 0;">remoteStorage</h1>
    <span>Open protocol for per-user storage on the Web</span>
  </div>
</div>

---

# Features
{: .fs-9 }

## Own your data

Everything in one place – your place. Use a storage account with a provider you trust, or set up your own storage server. Move house whenever you want. It's your data.

## Stay in sync

remoteStorage-enabled apps automatically sync your data across all of your devices, from desktop to tablet to smartphone, and maybe even your TV.

## Compatibility & choice

Use the same data across different apps. Create a to-do list in one app, and track the time on your tasks in another one. Say goodbye to app-specific data silos.

## Go offline

Most remoteStorage-enabled apps come with first-class offline support. Use your apps offline on the go, and automatically sync when you're back online.

## Backend as a Service

Develop your web app without worrying about hosting or even developing the backend for it: your users will connect their own backend at runtime.
Infinite Scalability

## Infinite Scalability

No matter if 5 hundred or 5 million users are using your app, your backend scales automatically and never costs you a single cent.

## Wheels Included

remoteStorage.js is a JavaScript library that does all the heavy-lifting of connecting to any remoteStorage backend, caching, synchronizing and storing user data.

[Browse apps](/apps){: .btn .btn-primary .fs-5 .mb-4 .mb-md-0 .mr-2 } [Get storage](/servers){: .btn .fs-5 .mb-4 .mb-md-0 }

---

# Developer library

The [remoteStorage.js](https://github.com/remotestorage/remotestorage.js) library does most of the heavy lifting to add offline storage and cross-device synchronization to your apps. No more worrying about accounts, databases, passwords…

## Setup

```javascript
const api = new RemoteStorage();
const client = api.scope('/todos/');

api.access.claim('todos', 'rw');

api.on('ready', function () {
   // ready
});
```

## Write an object

```javascript
// write `{"id":"alfa","done":false}` to /todos/alfa.json
await client.storeObject('/alfa.json', {
  id: 'alfa',
  done: false,
});
```

## Connect to the Connect Widget UI component

Use our [drop-in UI widget](https://github.com/remotestorage/remotestorage-widget) for connecting storage accounts.

```javascript
const widget = new Widget(api);

widget.attach();
```

[Read the documentation](https://remotestoragejs.readthedocs.io){: .btn .fs-5 .mb-4 .mb-md-0 } [Protocol details](/protocol){: .btn .fs-5 .mb-4 .mb-md-0 }

---

# Community

remoteStorage is a grass-roots standard, developed completely in the open, by the community for the community. Countless individuals have contributed in one way or another over time, and we'd love to welcome you as one of them!

|  |  |
| - | - |
| [GitHub](https://github.com/remotestorage) | Where we collaborate on the protocol specification as well as all common source code. |
| [Forums](https://community.remotestorage.io) | Our community exchange and support site for everybody from users to developers to providers. |
| [IRC](https://web.libera.chat/#remotestorage) | Some community members are hanging out in #remotestorage on Libera.Chat — say hi! |
| [Twitter](https://twitter.com/remotestorage_) / [Fediverse](https://kosmos.social/@remotestorage) | Follow the project on Twitter or on the Fediverse, to receive updates on releases, events, apps, and related news. |
| [Mailing List](https://buttondown.email/remotestorage)| A monthly digest about remoteStorage apps, tools, and decentralized news. |
| [Events](https://community.remotestorage.io/c/events) | Meet people in person at conferences, hackathons, camps, and other gatherings. |

We would love for you to get involved — check out [What can I do for remoteStorage?](https://wiki.remotestorage.io/What_can_I_do_for_remoteStorage%3F) for some ideas.

## Thank you to our contributors!

<ul class="list-style-none">
{% for contributor in site.github.contributors %}
  <li class="d-inline-block mr-1">
     <a href="{{ contributor.html_url }}"><img src="{{ contributor.avatar_url }}" width="32" height="32" alt="{{ contributor.login }}"/></a>
  </li>
{% endfor %}
</ul>

---

# Sponsors

<div class="sponsors">
<a href="https://nlnet.nl/" title="NLnet Foundation"><img src="https://remotestorage.io/img/sponsors/nlnet.svg" alt="NLnet Foundation" /></a> <a href="https://www.wauland.de/" title="Wau Holland Stiftung"><img src="https://remotestorage.io/img/sponsors/whs.svg" alt="Wau Holland Stiftung" /></a> <a href="https://5apps.com/" title="5apps"><img src="https://remotestorage.io/img/sponsors/5apps.svg" alt="5apps" /></a> <a href="https://duckduckgo.com/" title="DuckDuckGo"><img src="https://remotestorage.io/img/sponsors/duckduckgo2.svg" alt="DuckDuckGo" /></a>
</div>

<style>
:root {
  --OLSKSharedPadding: 4px;
}

.sponsors img {
 max-width: 128px !important;
}
  
/* OLSKCommonCard */

.OLSKCommonCard {
  display: flex;
  align-items: center;
}

.OLSKCommonCard > img, .OLSKCommonCard > a img {
  --OLSKCommonCardImageSize: 70px;

  width: var(--OLSKCommonCardImageSize);
  min-width: var(--OLSKCommonCardImageSize);

  margin-right: calc(var(--OLSKSharedPadding) * 2);
}

.OLSKCommonCard > :last-child > :nth-child(1) {
  display: block;
  
  font-weight: bold;
  font-family: var(--OLSKCommonHeadingFontFamily);
}
</style>
