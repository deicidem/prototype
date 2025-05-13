<script lang="ts" setup>
</script>

<template>
    <div>
        <h1 class="mb-4">
            Главная
        </h1>
        <div class="d-flex ga-4 flex-wrap" />
        <RemoteComponent v-slot="{ component }" component="BDashboard" namespace="b">
            <component :is="component" />
        </RemoteComponent>
    </div>
</template>
