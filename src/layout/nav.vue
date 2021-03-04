<template>
    <div>
        <b-navbar type="dark" variant="dark">
            <b-navbar-nav>
            <b-nav-item href="#" :to="({ name: 'home'})">Home</b-nav-item>
            <b-nav-item href="#" :to="({ name: 'collection'})">Collection</b-nav-item>
            </b-navbar-nav>
        </b-navbar>
    </div>

</template>
<script>

/* eslint-disable */
export default {
  name: 'nav',
  components: {
    
  },
  data(){
    return{
    }
  },
  mounted(){

  }
}
</script>
