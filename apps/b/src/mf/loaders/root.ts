export async function loadStore() {
    console.log('loadStore');
    try {
        const { useUserStore } = await import('root/stores');
        return useUserStore;
    }
    catch (error) {
        console.log(error);
    }
}
