let aux = [];

function abrirMapa() {
    const mapa = document.getElementById('mapaContainer');
    const areaMapa = document.getElementById('area-mapa')

    mapa.style.display = "block"
    setTimeout(() => {
        areaMapa.style.width = "50%";
        aux[0] = 1;

    }, 2)

    window.addEventListener('click', (event) => {
        if (event.target == mapaContainer) {
            mapa.style.display = "none";
        }
        aux[1] = 2;
    })


    if (aux[0] === 1 && aux[1] === 2) {
        areaMapa.style.width = "0%";
    }
}

function verImagens() {
    const containerModal = document.getElementById('modalImagens')

    containerModal.style.display = "flex"
    window.addEventListener('click', (event) => {
        if (event.target == modalImagens) {
            containerModal.style.display = "none";
        }
    })
}


const botaoCarrossel = document.getElementById('botoesControl');
const botaoSlide = document.getElementById('botoesSlide');
const divCarrossel = document.querySelector('blocoImagens')

var posicaoCarrossel = 1;
var posicaoSlide = 1;
showCarrossel(posicaoCarrossel);
showSlide(posicaoSlide);

function addCarrossel(n) {
    showCarrossel(posicaoCarrossel += n);
}

function addSlide(n) {
    showSlide(posicaoSlide += n);
}

function slideAtual(n) {
    showSlide(posicaoSlide = n)
}

function showCarrossel(n) {
    var i;
    var bloco = document.getElementsByClassName("bloco-imagens");

    if (n > bloco.length) { posicaoCarrossel = 1 }
    if (n < 1) { posicaoCarrossel = bloco.length }

    for (i = 0; i < bloco.length; i++) {
        bloco[i].style.display = "none";
    }


    if (posicaoCarrossel === 1) {
        botaoCarrossel.children[0].style.display = "none";
    } else {
        botaoCarrossel.children[0].style.display = "flex";
    }
    bloco[posicaoCarrossel - 1].style.display = "flex";
}

function showSlide(n) {
    var i;
    var slide = document.getElementsByClassName("imagem-slide");

    if (n > slide.length) { posicaoSlide = 1 }
    if (n < 1) { posicaoSlide = slide.length }

    for (i = 0; i < slide.length; i++) {
        slide[i].style.display = "none";
    }


    if (posicaoSlide === 1) {
        botaoSlide.children[0].style.display = "none";
    } else {
        botaoSlide.children[0].style.display = "flex";
    }
    slide[posicaoSlide - 1].style.display = "flex";
}


// AGENDAR VISITA

//DOCUMENTO - MODAL
const containerAgenda = document.getElementById('modalAgendarVisita')
const btnCloseAgendar = document.getElementById('btnCloseModalAgenda')
const btnAgendamento = document.getElementById('btnAgendar');

function AgendarVisita() {
    document.body.style.overflow = "hidden";
    containerAgenda.style.display = "flex";

    window.addEventListener('click', (event) => {
        if (event.target == modalAgendarVisita) {
            containerAgenda.style.display = "none";
        }
    })

    btnCloseAgendar.addEventListener('click', () => {
        containerAgenda.style.display = "none";
    })

    btnAgendamento.addEventListener('click', () => {
        alert("Agendamento feito!")
        setTimeout(() => {
            containerAgenda.style.display = "none";
        }, 500)
    })
}

const daysTag = document.querySelector(".days"),
    currentDate = document.querySelector(".current-date"),
    prevNextIcon = document.querySelectorAll(".icons span");

// getting new date, current year and month
let date = new Date(),
    currYear = date.getFullYear(),
    currMonth = date.getMonth();

// storing full name of all months in array
const months = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
    "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const renderCalendar = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
        lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last date of month
        lastDayofMonth = new Date(currYear, currMonth, lastDateofMonth).getDay(), // getting last day of month
        lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last date of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastDateofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastDateofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === date.getDate() && currMonth === new Date().getMonth()
            && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentDate.innerText = `${months[currMonth]} ${currYear}`; // passing current mon and yr as currentDate text
    daysTag.innerHTML = liTag;
}
renderCalendar();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if (currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new date of current year & month and pass it as date value
            date = new Date(currYear, currMonth, new Date().getDate());
            currYear = date.getFullYear(); // updating current year with new date year
            currMonth = date.getMonth(); // updating current month with new date month
        } else {
            date = new Date(); // pass the current date as date value
        }
        renderCalendar(); // calling renderCalendar function
    });
});


//TIRAR DÚVIDA

const modalTirarDuvida = document.getElementById('modalTirarDuvida')
const formDuvida = document.getElementById('formDuvida')
const modalConfirmacao = document.getElementById('formConfirmacao')
const btnFecharDuvida = document.getElementById('botaoicon');
const btnEnviarDuvida = document.getElementById('botaoEnviarDuvida');
const btnFecharConfirmacao = document.getElementById('botao')

function TirarDuvida() {
    modalTirarDuvida.style.display = "flex";
    formDuvida.style.display = "flex";
    document.body.style.overflow = "hidden";

    window.addEventListener('click', (event) => {
        if (event.target == modalTirarDuvida) {
            modalTirarDuvida.style.display = "none";
        }
    })

    btnFecharDuvida.addEventListener('click', () => {
        modalTirarDuvida.style.display = "none";
    })

//     btnEnviarDuvida.addEventListener('click', () => {
//         setTimeout(()=>{
            
//                 formDuvida.style.display = "none";
//                 modalConfirmacao.style.display = "flex"
//                 // btnFecharConfirmacao.addEventListener('click', () => {
//                 //     modalTirarDuvida.style.display = "none"
//                 //     formDuvida.style.display = "none";
//                 //     modalConfirmacao.style.display = "none"
//                 // })
            
//         },1400)
// })
}