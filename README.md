# Strategically.co website

## Tech stack

- [Gatsby.js](https://gatsbyjs.org)
- [Bootstrap 4](https://getbootstrap.com/)
- [Wordpress]() for a headless CMS

## How to run
1. Run `npm i` in project directory to install the dependencies;
2. Run `gatsby develop` to start the development server;
3. Proceed to `localhost:8000` to see the pages

## Project structure and general instructions

### Styling

Imports are in the `gatsby-browser.js` file:
- Bootstrap
- `global.css` (for stuff like custom color classes, etc.)

Also there are 2 components for layout living in `src/components/`:

- `Layout`
- `SLayout` (sorry about the name)

First was created for the first version of the website.
Second is a draft for the version adapted from siegemedia.com website (sorry, siegemedia).

(I've created the Layout one first and then switched to using SLayout.)

### Pages

There are 4 "meaningful" pages located in `src/pages`:

- index.js
- services_v2.js - experimental layout ripped off from siegemedia website
- contact.js - contact form
- thank-you.js - thanks for the contact form

show_all_wp.js is a page, where I experimented with data retrieval from Wordpress (with final goal to use that data in pages).
