---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "remoteStorage"
  text: "An open protocol for per-user storage on the Web"
  tagline: "Webfinger + OAuth + CORS + REST"
  actions:
    - theme: brand
      text: 'Get Storage'
      link: '/get'

    - theme: alt
      text: How it works
      link: /unhosted

features:
  - title: Own your data
    details: "Everything in one place – your place. Use a storage account with a provider you trust, or set up your own storage server. Move house whenever you want. It's your data."
  - title: Stay in sync
    details: "remoteStorage-enabled apps automatically sync your data across all of your devices, from desktop to tablet to smartphone, and maybe even your TV or VR headset."
  - title: "Compatibility & choice"
    details: "Use the same data across different apps. Create a to-do list in one app, and track the time on your tasks in another one. Say goodbye to app-specific data silos."
  - title: Go offline
    details: "Most remoteStorage-enabled apps come with first-class offline support. Use your apps offline on the go, and automatically sync when you're back online."

devFeaturesTitle: For App Developers 🚧
devFeatures:
  - title: Backend as a service
    details: "Develop your web app without worrying about hosting or developing a backend for it. Your users will connect their own backend at runtime. No more worrying about accounts, databases, passwords, etc."
  - title: Infinite scalability, zero cost
    details: "No matter if 5 hundred or 5 million people are using your app, your backend scales automatically and never costs you a single cent."
  - title: JS client library
    details: "remoteStorage.js is a JavaScript/TypeScript library that does the heavy lifting to add offline storage and cross-device synchronization to your apps."
    link: /rs.js/docs/
    linkText: Learn more
---

## Community

remoteStorage is a grass-roots standard, developed completely in the open, by the community for the community. Countless individuals have contributed in one way or another over time, and we'd love to welcome you as one of them!

| | |
| - | - |
| [GitHub](https://github.com/remotestorage) | Where we collaborate on the protocol specification as well as all common source code. |
| [Forums](https://community.remotestorage.io) | Our community exchange and support site for everybody from users to developers to providers. |
| [Twitter](https://twitter.com/remotestorage_) / [Fediverse](https://kosmos.social/@remotestorage) | Follow the project on Twitter or on the Fediverse, to receive updates on releases, events, apps, and related news. |
| [Mailing List](https://buttondown.email/remotestorage)| A monthly digest about remoteStorage apps, tools, and decentralized news. |
| [Events](https://community.remotestorage.io/c/events) | Meet people in person at conferences, hackathons, camps, and other gatherings. |

We would love for you to get involved — check out [What can I do for remoteStorage?](./contribute) for some ideas.

## Thank you to our contributors!

<Contributors />

... and everyone not listed here!

## Sponsors

<div class="sponsors">
  <p>
    <a href="https://nlnet.nl/" title="NLnet Foundation">
      <img src="/img/sponsors/nlnet.svg" alt="NLnet Foundation" />
    </a>
  </p>
  <p>
    <a href="https://5apps.com/" title="5apps">
      <img src="/img/sponsors/5apps.svg" alt="5apps" />
    </a>
  </p>
  <p>
    <a href="https://www.wauland.de/" title="Wau Holland Stiftung">
      <img src="/img/sponsors/whs.svg" alt="Wau Holland Stiftung" />
    </a>
  </p>
  <p>
    <a href="https://duckduckgo.com/" title="DuckDuckGo">
      <img src="/img/sponsors/duckduckgo2.svg" alt="DuckDuckGo" />
    </a>
  </p>
</div>

<style>
.sponsors {
  display: inline-grid;
  grid-template-columns: repeat(2, auto);
  grid-template-rows: repeat(1, auto);
  grid-auto-flow: row;
  grid-column-gap: 3rem;
  align-items: center;
  margin-top: 1rem;
}
.sponsors p a img {
  max-width: 128px;
}
</style>
