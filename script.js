document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("inputField");
    const typeOutput = document.getElementById("typeOutput");

    inputField.addEventListener("keypress", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const value = inputField.value.trim();
            let type = determineType(value);
            typeOutput.textContent = type;
        }
    });

    function determineType(value) {
        if (value === "") return "Empty";
        if (!isNaN(value)) return value.includes(".") ? "Float" : "Integer";
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") return "Boolean";
        return "String";
    }
});
