### The Switch Tag In React
- The Route Tag is useful but sometimes it can get tedious when dealing with nested routes
- The Route Tag will render to the DOM in a parent to child manner if you have a route say /home/about/morgan.html
- It will render the home page, then the about page then the morgan.html and we will need a Route tag for every single one of those pages
- Here is where the Switch Tag comes into play 
- Switch tag will always render the first matched child to the DOM in contrast to the Route tag where I have to pass in the exact prop


```js
<Switch>
    <Route path="/polancofb">
      <Polancofb />
    </Route>
    <Route path="/djfb">
      <Djfanboy />
    </Route>
    <Route path="/">
      <Home />
    </Route>
</Switch>
```
