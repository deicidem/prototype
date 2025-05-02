<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useUserStore } from 'root/stores';

const { isAuthenticated } = storeToRefs(useUserStore());
</script>

<template>
    <div>
        {{ isAuthenticated }}
        <RouterLink to="/b-team/second">
            Вторая страница
        </RouterLink>
        <h1 class="mb-4">
            Область команды B (Главная)
        </h1>
        <div class="d-flex ga-4 flex-wrap">
            <BDashboard class="w-100" min-height="200px" />
            <BCard class="w-100" min-height="200px" />
        </div>
    </div>
</template>
