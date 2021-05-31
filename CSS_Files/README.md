## CSS Guide


### Units

1. 1em=16px=100%
2. rem is used to mean relative unit aka relative to the root element
3. % is used for responsive design
4. vh means viewport height and vw means viewport width... used for specific portions of the screen

### Selectors

1. Universal Selector: *
2. Id Selector: #id
3. Class Selector: .className
4. Type Selector: h1,h2,h3,h4
5. Adjacent Sibling Selector: h1+p
6. Child Selector: ul > li
7. General Sibling Selector: h1 ~ p
8. Descendent Selector: p a {}


### Best way to manage your css vars
```css
:root{
    --drktheme: #f3f3f3;
    --my-bg: #fff;
    --heading: #705418;
    --myshadow: 0 1px 3px 0 rgba(0,0,0,1), 0 1px 2px 0 rgba(0,0,0,0.1);
}


.card{
    background: var(--drktheme);
    box-shadow: var(--myshadow);
    color: var(--my-bg);
    width: 100px;
    height: 100px;
}
```


### How To Target and style HTML thanks to Selectors

#### A. Class selector

- starts with the . symbol e.g.

```css
.btn{
    border-radius: 12px;
}
```

#### B. id selector

- starts with the hashtag symbol

```css
#polancofb{
    padding: 13px;
}
```

#### C. tags

- for styling html
```css
p{
    color: blue;
}
```

#### D. Pseudos class syntax

- selector:pseudo-class

```css
a:link {
  color: #FF0000;
}
```


#### E. Combinators class syntax

1. descendent combinator [insert a space]
2. child selector [greater than sign symbol: >]
3. adjacent sibling selector: [plus sign: +]
4. general sibling selector: [tilde sign: ~]

### Smooth scroll in one line
```css
html{
    scroll-behavior: smooth;
}
```

### Truncate Text to a specific number of line
```css
p{
    -webkit-line-clamp: 3;
}
```

### Add a shaddow to an image
```css
.drop-shadow{
    filter: drop-shadow(2px 4px 8px #585858);
}
```

### Center Everything thanks to flexbox, align items and justify content
```css
.center{
    display: flex;
    justify-content: center;
    align-items: center;
}
```



### Precedence

- Which selectors are prioritized?[1: highest-priority...4: least priority]?:


1. Inline styles
2. IDs
3. Classes, attributes and pseudo-classes 
4. Elements Elements and pseudo-elements


### Specificity:

1. Cascade
2. Universal
3. Chaining
4. Inherit
5. !important


### Lengths

a. PX

b. REM

c. %

d. vh/vw

e. auto&inherit

### Appearance Properties

1. Fonts
2. Sizing
3. Spacing
4. Alignment


### Properties
1. Flexbox
2. Grid
3. Position
4. Z-index
5. Transform
6. Transition


#### Flow Layout


#### Media Queries


#### Animations & Keyframes

#### At rules ... @font-face

#### SASS, SCSS


### CSS in JS
1. Template Literals
2. Composition
3. Polished
4. Globals
5. Theming



### Text-styling

1. Font Style
```css
font-style: italic;/*other vals: normal, oblique*/
```

2. Font Variant

```css
font-variant: small-caps;/*other vals: normal*/
```

3. Font Weight
```css
font-weight: bold;/*other vals: normal, bolder, lighter, [100, 900]*/
```

4. Font Size can be in px,em,%

```css
font-size: 12px;/*other vals: 0.8em, 80%*/
```

5. Space Between Chars

```css
letter-spacing: normal;/*other vals: 4px*/
```

6. Text Decoration
```css
text-decoration: none;/*other vals: underline, overline, line-through*/
```

7. Line Height
```css
line-height: normal;/*other vals: 3em[3 times the size of the normal font], 34%*/
```

8. Text Transform
```css
text-transform: uppercase;/*other vals: capitalise, lowercase*/
```

10. Text Align last
```css
text-align: last;/*other vals: auto, left, right, center, justify, start, end, initial, inherit*/
```

12. First Line indent
```css
text-indent: 30px;
``` 


13. Font-Family
```css
font-family: 'Open Sans' sans-serif;
```


14. Text Justify
```css
text-justify: auto;/* vals: inter-word, inter-character, none, initial, inherit*/
```

15. Text Overflow
```css
text-overflow: ellipsis;/*other vals: clip, string, initial, inherit*/
```

16. Text Shadow
```css
text-decoration: none;/*other vals: h-shadow, v-shadow, blur-radius color, initial, inherit*/
```

