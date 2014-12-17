Gallop Carousel Slider
======================

An extremely simple, barebones carousel. I try to let CSS do most of the work. My philosophy: why complicate things with tons of options and features? You already know Javascript and jQuery. If you want to make a change, just tweak it!

Installation
============

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

Tweak things until you're happy.

Autoplay:
````js
var autoPlay = true;
```

Rotation speed:
```js
function autoGallop(){
    if(autoPlay){
        gallop();
        setTimeout( autoGallop, 3000 );
    }
}
```

Numbers in picker dots:
```js
for (var i = 0; i < itms; i++) {
    controls += "<div class='picker' data-item='"+i+"'>"+i+"</div>";
}
```

Controls positioning:
```css
.gallop .controls {
    bottom: -40px;
    right: 0;
    left:0;
}
```



