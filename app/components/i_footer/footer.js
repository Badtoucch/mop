document.addEventListener('DOMContentLoaded', function () {
	//native js

	setTimeout(function () {
			var romFooter = document.querySelector('.create_rom_footer');

			romFooter.insertAdjacentHTML("afterbegin", '' +
					'<div class="ev-footer__logo">' +
					'<a href="https://everad.com/">' +
					' <svg class="ev-footer__svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 2700 2450"> ' +
					'<path class="ev-footer__path" d="M1803.6 2c.1 34.3.1 68.7.2 103v247.8C1304.2 644 804.6 935.2 304.9 1226.4c6.4 7 1435.2 841.5 1499.2 875.7 298.3-174 597.1-348.4 897.2-523.4v349.9c-3.2 2-7.1 4.5-11.1 6.8-160.6 93.7-321.2 187.3-481.7 281-132.1 77.1-264.2 154.2-396.2 231.2-2.3 1.3-4.4 2.9-6.7 4.3h-4c-3.9-2.5-7.7-5.2-11.6-7.5-138.7-80.8-277.4-161.7-416.1-242.5-277.1-161.5-554.3-323-831.4-484.5-176.7-103-353.4-206-530.1-308.9-3.4-2-7.2-3.1-10.8-4.6v-352c3.3-1.3 6.9-2.3 9.9-4.1 36.9-21.4 73.7-42.9 110.6-64.4 498.1-290.6 996.3-581.2 1494.4-871.8 57.3-33.4 114.5-66.8 171.8-100.2 3.9-2.3 8.6-4 9.3-9.5 2 .1 4 .1 6 .1z" style="fill: rgb(240, 138, 87);"></path> ' +
					'<path class="ev-footer__path" d="M2103.1 877.7c-299.9 175.1-599.6 350.2-899.9 525.5-99.5-58.3-198.7-116.5-299.9-175.7C1304 993.7 1703 760.9 2103.1 527.4v350.3zm300 175.3v350.3c-199.6 116.6-399.2 233.2-599.3 350-99.9-58.4-199.6-116.5-300.9-175.7 300.8-175.2 599.7-349.4 900.2-524.6z" style="fill: rgb(240, 138, 87);"></path> ' +
					'</svg> ' +
					'</a>' +
					'</div> ' +
					'<a class="ev-footer__link" target="_blank" href="privacy.html">empty</a>');

			var colorText = romFooter.getAttribute('data-color_text'),
					colorLink = romFooter.getAttribute('data-color_link'),
					colorLogo = romFooter.getAttribute('data-color_logo'),
					backgroundColor = romFooter.getAttribute('data-background-color'),
					head = document.querySelector('head'),
					romText = document.querySelectorAll('.rom_p'),
					romLink = document.querySelectorAll('.ev-footer__link'),
					romIcon = document.querySelectorAll('.ev-footer__logo svg path');

			for (let i = 0; i < romText.length; i++) {
					romText[i].style.color = colorText;
			}
			;
			for (let i = 0; i < romLink.length; i++) {
					romLink[i].style.color = colorLink;
			}
			;
			for (let i = 0; i < romIcon.length; i++) {
					romIcon[i].style.fill = colorLogo;
			}
			;
			romFooter.style.background = backgroundColor;

			head.insertAdjacentHTML("afterbegin", '<style>.ev-footer, .create_rom_footer{display:flex;align-items:center;padding:15px 0;justify-content:center;flex-direction:column}.ev-footer__logo svg{display:flex;width:30px;height:30px}.ev-footer__logo a{text-decoration:none;font-size:14px;font-family:inherit}.ev-footer__link{display:flex;text-decoration:underline}.ev-footer__link:hover{text-decoration:none}:active,:focus,:hover,:visited,a,a:active,a:focus,a:hover,a:visited{outline:0!important}::-moz-focus-inner{border:0;outline:0}</style>')


			//new
			var windowLang = window.language,
					everadLink = document.querySelector('.ev-footer__link'),
					everadPrivacy = {
							bg: 'РџСЂР°РІРёР»Р° Р·Р° РїРѕРІРµСЂРёС‚РµР»РЅРѕСЃС‚',
							en: 'Privacy policy',
							hu: 'AdatvГ©delem',
							de: 'Datenschutz politik',
							el: 'О ОїО»О№П„О№ОєО® О±ПЂОїПЃПЃО®П„ОїП…',
							ge: 'бѓ™бѓќбѓњбѓ¤бѓбѓ“бѓ”бѓњбѓЄбѓбѓђбѓљбѓќбѓ‘бѓбѓЎ бѓћбѓќбѓљбѓбѓўбѓбѓ™бѓђ',
							es: 'Politica de privacidad',
							it: 'Informativa sulla privacy',
							lv: 'Privatumo politika',
							lt: 'Privatumo politika',
							pl: 'Polityka prywatnoЕ›Д‡i',
							pt: 'Politica de confidencialidade',
							ro: 'Politica de confidenИ›ialitate',
							md: 'Politica de confidenИ›ialitate',
							sk: 'ZГЎsady ochrany osobnГЅch Гєdajov',
							sl: 'Pravilnik o zasebnosti',
							fr: 'Politique de confidentialitГ©',
							cz: 'Ochrana osobnГ­ch ГєdajЕЇ',
							hr: 'Politika povjerljivosti'
					};

			if (everadPrivacy[windowLang]) {
					everadLink.innerHTML = everadPrivacy[windowLang];
			}
			else {
					everadLink.innerHTML = everadPrivacy.en;
			}
	});


});