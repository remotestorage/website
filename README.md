# remotestorage.io

This is the remoteStorage website, running on
[https://remotestorage.io](https://remotestorage.io).

It uses npm for development and as a build system. There's a [waffle
board](https://waffle.io/remotestorage/website) for project/issue management.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)

## Setup

* `git clone <repository-url>` this repository
* change into the new directory
* `npm install`

## Development

The following command will create a local build in `out/`, run a Web server
there, watch for changes and re-build when editing files in `src/`. It'll also
open your default browser at http://localhost:8001 and live-reload on changes
(which might not work on some systems).

    npm run dev

Check out the "scripts" part of `package.json` for the various `npm run`
commands for the respective tasks.

## Deployment

Deploying the site to [GitHub pages](https://remotestorage.github.io/website/)
for testing/review:

    ./deploy

Deploying to production (need 5apps remote set, see comment in deploy script):

    ./deploy production
