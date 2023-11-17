let daysTag = document.querySelector(".days2")
currentdata = document.querySelector(".current-data")
prevNextIcon = document.querySelectorAll(".icons span");

// getting new data, current year and month
let data = new Date()
currYear = data.getFullYear()
currMonth = data.getMonth();

// storing full name of all mes2 in array
const mes2 = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho",
              "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];

const carregarCalendario = () => {
    let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(), // getting first day of month
    lastdataofMonth = new Date(currYear, currMonth + 1, 0).getDate(), // getting last data of month
    lastDayofMonth = new Date(currYear, currMonth, lastdataofMonth).getDay(), // getting last day of month
    lastdataofLastMonth = new Date(currYear, currMonth, 0).getDate(); // getting last data of previous month
    let liTag = "";

    for (let i = firstDayofMonth; i > 0; i--) { // creating li of previous month last days
        liTag += `<li class="inactive">${lastdataofLastMonth - i + 1}</li>`;
    }

    for (let i = 1; i <= lastdataofMonth; i++) { // creating li of all days of current month
        // adding active class to li if the current day, month, and year matched
        let isToday = i === data.getDate() && currMonth === new Date().getMonth() 
                     && currYear === new Date().getFullYear() ? "active" : "";
        liTag += `<li class="${isToday}">${i}</li>`;
    }

    for (let i = lastDayofMonth; i < 6; i++) { // creating li of next month first days
        liTag += `<li class="inactive">${i - lastDayofMonth + 1}</li>`
    }
    currentdata.innerText = `${mes2[currMonth]} ${currYear}`; // passing current mon and yr as currentdata text
    daysTag.innerHTML = liTag;

    console.log("aaaaaa")
}
carregarCalendario();

prevNextIcon.forEach(icon => { // getting prev and next icons
    icon.addEventListener("click", () => { // adding click event on both icons
        // if clicked icon is previous icon then decrement current month by 1 else increment it by 1
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;

        if(currMonth < 0 || currMonth > 11) { // if current month is less than 0 or greater than 11
            // creating a new data of current year & month and pass it as data value
            data = new Date(currYear, currMonth, new Date().getDate());
            currYear = data.getFullYear(); // updating current year with new data year
            currMonth = data.getMonth(); // updating current month with new data month
        } else {
            data = new Date(); // pass the current data as data value
        }
        carregarCalendario(); // calling carregarCalendario function
    });
});


