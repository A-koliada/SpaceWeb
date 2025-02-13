document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("inputField");
    const typeOutput = document.getElementById("typeOutput");

    inputField.addEventListener("input", () => {
        let value = inputField.value.trim(); 
        inputField.value = value;  
        typeOutput.textContent = "---"; 
    });

    inputField.addEventListener("keydown", (event) => {
        if (event.key === "Enter") {
            event.preventDefault(); 
            let value = inputField.value.trim(); 
            typeOutput.textContent = determineType(value);  
        }
    });

    function determineType(value) {
        if (value === "") return "Empty";
        try {
            if (value.endsWith("n")) {
                BigInt(value);  
                return "BigInt"; 
            }
        } catch (e) {
            
        }
        if (/^-?\d+(\.\d+)?$/.test(value)) {
            return value.includes(".") ? "Float" : "Integer";  
        }
        if (value.toLowerCase() === "true" || value.toLowerCase() === "false") return "Boolean"; 
        return "String"; 
    }
});
