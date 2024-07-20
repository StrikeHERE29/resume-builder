let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let pages = document.querySelectorAll(".steps-container");
let count = 0;

next.addEventListener("click", () => {
    if (count < pages.length - 1) {
        pages[count].style.visibility = "hidden";
        count++;
        pages[count].style.visibility = "visible";
    }
    console.log(count);
});

prev.addEventListener("click", () => {
    if (count > 0) {
        pages[count].style.visibility = "hidden";
        count--;
        pages[count].style.visibility = "visible";
    }
    console.log(count);
});








document.addEventListener("DOMContentLoaded", () => {
    const yearSelects = document.querySelectorAll(".year");
    const currentYear = 2024;
    const startYear = 1960;

    yearSelects.forEach(yearSelect => {
        for (let year = currentYear; year >= startYear; year--) {
            const option = document.createElement("option");
            option.value = year;
            option.textContent = year;
            yearSelect.appendChild(option);
        }
    });
});