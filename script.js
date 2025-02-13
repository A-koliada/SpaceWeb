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
        if (/^\d+n$/.test(value)) {
            return "BigInt";  // Перевірка на BigInt (якщо значення закінчується на "n")
        }

        // Перевірка на числові значення
        if (/^-?\d+(\.\d+)?$/.test(value)) {
            const numValue = Number(value);
            if (Math.abs(numValue) > Number.MAX_SAFE_INTEGER) {
                return "BigInt";  // Якщо значення перевищує максимально безпечне ціле число для Number
            }
            return value.includes(".") ? "Float" : "Integer";  // Перевірка на Float або Integer
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
