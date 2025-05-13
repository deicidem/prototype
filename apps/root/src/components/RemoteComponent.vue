<template>
    <div>
        <slot v-if="loadedComponent" :component="loadedComponent" />
        <slot v-else-if="error" name="loader">
            <VProgressCircular
                color="primary"
                indeterminate
                width="2"
                size="64"
            />
        </slot>
        <slot v-else name="loader">
            <VProgressCircular
                color="primary"
                indeterminate
                width="2"
                size="64"
            />
        </slot>
    </div>
</template>

<script lang="ts" setup>
import type { MFKeys } from '@/mf/loaders/types';
import { loadRemote } from '@module-federation/enhanced/runtime';

const props = defineProps<{
    component: keyof typeof import('b/components');
    namespace: MFKeys;
}>();

const loadedComponent = shallowRef<any>();
const error = ref(false);

async function loadComponent() {
    const c = await loadRemote<typeof import('b/components')>('b/components');
    if (c) {
        loadedComponent.value = c[props.component];
    }
    return c;
}

onMounted(() => {
    loadComponent().catch((e) => {
        console.log(e);
    });
});
</script>

<style>

</style>
