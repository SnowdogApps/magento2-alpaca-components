## icons

all icons are gather into *icon-sprite.svg* file

Use sprite to display svg inline in your project.

```html
<svg title="icon-title" class="icon">
    <use xlink:href="icon-sprite.svg#icon-id"></use>
</svg>
```

### icons' customisation

there are no dedicated styles for svg icons,
feel free to add appropriate BEM class using icon in your block and set `fill`, `width` and `height` property to change icon's color
and set the appropriate size

Original sizes for project can be found in public/components/preview/images/icon-sprite.svg file

### svg and browser support

To use inline svg from sprite with `<use></use>` tag the [svg4everybody](https://github.com/jonathantneal/svg4everybody)
is used.
Please check the usage and implement in your project.
