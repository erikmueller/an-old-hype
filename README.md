# An old Hype

> Hyper theme inspired by a galaxy far far away...

Based on [An Old Hope](https://github.com/JesseLeite/an-old-hope-syntax-atom) - a splendid atom syntax theme by Jesse Leite

## Features

* __Transparent background__ - Opacity can be customized
* __Visible divider__ - lets you see where tiled terminals begin and end
* __5 theme styles to choose from__
    <!-- too lazy to define classes for that, let's hack! -->
    <ul style="list-style: none; margin-top:10px">
        <li><span style="font-size:smaller; color: #eb3d54">►</span> `vader`</li>
        <li><span style="font-size:smaller; color: #78bd65">►</span> `yoda`</li>
        <li><span style="font-size:smaller; color: #e5cd52">►</span> `threePO`</li>
        <li><span style="font-size:smaller; color: #4fb4d8">►</span> `r2`</li>
        <li><span style="font-size:smaller; color: #ef7c2a">►</span> `luke` (default)</li>
        <li><span style="font-size:smaller; color: hsl(228, 7%, 55%)">►</span> `falcon`</li>
    </ul>


## Settings

You can customize the __background opacity__ and the __style__ as well as the __active tab marker__.
To do so, provide a `themeSettings` object in the `config` property of your `~/.hyper.js`:

```js

config: {
    ...
    // Customize the theme
    themeSettings: {
        // Do not make background transparent (default is 0.9)
        opacity: 1,
        // Switch from luke's orange uniform to master yoda (check the available styles above)
        style: 'yoda',
        // Change the character that mars a tab active
        tabActiveMarker: '💁'
    },
    ...
}
```

## Screenshot

![](screen.png)

`oh-my-zsh` with the `pure` prompt and `Hasklig` font
