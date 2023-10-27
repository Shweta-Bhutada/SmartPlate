const chatBtn = document.getElementById("chatBtn");
const chatContainer = document.getElementById("chatContainer");
const closeChat = document.getElementById("closeChat");
const messageInput = document.getElementById("messageInput");
const chatMessages = document.getElementById("chatMessages");
const sendBtn = document.getElementById("sendBtn");

chatBtn.addEventListener("click", () => {
    chatContainer.style.display = "block";
});

closeChat.addEventListener("click", () => {
    chatContainer.style.display = "none";
});

sendBtn.addEventListener("click", () => {
    sendMessage();
});

function sendMessage() {
    const userMessage = messageInput.value;
    const chatBox = document.createElement("div");
    chatBox.className = "chat-message";

    // Display user message
    const userDiv = document.createElement("div");
    userDiv.className = "user-message";
    userDiv.innerText = "You: " + userMessage;
    chatBox.appendChild(userDiv);
    chatMessages.appendChild(chatBox);

    // Check user message and respond accordingly
    if (userMessage.toLowerCase() === "hello") {
        const botDiv = document.createElement("div");
        botDiv.className = "chat-message bot";
        botDiv.innerText = "SmartPlate: Hello there! Please select a query from the menu:";
        chatMessages.appendChild(botDiv);

        // Display menu options
        const menuOptions = ["Order Status", "Customer Care", "Feedback"];
        menuOptions.forEach(function(option) {
            const optionDiv = document.createElement("div");
            optionDiv.className = "chat-message bot";
            optionDiv.innerText = "SmartPlate: " + option;
            chatMessages.appendChild(optionDiv);
        });
    } else if (userMessage === "Order Status") {
        const botDiv = document.createElement("div");
        botDiv.className = "chat-message bot";
        botDiv.innerText = "SmartPlate: Order Status: Out for delivery";
        chatMessages.appendChild(botDiv);
    } else if (userMessage.toLowerCase() === "customer care") {
        const botDiv = document.createElement("div");
        botDiv.className = "chat-message bot";
        botDiv.innerText = "SmartPlate: Customer Care: 0123456789 or smartplate.customercare@gmail.com";
        chatMessages.appendChild(botDiv);
    } else if (userMessage.toLowerCase() === "feedback") {
        const botDiv = document.createElement("div");
        botDiv.className = "chat-message bot";
        botDiv.innerText = "SmartPlate: Please provide your feedback here: feedback.smartplate.com";
        chatMessages.appendChild(botDiv);
    } else {
        // Handle other user messages here
        const botDiv = document.createElement("div");
        botDiv.className = "chat-message bot";
        botDiv.innerText = "SmartPlate: I'm sorry, I didn't understand that.";
        chatMessages.appendChild(botDiv);
    }

    // Clear user input
    messageInput.value = "";

    // Scroll to the bottom of the chat box
    chatMessages.scrollTop = chatMessages.scrollHeight;
}
