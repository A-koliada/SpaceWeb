document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("inputField");
    const typeOutput = document.getElementById("typeOutput");

    // Очищення Type при введенні або видаленні
    inputField.addEventListener("input", () => {
        let value = inputField.value.trim(); // Очищаємо пробіли на початку та в кінці
        inputField.value = value;  // Оновлюємо поле вводу з новим значенням після trim
        typeOutput.textContent = "---";  // Очищуємо поле Type при будь-якому редагуванні
    });

    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();  // Блокуємо стандартну поведінку (перезавантаження сторінки)
            let value = inputField.value.trim();  // Видаляємо зайві пробіли
            typeOutput.textContent = determineType(value);  // Оновлюємо Type на основі очищеного значення
        }
    });

    function determineType(value) {
        if (value === "") return "Empty";  // Якщо значення порожнє
        if (/^-?\d+(\.\d+)?$/.test(value)) {
            return value.includes(".") ? "Float" : "Integer";  // Перевірка на числа
        }
        if (/^\d+n$/.test(value)) {
            return "BigInt";  // Перевірка на BigInt
        }
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") return "Boolean";  // Перевірка на Boolean
        if (value === "null") return "Null";  // Перевірка на Null
        if (value === "undefined") return "Undefined";  // Перевірка на Undefined
        if (typeof Symbol(value) === "symbol") return "Symbol";  // Перевірка на Symbol
        return "String";  // Якщо нічого не підходить - String
    }
});
