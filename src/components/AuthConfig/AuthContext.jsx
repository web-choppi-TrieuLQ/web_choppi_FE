import React, { createContext, useState } from 'react';

export const AuthContext = createContext(undefined);

export const AuthProvider = ({ children }) => {
    const [token, setToken] = useState(null);

    // Function để cung cấp token
    const getToken = () => token;

    return (
        <AuthContext.Provider value={{ token, setToken, getToken }}>
            {children}
        </AuthContext.Provider>
    );
};