let resume = document.querySelector(".content");
let firstName = document.querySelector("#first-name");
let form = document.querySelector(".form-container");
let lastName = document.querySelector("#last-name");


form.addEventListener("input", ()=>{
    resume.innerHTML = `
    <div class="content" style="background-color:#E6D1E2">
    ${firstName.value}
    </div>
    `
})








    
    let btn = document.querySelector(".printBtn");

    btn.addEventListener("click", ()=>{
        print();
        


    })



    
