import fetch, { RequestInfo, RequestInit } from "node-fetch"
export default (url: RequestInfo, options: RequestInit) => {
    return fetch(url, options).then(response => {
        if (response.status !== 200) {
        return response.text().then(text => {
            throw new Error(text);
        });
    }
        return response.json();
    });
};