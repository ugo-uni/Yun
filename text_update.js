function textUpdate(){
    const textWrapBox = document.querySelector("div.text-list-wrap");
    const textBox = document.createElement("div");
    const text = document.querySelector("input.input").value;

    textBox.innerText = text;
    textWrapBox.appendChild(textBox);
    text.value = '';
}
