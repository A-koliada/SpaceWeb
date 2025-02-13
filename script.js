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

        // Перевірка на BigInt
        try {
            if (value.endsWith("n")) {
                BigInt(value);  // Пробуємо перетворити в BigInt
                return "BigInt"; // Якщо вийшло, це BigInt
            }
        } catch (e) {
            // Якщо не вдалося перетворити в BigInt, пропускаємо цю перевірку
        }

        // Перевірка на числові значення
        if (/^-?\d+(\.\d+)?$/.test(value)) {
            return value.includes(".") ? "Float" : "Integer";  // Перевірка на числа
        }

        // Перевірка на Boolean
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") return "Boolean"; 

        // Перевірка на Null
        if (value === "null") return "Null"; 

        // Перевірка на Undefined
        if (value === "undefined") return "Undefined"; 

        return "String";  // Якщо нічого не підходить - String
    }
});
