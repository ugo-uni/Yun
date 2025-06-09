function textUpdate(){
    const textWrapBox = document.querySelector("div.text-list-wrap");
    const textBox = document.createElement("div");
    const inputTextBox = document.querySelector("input.input");
    const text = inputTextBox.value;

    textBox.innerText = text;
    textWrapBox.appendChild(textBox);

    inputTextBox.value = "";
}
