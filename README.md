```
var rawHtml = [{
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

var output = makeHTML(rawHtml);
```
