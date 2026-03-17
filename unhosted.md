<script setup>
import svg1 from './img/explainer-1-traditional-webapp-scoured.svg?raw'
import svg2 from './img/explainer-2-no-backend-scoured.svg?raw'
import svg3 from './img/explainer-3-unhosted-scoured.svg?raw'
</script>

# Unhosted Architecture

remoteStorage is the first open protocol to enable truly
[unhosted](https://unhosted.org) web apps. That means users are in full control
of their precious data and where it is stored, while app developers are freed
of the burden of hosting, maintaining and protecting a central database.

## Traditional Web Apps

In hosted web stacks such as LAMP, .Net, Ruby on Rails, Django, etc., the
developer hosts the app and data, while the user controls their device.

<div aria-hidden="true" v-html="svg1" />

## [No-Backend](https://nobackend.org) Web Apps

In 100% client-side apps that use CouchDB, Hoodie, Firebase, Parse, Kinto,
etc., the developer provides the app and data, while the user controls their device.

<div aria-hidden="true" v-html="svg2" />

## [Unhosted](https://unhosted.org) Web Apps

In 100% client-side apps that use remoteStorage, Google Drive, Dropbox, etc.,
the developer provides only the app, while the user controls their device and
data.

<div aria-hidden="true" v-html="svg3" />
