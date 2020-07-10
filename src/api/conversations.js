import axios from "axios";

const client = axios.create({
  baseURL: "http://192.168.6.211:8080"
})

export const fetchAll = () => client.get("/conversations")