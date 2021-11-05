<template>
 <div id="app">
   <nav class="main-nav">
     <div class="logo">
       my.company
     </div>
     <SidebarBurger :open="open" @toggle="toggle"/>
   </nav>

   <Sidebar position="right"  :open="open" @toggle="toggle">
     <ul class="sidebar-panel-nav">
       <li><a href="#home">Home</a></li>
       <li><a href="#about">About</a></li>
       <li><a href="#contact">Contact</a></li>
     </ul>
   </Sidebar>
 </div>
</template>

<script>
import SidebarBurger from '@/components/Menu/SidebarBurger.vue';
import Sidebar from '@/components/Menu/Sidebar.vue';

export default {
 name: 'app',
 components: {
   SidebarBurger,
   Sidebar
 },
 data: () => ({
   open: true,
 }),
 methods: {
   toggle(e) {
     this.open = e.active
   }
 }
}
</script>
<style>
</style>