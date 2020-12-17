## Pure Functions
A function is said to be pure whenever I supply with the same arguments it renders the same exact result
no matter how many times I call it.
- Doesn't have any random values
- doesn't have the current date or time
- Global State cannot be modified(e.g. DOM, files, DB, ...)
- Cannot Mutate The Parameters

### Example
```js
function myFunction(number){
    return number * 3;
}
```

### Why are Pure Functions Beneficial
- Self-Documenting
- Can Be Tested Easily
- Concurrency which gives us the ability to run multiple functions in parallel
- Cacheable which gives me the ability to store the value in the cache and be able to used in the future

## Not A Pure Function Example
```js
function myFunction(number){
    return number * Math.random();
}
```