'use strict';

// Из суммы вычтена комиссия платежной системы за перевод средств и конвертацию валюты.
window.г_мПожертвования =
[
	["2016-04-12",  100, "RUB", "Садовников Олег"          , "PayPal"      , ""],
	["2016-04-12",   99, "RUB", "2687"                     , "Yandex.Money", "спасибо за труд от RuNet) и добра тебе"],
	["2016-04-13",    3, "USD", "TMB"                      , "WebMoney"    , "На пиво :) Спасибо за твою работу!"],
	["2016-04-13",  500, "RUB", ""                         , "Yandex.Money", ""],
	["2016-04-13",  145, "RUB", ""                         , "Yandex.Money", ""],
	["2016-04-13",    9, "RUB", "2805"                     , "Yandex.Money", ""],
	["2016-04-24",   60, "RUB", ""                         , "PayPal"      , "от iG0Lki - на мороженое :)"],
	["2016-06-08",  294, "RUB", ""                         , "Yandex.Money", "Чувак, на пивас. Не вздумай останавливаться)"],
	["2016-07-01",  200, "RUB", "Gritsenko Denis"          , "PayPal"      , "Отличное расширение! Не забрасывай"],
	["2016-09-16",  200, "RUB", ""                         , "Yandex.Money", ""],
	["2017-01-09",  200, "RUB", ""                         , "Yandex.Money", ""],
	["2017-02-07",   55, "RUB", "Oleg Korotych"            , "WebMoney"    , "Спасибо"],
	["2017-02-07",   10, "RUB", "5080"                     , "Yandex.Money", "спасибо"],
	["2017-02-15",   86, "RUB", "Сергей Юрченко"           , "PayPal"      , "спасибо. классное расширение. правда, не видно описание стрима, где часто FAQ и расписание стримов указывают"],
	["2017-04-05",  305, "RUB", "Omar Alomair"             , "PayPal"      , ""],
	["2017-04-23",  0.6, "USD", "Miguel Bonaldi"           , "PayPal"      , "SOY UN DIOS GENEROSO ALV XD"],
	["2017-05-29",  100, "RUB", "Юркин Александр"          , "PayPal"      , "Единственный адекватный способ просматривать твич. Сяп."],
	["2017-06-02",  194, "RUB", "LittleMontana"            , "Yandex.Money", ""],
	["2017-06-02",  300, "RUB", "Цапков Алексей"           , "PayPal"      , "Спасибо за отличное расширение! Использую его в опере и не работает BTTV, можно что-то с этим сделать?"],
	["2017-06-06",  500, "RUB", ""                         , "Yandex.Money", "Спаситеееееель ))))"],
	["2017-06-08",  500, "RUB", "Цапков Алексей"           , "PayPal"      , "Спасибо огромное ещё раз! BTTV заработал в опере Kreygasm"],
	["2017-06-10",  0.8, "BRL", "Alexsandro Schneider"     , "PayPal"      , "Very good plugin"],
	["2017-06-20",  9.1, "USD", "Amogh Bhatawdekar"        , "PayPal"      , "Love this addon ! Only thing worked to fix my Twitch buffering !! Love Love love Love !!"],
	["2017-06-24",  100, "RUB", ""                         , "Yandex.Money", "Отличное расширение, спасибо!"],
	["2017-06-24",  9.1, "USD", "Lucas Passos"             , "PayPal"      , ""],
	["2017-07-04",  0.3, "USD", "Aleksag"                  , "WebMoney"    , "spasibo"],
	["2017-07-05",  150, "RUB", "5808"                     , "Yandex.Money", "Спасибо за расширение."],
	["2017-07-28", 1000, "RUB", ""                         , "Yandex.Money", "Лучший"],
	["2017-07-30",  125, "RUB", "Oleg Korotych"            , "WebMoney"    , "Спасибо"],
	["2017-07-30",   10, "USD", "Jonathan Kobayashi"       , "PayPal"      , "Thank you for implementing the chat under the video! You're the first developer that has turned my feedback into reality. Keep up the great work!"],
	["2017-10-24",  575, "RUB", ""                         , "Yandex.Money", ""],
	["2017-11-07",   84, "RUB", "Eremite B"                , "PayPal"      , ""],
	["2017-11-11",    1, "EUR", "Jeroen Mennen"            , "PayPal"      , "https://www.youtube.com/watch?v=M7b80Eb0hR‍k"],
	["2017-11-12",    2, "USD", "Nathaniel Tan"            , "PayPal"      , ""],
	["2017-12-01",    5, "CHF", "Jan Zimmermann"           , "PayPal"      , "thanks for making this great extension. it's not a lot. hope it helps :)"],
	["2017-12-13",  500, "RUB", ""                         , "Yandex.Money", ""],
	["2017-12-18",   10, "USD", "Fabrice Denis"            , "PayPal"      , "Great addon. Thank you."],
	["2017-12-20",  338, "JPY", "石橋 僚太"                 , "PayPal"      , "twitch5 donate"],
	["2017-12-23",   25, "USD", "Timothy Kimball"          , "PayPal"      , ""],
	["2018-01-08",   15, "CHF", "Urs Stettler"             , "PayPal"      , ""],
	["2018-01-09",  500, "RUB", "Ivan Ivanov"              , "PayPal"      , "Good job."],
	["2018-01-23",    3, "GBP", "Adam Barnett"             , "PayPal"      , ""],
	["2018-03-04",  2.5, "USD", "shogo89"                  , "WebMoney"    , "horoshee"],
	["2018-03-06",   50, "SEK", "Magnus Hellström"         , "PayPal"      , "Thanks for your hard work, I'm really enjoying your \"alternate player\", It's a great extension."],
	["2018-03-07",    5, "CAD", "David Ruck"               , "PayPal"      , "Thanks for the extension. Hope to see some good things from it in the future."],
	["2018-03-07",    5, "CHF", "Urs Stettler"             , "PayPal"      , ""],
	["2018-03-08",    3, "EUR", "Alexander Dmytriienko"    , "PayPal"      , ""],
	["2018-03-13",    5, "EUR", "Justin Mages"             , "PayPal"      , "Alternate Player for Twitch.tv is just that amazing"],
	["2018-04-04",    5, "USD", "Nyle Graham"              , "PayPal"      , "Thanks for twitch 5"],
	["2018-04-07",   10, "USD", "William Gaebelein"        , "PayPal"      , ""],
	["2018-04-08",   10, "EUR", "Petru Vlad Rosca"         , "PayPal"      , "Thank you for a great Firefox extension"],
	["2018-04-08",   10, "USD", "Eric Kuehl"               , "PayPal"      , "Thanks for the extension my dude"],
	["2018-04-24",   10, "USD", "Mohamed Husain"           , "PayPal"      , "I can barely watch twitch without the extension anymore! Glad to see you updating so quickly to fix things twitch breaks."],
	["2018-04-25",    3, "GBP", "Simon Mound"              , "PayPal"      , "Thanks for a great extension dude."],
	["2018-04-25",    5, "USD", "Christian Abate"          , "PayPal"      , ""],
	["2018-04-25",    5, "USD", "Rough Image Studios"      , "PayPal"      , "Thanks for making a great extension and keeping it regularly updated. Keep up the good work."],
	["2018-04-25",    5, "USD", "Benjamin Larkin"          , "PayPal"      , "extension has really improved my twitch experience. thank you for taking your personal time to develop this free for us. <3"],
	["2018-04-25",    5, "EUR", ""                         , "PayPal"      , ""],
	["2018-04-25",   40, "RUB", "7963"                     , "Yandex.Money", ""],
	["2018-04-25",   50, "SEK", "Patrick Skogh"            , "PayPal"      , "Thanks for a well made addon!"],
	["2018-04-26",    3, "GBP", "Nathan Tran"              , "PayPal"      , "Much needed QoL and visual features, thanks."],
	["2018-05-19",   10, "USD", "Alekseb"                  , "WebMoney"    , "thanks for a great extension"],
	["2018-05-28",  300, "RUB", "Fedor Stepanov"           , "PayPal"      , "Спасибо за отличное расширение!"],
	["2018-05-29",  219, "RUB", ""                         , "WebMoney"    , ""],
	["2018-06-11",    4, "GBP", "Todor Dobrev"             , "PayPal"      , ""],
	["2018-06-12", 1000, "RUB", "7947"                     , "Yandex.Money", "Большое спасибо за отличное расширение! Родной плеер твича стал показывать рекламу, несмотря на адблок, а в этом плеере и рекламы нет, и сам работает гораздо лучше. Продолжай в том же духе!"],
	["2018-06-13",    5, "GBP", "Josh Bartram"             , "PayPal"      , "Excellent service, thankyou for providing and keeping it updated. If I can, I will donate monthly. Keep being awesome :)"],
	["2018-06-16",   20, "NZD", "Anthony Neville"          , "PayPal"      , "For the moment ad-blockers are failing to block twitch ads, so I use this extension. It does the job."],
	["2018-06-16",  250, "RUB", "Коренев Никита"           , "PayPal"      , ""],
	["2018-06-24",   20, "USD", "Ryan Barrera"             , "PayPal"      , ""],
	["2018-07-08",   30, "PLN", "Artur Pniak"              , "PayPal"      , ""],
	["2018-07-18",  100, "RUB", ""                         , "Yandex.Money", ""],
	["2018-08-05",   10, "USD", "Steven East"              , "PayPal"      , ""],
	["2018-08-15", 2000, "RUB", ""                         , "Yandex.Money", ")))Ну блин, вопрос ток один, почему программеры твича так не могут. Тупо лучший, снова пробудил веру в человечество и светлое будущее"],
	["2018-08-21",  200, "RUB", ""                         , "Yandex.Money", ""],
	["2018-08-21",    5, "GBP", "Todor Dobrev"             , "PayPal"      , ""],
	["2018-08-22",    5, "GBP", "Maciej Koszanski"         , "PayPal"      , ""],
	["2018-08-22",    5, "USD", "Keith Calistro"           , "PayPal"      , ""],
	["2018-08-22",    3, "EUR", "Florian Gernart"          , "PayPal"      , "This extension is amazing."],
	["2018-09-01",    1, "USD", "Sean Gallagher"           , "PayPal"      , ""],
	["2018-09-21",  100, "RUB", ""                         , "Yandex.Money", ""],
	["2018-10-16",  507, "RUB", "Riley Snoke"              , "PayPal"      , "Keep Alternate Player for Twitch.tv ALIVE!"],
	["2018-10-21",    5, "NZD", "Steven Easton"            , "PayPal"      , ""],
	["2018-10-28",   10, "USD", "intrTek Services"         , "PayPal"      , ""],
	["2018-10-28",    5, "EUR", "Tobias Stelzer"           , "PayPal"      , ""],
	["2018-10-29",    5, "AUD", "Darren Gilbert"           , "PayPal"      , "Thanks for the new 'Audio Only' mode! Any chance for a way to remember options chosen on different streams?"],
	["2018-10-29",    5, "USD", "Olegs Zuridovs"           , "PayPal"      , "No ADS forever"],
	["2018-10-29",    5, "USD", "Roscoe Romero"            , "PayPal"      , ""],
	["2018-10-30",   10, "EUR", "Jens Neumaier"            , "PayPal"      , "Thanks for providing great free software!"],
	["2018-10-30",    5, "USD", "Michael Renigen"          , "PayPal"      , "This is great! Thanks for a great plugin!"],
	["2018-10-30",    3, "EUR", "Imre Kristoffer Eilertsen", "PayPal"      , "This extension is a really good way to keep my CPU usage low when I use a passive cooler for it; considering how much of a CPU hog Twitch ordinarily is."],
	["2018-10-30",    1, "AUD", "Dorian Eisman"            , "PayPal"      , ""],
	["2018-11-01",  200, "RUB", "Kristoffer Levin Hansen"  , "PayPal"      , ""],
	["2018-11-03",   20, "EUR", "Rhacco"                   , "PayPal"      , "Incredible alternate Twitch player, runs so smooth and I love the instant replay function. Wish I had discovered this add-on sooner. As a fellow developer, I really appreciate your work here, keep it up!"],
	["2018-11-04",   85, "CZK", "Ondrej Lasak"             , "PayPal"      , ""],
	["2018-11-07",  660, "RUB", "David Wiley"              , "PayPal"      , ""],
	["2018-11-08",   57, "RUB", "Belgards misc."           , "PayPal"      , ""],
	["2018-11-11",  707, "RUB", ""                         , "PayPal"      , "Thank you for the player. It is so much better than the original one."],
	["2018-11-11",  627, "RUB", ""                         , "PayPal"      , "Hope it helps bud! great extension :)"],
	["2018-11-11",  4.5, "USD", "Aleh Malakhau"            , "PayPal"      , ""],
	["2018-11-12",  277, "RUB", "Andreas Hoffmann"         , "PayPal"      , "using this for a while. wonderful peace of software. clean, fast, just perfect*. Thank you!!! (* besides of missing past broadcast ssupport :-)"],
	["2018-11-14", 1000, "RUB", "mel-off"                  , "WebMoney"    , "Прекраснейшее расширение, огромное спасибо. Нужно как-то его продвигать среди масс. Возможно договориться со стримерами о рекламе как must have расширения для русского твитча."],
	["2018-11-19",  946, "RUB", "Alex Stich"               , "PayPal"      , "Thank you for keeping this extension free and thank you for keeping the interface clean."],
	["2018-12-25",   10, "GBP", "David Pacey"              , "PayPal"      , "Happy Christmas"],
	["2018-12-30",   19, "CAD", "Oleksandr Lutsiv"         , "PayPal"      , ""],
	["2019-01-01",  100, "RUB", "Алымов Артем"             , "PayPal"      , "С новым годом! Спасибо за отличный плеер для твича))"],
	["2019-01-17",  1.6, "USD", "John McCormick"           , "PayPal"      , ""],
	["2019-02-03", 1328, "RUB", "mistermatrix24"           , "PayPal"      , "Thank you for all the great work you put into this extension! It truly is excellent!"],
	["2019-02-05",  373, "RUB", "Atte Stolt"               , "PayPal"      , "Awesome work!"],
	["2019-02-07",    5, "USD", "Angel Macias"             , "PayPal"      , "Thanks <3"],
	["2019-02-11",  4.5, "EUR", "Francesco Barone"         , "PayPal"      , ""],
	["2019-02-12",  660, "RUB", "Jesse Richmond"           , "PayPal"      , "Thank you very much for this extension. It's so smooth and makes my twitch experience so much more painless. Definitely worth donating. Cheers."],
	["2019-02-15",  127, "RUB", "Christopher Martino"      , "PayPal"      , ""],
	["2019-02-15",  197, "RUB", "Michael Olsson"           , "PayPal"      , "Really great player."],
	["2019-02-27",  0.7, "USD", "Matthew Vincent"          , "PayPal"      , ""],
	["2019-03-01",  325, "RUB", "Christopher Jones"        , "PayPal"      , "This player makes twitch good again thank you so much"],
	["2019-03-01",  4.5, "USD", "Jerry Qin"                , "PayPal"      , "Good player."],
	["2019-03-02",  291, "RUB", "Roland Maier"             , "PayPal"      , "Thanks for your work on the extension."],
	["2019-03-17", 1904, "RUB", ""                         , "PayPal"      , "Great extension!"],
	["2019-03-17",  411, "RUB", "Philémon Henry"           , "PayPal"      , ""],
	["2019-03-17",    2, "USD", "Eplekatt"                 , "PayPal"      , ""],
	["2019-03-18",  300, "RUB", "Andy Granstrom"           , "PayPal"      , "Thanks for the awesome addon"],
	["2019-03-18",  660, "RUB", "Vedat Yesilöz"            , "PayPal"      , "Thank you and keep your support."],
	["2019-03-18",   46, "PLN", "Artur Pniak"              , "PayPal"      , ""],
	["2019-03-18",  4.5, "CAD", "Johan Dundi"              , "PayPal"      , "Thanks for working on the extension :)"],
	["2019-03-18",  1.6, "USD", "Drew Nanney"              , "PayPal"      , ""],
	["2019-03-18",  110, "RUB", "Drew Nanney"              , "PayPal"      , "Really appreciate all the hard work! Your player works excellently!"],
	["2019-03-18",   14, "USD", "Paul Foster"              , "PayPal"      , ""],
	["2019-03-18",  182, "RUB", "Jens Cappelen Andresen"   , "PayPal"      , ""],
	["2019-03-18",  660, "RUB", "Markus Siede"             , "PayPal"      , ""],
	["2019-03-18",  191, "RUB", ""                         , "PayPal"      , "I love your extension and I want to support it."],
	["2019-03-18",  100, "RUB", "RomzessX"                 , "WebMoney"    , "Спасибо за создания Alternate Player for Twitch.tv"],
	["2019-03-19",  311, "RUB", "Jeffrey Dierkhising"      , "PayPal"      , "Thank you for your hard work on this, makes so much more enjoyable!"],
	["2019-03-19",  258, "RUB", "Matthew Pearson"          , "PayPal"      , ""],
	["2019-03-19",  0.7, "AUD", "Bryce Pooler"             , "PayPal"      , ""],
	["2019-03-19",    5, "USD", "David Miranda"            , "PayPal"      , "Thank you for all your hard work!"],
	["2019-03-19",   10, "RUB", "410011761298889"          , "Yandex.Money", "Дай бог здоровья, спасибо за такое замечательное расширение. Весь админский состав паблика vk.com/a.webm передает привет!"],
	["2019-03-19",  500, "RUB", "4775"                     , "Yandex.Money", "Спасибо за работу =)"],
	["2019-03-20", 1328, "RUB", ""                         , "PayPal"      , "Thanks for your amazing extension. Recently switched back to normal twitch player and missed a bunch of stuff immediately."],
	["2019-03-20",   86, "RUB", "Иванов Семён"             , "PayPal"      , ""],
	["2019-03-24",  4.5, "CAD", "Myna Basta"               , "PayPal"      , ""],
	["2019-03-24",  300, "RUB", "Иванов Иван"              , "PayPal"      , ""],
	["2019-03-26",  325, "RUB", "Doug Kavner"              , "PayPal"      , ""],
	["2019-03-26",  100, "RUB", ""                         , "Yandex.Money", ""],
	["2019-03-28",  4.5, "USD", "Endymion Terrell"         , "PayPal"      , "I appreciate your continued support of the extension!"],
	["2019-03-30",  660, "RUB", "Mr jf Harvey"             , "PayPal"      , ""],
];
