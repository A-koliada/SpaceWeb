document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("inputField");
    const typeOutput = document.getElementById("typeOutput");

    // Очищення Type при введенні або видаленні
    inputField.addEventListener("input", () => {
        typeOutput.textContent = "---";  // Очищуємо поле Type при будь-якому редагуванні
    });

    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();  // Блокуємо стандартну поведінку (перезавантаження сторінки)
            let value = inputField.value.trim();  // Видаляємо зайві пробіли
            inputField.value = value;  // Оновлюємо поле вводу з новим значенням після trim
            typeOutput.textContent = determineType(value);  // Оновлюємо Type на основі очищеного значення
        }
    });

    function determineType(value) {
        if (value === "") return "Empty";  // Якщо значення порожнє
        if (/^-?\d+(\.\d+)?$/.test(value)) {
            return value.includes(".") ? "Float" : "Integer";  // Перевірка на числа
        }
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") return "Boolean";  // Перевірка на Boolean
        return "String";  // Якщо нічого не підходить - String
    }
});
