//selectors
let printBtn = document.getElementById("print");
const savePersonal = document.getElementById("savePersonal");
const saveEdu = document.getElementById("saveEdu");
let inputName = document.querySelector("#name");
let outputName = document.querySelector(".resume-title");
let inputMail = document.querySelector("#mail")
let outputMail = document.querySelector(".p-mail")
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
let inputEduEndYear = document.querySelector(".end-year")
let eduContainer = document.querySelector(".edu");

let count = 0;

//function to update the form pages
next.addEventListener("click", () => {
    if (count < pages.length - 1) {
        pages[count].style.visibility = "hidden";
        forms[count].style.visibility = "hidden"
        count++;
        pages[count].style.visibility = "visible";
       forms[count].style.visibility = "visible"
    }
    console.log(count);
});
//function to update the form pages
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







//function for the date selector
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



//event listener to update the personal info
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
  });
  
//event listener to update the edu info



saveEdu.addEventListener("click", (e) => {
  e.preventDefault();
  
  
    eduContainer.innerHTML = `
      <div class="right-progress pro4"></div>
      <p class="edu-time">
        <span class="output-start-month">${inputEduStartMonth.value}</span> 
        <span class="output-start-year">${inputEduStartYear.value}</span> - 
        <span class="output-end-month">${inputEduEndMonth.value}</span> 
        <span class="output-end-year">${inputEduEndYear.value}</span>
      </p>
      <h5 class="edu-name">${inputEdu.value}</h5>
      <p class="bac">${inputDeg.value}</p>
      <p class="edu-place">${inputEduCity.value}</p>
    `;
  });



//even listener to update the avatar
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



//event listener to print the pdf
printBtn.addEventListener("click", ()=>{
    print();
})