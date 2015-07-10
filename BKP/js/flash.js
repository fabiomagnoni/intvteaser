// FLASH

function flash(trans, lar, alt, nome){
	if (trans == ""){
	    document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width=' + lar + ' height=' + alt + '  align="middle"><param name="menu" value="false"><param name="allowScriptAccess" value="sameDomain" /> <param name="allowFullScreen" value="false" />    <param name="movie" value=' + nome + ' /><param name="quality" value="high" /><param name="menu" value="false"><param name="wmode" value="transparent" /><param name="bgcolor" value="#fffff" />    <embed src=' + nome + ' quality="high" wmode="transparent"  bgcolor="#fffff" width=' + lar + ' height=' + alt + ' name="topo" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>');
	} else {
	    document.write('<object classid="clsid:d27cdb6e-ae6d-11cf-96b8-444553540000" codebase="http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=9,0,0,0" width="' + lar + '" height="' + alt + '"  align="middle"><param name="menu" value="false"><param name="allowScriptAccess" value="sameDomain" />    <param name="allowFullScreen" value="false" />    <param name="movie" value="' + nome + '" /><param name="quality" value="high" /><param name="menu" value="false"><param name="bgcolor" value="' + trans + '" />    <embed src="' + nome + '" quality="high" bgcolor="' + trans + '" width="' + lar + '" height="' + alt + '" name="topo" align="middle" allowScriptAccess="sameDomain" allowFullScreen="false" type="application/x-shockwave-flash" pluginspage="http://www.macromedia.com/go/getflashplayer" /></object>');
	}
}

