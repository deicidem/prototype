<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from 'root/stores';

const { user } = storeToRefs(useUserStore());
</script>

<template>
    <VCard class="w-100" min-height="200px">
        <template #title>
            Дашборд команды B
        </template>
        <template #subtitle>
            <span v-if="user">
                Пользователь: {{ user.userName }}
            </span>
            <!-- <span v-else>
                Авторизуйтесь, для получения информации
            </span> -->
        </template>
    </VCard>
</template>
