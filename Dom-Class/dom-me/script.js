const form = document.getElementById("myForm");
        const nameInput = document.getElementById("fname");
        const nameError = document.getElementById("nameError");
        const successMessage = document.getElementById("successMessage");

        form.onsubmit = (e) => {
            e.preventDefault();
            
            // Clear previous messages
            nameError.style.display = "none";
            successMessage.style.display = "none";
            
            // Get and trim the input value
            const name = nameInput.value.trim();
            
            // Validate the name
            if (name === "") {
                showError("Name is required");
                return false;
            }
            
            if (name.length < 2) {
                showError("Name must be at least 2 characters long");
                return false;
            }
            
            // if (!/^[a-zA-Z\s]+$/.test(name)) {
            //     showError("Name can only contain letters and spaces");
            //     return false;
            // }
            
            // If validation passes
            showSuccess("Form submitted successfully!");
            form.reset();
            
            // showSuccess(`Form submitted successfully! Hello, ${name}!`);
            // form.reset();
        };
        
        const showError = (message) => {
            nameError.textContent = message;
            nameError.style.display = "inline";
        }
        
        const showSuccess = (message) => {
            successMessage.textContent = message;
            successMessage.style.display = "block";
        }
        
        // Real-time validation as user types
        // nameInput.oninput = () => {
        //     if (nameError.style.display !== "none") {
        //         nameError.style.display = "none";
        //     }
        // };