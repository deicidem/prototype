<template>
    <div>
        <slot v-if="loadedComponent" :component="loadedComponent" />
        <slot v-else-if="error" name="loader">
            <div>Ошибка при загрузке компонента</div>
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

<script lang="ts" setup generic="T extends MFComponent">
import type { MFComponent, MFComponents } from '@/mf/loaders/components';
import type { MFKeys } from '@/mf/loaders/types';
import { loadMFComponent } from '@/mf/loaders/components';

const props = defineProps<{
    component: T;
    namespace: MFKeys;
}>();

const slots = defineSlots<{
    loader: () => any;
    default: (props: { component: MFComponents[T] }) => any;
}>();

const loadedComponent = shallowRef<MFComponents[T]>();
const error = ref(false);

onMounted(async () => {
    try {
        const component = await loadMFComponent(props.namespace, props.component);
        loadedComponent.value = component;
    }
    catch (error) {
        error.value = true;
    }
});
</script>
