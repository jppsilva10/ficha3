"use strict";

/*
const opacDisabled = 0.3;  //transparência para botões desactivados
const imgFolder = "../resources/image/";
const txtFolder = "../resources/text/";
const audioVolume = 1;
*/

(function()
{
	window.addEventListener("load", main);
}());


function main()
{
	/*
	ADD CODE
	*/
	var img_num = 1;
	var img = document.getElementById("photo");
	img.src = "../resources/image/01.jpg";
	var text = document.getElementById("text");
	text.src = "../resources/text/01.txt";
	var aud = document.getElementsByTagName("audio")[0];
	aud.play();
	
	var Bbtn = document.getElementById("backBtn");
    var Nbtn = document.getElementById("nextBtn");
    var Fbtn = document.getElementById("firstBtn");
    var Lbtn = document.getElementById("lastBtn");

	function bch(ev){
         img_num= backClickHandler(ev, img_num, img, text);
         if(img_num== 15){
    	    buttonAddEvent(Nbtn, nch);
    	    buttonAddEvent(Lbtn, lch);
         }
         if (img_num== 1){
    	    buttonRemoveEvent(Fbtn, fch);
    	    buttonRemoveEvent(Bbtn, bch);
         }
	}
    Bbtn.addEventListener("click", bch);
    buttonRemoveEvent(Bbtn, bch);
    
	function fch(ev){
		 if(img_num== 16){
    	    buttonAddEvent(Nbtn, nch);
    	    buttonAddEvent(Lbtn, lch);
         }
         img_num= firstClickHandler(ev, img_num, img, text);
         buttonRemoveEvent(Fbtn, fch);
    	 buttonRemoveEvent(Bbtn, bch);
	}
	Fbtn.addEventListener("click", fch);
	buttonRemoveEvent(Fbtn, fch);

	function nch(ev){
		img_num= nextClickHandler(ev, img_num, img, text);
		if(img_num== 2){
    	    buttonAddEvent(Bbtn, bch);
    	    buttonAddEvent(Fbtn, fch);
        }
        if (img_num== 16){
            buttonRemoveEvent(Nbtn, nch);
    	    buttonRemoveEvent(Lbtn, lch);
        }
	}
	Nbtn.addEventListener("click", nch);

	function lch(ev){
		 if(img_num== 1){
    	    buttonAddEvent(Bbtn, bch);
    	    buttonAddEvent(Fbtn, fch);
         }
         img_num= lastClickHandler(ev, img_num, img, text);
    	 buttonRemoveEvent(Nbtn, nch);
    	 buttonRemoveEvent(Lbtn, lch);
	}
	Lbtn.addEventListener("click", lch);
}


/*
ADD CODE
*/

function backClickHandler(ev, img_num, img, text){
	img_num-=1;
    if(img_num < 10){
        img.src = "../resources/image/0" + img_num + ".jpg";
        text.src = "../resources/text/0" + img_num + ".txt";
    }
    else{
        img.src = "../resources/image/" + img_num + ".jpg";
        text.src = "../resources/text/" + img_num + ".txt";
    }
    return img_num;
}

function lastClickHandler(ev, img_num, img, text){
	img_num=16;
    img.src = "../resources/image/" + img_num + ".jpg";
    text.src = "../resources/text/" + img_num + ".txt";
    return img_num;

}

function nextClickHandler(ev, img_num, img, text){
    img_num+=1;
    if(img_num < 10){
        img.src = "../resources/image/0" + img_num + ".jpg";
        text.src = "../resources/text/0" + img_num + ".txt";
    }
    else{
        img.src = "../resources/image/" + img_num + ".jpg";
        text.src = "../resources/text/" + img_num + ".txt";
    }
    return img_num;
}

function firstClickHandler(ev, img_num, img, text){
	img_num=1;
    img.src = "../resources/image/0" + img_num + ".jpg";
    text.src = "../resources/text/0" + img_num + ".txt";
    return img_num;
}

function buttonRemoveEvent(btn, funct){
    btn.style.opacity=0.3;
    btn.style.cursor= "initial";
    btn.removeEventListener("click", funct);
}

function buttonAddEvent(btn, funct){
    btn.style.opacity=1;
    btn.style.cursor= "pointer";
    btn.addEventListener("click", funct);
}
