## History

- v2.7.0
  - Updated node-sass to v3.0.0 (#31, thanks @mbarlock)

- v2.6.0
  - Updated node-sass to v2.1.1 (#30, thanks @mbarlock)

- v2.5.1 Mar 11, 2015
  - Fixed includePaths-related bug (#25, thanks @mbarlock)

- v2.5.0 Jan 26, 2015
  - Updated [node-sass](https://github.com/sass/node-sass) to [v1.2.3](https://github.com/sass/node-sass/releases/tag/v1.2.3) (#22, thanks @mbarlock)
  - Added includePaths option, fixes #24 (#23, thanks @mbarlock)

- v2.4.4 July 2, 2014
  - Removed `console.log`

- v2.4.3 July 2, 2014
  - Fixed [#15](https://github.com/jking90/docpad-plugin-nodesass/issues/15)
  - Removed mkdirp as a dependency
  - Switched from writing `.map` file to disk to including it as a data URI

- v2.4.2 June 16, 2014
  - Implemented `precision` option (fixed [#10](https://github.com/jking90/docpad-plugin-nodesass/issues/10))
  - Updated [node-sass](https://github.com/andrew/node-sass) to [0.9.3](https://github.com/andrew/node-sass/releases/tag/v0.9.3)

- v2.4.1 June 11, 2014
  - Fixed [#9](https://github.com/jking90/docpad-plugin-nodesass/issues/9)
  - Added tests for bourbon and neat

- v2.4.0 June 9, 2014
  - Added support for imagePath option
  - Updated [node-sass](https://github.com/andrew/node-sass) to [0.9.2](https://github.com/andrew/node-sass/releases/tag/v0.9.2)
  - Updated [node-bourbon](https://github.com/lacroixdesign/node-bourbon) to [1.2.3](https://github.com/lacroixdesign/node-bourbon/releases/tag/v1.2.3)
  - Updated [node-neat](https://github.com/lacroixdesign/node-neat) to [1.3.0](https://github.com/lacroixdesign/node-neat/releases/tag/v1.3.0)

- v2.3.0 Mar 27, 2014
  - Added support for `outputStyle` thanks to [@chrishale](https://github.com/chrishale)
  - Updated [node-sass](https://github.com/andrew/node-sass) to [0.8.4](https://github.com/andrew/node-sass/releases/tag/v0.8.4)

- v2.2.1 Jan 14, 2014
  - Fixed [#4](https://github.com/jking90/docpad-plugin-nodesass/issues/4)
  - Updated [node-sass](https://github.com/andrew/node-sass) to [0.8.1](https://github.com/andrew/node-sass/releases/tag/v0.8.1)

- v2.2.0 Jan 13, 2014
  - Updated [node-sass](https://github.com/andrew/node-sass) to [0.8.0](https://github.com/andrew/node-sass/releases/tag/v0.8.0)
  - Added support for sourcemaps

- v2.1.1 Oct 23, 2013
  - Updated [node-sass](https://github.com/andrew/node-sass) to [0.7.0](https://github.com/andrew/node-sass/releases/tag/v0.7.0)

- v2.1.0 Sept 20, 2013
  - Added support for the [Bourbon](http://bourbon.io/) mixin library, using the [node port](https://github.com/lacroixdesign/node-bourbon)
  - Added support for the [Neat](http://neat.bourbon.io/) semantic grid framework, using the [node port](https://github.com/lacroixdesign/node-neat)
  - Updated [node-sass](https://github.com/andrew/node-sass) to [0.6.6](https://github.com/andrew/node-sass/releases/tag/v0.6.6)

- v2.0.2 Sept 7, 2013
  - Updated [node-sass](https://github.com/andrew/node-sass) to [0.6.5](https://github.com/andrew/node-sass/releases/tag/v0.6.5)

- v2.0.1 Sept 6, 2013
  - Removed anything indicating that SASS syntax (not SCSS) is supported

- v2.0.0 July 23, 2013
  - Iterating version number for docpad@6.46 compatability

- v1.0.0 July 15, 2013
  - Switch from Sass ruby gem to [node-sass](https://github.com/andrew/node-sass)
  - Renamed `docpad-plugin-sass` -> `docpad-plugin-nodesass`
