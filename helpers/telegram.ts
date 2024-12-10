import axios from "axios";

export const sendMessageToBot = async (chatId: string, message: string) => {
  const botToken = process.env.BOT_TOKEN;

  const url = `https://api.telegram.org/bot${botToken}/sendMessage`;

  try {
    const response = await axios.post(url, {
      chat_id: chatId,
      text: message,
    });

    console.log("Message sent:", response.data);
  } catch (error) {
    console.error("Error sending message:", error);
  }
};
