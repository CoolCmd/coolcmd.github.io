'use strict';

function ЗаполнитьДоскуПочета()
{
	var оФрагмент = document.createDocumentFragment();
	г_мПожертвования.forEach(function(мСтрока)
	{
		var узСтрока = document.createElement('tr');
		ДобавитьЯчейку(узСтрока, СоздатьДату(мСтрока[0]));                        // Когда
		ДобавитьЯчейку(узСтрока, ПеревестиВалютуВСтроку(мСтрока[1], мСтрока[2])); // Сколько
		ДобавитьЯчейку(узСтрока, мСтрока[3]);                                     // От кого
		ДобавитьЯчейку(узСтрока, мСтрока[4]);                                     // Откуда
		ДобавитьЯчейку(узСтрока, мСтрока[5]);                                     // Комментарий
		оФрагмент.insertBefore(узСтрока, оФрагмент.firstChild);
	});
	var узВставить = document.getElementById('вставить');
	узВставить.parentNode.replaceChild(оФрагмент, узВставить);
}

function ДобавитьЯчейку(узСтрока, пСодержимое)
{
	var узЯчейка = document.createElement('td');
	узЯчейка.appendChild(typeof пСодержимое === 'string' ? document.createTextNode(пСодержимое) : пСодержимое);
	узСтрока.appendChild(узЯчейка);
}

function СоздатьДату(сДата)
{
	var узВремя = document.createElement('time');
	узВремя.setAttribute('datetime', сДата);
	узВремя.appendChild(document.createTextNode(ПеревестиДатуВСтроку(сДата)));
	return узВремя;
}

function ПеревестиДатуВСтроку(сДата)
{
	try
	{
		return (new Date(сДата)).toLocaleDateString();
	}
	catch (_)
	{
		return сДата;
	}
}

function ПеревестиВалютуВСтроку(чЗначение, сКодВалюты)
{
	if (typeof Intl === 'object' && Intl !== null && typeof Intl.NumberFormat === 'function')
	{
		return чЗначение.toLocaleString(
			undefined,
			{
				style: 'currency',
				currency: сКодВалюты,
				minimumFractionDigits: 0,
				maximumFractionDigits: 1
			}
		);
	}
	return чЗначение.toLocaleString() + '\u00A0' + сКодВалюты;
}

function НастроитьГоризонтальнуюПрокрутку()
{
	var сузПрокрутка = document.getElementsByClassName('горпрокрутка-прокрутка');
	for (var ы = 0, узПрокрутка; узПрокрутка = сузПрокрутка[ы]; ++ы)
	{
		узПрокрутка.addEventListener('scroll', ОбработатьScroll, false);
		ОбработатьScroll(узПрокрутка);
	}
	if (сузПрокрутка.length !== 0)
	{
		window.addEventListener(
			'resize',
			function()
			{
				for (var ы = 0, узПрокрутка; узПрокрутка = сузПрокрутка[ы]; ++ы)
				{
					ОбработатьScroll(узПрокрутка);
				}
			},
			false
		);
	}
}

function ОбработатьScroll(узПрокрутка)
{
	if (узПрокрутка.type === 'scroll')
	{
		узПрокрутка = узПрокрутка.target;
	}
	var оКлассы = узПрокрутка.parentNode.classList;
	if (узПрокрутка.scrollLeft !== 0)
	{
		оКлассы.add('js-прокруткаслева');
	}
	else
	{
		оКлассы.remove('js-прокруткаслева');
	}
	if (узПрокрутка.scrollLeft + узПрокрутка.clientWidth < узПрокрутка.scrollWidth)
	{
		оКлассы.add('js-прокруткасправа');
	}
	else
	{
		оКлассы.remove('js-прокруткасправа');
	}
}

function ЗащититьАдресСсылок()
// Коварный Google Translate меняет ссылки, чтобы переводить страницы, на которые они указывают. В том числе
// меняются ссылки, ведущие на другие сайты, которые уже переведены на другие языки, например PayPal.
// TODO Найти способ перевести только одну страницу, не трогая ссылки.
{
	document.addEventListener('DOMContentLoaded', function()
	{
		var лЗапускВоФрейме = window.top !== window;
		var сузСсылки = document.querySelectorAll('a[data-href]');
		for (var ы = 0, узСсылка; узСсылка = сузСсылки[ы]; ++ы)
		{
			узСсылка.setAttribute('href', узСсылка.getAttribute('data-href'));
			if (лЗапускВоФрейме)
			{
				узСсылка.setAttribute('target', '_blank');
			}
		}
	}, false);
}

ЗаполнитьДоскуПочета();
НастроитьГоризонтальнуюПрокрутку();
ЗащититьАдресСсылок();
