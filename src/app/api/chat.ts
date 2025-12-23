const handleSendMessage = async () => {
  const userMessage = inputValue;
  const newMessages = [...messages, { role: "user", text: userMessage }];
  setMessages(newMessages);
  setInputValue("");

  const response = await fetch("http://localhost:5000/api/chat", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ messages: newMessages }),
  });

  const data = await response.json();
  setMessages((prev) => [...prev, { role: "assistant", text: data.reply }]);
};
