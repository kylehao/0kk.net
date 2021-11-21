(function() {
	var rootPath = "/common/js/",
		filePath = [
			"jquery-1.9.0.min.js",
			"jquery.easing.min.js",
			"common.js",
			"script.js"
		],
		length = filePath.length;

	for ( var i = 0; i < length; i++ )
		document.write("<script src='" + rootPath + filePath[i] + "'></script>");


	if ( !Array.prototype.indexOf ) {
		Array.prototype.indexOf = function(elt /*, from*/) {
			var len = this.length,
				from = Number(arguments[1]) || 0;

			from = ( from < 0 ) ? Math.ceil(from) : Math.floor(from);
			if ( from < 0 )  from += len;
	
			for ( ; from < len; from++ )
				if (from in this && this[from] === elt)  return from;

			return -1;
		};
	}

	var userAgent = window.navigator.userAgent.toLowerCase(),
		appVersion = window.navigator.appVersion.toLowerCase();

	if ( userAgent.indexOf("msie") != -1 ) {
		if ( appVersion.indexOf("msie 6.") != -1 || appVersion.indexOf("msie 7.") != -1 || appVersion.indexOf("msie 8.") != -1 ) {
			document.write("<script src='http://www.tamanabokujo.jp/common/js/html5.js'></script>");
			document.write("<script src='" + rootPath + "/common/js/selectivizr-min.js'></script>");
		}
	}
})();
