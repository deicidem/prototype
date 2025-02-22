<script lang="ts" setup>
import type { Product } from '@/components/ProductCard.vue';

const products: Product[] = [
    {
        id: 1,
        name: 'Ноутбук',
        stock: 10,
        price: 1000,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur facere a! Ipsum quaerat vero consectetur? Qui nam, molestiae nihil tenetur rerum harum architecto sed, delectus dolor, pariatur eveniet placeat!',
    },
    {
        id: 2,
        name: 'Ноутбук 2',
        stock: 5,
        price: 1200,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur facere a! Ipsum quaerat vero consectetur? Qui nam, molestiae nihil tenetur rerum harum architecto sed, delectus dolor, pariatur eveniet placeat!',
    },
    {
        id: 3,
        name: 'Телефон',
        stock: 10,
        price: 124,
        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi pariatur facere a! Ipsum quaerat vero consectetur? Qui nam, molestiae nihil tenetur rerum harum architecto sed, delectus dolor, pariatur eveniet placeat!',
    },
];
</script>

<template>
    <div>
        <h1 class="mb-4">
            Каталог
        </h1>
        <div class="d-flex ga-4 flex-wrap ">
            <ProductCard v-for="product in products" :key="product.id" :product="product" />
        </div>
    </div>
</template>
