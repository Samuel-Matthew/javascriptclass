async function getUsers() {
    try {
         let response = await fetch("https://jsonplaceholder.typicode.com/users");
            if (!response.ok) {
                throw new Error(`Unable to fetch: ${response.status}`);  
            }
            const users = await response.json();
            return users;   
    } catch (error) {
        console.log("Message: Runtime error", error);
        throw error; // Re-throw the error to be handled by the caller
    } finally {
        console.log(users)
    }
    
   
}


getUsers();