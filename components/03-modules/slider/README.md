# Slider module

If we are exporting this module somewhere else and with other images we must
remember about update aspect-ratio.
It's required to keep lazyloading in this slider.

### Slider gap

For now if you want to add gap between images you must add it throught
the img or container which contains all of stuff which you want to add in slider.
In preview we can see it with `img` tags.

### Slider settings

*IMPORTANT!*
Avoid to using `slidesToScroll` attribute b/c it's hardcoded to use only
by one element - it's more easier than foresee every case.

If we want to add or edit settings i.e. add inifinity slider instead of rewind,
or change the number of slides to scroll we can do it by data attributes
passed in main `slider` element as attributes.

All settings are available [here](http://meandmax.github.io/lory/).

### Slider item width

*IMPORTANT!*
We must give to `slide__item` width with the most approximation.
I.e if we want 3 visible items in one screen set width to `calc(100% / 3)`
Not just `33%`.
It makes a 'bug' in dot active classes with wrong calculating the last item
and keep the active class in previous item in navigation.

If we want to create a responsive slider with 2 items on mobile and 4 on desktop
don't use inline width on elements and use additional class in item with using
`min-width` on this screen sizes which you want (like in preview).

Slider item can accept inline styles where we can pass as slide item
own width to each one.

### Slider navigation

We can edit navigation in slider too by adding it a custom class and place it
wherever we want
