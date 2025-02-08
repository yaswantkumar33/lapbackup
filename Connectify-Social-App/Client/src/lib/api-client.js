import { HOST } from "@/utils/cosnt";
import axios from "axios";
export const apiClient = axios.create({
  baseURL: HOST,
});
