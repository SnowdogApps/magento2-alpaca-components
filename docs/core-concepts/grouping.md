---
title: Components grouping convention
---

## Globals
Globals contains code that other components can inherit and modify, but is not designed to be directly included in other elements, modules or views.
* Fonts
* Icons
* Libraries - 3rd party CSS / JS
* Mixins
* Typography
* Variables

## Elements
Smallest UI parts should be added to this group.

Elements can't depend on other element.

## Modules
It's place for complex UI parts, which use already created elements and custom code to connect it together.

Module can't depend on other module.

## Views
Designed to be a preview of already created elements and modules. You shouldn't write any custom code here.
