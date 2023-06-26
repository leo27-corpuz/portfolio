<template>
    <div class="social-media">
        <div class="list animate__animated animate__flipInX">
            <div v-for="social in socialMedia">
                <a :href="social.link" target=”_blank”><i :class="social.icon"></i></a>
            </div>
        </div>
    </div>
</template>
<script>
export default{
    data(){
        return{
            socialMedia: [
                {
                    title: 'Facebook',
                    link: 'https://www.facebook.com/leojr.corpuz/',
                    icon: 'fa-brands fa-facebook-f'
                },
                {
                    title: 'Instagram',
                    link: 'https://www.instagram.com/leycrpzjr/',
                    icon: 'fa-brands fa-instagram'
                },
                {
                    title: 'Linkedln',
                    link: 'https://www.linkedin.com/in/leo-corpuz-0b6333254/',
                    icon: 'fa-brands fa-linkedin-in'
                },
                {
                    title: 'Github',
                    link: 'https://github.com/leo27-corpuz',
                    icon: 'fa-brands fa-github'
                },
            ]
        }
    }
}
</script>
<style scoped>
.social-media{
    position: fixed;
    top: 38%;
    left: 2.7em;
    z-index: 99;
}

.social-media > .list > div{
    margin-bottom: 20px;
}

.social-media > .list > div {
    position: relative;
    transition: all 0.3s ease-out;
}
.social-media > .list > div  > a{
    font-size: 25px;
    color: var(--main-color-blue);
    cursor: pointer;
}
.social-media > .list > div:hover{
    color: var(--secondary-color-blue);
    transform:translateY(-3px)
}
@media screen and (max-width: 1100px){
    .social-media > .list > div  > a{
        font-size: 20px;
    }
}
@media screen and (max-width: 800px){
    .social-media{
        left: 1em;
    }
}
@media screen and (max-width: 700px){
    .social-media{
        bottom: 0;
        top: inherit;
        left: inherit;
        right: 1em;
        z-index: 100;
    }
    .social-media > .list
    {
        display: flex;
        grid-gap:20px;
    }
    .social-media > .list > div  > a{
        color: var(--fourt-color-blue);
    }
}
</style>