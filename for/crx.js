'use strict';

var EXTENSION_ID = 'onlakpaheenokdbidfbaelffmaphgedp';

var asBrowserVersion = navigator.userAgent.match(/Chrome\/(\d+)/);
var sFileUrl = 'https://clients2.google.com/service/update2/crx?response=redirect&prod=chromiumcrx&prodversion='
	+ encodeURIComponent(asBrowserVersion[1])
	+ '&x='
	+ encodeURIComponent('id=' + EXTENSION_ID + '&uc');
console.log(sFileUrl);
location.replace(sFileUrl);
