# Changelog
All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.1.0] - 07.01.2019
### Added
- `email-to-friend` view
- `confirmation-link` view
- `price--between` element variant
- `bundle-option` module
- `product-view--bundle` view variant
- `product-view--grouped` view variant
- Support for B2B module

### Fixed
- Review alignment
- Alignment for buttons
- Alignment for quick search input (Safari issue)
- Input text on safari browsers

### Changed
- Refactor dropdown list and nested list
- Update dependencies to work with node lts v10.15.0
- Deployment moved from Heroku to Now

### Removed
- Wrong z-index from rating stars
- Grid styles and references in modules and views

## [1.0.1] - 18.10.2018
### Changed
- Circle CI tests setup

## [1.0.0] - 15.10.2018
### Added
- Better docs

## [0.10.2] - 11.10.2018
### Added
- Styles for 2 column layouts

### Changed
- Refactor rating & review on product page, a11y

### Removed
- Useless table element sass extends

### Fixed
- `z-index` value for mega menu

## [0.10.1] - 26.09.2018
### Fixed
- Catalog grid on IE

## [0.10.0] - 18.09.2018
### Added
- Class for hiding column name in menu
- Category block styles in catalog view

### Changed
- Rating stars
- Error styles
- Catalog structure

### Fixed
- Qty validation error styles

## [0.9.1] - 06.09.2018
### Changed
- Yarn lock file

## [0.9.0] - 05.09.2018
### Added
- Question mark icon

### Changed
- Sidebar blocks heading

### Fixed
- Review module and review details view

## [0.8.0] - 22.08.2018
### Added
- Compare view
- Loader element
- Hover effect to header buttons
- Accessibility for swatches and toolbar
- Swatch color variant
- README files for elements with accessibility information
- Sidebar block module for compare, wishlist and recent orders
- Margin to notification
- Modifier to swatch option for white color
- Quicksearch module

### Changed
- Product page styles
- Gallery loader styles
- Swatch refactored
- Page title and breadcrumbs styles
- Catalog grid item adjustments
- Global & Elements accessibility improvements (svg, typography, cookies, messages, pager, price, tabs, table, rating, dropdown-list-medium)
- Link refactored
- Moved wishlist component from modules to dashboard views
- Catalog items improvements
- 4 columns grid to fix sidebar size in my account

### Removed
- sidebar-nav-list module
- mix-blend-mode from product images

## [0.7.3] - 09.07.2018
### Fixed
- CSS Lint errors

## [0.7.2] - 07.05.2018
### Fixed
- Yarn lock file

### Changed
- Swatches styles
- Catalog item styles
- Filters media query size

## [0.6.0] - 30.03.2018
### Added
- New list variant
- Global focus style
- Catalog list item module
- Catalog grid item module
- Catalog grid view
- Catalog list view
- Filters module.
- Modal module
- Working js for Quantity-update
- Sticky footer
- Minicart
- Forgot password view

### Changed
- Product view adjustements
- Links color and styles
- Brief-info styles
- Review start refactor
- Rating - use svg icons as css background with svg-uri for encoding uri
- Footer component design
- Global variables
- List module styles
- Newsletter module design
- Refactored swatch element
- Update label hidden style
- Refactored `file-upload` component - removed dependecy on button styles, JS code made more roboust
- Update accessibility features in `file-upload` component
- Login page, removed tabs and set two columns
- Aria-label values
- Registration view
- Simplify filters
- Remove unnecessary code from config
- Update toolbar styles
- Mega menu module to fit Snowdog Menu Module
- Side menu module to fit Snowdog Menu Module

### Removed
- Old catalog product modules and catalog views

## [0.5.0] - 20.11.2017
### Added
- Slide module
- Arrow-right icon
- Home page view
- Variant for list - with components as content
- Accessibility tests

### Changed
- Pager element styling that fits design
- Adjustements in slider module
- Swatcher update

## [0.4.1] - 13.11.2017
### Fixed
- Typo - double semicolon

## [0.4.0] - 13.11.2017
### Added
- Quantity-updater module
- Minus icon
- Icon component
- Dropdown list component for side menu
- Link modifier with custom border on hover

### Changed
- Dropdown list component
- Footer module changed
- Update form elements style and structure (accessibility): checkbox/radio button, select, input, textarea
- Tab styling
- Cookie message styling
- Update icon list and change to alph order
- Update icons list to display with icon components
- Name of `dropdown-menu` element to `mega-menu`
- Mega menu styling

## [0.3.0] - 06.11.2017
### Added
- Spacer global variables

### Changed
- Variables in password strength element
- Popup component
- Table styles
- Newsletter module

## [0.2.0] - 28.10.2017
### Added
- Banner images
- `marketing bar` element
- `docs-styles-only` preview layout
- User account dashbord elemenets, modules and views
- Project description

### Changed
- Refactor banner styles
- Optimize new banner images
- Simplify banner template
- Button styling that fits alpaca design.
- Badges styling that fits alpaca design (default, new, discount).
- Breadcrumbs styling that fits alpaca design.
- Header styling that fits alpaca design.
- Styles used only for previews (i.e. buttons)
- Button icon variables to BEM
- CHANGELOG releases date format to european

## [0.1.2] - 10.10.2017
### Changed
- update README, correct typo

### Added
- CHANGELOG.md

## [0.1.1] - 09.10.2017
### Changed
- Project name to `module-alpaca-components`

## [0.1.0] - 09.10.2017
### Added
- Initial release (internal purpouses only)
