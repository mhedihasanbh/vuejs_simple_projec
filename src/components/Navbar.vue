<template>
    
        <nav class="navbar navbar-expand-md navbar-dark bg-dark">
            
            <div class="container">
                <a href="" class="navbar-brand">LoGO</a>
                <button type="button" class="navbar-toggler"                                             data-toggle="collapse" data-target="#menu">
                    <span class="navbar-toggler-icon"></span>
                </button>

                <div class="collapse navbar-collapse" id="menu">
                     <ul class=" navbar-nav mr-auto">
                        <li><router-link to="/" class="nav-link">Home</router-link></li>
                        <li><router-link to="/about" class="nav-link">About</router-link></li>
                        <li><router-link href="/service" class="nav-link">Service</router-link></li>
                        <li><router-link to="/contact" class="nav-link">Contact</router-link></li>
                  </ul>
                   <ul class="navbar-nav">
                        <li><a href="" class="nav-link">Login</a></li>
                        <li><a href="" class="nav-link">Sign-up</a></li>
                </ul>
                </div>
                
            </div>
           
        </nav>
    
</template>
<script>
export default {
    
}
</script>
<style scoped>
 .router-link-exact-active{
     background-color:rosybrown;
 }
</style>