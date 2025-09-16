export const BASE_URL = "http://localhost:8000";

export const API_PATHS = {
    Auth: {
        LOGIN: "/api/v1/auth/login",
        SIGN_UP: "/api/v1/auth/signup",
        GET_USER: "/api/v1/auth/getUser"
    },
    Transaction: {
        GET_ALL_USER_TRANSACTION: "/api/v1/transaction/getTransactionsByUser",
        CREATE_TRANSACTION: "/api/v1/transaction/createTransactionByUser",
        DELETE_TRANSACTION: "/api/v1/transaction/deleteTransactionByUser"
    }
};