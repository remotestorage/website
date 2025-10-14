# Servers

## Hosted

  - [5apps Storage](https://5apps.com/storage/beta) is a commercial
    remoteStorage provider that currently offers free storage accounts.
  - [Kosmos](https://kosmos.org) is an open-source cooperative that runs
    hosted Internet services, including remoteStorage. Signups currently by
    invitation only.

## Host your own

  - [armadietto](https://github.com/remotestorage/armadietto/) is a
    remoteStorage server based on node.js
  - [armadietto-cloudron](https://github.com/0dataapp/armadietto-cloudron): armadietto packaged for easy install on Cloudron
  - [php-remote-storage](https://git.sr.ht/~fkooman/php-remote-storage)
    is a remoteStorage server written in PHP. ([Docker
    image](https://github.com/libresh/compose-remotestorage))
  - [mysteryshack](https://github.com/untitaker/mysteryshack) is a
    remoteStorage server written in Rust. ([Docker
    image](https://hub.docker.com/r/bnjbvr/mysteryshack-docker/))
  - [armadietto+lucchetto](https://github.com/overhide/armadietto/blob/master/lucchetto/README.md)
    is an [armadietto](https://github.com/remotestorage/armadietto/) fork
    with middleware extensions including in-app purchase support ([Docker
    image](https://hub.docker.com/repository/docker/overhide/armadietto))

## Integrate into existing systems

  - [Liquor Cabinet](https://github.com/5apps/liquor-cabinet/) is a
    remoteStorage HTTP API server based on Sinatra (Ruby). It supports
    S3-compatible object storages and OpenStack Swift as storage
    backends.
  - [remotestorage-server](https://www.npmjs.org/package/remotestorage-server)
    is a node.js module, which can be used as basis for your own
    remoteStorage server, implementing the core HTTP behavior.

## Create a new implementation

With remoteStorage being a relatively simple specification, you can write your
own fully compliant server implementation in a language you like in a matter of
a few days to a couple of weeks usually.

You can run the [RS API Test
Suite](https://github.com/remotestorage/api-test-suite) against your server
from the outside to integration-test for spec compliance of the HTTP API
portion of the spec.

Some core contributors will gladly help you with any questions you may
have on the way. There is a dedicated category for [server
development](https://community.remotestorage.io/c/server-development/11) on the
RS Community Forums.

## Hints for self-hosting

### Apache bug

There is a [very
old](https://bz.apache.org/bugzilla/show_bug.cgi?id=51223), long-running
[bug in the Apache web
server](https://bz.apache.org/bugzilla/show_bug.cgi?id=61820), which
breaks remoteStorage sync. (In short, 304 HTTP responses get their CORS
headers stripped unintentionally, so the response can never be received
at an Unhosted app.)

It has finally been resolved and release with Apache 2.4.47, but any version
before that will not work. You need to use a server that does HTTP and CORS
correctly. Most people use Nginx as a reverse proxy, but any other compliant
web server works as well.

## Outdated solutions

The following RS servers are not under active development anymore and
need updating in order to conform to modern spec versions. If you're a
developer, you might want to pick up existing code in your favorite
language instead of starting from scratch:

  - [rs-serve](https://github.com/remotestorage/rs-serve) is a
    remoteStorage server written in C for POSIX systems, storing data in
    system users' home directories.
  - [python-remotestorage](https://github.com/relet/python-remotestorage)
    RS server for Python, using Git as storage back-end (spec:
    draft-dejong-remotestorage-00)
  - [remotestorage-ruby](https://github.com/remotestorage/remotestorage-ruby)
    RS server based on Ruby on Rails (spec: 2012.04)
