<script lang="ts" setup>
import CDashboard from '@/components/CDashboard.vue';
</script>

<template>
    <div>
        <h1 class="mb-4">
            Область команды C
        </h1>
        <div class="d-flex ga-4 flex-wrap">
            <CCard class="w-100" min-height="200px" />
            <CDashboard class="w-100" min-height="200px" />
        </div>
    </div>
</template>
