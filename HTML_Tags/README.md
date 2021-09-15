map
## HTML Tags

### Doc Outline

- < !DOCTYPE > Version of your XHTML doc
- < html > HTML Document
- < head > Page Info
- < body > Page Content 

### Doc Structure

- < aside > Actions/Content related to a section
- < br /> Single Line Break
- < div > Section Of your Page
- < em > Emphasized text
- < figcaption > Define caption for your Images
- < figure > Define Image and Caption Combos
- < font > Font, Color and Size Of Text
- < header > Headers with multiple Element
- < hr > Horizontal Rule
-  < h1 > Through < h6 > Heading
- < i > Italicized Text
- < img > Image
- < main > Main Routable Element
- < nav > Navigation Elements
- < p > Paragraph
- < section > Section Within A Document
- < small > Smaller Text
- < span  > Inline Section of your page
- < strikethrough > Strikethrough Text
- < strong > Bold Text
- < time > Date or Time Vals
- < u > Underline


### Location

- MAP tag to display location of some place
```html
<map name="frame">
    <area shape="rect" coords="34,44,270,350" href="">
    <area shape="rect" coords="291,170,330,250" href="">
</map>
```


### Forms

- < form> To Create A Form
- < fieldset> To create a set of fields
- < legend> Your Form's legend
- < label /> Your Form's Input Label
- < input /> Form Input Box
- < select > Drop Down Menu Box
- < optgroup > A Group of Options
- < option > Options From The Drop Down Menu
- < textarea > Large Text input
- < button > A simple Button


### Input Type Fields

- < input type="url" > To enter a URL
- < input type="range" > A slider to let you choose which number you wish
- < input type="tel" > An input field to let you enter your phone number
- < input type="datetime-local" > An input field which lets you select the day from a calendar
- < input type="month" > An input field which lets you select the month from a calendar
- < input type="week" > An input field which lets you select the week from a calendar
- < input type="color" > An input field which lets you choose the color you want from a palette
- < input type="text" /> 
	 < datalist id="profs" >
		 < option val="dj" >
		 < option val="pol2626" > 
	 < /datalist > 
	- An input suggestion field



### Lazy Loading:

- prevents the loading of images until you scroll to the image

```html
<img src="image.jpg" loading="lazy" width="300">
```


### Multiple Images

- Add Multiple Images depending on the Size of Screen
```html
<picture>
    <source media="min-width: 650px)" srcset="img_pol_32.jpg">
    <source media="min-width: 465px)" srcset="img_dj_32.jpg">
    <img src="2272ie.jpg" alt="35FB" style="width:auto;">
</picture>
```


### Base URL

- Use relative paths in images or urls in images or a tag
```html
<head>
    <base hrf="https://www.somecoolstuff.com/" target="_blank">
</head>
<body>
    <img src="images/myImg1.png">
    <a href="tags/colors.html">HTML Base Tag</a>
</body>
```


### Input Suggestions

```js
<label for="browser">Choose your browser from the list </label>
<input list="browsers" name="browser" id="browser">

<datalist id="browsers">
    <option value="Edge">
    <option value="Firefox">
    <option value="Chrome">
    <option value="Opera">
    <option value="Safari">
    <option value="IE">
</datalist>
```

### Links

- < a href="" > A Page Hyperlink you want to be redirected to
- < a href="mailto: x" > This sends an email to the x recipient
- < a name="name" > Anchor Tag
- < a href="#name" > Link to another page on the website or some other route


### Lists

- < ul > Unordered List

- < ol > Ordered List

- < li > List Item

- < dl > Definition List

- < dt > Defintion Term

- < dd > Term Description


### Page Info

- < base /> Base URL

- < meta /> Meta Data

- < title > Title for clickable headlines on the Search Engine

- < link /> Relevant Resource

- < style >   Style Resource

- < bdo > To override the text direction

- < template > store some content and hide it when the page loads only display it to JS

