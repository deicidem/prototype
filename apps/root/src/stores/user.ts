import type { User } from '../api/auth';
import { defineStore } from 'pinia';
import AuthService from '../api/auth';

export const useUserStore = defineStore('user', () => {
    const isAuthenticated = ref(false);
    const user = ref<User>();

    async function getUser() {
        const token = localStorage.getItem('token');
        if (token) {
            const resp = AuthService.me();
            if (resp) {
                isAuthenticated.value = true;
                user.value = await resp;
            }
            else {
                isAuthenticated.value = false;
                user.value = undefined;
            }
        }
        else {
            isAuthenticated.value = false;
            user.value = undefined;
        }
    }

    async function logout() {
        await AuthService.logout();
        isAuthenticated.value = false;
        user.value = undefined;
    }

    return { isAuthenticated, user, getUser, logout };
});
