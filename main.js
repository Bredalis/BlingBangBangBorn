
// Obtener clases 
// de la etiqueta a

const claseEnlaces = document.querySelectorAll(".enlaces");
const arregloDeEnlaces = [...claseEnlaces];

let i;

for (i = 0; i < 3; i++) {
	arregloDeEnlaces[i].addEventListener("click", () => {
		alert("Página no terminada 😅");
	}); 
}