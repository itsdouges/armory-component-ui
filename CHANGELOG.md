# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/)
and this project adheres to [Semantic Versioning](http://semver.org/).

## [Unreleased][]

## [0.7.0][] - 2017-11-18
### Added
- Traits class name
- Traits on click handler

## [0.6.1][] - 2017-11-06
### Changed
- Upgrade to react@16

## [0.6.0][] - 2017-10-23
### Added
- Skin tooltip

## [0.5.2][] - 2017-10-22
### Fixed
- Chinese translations

## [0.5.1][] - 2017-10-22
### Fixed
- Character elite spec i18n

## [0.5.0][] - 2017-10-22
### Changed
- Move stories next to components
- Upgrade counts usage

### Fixed
- Gw2Item not fetching when id changes

### Added
- ResourceCard component
- CharacterPortrait component
- CharacterPreview component
- Gw2Infusion component
- Gw2Upgrade component
- Ability to select infusions/upgrades for items
- Ability to fetch character data

## [0.4.3][] - 2017-10-12
### Fixed
- Local storage not being initialised

## [0.4.2][] - 2017-10-11
### Fixed
- Tooltip from showing on mobile when it shouldn't

## [0.4.1][] - 2017-10-11
### Fixed
- `__webpack_public_path` -> `__webpack_public_path__`

## [0.4.0][] - 2017-10-11
### Changed
- Exposes publicPath for consumers to set

## [0.3.3][] - 2017-10-10
### Fixed
- Specialization that errored when fetching data

## [0.3.2][] - 2017-10-09
### Fixed
- Properly build externals
- Flow types in package

## [0.3.1][] - 2017-10-09
### Changed
- Webpack config to not bundle most images

## [0.3.0][] - 2017-10-09
### Added
- Skin to Gw2Item component
- ReducerFactory error handling for complex objects

### Changed
- Move all dependencie to peer deps
- Prune unused i18n text

### Removed
- Recompose dependency

### Fixed
- Gw2Item not handling invalid stats
- Gw2 action creator not taking objects/calcualted id into consideration

## [0.2.0][] - 2017-10-07
### Added
- Opt in hotlink for the armory badge
- Calculated item stats sourced from gw2armory api

## [0.1.2][] - 2017-10-06
### Removed
- Unneed script

## [0.1.1][] - 2017-10-06
### Fixed
- Travis deploy script

## [0.1.0][] - 2017-10-06
### Added
- Initial release


[Unreleased]: https://github.com/madou/armory-component-ui/compare/v0.7.0...HEAD
[0.7.0]: https://github.com/madou/armory-component-ui/compare/v0.6.1...v0.7.0
[0.6.1]: https://github.com/madou/armory-component-ui/compare/v0.6.0...v0.6.1
[0.6.0]: https://github.com/madou/armory-component-ui/compare/v0.5.2...v0.6.0
[0.5.2]: https://github.com/madou/armory-component-ui/compare/v0.5.1...v0.5.2
[0.5.1]: https://github.com/madou/armory-component-ui/compare/v0.5.0...v0.5.1
[0.5.0]: https://github.com/madou/armory-component-ui/compare/v0.4.3...v0.5.0
[0.4.3]: https://github.com/madou/armory-component-ui/compare/v0.4.2...v0.4.3
[0.4.2]: https://github.com/madou/armory-component-ui/compare/v0.4.1...v0.4.2
[0.4.1]: https://github.com/madou/armory-component-ui/compare/v0.4.0...v0.4.1
[0.4.0]: https://github.com/madou/armory-component-ui/compare/v0.3.3...v0.4.0
[0.3.3]: https://github.com/madou/armory-component-ui/compare/v0.3.2...v0.3.3
[0.3.2]: https://github.com/madou/armory-component-ui/compare/v0.3.1...v0.3.2
[0.3.1]: https://github.com/madou/armory-component-ui/compare/v0.3.0...v0.3.1
[0.3.0]: https://github.com/madou/armory-component-ui/compare/v0.2.0...v0.3.0
[0.2.0]: https://github.com/madou/armory-component-ui/compare/v0.1.2...v0.2.0
[0.1.2]: https://github.com/madou/armory-component-ui/compare/v0.1.1...v0.1.2
[0.1.1]: https://github.com/madou/armory-component-ui/compare/v0.1.0...v0.1.1
[0.1.0]: https://github.com/madou/armory-component-ui/tree/v0.1.0
