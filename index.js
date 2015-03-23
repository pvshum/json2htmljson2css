module.exports = {
	makeCSS: function (rawCSS) {
		var count = rawCSS.length;
		var outputCss = '';
		for (var i = 0; i < count; i++) {
			//selectors: // http://www.w3schools.com/cssref/css_selectors.asp
			outputCss += rawCSS[i].selector + ' { ';
			for (var key in rawCSS[i].properties) {
				if (rawCSS[i].properties.attr.hasOwnProperty(key)) {
					outputCss += '' + key + ': ' + rawCSS[i].properties[key] + '; ';
				}
			}
			outputCss += '} ';
		}
		return outputCss;
	},
	makeHTML: function (rawObj) {
		var make = function (rawObj, outputJHTML) {
			var count = rawObj.length;
			outputJHTML = outputJHTML || '';
			for (var i = 0; i < count; i++) {
				outputJHTML += '<' + rawObj[i].tag;
				var attr = '';
				for (var key in rawObj[i].attr) {
					if (rawObj[i].attr.hasOwnProperty(key)) {
						attr += ' ' + key + '="' + rawObj[i].attr[key] + '"';
					}
				}
				attr += (rawObj[i].attr_str !== undefined) ? rawObj[i].attr_str : '';
				outputJHTML += attr;
				outputJHTML += (rawObj[i].content === undefined) ? '/>' : '>';
				if (rawObj[i].content !== undefined) {
					if (typeof rawObj[i].content === 'object') {
						outputJHTML = make(rawObj[i].content, outputJHTML);
					} else {
						outputJHTML += rawObj[i].content;
					}
					outputJHTML += '</' + rawObj[i].tag + '>';
				}
			}
			if (i === count) {
				return outputJHTML;
			}
		};
		return make(rawObj);
	}
};
