// Dependencies
import axios from "axios";

// Utils
import { apiUrl } from "@/utils/constants";

export const restApi = axios.create({
    baseURL: apiUrl,
    headers: {
        "Content-Type": "application/json",
    },
});
