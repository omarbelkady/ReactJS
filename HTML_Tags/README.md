## HTML Tags

### Doc Outline

- <!DOCTYPE> Version of your XHTML doc
- <html> HTML Document
- <head> Page Info
- <body> Page Content 

### Doc Structure

-  <h1> Through <h6> Heading
- <div> Section Of your Page
- <span> Inline Section of your page
- <p> Paragraph
- <br /> Line Break
- <hr></hr> Horizontal Rule

### Forms

- <form> To Create A Form
- <fieldset> To create a set of fields
- <legend> Your Form's legend
- <label /> Your Form's Input Label
- <input /> Form Input Box
- <select> Drop Down Menu Box
- <optgroup> A Group of Options
- <option> Options From The Drop Down Menu
- <textarea> Large Text input
- <button> A simple Button


### Input Type Fields

- <input type="url"> To enter a URL
- <input type="range"> A slider to let you choose which number you wish
- <input type="tel"> An input field to let you enter your phone number
- <input type="datetime-local"> An input field which lets you select the day from a calendar
- <input type="month"> An input field which lets you select the month from a calendar
- <input type="week"> An input field which lets you select the week from a calendar
- <input type="color"> An input field which lets you choose the color you want from a palette
- <input type="text"/> <datalist id="profs"> <option val="dj"> <option val="pol2626"> </datalist>An input suggestion field
- 


### Links

- <a href=""> A Page Hyperlink you want to be redirected to
- <a href="mailto: x"> This sends an email to the x recipient
- <a name="name"> Anchor Tag
- <a href="#name"> Link to another page on the website or some other route


### Lists

- <ul> Unordered List

- <ol> Ordered List

- <li> List Item

- <dl> Definition List

- <dt> Defintion Term

- <dd> Term Description


### Page Info

- <base /> Base URL

- <meta /> Meta Data

- <title> Title

- <link /> Relevant Resource

- <style >   Style Resource

- <bdo> To override the text direction

- <template> store some content and hide it when the page loads only display it to JS

- <meter> measure data in a specific range

- <dialog> dialog box

- <details> create an interactive widget that the user can open and close

- <progress> display the progress of a task aka progress bar for your website


### Tables

- <table> To Create A New Table

- <caption> To create a caption for your table

- <thread> Thread

- <tbody> Your table's body

- <tfoot> Your Table Footer

- <colgroup> A Column Group

- <col> Your Table Column

- <tr> Table Row

- <th> Your Table's header for that cell

- <td> The data you will place in your table cell

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