function coucou(){
	let newbutton = document.createElement("button")
	let elt = document.getElementById("body")
	newbutton.setAttribute("class","button")
	newbutton.setAttribute("onclick","coucou()")
	newbutton.innerHTML = "Coucou"
	elt.appendChild(newbutton)

}