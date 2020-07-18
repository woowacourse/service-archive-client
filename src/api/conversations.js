import axios from "axios";

const client = axios.create({});

export const fetchAll = () => client.get("/conversations");
export const fetchConversation = (id) => client.get(`/conversations/${id}`)
