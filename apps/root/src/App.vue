<script lang="ts" setup>
import { useUserStore } from './stores/user';

const { getUser } = useUserStore();

onMounted(() => {
    getUser();
});
</script>

<template>
    <VApp>
        <RouterView />
    </VApp>
</template>
