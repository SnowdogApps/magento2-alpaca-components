# Slider module

If we are exporting this module somewhere else and with other images we must
remember about update aspect-ratio.
It's required to keep lazyloading in this slider.

### Slider gap

For now if you want to add gap between images you must add it throught
the img or container which contains all of stuff which you want to add in slider.
In preview we can see it with `img` tags.

### Slider settings

If we want to add or edit settings i.e. add inifinity slider instead of rewind,
or change the number of slides to scroll we can do it by data attributes
passed in main `slider` element as attributes.

All settings are available [here](http://meandmax.github.io/lory/).

### Slider item width

If we want to create a responsive slider with 2 items on mobile and 4 on desktop
delete inline width on elements and use additional class in item with using `min-width`
on this screen sizes which you want (like in preview).

Slider item can accept additional classes which can edit inline `width`
or we can pass as slide item inline styles own width to each one.

### Slider navigation

We can edit navigation in slider too by adding it a custom class and place it
wherever we want
