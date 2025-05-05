import {useUserStore} from 'root'

export async function loadStore(): Promise<typeof useUserStore> {
    console.log('loadStore');
    try {
        const { useUserStore } = await import('root/stores');
        return useUserStore;
    }
    catch (error) {
        console.log(error);
    }
}
