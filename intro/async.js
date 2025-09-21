// usin async/await

// const { use } = require("react");

async function getUsers(){
    try {
        let response = await fetch("https:jsonplaceholder.typicode.com/users");
        let users = await response.json();
        console.log(users);
    } catch (error) {
        console.log("Message: Runtime error", error);
    }
}

getUsers();

async function getUsers(){
    try {
        let response = await fetch("https:jsonplaceholder.typicode.com/users");
        let users = await response.json();
        let address = users.map(user => user.address.street);
        console.log(address);
    } catch (error) {
        console.log("Message: Runtime error", error);
    }
}

getUsers();

async function getUsers(){
    try {
        let response = await fetch("https:jsonplaceholder.typicode.com/users");
        let users = await response.json();
        console.log(users);
    } catch (error) {
        console.log("Message: Runtime error", error);
    }
}

getUsers();


// async function getUsers() {
//     try {
//          let response = await fetch("https://jsonplaceholder.typicode.com/users");
//             if (!response.ok) {
//                 throw new Error(`Unable to fetch: ${response.status}`);  
//             }
//             const users = await response.json();
//             return users;   
//     } catch (error) {
//         console.log("Message: Runtime error", error);
//         throw error; // Re-throw the error to be handled by the caller
//     }
   
// }


// window.addEventListener('DOMContentLoaded', () => {
//     const userResult = document.getElementById('userResult');
//     const userBtn = document.getElementById('userBtn');


//     userBtn.addEventListener('click', async () => {
//         userResult.innerHTML = "Loading...";
//         try {
//             setTimeout(async () => {
//                const users = await getUsers();
//             const info = users.map(user => `<li>
//             <strong>${user.name}</strong> (${user.email}) <br>
//             ${user.address.street}, ${user.address.city}
//             </li > `
//             );
//             userResult.innerHTML = `<ul>${info.join('')}</ul>`;
//             }, 5000);
//         } catch (error) {
//             userResult.innerHTML = `Error Fetching Result: ${error.message}`;
//         }
//  } )
// });