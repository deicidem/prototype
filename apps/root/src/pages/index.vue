<script lang="ts" setup>
</script>

<template>
    <div>
        <h1 class="mb-4">
            Главная
        </h1>
        <div class="d-flex ga-4 flex-wrap flex-column">
            <RemoteComponent v-slot="{ component }" component="BDashboard" namespace="b">
                <component :is="component" />
            </RemoteComponent>
            <RemoteComponent v-slot="{ component }" component="СDashboard" namespace="c">
                <component :is="component" />
            </RemoteComponent>
        </div>
    </div>
</template>
