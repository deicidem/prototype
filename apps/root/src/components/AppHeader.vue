<script lang="ts" setup>
import { useUserStore } from '@/stores/user';
import { storeToRefs } from 'pinia';

const { logout } = useUserStore();
const { isAuthenticated, user } = storeToRefs(useUserStore());
</script>

<template>
    <VAppBar color="secondary" flat>
        <template #title>
            <VBtn to="/">
                Главная
            </VBtn>
            <VBtn to="/b-team">
                Функционал B
            </VBtn>
            <VBtn to="/c-team">
                Функционал C
            </VBtn>
        </template>
        <div class="mr-5">
            <template v-if="isAuthenticated && user">
                <div class="d-flex align-center">
                    <div class="mr-4">
                        Привет, {{ user.userName }}
                    </div>
                    <VBtn @click="logout">
                        Выйти
                    </VBtn>
                </div>
            </template>
            <template v-else>
                <VBtn to="/auth/login">
                    Вход
                </VBtn>
                <VBtn to="/auth/register">
                    Регистрация
                </VBtn>
            </template>
        </div>
    </VAppBar>
</template>
