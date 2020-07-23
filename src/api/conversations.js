import axios from "axios";

const client = axios.create({});

export const fetchAll = () => client.get("/conversations");
export const fetchConversation = (id) => client.get(`/conversations/${id}`);
export const fetchSpecificConversation = ({conversationTime, message, size}) => client.get(`/conversations/search/`, {
  params: {
    conversationTime,
    message,
    size
  }
});
