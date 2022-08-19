<template>
  <div class="k_content"> 
    <div class="header_area">
      <DashHeader /> 
    </div>
    <div> 
      <router-view></router-view>
    </div> 
    <Footer /> 
  </div>
</template>

<script>
// @ is an alias to /src 
import DashHeader from '@/layout/DashHeader.vue'; 
import Footer from '@/layout/Footer.vue'; 

export default {
    name: 'Dash',
    components: { 
        DashHeader,
        Footer
    },
    mounted() {
      
    },
}
</script>
<style> 
  @import '../assets/styles/main.css';
</style>
