    const apiKey = 'YOUR_OPENAI_API_KEY'; // Replace with your OpenAI API key

async function sendMessage() {
    const inputField = document.getElementById('user-input');
    const userMessage = inputField.value;
    inputField.value = '';

    // Append user message to chat log
    appendToChatLog('User', userMessage);

    // Create the request payload for OpenAI
    const requestPayload = {
        model: "gpt-3.5-turbo", // or "gpt-4" depending on your subscription
        messages: [
            { role: "system", content: "You are a helpful assistant." },
            { role: "user", content: userMessage }
        ]
    };

    // Make API call to OpenAI
    const response = await fetch('https://api.openai.com/v1/chat/completions', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${apiKey}`
        },
        body: JSON.stringify(requestPayload)
    });

    const data = await response.json();
    const replyMessage = data.choices[0].message.content;

    // Append GPT reply to chat log
    appendToChatLog('GPT', replyMessage);
}

// Function to append messages to the chat log
function appendToChatLog(sender, message) {
    const chatLog = document.getElementById('chat-log');
    const newMessage = document.createElement('p');
    newMessage.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatLog.appendChild(newMessage);
    chatLog.scrollTop = chatLog.scrollHeight; // Auto-scroll to the bottom
}
