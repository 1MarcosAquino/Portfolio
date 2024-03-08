import { api } from './api.js';
import { renderSkills } from './hardskills.js';
import { renderCard } from './card.js';

const title = document.querySelector('.title');
const text = `Da linha de código ao sucesso, vamos construir juntos.`;
const delay = 100;

function typeText(element, text, i) {
    if (i < text.length) {
        element.innerHTML += text.charAt(i);
        setTimeout(() => typeText(element, text, i + 1), delay);
    } else {
        setTimeout(() => deleteText(element, text.length), 1000);
    }
}

function deleteText(element, length) {
    if (length >= 0) {
        element.innerHTML = text.substring(0, length);
        setTimeout(() => deleteText(element, length - 1), delay);
    }

    if (length == 0) {
        setTimeout(() => {
            typeText(title, text, 0);
        }, 300);
    }
}

function mudarClasse() {
    const $ = (elemnt) => document.querySelectorAll(elemnt);

    window.addEventListener('scroll', function () {
        $('section').forEach((elemnt) => {
            var posicao = elemnt.getBoundingClientRect().top;
            if (
                posicao <= (innerHeight / 100) * 60 &&
                posicao >= (innerHeight / 100) * 10
            ) {
                $('.item-menu').forEach((el) => {
                    if (el.children[0].href.split('#', -1)[1] === elemnt.id) {
                        el.classList.add('selected');
                    } else {
                        el.classList.remove('selected');
                    }
                });
            }
        });
    });
}
mudarClasse();

const response = await api();
renderCard(response);
typeText(title, text, 0);
renderSkills(10);
