# History

- v2.6.1 March 10, 2015
	- Updated dependencies

- v2.6.0 February 9, 2014
	- Updated dependencies

- v2.5.6 January 10, 2014
	- Updated dependencies

- v2.5.5 January 4, 2014
	- Updated dependencies

- v2.5.4 December 12, 2013
	- Updated dependencies

- v2.5.3 August 29, 2013
	- Updated dependencies

- v2.5.2 August 13, 2013
	- We now destroy the sockets when docpad gets destroyed

- v2.5.1 July 31, 2013
	- Added missing extendr dependency
		- Thanks to [antoinebrault](https://github.com/antoinebrault) for [pull request #14](https://github.com/docpad/docpad-plugin-livereload/pull/14)

- v2.5.0 July 31, 2013
	- Rewrote to use [primus](https://github.com/3rd-Eden/primus) and [ws](https://github.com/einaros/ws)
		- Closes [issue #6](https://github.com/docpad/docpad-plugin-livereload/issues/6) and [issue #5](https://github.com/docpad/docpad-plugin-livereload/issues/5) with help from [Sergey Lukin](https://github.com/sergeylukin), [Alvaro Muir](https://github.com/alvaromuir), [mdanetzky](https://github.com/mdanetzky), [Taylor Young](https://github.com/digitaldesigndj), [Pat O'Callaghan](https://github.com/patocallaghan)
	- Added fade out effect so you know regeneration has started

- v2.4.0 May 6, 2013
	- Merged [pull request #7](https://github.com/docpad/docpad-plugin-livereload/pull/7) by [Vaughan Rouesnel](https://github.com/vjpr) to solve [issue #3](https://github.com/docpad/docpad-plugin-livereload/issues/3)

- v2.3.1 March 7, 2013
	- Repackaged

- v2.3.0 January 19, 2013
	- Removed shrinkwrap file, hopefully dependency issues have been resolved
	- Added `getSocket` configuration option so you can now use existing sockets if you wish
	- Made the socket.io log level customisable via the `defaultLogLevel` config option and now defaults to 1 unless in debug mode which defaults to 3
		- Closes [pull request #4](https://github.com/docpad/docpad-plugin-livereload/pull/4) thanks to [Alex](https://github.com/amesarosh)
	- Added the ability to customise the socket options via `socketOptions` config option
	- Added the ability to customise the channel we listen on via the `channel` config option, also changed the default channel from `/docpad-live-reload` to `/docpad-livereload`
	- We will now log to the browser if we were reloaded by livereload, this can be turned off via the `browserLog` config option
	- Added the ability to customise what happens at regeneration via the `regenerateBlock` config option

- v2.2.0 December 29, 2012
	- Added a [npm shrinkwrap file](https://npmjs.org/doc/shrinkwrap.html) due to recent dependency issues some people suffered
	- Now only injects the socket.io script if it isn't already defined
	- Added a basic generate test

- v2.1.2 October 2, 2012
	- Added support for DocPad v6.7

- v2.1.1 August 10, 2012
	- Re-added markdown files to npm distribution as they are required for the npm website

- v2.1.0 July 18, 2012
	- Renamed from `live-reload` to `livereload` to follow new DocPad convention
	- Updated for DocPad v6.3.0
