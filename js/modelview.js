	// OBTENCION DE SOURCE IMG 
	let urlImg="";
	let title_card="";
	let price_card="";
	const modal_show_prodtitle= document.getElementById('modal_title_product');
	const modal_show_prodimg= document.getElementById('img_modal_show');
	const modal_show_price=document.getElementById('price_modal_val');

	const cardimg_url_slted=document.getElementsByClassName('img_isted');
	const cardimg_title_slted=document.getElementsByClassName('card-title');
	const cardimg_price_slted=document.getElementsByClassName('img_pricecard');
	const cardimgs = document.querySelectorAll('#box_crdimgs_prod .col .card');
	
	cardimgs.forEach(  function(card_img, index) {
		card_img.addEventListener('click',event=>{
			urlImg=cardimg_url_slted[index].src;
			title_card=cardimg_title_slted[index].innerHTML;
			price_card=cardimg_price_slted[index].innerHTML;
			console.log("precio.",price_card); 
			
		//modal
		modal_show_prodtitle.innerHTML=title_card;
		modal_show_price.innerHTML='Price: '+price_card;
		modal_show_prodimg.src=urlImg;

})
	});
// console.log(modal_show_prodtitle);