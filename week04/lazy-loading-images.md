# Lazy loading images

Your objective is to load pages faster, and one way to do that is to provide only the essential content to the client/user as the content is requested through events such as scrolling down a page or through navigation.

``` html
<img src="images/anyphoto.jpg" alt="A good description of the non decorative image" loading="lazy" width="300" height="500">

```

- The default `eager` value instructs the browser to render the resource immediately.
-  The `lazy attribute` defers loading elements, such as an `<img> or <iframe>`, until they are called into view by some user action, such as scrolling.