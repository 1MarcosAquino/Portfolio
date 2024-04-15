import { api } from './api.js';
import { renderSkills } from './hardskills.js';
import { renderCard } from './card.js';

const title = document.querySelector('.title');
const text = `Não é sobre ter as ferramentas certas, mas saber como usá-las.`;
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

function tuor() {
    const tuor = document.querySelector('.tuor');
    const spin = document.querySelector('.spin');
    const backTop = document.querySelector('.backTop');

    const [about, projects, contact] =
        document.querySelectorAll('.item-menu a');

    function fazertuor(element, time) {
        setTimeout(() => {
            element.click();
        }, time);
    }

    tuor.addEventListener('click', () => {
        spin.style.display = 'inline';

        fazertuor(about, 0);
        fazertuor(projects, 3000);
        fazertuor(contact, 6000);

        setTimeout(() => {
            spin.style.display = 'none';
            backTop.click();
        }, 9000);
    });
}
tuor();

const response = await api();
renderCard(response);
typeText(title, text, 0);
renderSkills(10);
mudarClasse();

// document.querySelector('#installApp').style.display = 'none';

// if (location.hostname == '127.0.0.1' || location.hostname == 'localhost') {
//     document.querySelector('#installApp').style.display = 'block';
// }

const btn = document.querySelector('#btnEmail');
btn.addEventListener('click', function () {
    document.querySelector('#btnEmail');
    navigator.clipboard
        .writeText('contatomarcosaquino@gmail.com')
        .then(() => {
            alert('Conteúdo copiado para a área de transferência!');
        })
        .catch((err) => {
            console.error('Falha ao copiar: ', err);
        });
});

(function () {
    console.log('tes');
    document.querySelectorAll('.card').forEach((element) => {
        if (element.innerText == 'RELOGIO') {
            element.style = "background-image: url('/public/relogio.PNG')";
            console.log(element);
        }
    });
})();
