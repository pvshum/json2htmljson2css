# Small util to convert JSON obj to HTML or CSS

## Converting JSON to HTML
```
makeHTML = require('json2htmljson2css').makeHTML;

var htmlObj = [{
	tag : "ux-button",
	attr : {
		"id" : "form_field_holder_",
		"class" : "form_field_holder"
	},
	content : [{
		tag : "select",
		attr : {
			"id" : "form_dropdown_",
			"class" : "form_dropdown",
			"name" : 'data[ElSubmissionFormItem][custom_fields]'
		},
		content : 'some content'
	}]
}];

var output = makeHTML(htmlObj);
```
will output
```
<ux-button id="form_field_holder_" class="form_field_holder">
	<select id="form_dropdown_" class="form_dropdown" name="data[ElSubmissionFormItem][custom_fields]">some content</select>
</ux-button>
```
