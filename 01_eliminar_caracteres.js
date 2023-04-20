const caracteresRaros = (texto) => {
		const chars = [
			{ char: new RegExp(/\#/, 'g'), htmlCode: '&num;' },
			{ char: new RegExp(/\!/, 'g'), htmlCode: '&excl;' },
			{ char: new RegExp(/\"/, 'g'), htmlCode: '&quot;' },
			{ char: new RegExp(/\$/, 'g'), htmlCode: '&dollar;' },
			{ char: new RegExp(/\%/, 'g'), htmlCode: '&percnt;' },
			{ char: new RegExp(/\'/, 'g'), htmlCode: '&apos;' },
			{ char: new RegExp(/\*/, 'g'), htmlCode: '&ast;' },
			{ char: new RegExp(/\+/, 'g'), htmlCode: '&plus;' },
			{ char: new RegExp(/\,/, 'g'), htmlCode: '&comma;' },
			{ char: new RegExp(/\-/, 'g'), htmlCode: '&#45;' },
			{ char: new RegExp(/\./, 'g'), htmlCode: '&period;' },
			{ char: new RegExp(/\//, 'g'), htmlCode: '&sol;' },
			{ char: new RegExp(/\:/, 'g'), htmlCode: '&colon;' },
			{ char: new RegExp(/\</, 'g'), htmlCode: '&lt;' },
			{ char: new RegExp(/\=/, 'g'), htmlCode: '&equals;' },
			{ char: new RegExp(/\>/, 'g'), htmlCode: '&gt;' },
			{ char: new RegExp(/\?/, 'g'), htmlCode: '&quest;' },
			{ char: new RegExp(/\@/, 'g'), htmlCode: '&commat;' },
			{ char: new RegExp(/\[/, 'g'), htmlCode: '&lsqb;' },
			{ char: new RegExp(/\\/, 'g'), htmlCode: '&bsol;' },
			{ char: new RegExp(/\]/, 'g'), htmlCode: '&rsqb;' },
			{ char: new RegExp(/\^/, 'g'), htmlCode: '&Hat;' },
			{ char: new RegExp(/\_/, 'g'), htmlCode: '&lowbar;' },
			{ char: new RegExp(/\`/, 'g'), htmlCode: '&grave;' },
			{ char: new RegExp(/\{/, 'g'), htmlCode: '&lcub;' },
			{ char: new RegExp(/\|/, 'g'), htmlCode: '&verbar;' },
			{ char: new RegExp(/\}/, 'g'), htmlCode: '&rcub;' },
			{ char: new RegExp(/\~/, 'g'), htmlCode: '&tilde;' },
			{ char: new RegExp(/\¡/, 'g'), htmlCode: '&iexcl;' },
			{ char: new RegExp(/\¿/, 'g'), htmlCode: '&iquest;' },
			{ char: new RegExp(/á/, 'g'), htmlCode: '&aacute;' },
			{ char: new RegExp(/Á/, 'g'), htmlCode: '&Aacute;' },
			{ char: new RegExp(/é/, 'g'), htmlCode: '&eacute;' },
			{ char: new RegExp(/É/, 'g'), htmlCode: '&Eacute;' },
			{ char: new RegExp(/í/, 'g'), htmlCode: '&iacute;' },
			{ char: new RegExp(/Í/, 'g'), htmlCode: '&Iacute;' },
			{ char: new RegExp(/ó/, 'g'), htmlCode: '&oacute;' },
			{ char: new RegExp(/Ó/, 'g'), htmlCode: '&Oacute;' },
			{ char: new RegExp(/ú/, 'g'), htmlCode: '&uacute;' },
			{ char: new RegExp(/Ú/, 'g'), htmlCode: '&Uacute;' }
		];
		chars.map(({ char, htmlCode }) => {
			texto = texto.replace(char, htmlCode);
		});

		texto = texto.replace(/\(/g, '&#40;');
		texto = texto.replace(/\)/g, '&#41;');
		texto = texto.replace(/[\u0000-\u0019|\u001A|\u001B|\u001C|\u001D|\u001E|\u001F|\u007F]/g, '');
		return texto;
	};