<template>
 <Navigation/>
 <router-view></router-view>

 <Footer></Footer>

</template>

<script setup>
import { ref } from "vue";
import Navigation from './components/Navigation.vue'
import Footer from "./components/Footer.vue";
 
</script>

<style  scoped>

</style>