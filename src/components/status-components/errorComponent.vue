<template>
    <div class="error-state">
        <i class="fa-solid fa-circle-exclamation"></i>
        <span>{{ errormessage }}</span>
    </div>
</template>
<script>
export default{
    props: {
        errormessage: String
    }
}
</script>
<style scoped> 
.error-state{
    position: fixed;
    right: 2em;
    top: 5em;
    z-index: 100;
    background: rgba(117, 1, 1);
    padding: 12px 18px;
    display: flex;
    flex-direction: row;
    grid-gap: 10px;
    border-radius: 7px;
    box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
}
.error-state > i{
    font-size: 20px;
    letter-spacing: 1.5px;
}
.error-state > :nth-child(2){
    margin-top: 2px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
}
</style>