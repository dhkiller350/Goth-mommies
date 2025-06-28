function sendMessage() {
  const input = document.getElementById('chat-input');
  const message = input.value.trim();

  if (message !== '') {
    const chatBox = document.getElementById('chat-box');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    messageDiv.textContent = "You: " + message;
    chatBox.appendChild(messageDiv);

    chatBox.scrollTop = chatBox.scrollHeight;
    input.value = '';
  }
}

// Optional: Send on Enter key press
document.getElementById('chat-input').addEventListener('keypress', function(e) {
  if (e.key === 'Enter') {
    sendMessage();
  }
});
