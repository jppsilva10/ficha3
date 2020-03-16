"use strict";

(function()
{
	window.addEventListener("load", main);
}());

function main()
{
	var elAnim = document.getElementById("animLast");

	elAnim.addEventListener("animationend", animLastAnimEndHandler);
}


function animLastAnimEndHandler(ev)
{
	var el = ev.target;
	el.removeEventListener("animationend", animLastAnimEndHandler);

	//remove animation elements from the main tag
	el.parentNode.removeChild(el.parentNode.children[0]);
	el.parentNode.removeChild(el.parentNode.children[0]);  //nota: não é 1 porque o que era 1 passou a 0 depois da eliminação do anterior
}

/*
ADD CODE
*/