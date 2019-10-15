[![Greenkeeper badge](https://badges.greenkeeper.io/SnowdogApps/magento2-alpaca-components.svg)](https://greenkeeper.io/)
![Browser Status](https://badges.herokuapp.com/browsers?googlechrome=63,64,65,66,67&firefox=58,59&safari=11&iphone=11.2&android=64&iexplore=11&microsoftedge=16)

## Introduction
Components library of Alpaca [design system](https://www.uxpin.com/studio/blog/design-systems-vs-pattern-libraries-vs-style-guides-whats-difference/) created to speed up the process of working with design on Magento 2 stores, by creating each UI element, module, and view in a simplified, front-end developer friendly, environment.

This components liblary is built on top of [Fractal.js](http://fractal.build/guide).

Magento 2 experience isn't required to work with this code.

## Demo / Preview
https://alpaca-components.now.sh/

## Installation
- Install dependencies using `yarn`
- Run `gulp dev` to start Fractal.js development server
- Run `gulp` if you want to generate static files (for example to deploy them)

## How to create a components library on top of Alpaca
It's necessary only to work outside the Magento.
1. Copy-paste `package.json`, `gulpfile.js`, `.eslintignore`, `.eslintrc`, `.sass-lint.yml`, `.stylelintrc`, `.gitignore` files to the new project
2. Create `modules.json` file with an array of paths to parent components libraries.
   In most cases it will look like this:
   ```json
   ["../../snowdog/module-alpaca-components"]
   ```
3. Customize or add new files following the same structure as in Alpaca components library
4. Run `gulp dev`

## Directory structure
- `components` directory is what you are going to import into the Magento 2 theme.
- `docs` and `public` are just for the local environment purposes, you will find there sample images, testing libs, utility styles etc.

## Core concepts
### Components architecture
Components are divided into 4 groups:
1. Globals
   - Contains code that other components can use in any place, for example, typography, icons or SASS variables.
2. Elements
   - Smallest UI parts, for example, buttons
   - Element can't depend on other elements
   - Element shouldn't have any layout
3. Modules
   - More complex UI parts like search form or header
   - Takes elements or modules and combine them together adding layout and context
4. Views
   - Takes elements or modules and combine them together adding final layout and context
   - You should be able to show it to client/PM as a preview of ready to use store
   - You shouldn't create any new UI elements, everything needs to be reusable.

### Naming
* Group name needs to be plural
* Component name needs to be singular
* Component name shouldn't be related to any project or place in the layout
   - Bad: `filters`
   - Good: `dropdown-list` or `collapsible-list`
* Avoid using `box`, `block`, `item`, `info`, `text`, `cms`, especialy combined together, for example `info-box`
* Avoid naming two components in similar way i.e. `cms-subcategories` and `cms-subcategory`

### Colors
* By default alpaca components uses up to 7 step grayscale

### SASS Variables naming

Follow BEM-like naming convention i.e. when you component name is `button` and you are creating a variable for a `padding` it should be `$button__padding`.

Same as in BEM, you are not allowed to build construction like `$button__icon__padding`, it should be `$button__icon-padding`.

Variables related to the pseudo-classes and pseudo-selectors should be treated as a BEM elements `$button__color-hover`.

Also, BEM modificators are allowed in variables `$button__padding--secondary`, you can even stack them like this `$button__padding--secondary--dark`.

To target variable to specific breakpoint adding `\@breakpoint` at the end of the variable name `$button__padding\@medium`. Always use `small`, `medium`, `large` etc. to describe the breakpoint.

Examples of proper variables names:
```scss
$swatch__option-border
$swatch__option-border-color-hover

$swatch__option-image-height\@large

$swatch__option-size--small
$swatch__option-image-width--small
$swatch__option-image-width--small\@large
```

## Accessibility
You can run `gulp a11y` to run dev server with accessibility tests enabled.

If on some view there is no a11y message, please go to the component config and comment out `preview: '@docs-only-styles'`
