const input = document.getElementById("number");
const button = document.getElementById("generateBtn");
const result = document.getElementById("result");

button.addEventListener("click", () => {
    const n = Number(input.value);

    if (!n && n !== 0) {
        result.textContent = "Digite um número válido!";
        return;
    }

    let text = "";
    for (let i = 1; i <= 10; i++) {
        text += `${n} x ${i} = ${n * i}\n`;
    }

    result.textContent = text;
})
