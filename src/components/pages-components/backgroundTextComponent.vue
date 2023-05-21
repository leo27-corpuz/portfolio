<template>
    <div class="background-text">
        <h1 class="backgroundTitle list animate__animated animate__flipInX">
          <slot></slot>
        </h1>
    </div>
</template>
<script>
  export default{
  }
</script>
<style scoped>
.backgroundTitle{
  position: fixed;
  z-index: 0;
  font-size: 200px;
  width: 100%;
  text-align: center;
  color: var(--text-background);
  white-space: nowrap;
  bottom: 20px;
  font-family: 'Alkatra', cursive !important;
  font-weight: 1000;
}
@media screen and (max-width: 1300px){
  .backgroundTitle{
    font-size: 150px;
  }
}
@media screen and (max-width: 1100px){
  .backgroundTitle{
    font-size: 130px;
  }
}
@media screen and (max-width: 1000px){
  .backgroundTitle{
    font-size: 120px;
  }
}
@media screen and (max-width: 900px){
  .backgroundTitle{
    font-size: 110px;
  }
}
@media screen and (max-width: 800px){
  .backgroundTitle{
    font-size: 100px;
    bottom: 30px;
  }
}
</style>