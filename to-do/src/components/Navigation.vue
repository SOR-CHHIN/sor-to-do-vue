<template>
    <nav class="h-16 flex items-center shadow-md justify-between bg-pink-100">
        <div id="nav-item" class="flex items-center m-auto gap-12 ">
            <navigation-item class=" focus:outline-2 focus:outline-offset-2 focus:outline-violet-500 active:bg-pink-300 p-3  " v-for="item in navItems" :key="item.label" :item="item">
            </navigation-item>
        </div>
        <div id="nav-item" class="flex items-center m-auto gap-12">
            <!-- <navigation-item :item="{ label: 'Login', path: '/login', icon: 'login' }"></navigation-item> -->
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import NavigationItem from '../components/NavigationItem.vue'

const navItems = ref([
    { label: "Home", path: "/", icon: "home" },
    { label: "About", path: "/about", icon: "menu_book" },
    { label: "Contact Us", path: "/contact", icon: "shopping_cart_checkout" },
   
])

</script>

<style scoped></style>