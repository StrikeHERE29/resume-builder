let resume = document.querySelector(".content");
let firstName = document.querySelector("#first-name");
let form = document.querySelector(".form-container");
let lastName = document.querySelector("#last-name");
let jobSub = document.querySelector(".job-subtitle");
let second = document.querySelector("#second-page");
let showBtn = document.querySelector(".show-btn")
let bar = document.querySelector(".bar");
let zero = document.querySelector(".zero");
let fifty = document.querySelector(".fifty");
let hundred = document.querySelector(".hundred");
let third = document.querySelector(".third-page")

fifty.addEventListener("click", ()=>{
    bar.style.width = "50%";
    second.classList.add("active");
    if(third.classList.contains("third")){
        third.classList.remove("third")
    }
})

hundred.addEventListener("click", ()=>{
    bar.style.width = "100%"
    if(second.classList.contains("active")){
        second.classList.remove("active")
    }
    third.classList.add("third")
})


zero.addEventListener("click", ()=>{
    bar.style.width = "0%";
    if(second.classList.contains("active")){
        second.classList.remove("active")
    }
    if(third.classList.contains("third")){
        third.classList.remove("third")
    }
})




// showBtn.addEventListener("click", ()=>{
//     second.classList.toggle("active");
//     form.classList.toggle("disabled");
    

// })


form.addEventListener("input", ()=>{
   jobSub.innerHTML = `${firstName.value}`
})








    
    let btn = document.querySelector(".printBtn");

    btn.addEventListener("click", ()=>{
        print();
        firstName.focus();


    })



    
