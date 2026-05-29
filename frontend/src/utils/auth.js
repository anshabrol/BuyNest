// src/utils/auth.js
const BASE_URL = import.meta.env.VITE_DJANGO_BASE_URL;
export const saveTokens = (tokens) => {
    localStorage.setItem("access_token", tokens.access);
    localStorage.setItem("refresh_token", tokens.refresh);
  };
  
  export const clearTokens = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
  };
  
  export const getAccessToken = () => localStorage.getItem("access_token");
/*  
  export const authFetch = (url, options = {}) => {
    const token = getAccessToken();
    const headers = options.headers ? {...options.headers} : {};
    if (token) headers['Authorization'] = `Bearer ${token}`;
    headers['Content-Type'] = headers['Content-Type'] || 'application/json';
    return fetch(url, {...options, headers});
  };
*/

export const getRefreshToken = () =>
    localStorage.getItem("refresh_token");

export const refreshAccessToken = async () => {

    const refreshToken = getRefreshToken();

    if (!refreshToken) {
        return null;
    }

    try {

        const response = await fetch(
            `${BASE_URL}/api/token/refresh/`,
            {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    refresh: refreshToken,
                }),
            }
        );

        if (!response.ok) {
            return null;
        }

        const data = await response.json();

        localStorage.setItem(
            "access_token",
            data.access
        );

        return data.access;

    } catch (error) {

        console.error(
            "Token refresh failed",
            error
        );

        return null;
    }
};

export const authFetch = async (
    url,
    options = {}
) => {

    let token = getAccessToken();

    let headers = options.headers
        ? { ...options.headers }
        : {};

    if (token) {
        headers["Authorization"] =
            `Bearer ${token}`;
    }

    headers["Content-Type"] =
        headers["Content-Type"] ||
        "application/json";

    let response = await fetch(url, {
        ...options,
        headers,
    });

    if (response.status === 401) {

        const newAccessToken =
            await refreshAccessToken();
        
        if (!newAccessToken) {

            clearTokens();

            window.location.href =
                "/login";

            return response;
        }
        /*
        if (!newAccessToken) {

            console.log("Refresh token failed");
        
            return response;
        }
        */
        headers["Authorization"] =
            `Bearer ${newAccessToken}`;

        response = await fetch(url, {
            ...options,
            headers,
        });
    }

    return response;
};