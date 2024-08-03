//selectors
let printBtn = document.getElementById("print");
const savePersonal = document.getElementById("savePersonal");
const saveEdu = document.getElementById("saveEdu");
const saveExp = document.getElementById("saveExp");
const saveSkill = document.getElementById("saveSkill");
let inputName = document.querySelector("#name");
let outputName = document.querySelector(".resume-title");
let inputMail = document.querySelector("#mail");
let outputMail = document.querySelector(".p-mail");
let inputPhone = document.querySelector("#phone");
let outputPhone = document.querySelector(".p-phone");
let inputAdress = document.querySelector("#adress");
let outputAdress = document.querySelector(".p-adress");
let inputDay = document.querySelector("#dd");
let inputMonth = document.querySelector("#mm");
let inputYear = document.querySelector("#yy");
let outputDay = document.querySelector(".day");
let outputMonth = document.querySelector(".month");
let outputYear = document.querySelector(".year");
let inputMale = document.querySelector("#male");
let inputFemale = document.querySelector("#female");
let outputGender = document.querySelector(".p-sex");
let next = document.querySelector(".next");
let prev = document.querySelector(".prev");
let pages = document.querySelectorAll(".steps-container");
let forms = document.querySelectorAll(".form");
let inputAbout = document.querySelector("#about-me");
let outputAbout = document.querySelector(".me");
let inputEdu = document.querySelector("#uni");
let inputDeg = document.querySelector("#degree");
let inputEduCity = document.querySelector("#city");
let inputEduStartMonth = document.querySelector("#start-month");
let inputEduStartYear = document.querySelector(".start-year");
let inputEduEndMonth = document.querySelector("#end-month");
let inputEduEndYear = document.querySelector(".end-year");
let eduContainer = document.querySelector(".edu");
let expContainer = document.querySelector(".exp");
let inputExpName = document.querySelector("#company");
let inputExpJob = document.querySelector("#job");
let inputExpCity = document.querySelector("#city-exp");
let inputExpStartMonth = document.querySelector("#exp-start-month");
let inputExpStartYear = document.querySelector(".exp-start-year");
let inputExpEndMonth = document.querySelector("#exp-end-month");
let inputExpEndYear = document.querySelector(".exp-end-year");
let inputSkill = document.querySelector("#skill");
let skillContainer = document.querySelector(".skill");
let icons = document.querySelectorAll(".i")

let count = 0;

// Function to update the form pages
next.addEventListener("click", () => {
    if (count < pages.length - 1) {
        pages[count].style.visibility = "hidden";
        forms[count].style.visibility = "hidden";
        count++;
        pages[count].style.visibility = "visible";
        forms[count].style.visibility = "visible";
    }
    console.log(count);
});

prev.addEventListener("click", () => {
    if (count > 0) {
        pages[count].style.visibility = "hidden";
        forms[count].style.visibility = "hidden";
        count--;
        pages[count].style.visibility = "visible";
        forms[count].style.visibility = "visible";
    }
    console.log(count);
});

// Function for the date selector
document.addEventListener("DOMContentLoaded", () => {
    const yearSelects = document.querySelectorAll(".start-year");
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

document.addEventListener("DOMContentLoaded", () => {
    const yearSelects = document.querySelectorAll(".end-year");
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

// Event listener to update the personal info
savePersonal.addEventListener("click", (e) => {
    // Prevent the default button behavior
    e.preventDefault();

    outputName.innerHTML = `
      <div class="title-container">
          <h3 class="resume-title">${inputName.value}</h3>
      </div>
    `;

    outputMail.innerHTML = `
      <div class="resume-mail">
          <p class="p-mail">${inputMail.value}</p>
      </div>
    `;

    outputPhone.innerHTML = `
      <div class="resume-phone">
          <p class="p-phone">${inputPhone.value}</p>
      </div>
    `;

    outputAdress.innerHTML = `
      <div class="resume-adress">
          <p class="p-adress">${inputAdress.value}</p>
      </div>
    `;

    // Add the prefix 0 if the day or month is less than 10
    outputDay.innerHTML = `
      <div class="resume-birth">
          <p class="p-birth">
              <span class="day">${inputDay.value.padStart(2, '0')}</span>.
              <span class="month">${inputMonth.value.padStart(2, '0')}</span>.
              <span class="birthYear">${inputYear.value}</span>
          </p>
      </div>
    `;

    outputAbout.innerHTML = `<p class="me">${inputAbout.value}</p>`;

    // Check if male or female is selected
    if (inputMale.checked) {
        outputGender.innerHTML = `
        <div class="resume-gen">
            <p class="p-sex">Male</p>
        </div>
      `;
    } else if (inputFemale.checked) {
        outputGender.innerHTML = `
        <div class="resume-gen">
            <p class="p-sex">Female</p>
        </div>
      `;
    }



    inputName.value = '';
    inputMail.value = '';
    inputPhone.value = '';
    inputAdress.value = '';
    inputDay.value = '';
    inputMonth.value = '';
    inputYear.value = '';
    inputAbout.value = '';

    icons.forEach((i)=>{
      i.classList.add("i-active")
    })

});

// Event listener to update the edu info
saveEdu.addEventListener("click", (e) => {
    e.preventDefault();

    eduContainer.innerHTML += `
    <div class="edu">
      <p class="edu-time">
        <span class="output-start-month">${inputEduStartMonth.value}</span>
        <span class="output-start-year">${inputEduStartYear.value}</span> -
        <span class="output-end-month">${inputEduEndMonth.value}</span>
        <span class="output-end-year">${inputEduEndYear.value}</span>
      </p>
      <h5 class="edu-name">${inputEdu.value}</h5>
      <p class="bac">${inputDeg.value}</p>
      <p class="edu-place">${inputEduCity.value}</p>
    </div>
    `;

    inputEdu.value = '';
    inputDeg.value = '';
    inputEduCity.value = '';
});

// Event listener to update the exp section
saveExp.addEventListener("click", (e) => {
    e.preventDefault();

    expContainer.innerHTML += `
    <div class="exp">
      <span class="output-start-month">${inputExpStartMonth.value}</span>
      <span class="output-start-year">${inputExpStartYear.value}</span> -
      <span class="output-end-month">${inputExpEndMonth.value}</span>
      <span class="output-end-year">${inputExpEndYear.value}</span>
      <h5>${inputExpName.value}</h5>
      <p class="job-title">${inputExpJob.value}</p>
      <p>${inputExpCity.value}</p>
    </div>
    `;

    inputExpName.value = '';
    inputExpJob.value = '';
    inputExpCity.value = '';
});

// Event listener to update the skill section
saveSkill.addEventListener("click", (e) => {
    e.preventDefault();

    skillContainer.innerHTML += `
    <div class="lvl">
        <ul class="ul-skills">
            <li>${inputSkill.value}</li>
        </ul>
    </div>
    `;

    inputSkill.value = '';
});

// Event listener to update the avatar
document.addEventListener("DOMContentLoaded", () => {
    let inputImage = document.querySelector("#file");
    let outputImage = document.querySelector(".avatar");

    inputImage.addEventListener("change", () => {
        const file = inputImage.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = function(e) {
                outputImage.src = e.target.result;
            }
            reader.readAsDataURL(file);
        }
    });
});

// Event listener to print the pdf
printBtn.addEventListener("click", () => {
    print();
});
