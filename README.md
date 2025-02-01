# Learning HTML and CSS Notes

## Description

This README is a collection of notes and insights from my journey of learning HTML and CSS, inspired by the tutorials on the [Slaying The Dragon YouTube channel](https://www.youtube.com/@slayingthedragon). These notes are for personal reference and growth.

## Table of Contents

1. [HTML Notes](#html-notes)
2. [CSS Notes](#css-notes)
3. [Example-HTML-Structure](#example-html-structure)

## HTML Notes

- Tags and attributes

## 1. Basic Structure Tags

| Tag       | Description                                                  |
| --------- | ------------------------------------------------------------ |
| `<html>`  | Defines the root of an HTML document.                        |
| `<head>`  | Contains metadata, links to stylesheets, and scripts.        |
| `<title>` | Defines the title of the webpage (shown in the browser tab). |
| `<body>`  | Contains the content of the webpage.                         |

## 2. Headings & Text Formatting Tags

| Tag              | Description                                                      |
| ---------------- | ---------------------------------------------------------------- |
| `<h1>` to `<h6>` | Defines headings, `<h1>` is the largest, `<h6>` is the smallest. |
| `<p>`            | Defines a paragraph.                                             |
| `<b>`            | Makes text bold.                                                 |
| `<i>`            | Makes text italic.                                               |
| `<u>`            | Underlines text.                                                 |
| `<strong>`       | Defines important text (usually bold).                           |
| `<em>`           | Defines emphasized text (usually italic).                        |
| `<small>`        | Smaller text.                                                    |
| `<mark>`         | Highlights text.                                                 |
| `<del>`          | Strikethrough text.                                              |
| `<sup>`          | Superscript text (e.g., exponents).                              |
| `<sub>`          | Subscript text (e.g., chemical formulas).                        |
| `<br>`           | Inserts a line break.                                            |
| `<hr>`           | Inserts a horizontal line.                                       |

## 3. Links & Media Tags

| Tag        | Description                                    |
| ---------- | ---------------------------------------------- |
| `<a>`      | Defines a hyperlink.                           |
| `<nav>`    | Defines a navigation section.                  |
| `<img>`    | Embeds an image.                               |
| `<video>`  | Embeds a video.                                |
| `<audio>`  | Embeds an audio file.                          |
| `<source>` | Defines a media source for <audio> or <video>. |

Common Attributes for `<a>`
| Attribute | Description |
|------------|------------|
| `href="URL"` | Specifies the link's destination. |
| `target="_blank"` | Opens the link in a new tab. |
| `rel="noopener noreferrer"` | Improves security when opening links in new tabs. |

## 4. List Tags

| Tag    | Description                                  |
| ------ | -------------------------------------------- |
| `<ul>` | Defines an unordered list (bullets).         |
| `<ol>` | Defines an ordered list (numbers).           |
| `<li>` | Defines a list item inside `<ul>` or `<ol>`. |
| `<dl>` | Defines a description list.                  |
| `<dt>` | Defines a term in a description list.        |
| `<dd>` | Defines a description in a description list. |

## 5. Table Tags

| Tag       | Description                      |
| --------- | -------------------------------- |
| `<table>` | Defines a table.                 |
| `<tr>`    | Defines a table row.             |
| `<th>`    | Defines a table header.          |
| `<td>`    | Defines a table data cell.       |
| `<thead>` | Groups the table headers.        |
| `<tbody>` | Groups the table body content.   |
| `<tfoot>` | Groups the table footer content. |

## 6. Form Tags

| Tag          | Description                                           |
| ------------ | ----------------------------------------------------- |
| `<form>`     | Creates an input form.                                |
| `<input>`    | Defines an input field (text, checkbox, radio, etc.). |
| `<label>`    | Defines a label for an input field.                   |
| `<button>`   | Creates a clickable button.                           |
| `<textarea>` | Defines a multi-line text input.                      |
| `<select>`   | Dropdown menu.                                        |
| `<option>`   | Defines an option in a dropdown.                      |
| `<fieldset>` | Groups form elements together.                        |
| `<legend>`   | Defines a caption for a <fieldset>.                   |

Common Attributes for `<input>`
| Attribute | Description |
|------------|------------|
| `type="text"` | Text input field. |
| `type="password"` | Password input field. |
| `type="email"` | Email input field. |
| `type="checkbox"` | Checkbox input. |
| `type="radio"` | Radio button input. |
| `type="submit"` | Submit button. |
| `placeholder="Enter your name"` | Placeholder text. |
| `required` | Makes input mandatory. |

## 7. Structural & Semantic Tags

| Tag         | Description                                   |
| ----------- | --------------------------------------------- |
| `<header>`  | Represents a page header.                     |
| `<nav>`     | Defines navigation links.                     |
| `<main>`    | Represents the main content.                  |
| `<section>` | Groups related content.                       |
| `<article>` | Represents a self-contained piece of content. |
| `<aside>`   | Defines side content (like a sidebar).        |
| `<footer>`  | Represents a page footer.                     |

## 8. Miscellaneous Tags

| Tag               | Description                                       |
| ----------------- | ------------------------------------------------- |
| `<div>`           | Defines a division or container for styling.      |
| `<span>`          | Defines inline elements for styling.              |
| `<iframe>`        | Embeds another webpage.                           |
| `<script>`        | Embeds JavaScript.                                |
| `<link>`          | Links external stylesheets.                       |
| `<meta>`          | Defines metadata (character set, viewport, etc.). |
| `<!DOCTYPE html>` | Declares the document type (HTML5).               |
| `<!---->`         | Comments in HTML. (ctrl + /)                      |
| `&nbsp;`          | Regular space                                     |
| `&ensp;`          | Two spaces gap                                    |
| `&emsp;`          | Four spaces gap                                   |

---

- Common HTML elements
  Block Level vs Inline Level
- Best practices and common mistakes

## CSS Notes

### Example HTML Structure

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta
      name="viewport"
      content="width=device-width, initial-scale=1.0"
    />
    <title>Learning HTML</title>
  </head>
  <body>
    <h1>Welcome to HTML</h1>
    <p>This is my first HTML page.</p>
  </body>
</html>
```

```html
<!DOCTYPE html>
<html>
  <head>
    <title>Structure</title>
  </head>

  <body>
    <div></div>
    <header></header>
    <nav></nav>
    <main></main>
    <article></article>
    <section></section>
    <footer></footer>
  </body>
</html>
```
