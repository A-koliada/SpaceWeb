document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("inputField");
    const typeOutput = document.getElementById("typeOutput");

        inputField.addEventListener("input", () => {
        typeOutput.textContent = "---";  
    });

    function determineType(value) {
        if (value === "") return "Empty";
        if (/^-?\d+(\.\d+)?$/.test(value)) {
            return value.includes(".") ? "Float" : "Integer";
        }
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") return "Boolean";
        return "String";
    }
});
