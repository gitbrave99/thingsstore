document.getElementById('form_compraview').addEventListener("click",event =>{
	event.preventDefault();
});

var contador=1;
document.getElementById('btn_minvalnm').addEventListener("click",event =>{
	
	if (contador > 1) {
		contador=contador-1;
		txt_number_buy.innerHTML=contador;
	}else{
		// txt_number_buy
	}
});
document.getElementById('btn_masvalnm').addEventListener("click", event =>{
	contador=contador+1;
	txt_number_buy.innerHTML=contador;
});

var txt_number_buy= document.getElementById('nm_buyb');






