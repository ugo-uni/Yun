const examEvent = document.querySelector("span.examEvent");
const container = document.querySelector("div.container");

let check = 0;
function handleClick(){
    const existingImg = container.querySelector("img");
    const msg = container.querySelector("h3.msg");
    if (check == 0){
        msg.innerText = "윤아야 시험공부 화팅이야!!";
        const img = document.createElement("img");
        img.src = "C:/workplace/project/Yun/cha.png";
        img.style.width = "400px";
        img.style.height = "460px";
        container.appendChild(img);
        check = 1;
    }
    else{
        msg.innerText = ""
        existingImg.remove()
        check = 0;
    }
}

examEvent.addEventListener("click", handleClick);