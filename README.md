# Amapola Escarlata

## Architecture | Folder Structure

```
|── /public
|── /src
    |── /assets (images, logos, vector_icons, fonts)
    |── /components (forms, tables, buttons, layout)
    ├── /services (localstorage, api requests)
    ├── /navigation (routing logic)
    ├── /styles (application-level-styles) -> 7-1 SASS Architecture
    |	|── /abstracts
    |	|    |── _variables.scss
    |	|    |── _functions.scss
    |	|    └── _mixins.scss
    |	|── /vendor
    |	|    └── _bootstrap.scss (if using bootstrap downloaded stylesheet)
    |	|── /base
    |	|    |── _reset.scss (resets/normalize)
    |	|    └── _typography.scss (typography rules)
    |	|── /layout
    |	|    |── _navigation.scss (navbar)
    |	|    |── _grid.scss (grid system)
    |	|    |── _header.scss
    |	|    |── _footer.scss
    |	|    └── _forms.scss
    |	|── /components
    |	|    |── _buttons.scss
    |	|    |── _cover.scss
    |	|    |── _carousel.scss
    |	|    └── _dropdown.scss
    |	|── /pages
    |	|    |── _home.scss (home specific styles)
    |	|    └── _contact.scss (contact specific style)
    |	|── /themes
    |	|    |── _admin.scss (admin theme)
    |	|    └── _default.scss (default theme)
    |	└── main.scss (main sass input file -> @import everything)
    ├── /utils (utility/helper methods, validations, etc. That can be shared across the entire project)
    └── /views (Any page in our app)
```


## Usage

### Install dependencies
```sh
yarn
```

### Run React dev server (<http://localhost:3000>)
```sh
yarn start
```

### To build for production
```sh
yarn build
```
