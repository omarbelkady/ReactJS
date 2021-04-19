## CSS Guide


### How To Target and style HTML thanks to Selectors

#### A. Class

- starts with the . symbol e.g.

```css
.btn{
    border-radius: 12px;
}
```

#### B. id

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
