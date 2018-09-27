
## GW UI

Separated Sass Styles and React Components, use what you like, leave out what you don't



for Components import like this

```
import { Button, Loader, Input } from 'gw-ui';
```

for Sass styles, in your Sass file import like this.

```
// Import Dependencies for UI Kit Components (or better yet use webpack to resolve this path)
@import "{}/node_modules/gw-ui/dist/sass/variables.scss";
@import "{}/node_modules/gw-ui/dist/sass/mixins.scss";

// Override Setup with your personal theme variables and such
// @import "path/to/my/theme.scss";

// @import styles per component
// These will always have a name corresponding to its component
@import "{}/node_modules/gw-ui/dist/Button.scss";
@import "{}/node_modules/gw-ui/dist/Loader.scss";
```



### TODO

1. Remove source and dev files on post install,
2. take built files out of version control
3. Remove unneeded sass files