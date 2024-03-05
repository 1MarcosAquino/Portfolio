import { api } from './api.js';
import { renderSkills } from './hardskills.js';
import { renderCard } from './card.js';

(async () => {
    const response = await api();
    renderCard(response);
})();

renderSkills();

const title = document.querySelector('.title');
const texto = 'Marcos Aquino desenvolvedor Web.';
const delay = 100;

function digitarTexto(elemento, textoCompleto, i) {
    if (i < textoCompleto.length) {
        elemento.innerHTML += textoCompleto.charAt(i);
        setTimeout(() => digitarTexto(elemento, textoCompleto, i + 1), delay);
    } else {
        setTimeout(() => apagarTexto(elemento, textoCompleto.length), 1000);
    }
}

function apagarTexto(elemento, length) {
    if (length >= 0) {
        elemento.innerHTML = texto.substring(0, length);
        setTimeout(() => apagarTexto(elemento, length - 1), delay);
    }

    if (length == 0) {
        setTimeout(() => {
            digitarTexto(title, texto, 0);
        }, 300);
    }
}

digitarTexto(title, texto, 0);
