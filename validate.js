
const previousValueInput = "";

function UpdateInput(event) {
    let input = event.target.value;
    console.log({ input })
    validateName(input);
}
function validateName(nameInput) {
    const regex = /^[А-Я][А-Яа-я]*$/;

    // Проверяем, соответствует ли значение регулярному выражению
    if (regex.test(nameInput)) {
        console.log("Имя и фамилия введены правильно!");
    } else {
        console.log("Ошибка: имя и фамилия должны быть введены с больших букв и разделены пробелом.");
    }
}
nameInput.addEventListener('input', UpdateInput)

