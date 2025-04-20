<template>
    <VAppBar color="secondary" flat>
        <template #title>
            <VBtn to="/">
                Главная
            </VBtn>
            <VBtn to="/b-team">
                Функционал B
            </VBtn>
            <VBtn to="/c-team">
                Функционал C
            </VBtn>
        </template>
        <template #default>
            <div class="mr-8">
                <strong>Функционал команды A</strong>
            </div>
        </template>
    </VAppBar>
</template>
