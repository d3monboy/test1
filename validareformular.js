var filtrare_nume = /^[A-Za-z0-9]{3,20}$/;
var filtrare_email = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i;

	function validareform(form)
{
	var nume = form.nume.value;
	var email = form.email.value;
	var mesaj = form.mesaj.value;
	var erori = [];
	
	if (!filtrare_nume.test(nume))
	{
		erori[erori.length]="nume invalid";
	}
	if (!filtrare_email.test(email))
	{
		erori[erori.length]="email invalid";
	}
	if (mesaj=="")
	{
		erori[erori.length]="nu exista un mesaj de trimis";
	}
	if (erori.length>0)
	{
		raporterori(erori);
		return false;
	}
	return true;
}

function raporterori(erori)
{
	var atentiune ="ceva este gresit";
	for(i=0;i<erori.length;i++)
	{
		var numarerori=i+1;
		atentiune +="\n"+numarerori+"."+erori[i];
		}
		alert(atentiune);
}
