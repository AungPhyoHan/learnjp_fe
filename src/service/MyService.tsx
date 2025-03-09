import axios from "axios";
import { Word } from "../models/MyModels";

const baseURL = "http://localhost:8080/api/learnjp";

export const listAllkanji = (level: number) =>
  axios.get(`${baseURL}/getallkanji/${level}`);

export const createNewWord = async (word: Word) =>
  await axios.post(`${baseURL}/create`, word, {
    headers: {
      "Content-Type": "application/json",
    },
  });
