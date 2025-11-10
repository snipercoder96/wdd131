# Role of UX
A core user experience (UX) principle is that users expect to scroll web pages vertically without needing to scroll horizontally to view content. Additionally, users should not have to zoom in or out to see page content clearly. Because viewport widths vary, you should not rely on a particular viewport width in order for the page to render properly.

## Application to this course
This activity focuses on applying the srcset attribute to images using the picture and source elements. The browser parses the responsive image syntax and decides which image is the best match.

This activity `assumes` the following:

-    The viewport meta element has been properly applied to the document.
-    The images to be used have been `optimized` for the web by `limiting the images' width and height` (dimensions) to no more than is necessary for the page design in any view size.
-    The images are of `a valid web type/format`.
-    The images are compressed to reduce their overall file size. In many image editing software packages this is referred to as reducing the 'quality.'
-    The developer has designed and saved images for use on `different screen sizes`.


An example of this is:

``` html

<picture>

  <source srcset="images/hero-large.webp" media="min-width: 1000px">
  <source srcset="images/hero-medium.webp" media="min-width: 550px">
  <img src="images/hero-small.webp" alt="Orem Utah Temple" width="400" height="200">
</picture>

```

This consists:
- 2 medias -> `mobile` and `desktop`

eg:

``` html
<source srcset="images/hero-large.webp" media="min-width: 1000px">
<source srcset="images/hero-medium.webp" media="min-width: 550px">

```


- An `img src`:

``` html
<img src="images/hero-small.webp" alt="Orem Utah Temple" width="400" height="200">

``` 

So this uses a `mobile` version of the images (webp format.)