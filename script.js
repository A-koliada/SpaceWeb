document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("inputField");
    const typeOutput = document.getElementById("typeOutput");

    inputField.addEventListener("input", () => {
        typeOutput.textContent = "---"; 
    });

    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault();
            const value = inputField.value.trim();
            typeOutput.textContent = determineType(value);
        }
    });

    function determineType(value) {
        value = value.trim(); 
        if (value === "") return "Empty";
        if (/^-?\d+(\.\d+)?$/.test(value)) {
            return value.includes(".") ? "Float" : "Integer"; 
        }
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") return "Boolean";
        return "String";
    }
});
