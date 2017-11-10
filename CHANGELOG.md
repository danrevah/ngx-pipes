# Change Log

All notable changes to this project will be documented in this file. See [standard-version](https://github.com/conventional-changelog/standard-version) for commit guidelines.

<a name="2.0.3"></a>
## [2.0.3](https://github.com/danrevah/ngx-pipes/compare/v2.0.0...v2.0.3) (2017-11-10)



<a name="2.0.0"></a>
# [2.0.0](https://github.com/danrevah/ngx-pipes/compare/v1.6.6...v2.0.0) (2017-11-08)


* improve package bundling (#84) ([6a6f8ca](https://github.com/danrevah/ngx-pipes/commit/6a6f8ca))


### BREAKING CHANGES

* we do not publish the source file of each pipe now. As with webpack/rollup's treeshaking feature, we don't need to publish pipes separately. User who used to reference to source pipes directly should update their paths.



# Changelog
All notable changes to this project will be documented in this file.

## [1.6.3] - 2017-08-02
### Added
- Add impure versions to filterBy, groupBy and orderBy (filterByImpure, groupByImpure, orderByImpure).

## [1.6.1] - 2017-07-13
### Changed
- Revert impure pipes for groupBy

## [1.4.6] - 2017-03-09
### Added
- diffObj pipe

### Fix
- Minor bugs

## [1.4.3] - 2017-02-12
### Fix
- filterBy minor bug fix

## [1.4.2] - 2017-02-09
### Added
- filterBy now also supports boolean values (Issue #26)

## [1.4.1] - 2017-02-08
### Fix
- Fix mapping bug causing issues with AoT map files.

## [1.4.0] - 2017-02-07
### Added
- Support for tree shaking with AoT!

## [1.3.3] - 2017-01-29
### Fix
- noImplicyAny issue with angular-cli

## [1.3.1] - 2017-01-29
### Added
- orderBy pipe

## [1.3.0] - 2017-01-26
### Added
- groupBy pipe

## [1.2.3] - 2017-01-26
### Fix
- Few minor bug fixes regarding filterBy

## [1.2.0] - 2017-01-26
### Added
- filterBy pipe

## [1.1.1] - 2016-12-29
### Fix
- Minor bug

## [1.1.0] - 2016-12-29
### Added
- RightPad & LeftPad pipes

## [1.0.0] - 2016-12-25
### Added
- Fully functional first STABLE release!

## [0.5.4] - 2016-12-13
### Added
- Test & match pipes added due to request by the community

## [0.5.3] - 2016-12-11
### Added
- More pipes for Objects

## [0.5.2] - 2016-12-05
### Added
- More pipes for Arrays

## [0.5.0] - 2016-12-05
### Added
- More pipes for Strings

## [0.4.19] - 2016-12-03
### Added
- Validations on user input

## 0.4.18 - 2016-12-01
### Added
- Fully functional library with Angular-CLI.
