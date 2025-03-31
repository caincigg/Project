// Create an HTML element dynamically
document.body.innerHTML = "<h1>Hello, JavaScript in VS Code!</h1>";

// Log a message to the console
console.log("Hello from JavaScript!");

// Add a button that changes text when clicked
const button = document.createElement("button");
button.textContent = "Click me";
document.body.appendChild(button);

// Create a paragraph to update the text
const message = document.createElement("p");
document.body.appendChild(message);

button.addEventListener("click", () => {
    message.textContent = "You clicked the button!";
});


