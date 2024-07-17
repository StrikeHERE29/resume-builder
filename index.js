let resume = document.querySelector(".content");
let firstName = document.querySelector("#first-name");
let form = document.querySelector(".form-container");
let lastName = document.querySelector("#last-name");
let jobSub = document.querySelector(".job-subtitle");
let second = document.querySelector("#second-page");
let showBtn = document.querySelector(".show-btn")


showBtn.addEventListener("click", ()=>{
    second.classList.toggle("active");
    form.classList.toggle("disabled");
})


form.addEventListener("input", ()=>{
   jobSub.innerHTML = `${firstName.value}`
})








    
    let btn = document.querySelector(".printBtn");

    btn.addEventListener("click", ()=>{
        print();
        firstName.focus();


    })



    
