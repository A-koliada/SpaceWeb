document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("inputField");
    const typeOutput = document.getElementById("typeOutput");

    // Очищення Type при введенні або видаленні
    inputField.addEventListener("input", () => {
        const trimmedValue = inputField.value.trim(); // Очищаємо пробіли на початку та в кінці
        inputField.value = trimmedValue;  // Оновлюємо поле вводу з новим значенням після trim
        typeOutput.textContent = "---";  // Очищуємо поле Type при будь-якому редагуванні
    });

    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();  // Блокуємо стандартну поведінку (перезавантаження сторінки)
            const value = inputField.value.trim();  // Тепер значення вже обрізається
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
