## CSS Guide


### Units

1. 1em=16px=100%
2. rem is used to mean relative unit aka relative to the root element
3. % is used for responsive design
4. vh means viewport height and vw means viewport width... used for specific portions of the screen

#### CSS Units Broken Down

- px
    - absolute
    - avoid using for font-sizes
    - use for minor details(e.g. border and shadow)
    - size is fixed
    - NOT Responsive
    - overrides the user's browser preferences

- %
    - relative
    - use when wanting to deal with layouts and width and height
    - e.g. links on a navigation bar, images within a div, etc.

- em
    - relative
    - use when wanting to deal with the size of your font
    - && margin/padding
    - use when you want to make adjustments to margin/padding
    - ...based element font-size
    - parent font size

- rem
    - relative
    - use when wanting to deal with font-size and margin/padding
    - more consistent than em
    - relative to the root html

- vw/vh
    - relative
    - 100vw means full width of the screen
    - use when dealing with bigger layouts i.e. backgrounds
    - use when wanting to make your website responsive

- ch 
    - relative
    - rel to the width of a paragraph
    - general good ux: 45-70 chars per column


#### Absolute Units
-  Fixed and length expressed is what is displayed
- Not Recommended

| Abbreviation | Meaning |  
| ----------- | ----------- |  
| cm | Centimeters |  
| mm | Meters |
| in | Inches i.e. 1 in. = 2.54cm or 0.0254 m |  
| px | Pixels i.e. 1px = 1/96 in. |
| pt | Points i.e. 1pt = 1/72 in. |  
| pc | Picas i.e. 1pc = 12pt |


#### Relative Units

- In relation to another length property
-  Used when dealing with various rendering mediums

| Abbreviation | Meaning |  
| ----------- | ----------- |  
| em | relative to font sz of element |  
| ex | relative to the x height of the curr font |
| ch | relative to the width of "0" |  
| rem | relative to the ft sz of the root elem |
| vw | relative to the 1% of the width of the viewport |  
| vh | relative to the 1% of the height of the viewport |
| vmin | relative to the 1% of the viewport smaller dimension |  
| vmax | relative to the 1% of the viewport larger dimension |
| * | relative to the parent element |  


### Selectors

1. Universal Selector: *
2. Id Selector: #id
3. Class Selector: .className
4. Type Selector: h1,h2,h3,h4
5. Adjacent Sibling Selector: h1+p
6. Child Selector: ul > li
7. General Sibling Selector: h1 ~ p
8. Descendent Selector: p a {}

### Pseudo-classes in CSS


| Class Selector | Meaning |  
| ----------- | ----------- |  
| :active | On An Active Element |  
| :visited | On A Visited Link |
| :focus | On An Element while this element is focus |  
| :disabled | On An Element While this element is disabled |
| :hover | On An Element while this element has your mouse hovered over it |  
| :enabled | On An Element while the element is enabled |
| :link | On An Unvisited Link |  
| :checked | On An Element that is checked |

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

### Master Reset

```css
*{
    border: 0;
    outline: 0;
    padding: 0;
    margin: 0;
    vertical-align: baseline;
    font-weight: inherit;
    font-family: inherit;
    font-style: inherit;
    font-size: 100%;
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

### Use an image/emoji as a cursor

```css
.my-cool-cursor{
    cursor: url('./mycoolcursor.jpg'), auto;
}
```

### Flexbox Container Important Tips to layout stuff in a row or column

```css
display: flex; /*enable flex layout on a container*/
flex-direction: column; /*hhow to align your elements in a row or column fashioned way*/
justify-content: center; /*align items along the main axis*/
align-items: center; /*align items along the cross axis*/
flex-wrap: wrap; /*allow wrapping*/
align-content: center; /*align flex lines along the cross axis*/

```

### Flexbox Item Important Tips to layout stuff in a row or column

```css
align-self: center; /*overwrite the alignment*/
flex-grow: 1; /*growth factor*/
flex-shrink: 0; /*shrink actor*/
flex-wrap: wrap; /*allow wrapping*/
flex-basis: 10rem; /*initial size of an item*/
```

### Tell CSS How many lines you want your text to take

```css
.line-clamp{
    display:webkit-box; 
    -webkit-line-clamp: 3; 
    -webkit-box-orient: vertical;
    overflow: hidden;
}
```

- If you want a shape around some text

```css
.element{
    float: left;
    shape-outside: circle(50%); 
}

```

## Background

### Tells CSS you want a solid color as your background

```css
.header{
    background-color: #0f717d;
}
```


### Tells CSS you want picture as a background

```css
.header{
    background-image: url(background.png);
}
```



### Tells CSS what size you want your background to be

```css
.header{
    background-size: 500px;
}
```


### Tells CSS to move your background within its container

```css
.header{
    background-position: 50% 25%;
}
```

### Tells CSS whether or not to repeat the background and HOW

```css
.header{
    background-repeat: no-repeat;
}
```



### Tells CSS how to move your background relative to the viewport

```css
.header{
    background-attachment: scroll;
}
```



### Tells CSS how your background img should blend with the background color

```css
.header{
    background-blend-mode: soft-light;
}
```


### Tells CSS how far you want your background img or color to extend

```css
.header{
    background-clip: #0f717d;
}
```


### Tell CSS where to paint your background

```css
.header{
    background-origin: border-box;
}
```



### Tell CSS You want a clip under your text

```css
background-clip: border-box; /*other vals: padding-box, content-box, text*/
```

### Precedence

- Which selectors are prioritized?[1: highest-priority...4: least priority]?:

1. Inline styles
2. IDs
3. Classes, attributes and pseudo-classes
4. Elements Elements and pseudo-elements

### Specificity

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

### Inline Elements

- < a >
- < b >
- < br >
- < img >
- < input >
- < label >
- < script >
- < span >


### Block Elements

- < div >
- < footer >
- < h1 >
- < h2 >
- < h3 >
- < h4 >
- < h5 >
- < h6 >
- < header >
- < hr >
- < li >
- < ol >
- < p >
- < section >
- < ul >

### BEM Concept for CSS in React

Block:

- top level component aka a block is considered the parent

Element:

- Regarded as the child elements and are named by tacking two undersquares after the name

Modifiers:

- Manipulators of the block for theme or style of that particular component...naming: add two hyphens to the name of the block

<br />

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

17. Smooth Scrolling Super Awesome effect

```css
window.scrollTop({
    top: 0,
    behavior: 'smooth'
})
```


### Pseudo Elements

- keyword added to a css selector that lets you style a specific part of the selected
- html element. notation is two colons

1. after => ::after
    - last child of the selected html element
2. before => ::before 
    - first child of the selected html element
3. first letter => ::first-letter
    - first letter of the first line of the block element. DNA if there is an img or table coming after
4. first line => ::first-line
    - first line of the block element
5. marker => ::marker
    - selects the marker box of a list item(li) usually it involves your bullet point or number
6. placeholder => ::placeholder
    - points to the placeholder of the input elements in your presentation mostly it is your form
7. selection => ::selection
    - in relation to the highlighted elements of the DOM

```css
/*syntax*/
selector::pseudo-element{
    prop: val;
}

```

### Top CSS Designs

1. <https://www.contra.com/>
2. <https://www.distillocaffe.com/>
3. <https://www.theoceanagency.org/>
4. <https://www.proxy.com/>
5. <https://www.miew.pt/>
6. <https://www.mayerr.com/>

### Simple CSS Animation

```html
<svg width="100vw" height="100vh">
    <text x="45%" y="45%">Hi There</text>
</svg>
```
