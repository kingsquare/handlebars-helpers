# Kingsquare handlebars 2.0 helpers

Install using npm: ``` npm install kingsquare-handlebars-helpers --save```

## Usage

```javascript
var handlebars = require('handlebars');
var helpers = require('kingsquare-handlebars-helpers');

Object.keys(helpers).forEach(function (helperName) {
	handlebars.registerHelper(helperName, helpers[helperName]);
});
```

## Helpers

| Block | Description | Params |
| --- | --- | --- |
| compare | compares a `value` by operation `eq`, `eqeq`, `neq`, `neqeq` , `lt` , `gt` , `lte`, `gte`, `typeof`, `regexp`, `mod`.  | `value`, `operation`, `expected ` |


### Compare

Compares a value by operation `eq`, `eqeq`, `neq`, `neqeq` , `lt` , `gt` , `lte`, `gte`, `typeof`, `regexp`, `mod`.

Parameters:

  `value`, `operation`, `expected `

Examples:

    {#compare this "eq" "that"}
        Hello
    {/compare}

Inversion support

    {#compare this "eq" "that"}
        Hello
    {else}
        Goodbye
    {/compare}
