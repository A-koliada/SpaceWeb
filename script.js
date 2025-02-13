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
            let value = inputField.value.trim();  // Видаляємо зайві пробіли тільки після натискання Enter
            typeOutput.textContent = determineType(value);  // Оновлюємо Type на основі очищеного значення
        }
    });

    function determineType(value) {
        if (value === "") return "Empty";  // Якщо значення порожнє

        // Перевірка на BigInt (якщо значення закінчується на "n")
        if (value.endsWith("n")) {
            try {
                BigInt(value);  // Перетворюємо значення в BigInt
                return "BigInt";  // Якщо вдалося перетворити
            } catch (e) {
                return "Invalid BigInt"; // Якщо не вдалося перетворити в BigInt
            }
        }

        // Перевірка на числові значення
        if (/^-?\d+(\.\d+)?$/.test(value)) {
            const numValue = Number(value);
            // Перевірка на дуже великі числа
            if (numValue > Number.MAX_SAFE_INTEGER || numValue < -Number.MAX_SAFE_INTEGER) {
                try {
                    BigInt(value);  // Якщо значення велике, пробуємо перетворити в BigInt
                    return "BigInt";  // Якщо вдалося, це BigInt
                } catch (e) {
                    return "Invalid BigInt";
                }
            }
            return value.includes(".") ? "Float" : "Integer";  // Перевірка на Float або Integer
        }

        // Перевірка на Boolean
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") return "Boolean"; 

        return "String";  // Якщо нічого не підходить - String
    }
});
