<template>
    <nav class="h-16 flex items-center shadow-md justify-end bg-pink-100 fixed w-380">
        <div id="nav-item" class="flex items-end text-center mr-9 gap-12 ">
           <navigation-item class="active:bg-pink-300 p-3 text-center text-shadow-lg" v-for="item in navItems" :key="item.label" :item="item" />

        </div>
        <!-- <div id="nav-item" class="flex items-center m-auto gap-12">
            <navigation-item :item="{ label: 'Login', path: '/login', icon: 'login' }"></navigation-item>
        </div> -->
    </nav>
</template>

<script setup>
import { ref } from 'vue';
import NavigationItem from '../components/NavigationItem.vue'

const navItems = ref([
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },
    { label: "Contact Us", path: "/contact" },
    {label:"Menu",path:"/menu"}
]);




</script>

<style scoped></style>