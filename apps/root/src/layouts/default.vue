<script lang="ts" setup>
import AppHeader from '@/components/AppHeader.vue';
</script>

<template>
    <VLayout>
        <AppHeader />
        <VMain class="bg-blue-grey-lighten-5">
            <VContainer class="mt-4">
                <RouterView />
            </VContainer>
        </VMain>
    </VLayout>
</template>
