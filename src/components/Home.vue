<template>
    <div class="home">
      <div class="carousel slide" data-ride="carousel" data-interval="7000">
          <div class="carousel-inner">
              <div class="carousel-item active">
                  <img src="../assets/1.jpg" class="w-100 slider_img_height" >
              </div>
              <div class="carousel-item">
                  <img src="../assets/2.jpg" class="w-100 slider_img_height">
              </div>
              <div class="carousel-item">
                  <img src="../assets/3.jpg" class="w-100 slider_img_height">
              </div>
              <div class="carousel-item">
                  <img src="../assets/4.jpg" class="w-100 slider_img_height">
              </div>
          </div>
      </div>
    </div>
</template>
<script>
export default {
    name:"home"
}
</script>
<style scoped>
.slider_img_height{
    height:600px;
}
</style>