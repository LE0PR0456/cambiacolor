const boton1 = document.querySelector('#boton1');
const boton2 = document.querySelector('#boton2');
const boton3 = document.querySelector('#boton3');
const valor = document.querySelector('#valor');

let contador = 0;

function cambioColor() {
    if (contador > 0) {
        valor.classList.remove('text-red-500', 'text-black')
        valor.classList.add('text-green-500')
    } else if (contador < 0) {
        valor.classList.remove('text-green-500', 'text-black')
        valor.classList.add('text-red-500')
    } else {
        valor.classList.remove('text-green-500', 'text-red-500')
        valor.classList.add('text-black')
    }
}

boton1.addEventListener('click', () => {
    contador++;

    valor.textContent = contador;
    cambioColor();
})

boton2.addEventListener('click', () => {
    contador--;

    valor.textContent = contador;
    cambioColor();
})

boton3.addEventListener('click', () => {
    contador = 0;

    valor.textContent = contador;
    cambioColor();
})

