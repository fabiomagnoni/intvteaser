function animateHeight(id, size, aux) {
el = document.getElementById(id);

var h_size1 = el.offsetHeight;

	if (grow) {
		if (h_size1 < size)	{
			el.style.height = h_size1 + (size - h_size1) / 5 + 0.5  +"px";
			document.getElementById('navContainer').style.top = h_size1 - (h_size1 / size) * 45 - 1 - 289  +"px";
			grow=true;
			setTimeout("animateHeight('" + id + "','" + size + "', '" + aux + "')", 1);
		}
		else
		{
			if ( aux == 'inicio_interna' )
			{
				grow=true;
				document.getElementById( 'btn_flash0' ).style.display = 'none';
				document.getElementById( 'btn_flash1' ).style.display = 'block';
			}
			else
			{
				grow=false;
				document.getElementById( 'btn_flash0' ).style.display = 'block';
				document.getElementById( 'btn_flash1' ).style.display = 'none';
			}
		}
	}
	else {
		if (h_size1 >= 125) {
			el.style.height = h_size1 - (h_size1 / size) * 55 - 1  +"px";
			document.getElementById('navContainer').style.top =  h_size1 - (h_size1 / size) * 45 - 1 - 339 +"px";
			grow=false;
			setTimeout("animateHeight('" + id + "','" + size + "')", 1);
		}
		else
		{
			grow=true;
			document.getElementById( 'btn_flash0' ).style.display = 'none';
			document.getElementById( 'btn_flash1' ).style.display = 'block';
		}
	}
}