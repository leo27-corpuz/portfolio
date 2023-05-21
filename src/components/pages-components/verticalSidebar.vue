<template>
    <div class="sidebar-style">
        <div class="oval" ></div>
        <div class="line"></div>
        <div class="oval" ></div>
    </div>
</template>
<script>
</script>
<style scoped>
.sidebar-style{
    position: fixed;
    right: 2.5em;
    margin-bottom: 50px;
    top: 8em;
    z-index: 99;
}
.oval{
    width: 20px;
    border-radius: 50%;
    border: 2px solid var(--secondary-color-blue);
    height: 20px;
    background: var(--main-color-blue);
}
.line{
    margin-left: 8.5px;
    width: 3px;
    background: var(--secondary-color-blue);
    height: 0;
    animation: lineAnimate 1.2s normal forwards ease-in-out;
}

@media screen and (max-width: 800px){
    .sidebar-style{
        right: 1em;
    }
}
</style>