## Block Element Modifier


### What is a block?

- standard CSS class 
- independent reusable and usually bigger component of a webpage
- may have modifiers and contain elements

### What are Elements?

- Children of Blocks
- naming convention:
    - start with the its parent's block name 
    - two undersquares after it 
    - and end with the element name

### What are Modifiers?

- Symbolize different states of styles of classes
- can be used both for blocks || elements
- naming convention:
    - start with the its parent's block name 
    - two dashes after it 
    - and end with the modifier name


#### Block Modifier

```css
.card--big{

}

.card--small{

}
```

#### Element Modifier

```css
.card__button--succeeded{

}

.card--button__behind{
    
}
```

e.g.
```css
.thisisablock{

}
```

### What is a Block Element

- standard CSS Class with two undersquares after the block name

```css
.thisisablock__element{

}
```

### What is a Block Modifier

- standard CSS Class with two dashes, after the block or after the element

```css
.thisisablock--modifier
{

}
```

### What is a block Element Modifier

- Self explanatory i.e. combination of the two above

```css
.thisisablock__element--modifier{
    
}
```