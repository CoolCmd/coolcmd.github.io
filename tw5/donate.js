(function(){"use strict";function e(e){var r=document.createDocumentFragment(),d=document.createElement("tr");d.appendChild(document.createElement("td")),d.appendChild(document.createElement("td")),d.appendChild(document.createElement("td")),d.appendChild(document.createElement("td"));var a=г_мПожертвования.length-4,c=г_мПожертвования.length-396;e||(a=c-4,c=0);for(var o=a;o>=c;o-=4){var l=d.cloneNode(!0);l.childNodes[0].textContent=t("20"+г_мПожертвования[o].slice(1,3)+"-"+г_мПожертвования[o].slice(3,5)+"-"+г_мПожертвования[o].slice(5,7)),l.childNodes[1].textContent=г_мПожертвования[o+2]||"",l.childNodes[2].textContent=n(г_мПожертвования[o+1]),l.childNodes[3].textContent=г_мПожертвования[o+3]||"",r.appendChild(l)}var i=document.getElementById(e?"новые":"старые");i.parentNode.replaceChild(r,i)}function t(e){try{return d||(d=new Intl.DateTimeFormat(void 0,{timeZone:"UTC"}).format),d(new Date(e))}catch(e){}try{return new Date(e).toLocaleDateString()}catch(e){}return e}function n(e){try{return a||(a=new Intl.NumberFormat(void 0,{minimumFractionDigits:0,maximumFractionDigits:1}).format),a(e)}catch(e){}try{return e.toLocaleString()}catch(e){}return String(e)}function r(){var e=this.parentNode.classList,t=this.scrollLeft!==0,n=this.scrollLeft+this.clientWidth<this.scrollWidth;t?e.add("js-прокруткаслева"):e.remove("js-прокруткаслева"),n?e.add("js-прокруткасправа"):e.remove("js-прокруткасправа")}var d=null,a=null;document.addEventListener("DOMContentLoaded",function(){for(var e,t=self!==top,n=0,r=document.querySelectorAll("a[data-href]");e=r[n];n++){var d=e.getAttribute("data-href");e.getAttribute("href")!==d&&e.setAttribute("href",d),t&&e.setAttribute("target","_blank")}},!1),document.getElementById("еще").addEventListener("click",function(t){t.preventDefault(),t.target.blur(),e(!1)},!1),function(){for(var e,t=document.getElementsByClassName("горпрокрутка-прокрутка"),n=0;e=t[n];n++)e.addEventListener("scroll",r,!1),window.addEventListener("resize",r.bind(e),!1),r.call(e)}(),function(){for(var e=Object.create(null),t=0;t<г_мПожертвования.length;t+=4)if(г_мПожертвования[t+2]){var r=г_мПожертвования[t].charAt(0)+г_мПожертвования[t+2],d=e[r];d?(d.чСумма+=г_мПожертвования[t+1],d.сКомментарий||(d.сКомментарий=г_мПожертвования[t+3]||"")):e[r]={"сИмя":г_мПожертвования[t+2],"чСумма":г_мПожертвования[t+1],"сКомментарий":г_мПожертвования[t+3]||""}}for(var a=[],c=(t=0,Object.keys(e));r=c[t];t++)e[r].чСумма>=3e3&&a.push(e[r]);a.sort(function(e,t){return t.чСумма-e.чСумма});var o=document.createDocumentFragment(),l=document.createElement("tr");l.appendChild(document.createElement("td")),l.appendChild(document.createElement("td")),l.appendChild(document.createElement("td")),t=0;for(var i=Math.min(10,a.length);t<i;t++){var m=l.cloneNode(!0);m.childNodes[0].textContent=a[t].сИмя,m.childNodes[1].textContent=n(a[t].чСумма),m.childNodes[2].textContent=a[t].сКомментарий,o.appendChild(m)}var u=document.getElementById("крупные");u.parentNode.replaceChild(o,u)}(),e(!0)})();