
# The Grid

## Container

`.container`
`.container` is used for the main content of the site. It sets basic margins on the site and make sure the content of the site stays centered. Unless you want your content to go to the edges of the browser window, content should be wrapped in a container.

The `$margin` and `$mobile-margin` variables in `Variables.scss` are how `.container`s should be effected.

---

## The Grid Wrapper
`.grid-flex`
Use `.grid-flex` to set up your grid. Columns should be the only direct descendants of this element.


## Columns
`.col` and `.col-`#
Our grid as 12 columns. Use classes `.col-1` to `.col-12` to effect the column width.

Alternatively, you can use just `.col` and the column will take on the width of its content or you can give it a specific width. This is great for custom cases where you want the grid to go collapse in steps from 4-1.

#### Extra Col Classes

`.col.grow` will have the column take up the avaliable space
`.col.no-grow` will prevents the column from growing and just keep it the width it is given.


## Alignment

Since the grid uses flexbox, the default of the grid will be `space-between`.

#### Horizontal

`.left` aligns columns to the left
`.right` aligns columns to the right
`.center` aligns columns to the center

#### Vertical

`.top` aligns columns to the top
`.bottom` aligns columns to the bottom
`.middle` aligns columns to the middle
`.baseline` aligns columns to the baseline


## Gutters

The varibables `$gutter`, `$gutter-tight`, `$gutter-wide` are used throughout the grid for the space between columns. `$gutter` is the default spacing but add a class of `.tight-gutter`, `.wide-gutter`, or `.no-gutter` to the `.grid-flex` wrapper and it will use that varable as the grid's gutter space the columns.


## Breakpoints

By default the grid will collapse at the `$md` variable.
change when the grid breaks by adding the classes below to `.grid-flex`.
`.no-break` will not-collapse
`.break-lg` will break at the varibale `$lg`
`.break-xlg` will break at the varibale `$xlg`
`.break-huge` will break at the varibale `$huge`


## Helper Classes

.v-spaced