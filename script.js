document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("inputField");
    const typeOutput = document.getElementById("typeOutput");

    inputField.addEventListener("change", () => {
        typeOutput.textContent = "---"; // Очищення при зміні значення після втрати фокусу
    });

    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const value = inputField.value.trim();
            typeOutput.textContent = determineType(value);
        }
    });

    function determineType(value) {
        if (value === "") return "Empty";
        if (!isNaN(value) && value !== "") return value.includes(".") ? "Float" : "Integer";
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") return "Boolean";
        return "String";
    }
});
