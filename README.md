
## The Gordils & Willis UI-Kit

Separated Sass Styles and React Components, use what you need, leave out what you don't.

See our in progress documentation  ui-kit.gordilsandwillis.com

### Philosophy

1. Small Footprint.

We try and keep dependencies to a minimum. Especially with React. There is no way to just import the whole UI Kit instead you always import selectively what you need and leave the rest out of your build.

2. Override Variables / not css classes Sass

It seems like the most common or adopted pattern for creating custom user interface styles is to import a framework like Bootstrap or Material and override the classes. This is weak because you add a whole bunch of styles that are unnecessary from the original framework as well as a bunch of redundant and uncessecarry files from overriding classes. With this UI Kit, you override variables and let the framework cascade based on your definitions.

3. Separate Styles and Components

It's kind of ...

### Getting Started

```
npm install gw-ui
```

#### Sass Styles

1. To get started with Sass styles you need to import two dependencies for the ui-kit `mixins.scss` and `variables.scss`. These two files are used throughout the both dictate consistent spacing, colors and sizes

```
@import "{}/node_modules/gw-ui/dist/sass/variables.scss";
@import "{}/node_modules/gw-ui/dist/sass/mixins.scss";
```

2. Once you have imported these two files, you will probably want to override the default variables in the UI-Kit with your own to essentially "theme" your project. Take a look at the `variables.scss` file for a full reference


```
@import "path/to/my/theme.scss";
```

and inside define your own values.

```
	$alert : #DF693D;
	$notify :  #F7C24E;
	$success : #37DCAF;
```

3. The next step is to import other utility Sass styles. These are seperated into different functions and it is your choice to include what you need, the files avaliable to you are.


`reset.scss` : Reset everything

`base.scss` : Styles for html and body, other basic styles like `.container` : and `* {box-sizing : border-box;}`

`typography.scss` : Styles for typographic elements

`rich_text.scss` : `.rich-text` class for rich text containers

`grid.scss` : Styles for the grid
`spacing.scss` : classes for applying margins and padding to element based on variables.
`icons.scss` : `.icon` class for material icons
`animations.scss` : basic animations for entering and leaving elements

#### React Components

for React Components import like this

```
import { Button, Loader, Input } from 'gw-ui';
```

The total list of components available is

##### Basic Inputs

- Button
- Input
- TextArea
- Select
- Checkbox
- Radio

##### Custom Inputs

- Toggle
- Content Editable
- Editable Item
- Typeahead
- FileUpload
- AddContentBetween

##### Table

- Table
- Column
- Row
- Cell
- ImageCell
- Actioncell
- AvatarCell
- NestedCell
- SelectCell
- DateCell
- ButtonCell

##### Loaders

- Loader
- DotLoader
- LinearLoader
- TextLoader

##### Layout

- Tabs
- Collapse
- Accordion
- CenteredForm
- ImageList

##### Misc

- Avatar
- Card
- Video

Each of these Components has a corresponding Sass style sheet. You can choose to use them without any styles whatsoever or import their corresponding style sheet. *note these stylesheets depend on `mixins.scss` and `variables.scss`

if you wish to use them, import an stylesheet with the corrospnding name

```
@import "{}/node_modules/gw-ui/dist/Button.scss";
@import "{}/node_modules/gw-ui/dist/Loader.scss";
@import "{}/node_modules/gw-ui/dist/Input.scss";
```

#### Javascript Utilities

Coming Soon...

### TODO

1. Remove source and dev files on post install,
2. Remove unneeded sass files
3. Reorganize input component styles
3. Finish Documentation
4. Check / Update Table from Universe Project

