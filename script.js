const elt = document.getElementsByTagName('body');
console.log(elt)

elt.style.color = ["green","blue","black","white","red"][Math.round(Math.random()*200)%5]

document.addEventListener('mousemove', function(event) {
    const x = event.offsetX; // Coordonnée X de la souris dans l'élément
    const y = event.offsetY; // Coordonnée Y de la souris dans l'élément
    document.getElementById("content").innerHTML = x.toString()+" "+y.toString();
    document.getElementById("content").style.color = ["green","blue","black","white","red"][Math.round(Math.random()*200)%5]

});