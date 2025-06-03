import { apiToken, apiURL, apiUsername } from "../services/api";

export const envValidaiton = () => {
    if (!apiURL) {
        return {
            code: "UNABLE_TO_AUTHENTICATE",
            message: "GoDaddy API BASE URL is not set in env variables."
        };
    }
    if (!apiUsername || !apiToken) {
        return {
            code: "UNABLE_TO_AUTHENTICATE",
            message: "GoDaddy API credentials are not set in env variables."
        };
    }
}

export default envValidaiton;