<template>
     <div class="bg-pink-200 h-110  flex justify-between ">
        <div class="p-9 mt-14">
        <h1 class="text-4xl m-auto pl-9 font-bold pt-8 text-shadow-lg">Welcome to our website</h1>
        <p class="text-jutify pl-9 pt-3">Welcome to Sweet Bliss, your local cake haven! We specialize in custom cakes, cupcakes,<br> and pastries made fresh daily with the finest ingredients. Whether it’s a birthday, wedding, anniversary,<br> or “just because,” we’ve got the perfect treat to make your celebration unforgettable.</p>
        <button class="p-3 border ml-10 bg-pink-300 text-1xl font-bold rounded-xl mt-4 hover:bg-red-400 border-none shadow-md">Read More</button>
        </div>
        <div class="im mt-16">
            <img class="w-90 " src="../assets/image/image.png" alt="">
        </div>
     </div> 
     <main>
        <h1 class="text-center text-4xl font-bold m-2 text-shadow-lg">Popular Cake</h1>
    <div class="p-9 flex gap-7">
   <div class="max-w-sm bg-white rounded-2xl shadow-md overflow-hidden border p-4" v-for="cakes in cake" :key="cakes" >
   
  <img 
    class="w-full h-48 object-cover rounded-xl" 
    :src="cakes.image" 
    alt="Chocolate Cake"
  />
  <div class="mt-4">
    <h2 class="text-xl font-bold text-gray-800">{{ cakes.name }}</h2>
    <h3 class="text-xl font-bold text-gray-800">{{ cakes.price }}$</h3>
    <p class="text-gray-600 mt-2">
     {{ cakes.description }}
    </p>
  </div>
  <button class="border bg-red-400 p-2 text-gray-100 rounded-xl mt-2 border-none hover:bg-red-300">Buy Now</button>
</div>
</div>
     </main>
</template>

<script setup>
import {ref} from 'vue';

const cake =[
  {
    "name": "Chocolate Fudge Cake",
    "description": "Rich, moist chocolate cake layered with smooth fudge frosting.",
    "price": 18.99,
    "image": "https://i.pinimg.com/736x/50/6f/d4/506fd4b75083b1eab6fefa707df4a9b2.jpg"
  },
  {
    "name": "Red Velvet Cake",
    "description": "Classic red velvet cake with creamy cheese frosting.",
    "price": 22.50,
    "image": "https://i.pinimg.com/736x/e7/3a/3a/e73a3a85447067270d419378249bc32e.jpg"
  },
  {
    "name": "Strawberry Shortcake",
    "description": "Light sponge cake layered with whipped cream and fresh strawberries.",
    "price": 16.75,
    "image": "https://i.pinimg.com/736x/dd/b2/d2/ddb2d2c5bd64fb4caa95fae314a664e0.jpg"
  },
  {
    "name": "Lemon Drizzle Cake",
    "description": "Zesty lemon cake topped with a tangy sugar glaze.",
    "price": 14.25,
    "image": "https://i.pinimg.com/736x/8c/1b/f2/8c1bf239daa98544dc1c760646718d93.jpg"
  },
  {
    "name": "Vanilla Birthday Cake",
    "description": "Classic vanilla cake with colorful sprinkles and buttercream icing.",
    "price": 19.99,
    "image": "https://i.pinimg.com/736x/0b/92/85/0b9285379841281918e9c650373bc371.jpg"
  }
]


  
</script>

<style  scoped>

</style>