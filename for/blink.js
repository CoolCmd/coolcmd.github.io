"use strict";

var ИДЕНТИФИКАТОР_РАСШИРЕНИЯ = 'onlakpaheenokdbidfbaelffmaphgedp';
var мсВерсияБраузера = navigator.userAgent.match(/Chrome\/(\d+)/);
if (мсВерсияБраузера)
{
	var сАдресФайла = 'https://clients2.google.com/service/update2/crx?response=redirect&prod=chromiumcrx&prodversion='
		+ encodeURIComponent(мсВерсияБраузера[1])
		+ '&x=id%3D' + encodeURIComponent(ИДЕНТИФИКАТОР_РАСШИРЕНИЯ) + '%26uc';
	console.log(сАдресФайла);
	location.replace(сАдресФайла);
}
