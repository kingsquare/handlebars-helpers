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
| concat |  concats values | `a`, `b` |
| csvEscape | Escape value for use in CSV | `value` |
| dateFormat |  |  |
| filter | Filter `object` by given `operation` on `key` using `value` |  `object`, `key` , `operation`, `value` |
| fromContainer |  |  |
| host |  |  |
| nl2br | Translate line breaks to html breaks | `value` |
| price | Make a number a human readable price (with possible currency) | `value`, `currencySymbol` (optional) |
| untilDateFormat |  |  |
| urlencode | URL encodes the given value | `value` |

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

### Price

Make a number a human readable price (with possible currency)

Parameters:

  `value`, `currencySymbol`
  
Examples:

    {price this}
    
    {price this "€"}

### urlencode

URL encodes the given value

Parameters:

  `value`
  
Examples:

    {urlencode this}
  

