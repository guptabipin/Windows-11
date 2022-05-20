let windos = document.getElementsByClassName("start")[0]
let startmenu = document.getElementsByClassName("startmenu")[0]

let wordlogo = document.getElementsByClassName("msicon")[0]
let words = document.getElementsByClassName("msOffice")[0]

let min = document.getElementsByClassName("cancel")[0]

windos.addEventListener("click", popUp);
wordlogo.addEventListener("click", ppt);
min.addEventListener("click", exit);

function popUp(){
    if(startmenu.style.bottom == "50px"){
        startmenu.style.bottom = "-650px"
    }
    else{
        startmenu.style.bottom = "50px"
    }
}

function ppt(){
    if(words.style.bottom == "840px"){
        words.style.bottom = "100px"
    }
    else{
        words.style.bottom = "840px"
    }
}

function exit(){
    console.log("Visilble")
   if(min.style.top == "1px"){
    words.style.bottom = "840px"
   }
   else{
    min.style.top = "1px"
   }
}