- < meter > measure data in a specific range

- < dialog > dialog box

- < details > create an interactive widget that the user can open and close

- < progress > display the progress of a task aka progress bar for your website


### Tables

- < caption > To create a caption for your table

- < col > Your Table Column

- < colgroup > A Column Group

- < table > To Create A New Table

- < tbody > Your table's body

- < td > The data within table cell

- < tfoot > Your Table Footer Content

- < th > Your Table's header for that cell

- < thead > Table Header content

- < thread > Thread

- < tr > Table Row

### Description Tag

- It is used to set up descriptions within search result snippets

```html
<head>
    <meta name="description" content="call to action and 2526 56837 7652626">
</head>
```

### Search Field

```html
<input type="search" id="search" name="search">
```

### Email Address  Field

```html
<input type="email" id="email" name="email">
```

### URL Address Field

```html
<input type="url" id="url" name="url">
<input type="reset">
```


### Slider Controls Field

```html
<input type="range" name="price" min="1000" max="10000" value="8500">
<output for="price">8500</output>
```

### Phone Number Field

```html
<input type="tel" id="tel" name="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}">
```

### Date Time Field

```html
<input type="datetime-local" name="datetime">
<input type="month" name="month">
<input type="week" name="week">
```

### Time And Color Field

```html
<input type="time" name="time">
<input type="color" name="color" id="color">
```

### Subscript e.g. x-sub1
```html
<p>x<sub>1</sub></p>
```


### Superscript e.g. x^2
```html
<p>x<sup>2</sup></p>
```



### Robots tag

```html
<head>
    <meta name="robots" content="nopolan32, nodj32">
    <meta name="googlebot" content="nochen78ng, nofollow">
    <!-- Various other follow bots: googlebot, bingbot, duckduckbot, etc.-->
</head>
```


### Canonical Tag

```html
<head>
    <meta name="canonical" href="https://www.yourwebsite.com" />
</head>
```

### Charset Tag

```html
<head>
    <meta charset="UTF-8">
</head>
```

### Viewport Tag For Responsiveness

```html
<head>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
```

### Keywords Tag

```html
<head>
    <meta name="keywords" content="all the keywords you wish to put separated by comma">
</head>
```

### Author Tag

```html
<head>
    <meta name="author" content="Polandev Community">
</head>
```



### HTML5 Page Layout

- ![HTML5 Page Layout](https://user-images.githubusercontent.com/31806568/123695400-69454f80-d852-11eb-941a-c5f93f80d4db.jpg)


### Emmet

1. Child operator i.e. >
div > ul > li
```html
<div>
    <ul>
        <li></li>
    </ul>
</div>
```

2. ! Operator gives you html5 boiler plate code
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    
</body>
</html>
```

3. Child Operator > i.e. div > ul > li Means to nest elem inside each other

```html
<div>
    <ul>
        <li></li>
    </ul>
</div>
```


4. Sibling Operator + meaning place things near each other: div+p+a
```html
<div></div>
<p></p>
<a></a>
```

5. Multiplication operator: * can define how many times elem should be outp

- ul>li*5
```html
<ul>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
    <li></li>
</ul>
```

6. Grouping Operator: ()

- div > (header>ul>li*2>a)
```html
<div>
    <header>
        <ul>
            <li><a href=""></a></li>
            <li><a href=""></a></li>
        </ul>
    </header>
</div>
```

7. Item Numbering Operator: $ 

- ul>li.item$*5
```html
<ul>
    <li class="item1"></li>
    <li class="item2"></li>
    <li class="item3"></li>
    <li class="item4"></li>
    <li class="item5"></li>
</ul>

```

8. Curly Brace means Text: {}

- a {Click Me}
```html
<a href="">Click Me</a>
```


9. Id Vs Class

- .container ===> class
```html
<div class="container">

</div>
```

- #wrapper ===> id
```html
<div id="wrapper">

</div>
```


