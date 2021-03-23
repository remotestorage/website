# remotestorage.io

This is the remoteStorage website, running on
[https://remotestorage.io](https://remotestorage.io).

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)

## Setup

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`

## Development

The following command will create a local build in `dist/`, run a Web server
there, watch for changes and re-build when editing files in `src/`. It'll also
open your default browser at http://localhost:8001 and live-reload on changes
(which might not work on some systems).

    npm run dev

Check out the `scripts` part of `package.json` for the various `npm run`
commands for the respective tasks.

## Deployment

Deploying to production can be done by pushing a 5apps Deploy Git remote.
Please ask someone for access, in case you want to be able to run those
deployments.
