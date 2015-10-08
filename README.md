# Kingsquare handlebars 4.0 helpers

Install using npm: ``` npm install kingsquare-handlebars-helpers --save```

## Usage

```javascript
var handlebars = require('handlebars');
var helpers = require('kingsquare-handlebars-helpers');

Object.keys(helpers).forEach(function (helperName) {
	handlebars.registerHelper(helperName, helpers[helperName]);
});
```
