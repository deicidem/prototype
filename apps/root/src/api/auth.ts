import ax from './base.js';

export interface RegisterRequest {
    userName: string;
    email: string;
    password: string;
}

export interface LoginRequest {
    email: string;
    password: string;
}

export interface User {
    id: string;
    userName: string;
    email: string;
    role: string;
}

async function register(request: RegisterRequest) {
    return await ax.post('/register', request);
}

async function login(request: LoginRequest) {
    try {
        const res = await ax.post<{ token: string }>('/login', request);
        localStorage.setItem('token', res.data.token);
        return res.data;
    }
    catch (error) {
        console.error('Login failed:', error);
        throw error;
    }
}

async function logout() {
    await ax.post('/logout');
    localStorage.removeItem('token');
}

async function me() {
    try {
        const res = await ax.get<User>('/me');
        return res.data;
    }
    catch (error) {
        console.error('Check auth failed:', error);
        throw error;
    }
}

const AuthService = {
    me,
    register,
    login,
    logout,
};

export default AuthService;
