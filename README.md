#Gallop Carousel Slider

An minimalistic, barebones carousel slider. I try to let CSS do most of the work so it's lightweight. I try to make the code readable so it's easy to configure.

##Installation

Include jQuery, the Javascript and CSS. 

```html
<script src="http://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js" ></script>
<script src="gallop.js"></script>
<link href="gallop.css" rel="stylesheet">
```

Put your content in an HTML list, wrap it with a `<div>` with the class `gallop`.

```html
<div class="gallop">
    <ul>
        <li>one</li>
        <li>two</li>
        <li>three</li>
        <li>four</li>
    </ul>
</div>
```

##Configuration

You already know Javascript. Why complicate things with tons of options and features? If you want to make a change, just tweak the code directly!

###Autoplay
Toggle default autoplay or adjust speed with these vars:
````js
var autoPlay = true;
var autoPlaySpeed = 3000;
```

###Controls

Remove controls you don't want by commenting them out:
```js
controls += '<div class="retreat">&laquo;</div>';
controls += '<div class="autoplay"></div>';
for (var i = 0; i < itms; i++) {
    controls += "<div class='picker' data-item='"+i+"'>"+i+"</div>";
}
controls += '<div class="advance">&raquo;</div>';
```

To get rid of the numbers in the picker dots, remove `"+(i+1)+"` from this line:
```js
controls += "<div class='picker' data-item='"+i+"'>"+(i+1)+"</div>";
```

To position the controls, mess with the CSS class:
```css
.gallop .controls {
    bottom: -40px;
    right: 0;
    left:0;
}
```

###Styling & Themes
Styling is fairly minimalistic in the CSS file and is mostly structural. Create your own "theme" by adding your theme name as a class to the element:
```html
<div class="gallop myTheme">
```

and then prefix your custom CSS with that class:
```css
.gallop.myTheme .controls {
    background-color: hotpink;
    border: dashed 5px red;
    box-shadow: 5px 5px 5px blue;
}
```



