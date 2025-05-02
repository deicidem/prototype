<script setup lang="ts">
import type { LoginRequest } from '@/api/auth';
import AuthService from '@/api/auth';
import { useUserStore } from '@/stores/user';
import { useRouter } from 'vue-router';

const router = useRouter();
const { getUser } = useUserStore();

const form = ref<LoginRequest>({
    email: '',
    password: '',
});

async function login() {
    await AuthService.login(form.value);
    await getUser();
    router.push('/');
}
</script>

<template>
    <VForm class="d-flex flex-column" @submit.prevent="login">
        <VTextField
            v-model="form.email"
            label="E-mail"
            color="primary"
            variant="outlined"
        />
        <VTextField
            v-model="form.password"
            label="Пароль"
            color="primary"
            variant="outlined"
            type="password"
        />
        <VBtn
            type="submit"
            variant="flat"
            color="primary"
        >
            Войти
        </VBtn>
        <VBtn
            class="mt-2"
            to="/auth/register"
            variant="text"
            color="primary"
        >
            Зарегистрироваться
        </VBtn>
    </VForm>
</template>
