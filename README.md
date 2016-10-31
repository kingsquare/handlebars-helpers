# Kingsquare handlebars helpers

Install using npm: ``` npm install kingsquare-handlebars-helpers --save```

## Usage

```javascript
var Handlebars = require('kingsquare-handlebars-helpers')(require('handlebars'));
```

```javascript
var Handlebars = require('handlebars');
var Helpers = require('kingsquare-handlebars-helpers').helpers;
Object.keys(Helpers).forEach(function (helper) {
    Handlebars.registerHelper(helper, Helpers[helper]);
});
```