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
        <template v-if="user" #subtitle>
            Пользователь: {{ user.userName }}
        </template>
    </VCard>
</template>
