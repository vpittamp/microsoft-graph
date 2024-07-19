export const msalConfig = {
    auth: {
        clientId: "b2ae0569-7deb-461e-bf56-e411288e97f9",
        authority: "https://login.microsoftonline.com/0c4da9c5-40ea-4e7d-9c7a-e7308d4f8e38",
        redirectUri: "http://localhost:5173"
    },

    cache: {
        cacheLocation: "localStorage", // This configures where your cache will be stored
        storeAuthStateInCookie: true, // Set this to "true" if you are having issues on IE11 or Edge
    },
};

export const loginRequest = {
    scopes: [
        'Mail.ReadWrite',
        'Mail.Send',
        'Tasks.ReadWrite',
        'User.Read'
    ],
};