## icons

all icons are gather into *icon-sprite.svg* file

Use sprite to display svg inline in your project:

```html
<svg class="icon-class">
    <use xlink:href="#icon-id"></use>
</svg>
```

### implementation

To display icons in documentation, on each preview the icon-sprite is injected inline.
While implementing in theme, include the sprite inside body tag and to display an icon use `use` with it's `id` as a value for `xlink:href`

### icons' customisation

there are no dedicated styles for svg icons,
feel free to add appropriate BEM class using icon in your block and set `fill`, `width` and `height` property to change icon's color and size

### svg and browser support

To use inline svg from sprite with `<use></use>` tag the [svg4everybody](https://github.com/jonathantneal/svg4everybody) is used.
Please check the usage and implement in your project.
