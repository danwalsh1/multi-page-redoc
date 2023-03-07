# Multi-page Redoc Documentation

This is a small structure that is intended to be used as a template 
for displaying multiple Redoc pages on one site with a navbar.

**Local Users:** Currently this template structure doesn't support the `index.html` file being
opened locally (e.g. from a `file://` path) by default, as it presents CORS issues when attempting
to do the page redirects.
A way around this is to disable the iframe detection by editing the redoc pages to remove the 
`script` tag that imports the `js/redoc-pages.js` file.

## Information About Redoc

For information about Redoc, please see
the [Redoc documentation](https://github.com/Redocly/redoc) on GitHub.

## Usage

Two example pages have been provided in this repo:
* `home.html`
* `second.html`

### Page Settings

Within these pages, the only setting that __needs__ to be changed is the `spec-url` property
of the `redoc` tag. This should be set to point to your JSON swagger file.

You can also edit the style of the inner pages (redoc pages) using the `css/redoc-pages.css` file.

### Theme Settings

To edit the navbar or other style properties, edit the `css/index-theme.css` file.

**Note:** To edit the height of the navbar, you will need to edit the `css/index.css` file.
Ensure you edit the height of the `navbar` object **and** the height used in the `iframe` `calc`.

### Add A Page

To add a new page, duplicate one of the example redoc pages (e.g. `home.html`) and edit the `spec-url`
property of the `redoc` tag to point to your JSON swagger file.

To add your new page to the navbar, simply insert a new list-item into the navbar list (standard
Bootstrap 5 format) with the name of the page being passed in the `onclick` event.

An example is below:
```html
<li class="nav-item">
    <a href="#" class="nav-link" onclick="redocPage('third')">Third Page</a>
</li>
```
The above code would link to a page called `third.html`.