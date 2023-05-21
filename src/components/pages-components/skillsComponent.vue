<template>
    <article class="skills section-container">
        <div class="container-skills" >
            <div class="skills-list show-screen" v-for="skill in skillsList">
                <i :class="skill.icon"></i>
                <p>{{ skill.title }}</p>
            </div>
        </div>
        <div class="container-skills" >
            <div class="title-image show-screen">
                <img :src="skillsData.image" alt="">
            </div>
            <div class="title show-screen">
                <h1>{{ titleUpperCase }}</h1>
            </div>
            <div class="title show-screen">
                <h2 :title="subTitleCase">{{ subTitleCase }}</h2>
            </div>
            <div class="description show-screen">
                <p>{{ skillsData.description }}</p>
            </div>
        </div>
    </article>
</template>
<script>
export default{
    data(){
        return{
            skillsData: {
                title: 'techonology is my things.',
                subTitle: 'skills',
                image: '/images/skills.svg',
                description: "In the world of modernazation we can't miss the progress of Technology so join me in this journey"
            },
            skillsList:[
                {
                    title: 'HTML',
                    icon: 'fa-brands fa-html5'
                },
                {
                    title: 'CSS',
                    icon: 'fa-brands fa-css3'
                },
                {
                    title: 'Javascript',
                    icon: 'fa-brands fa-square-js'
                },
                {
                    title: 'PHP',
                    icon: 'fa-brands fa-php'
                },
                {
                    title: 'Mysql',
                    icon: 'fa-solid fa-server'
                },
                {
                    title: 'Laravel Framework',
                    icon: 'fa-brands fa-laravel'
                },
                {
                    title: 'Vue.js Framework',
                    icon: 'fa-brands fa-vuejs'
                },
                {
                    title: 'Node.js(express.js)',
                    icon: 'fa-brands fa-node'
                }
            ]
        }
    },
    computed: {
        titleUpperCase(){
            return this.skillsData.title.toUpperCase();
        },
        subTitleCase(){
            return this.skillsData.subTitle.toUpperCase();
        }
    }
}
</script>
<style scoped>
article{
    position: relative;
    display: flex;
    grid-gap:20px;
    align-items: flex-start;
    z-index: 2;
    justify-content: space-between;
}
article > :nth-child(1){
    width: 55%;
    margin-top: 1em;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 25px;
    justify-content: space-between;
}
article > :nth-child(1) > *{
    flex: 1 1 45%;
    background: var(--secondary-color-black-transparent);
    border-radius: 7px;
    padding: 20px;
    margin-bottom: 10px;
    height: auto;
    transition: all 0.5s ease-out;
    text-align: center;
}
article > :nth-child(1) > *:hover{
    background: var(--secondary-color-black-transparent-v2);
}
article > :nth-child(1) > * > i{
    font-size: 50px;
    color: var(--main-color-blue);
}
article > :nth-child(1) > * > p{
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}

article > :nth-child(2){
    width: 40%;
    margin-top: 1em;
}
article > :nth-child(2) > .title-image{
    width: 100%;
}
article > :nth-child(2) > .title-image > img{
    width: 100%;
    height: 350px;
}
article > :nth-child(2) > .title{
    width: 100%;
    margin-top: 15px;
}
article > :nth-child(2) > .title > h1{
    letter-spacing: 2px;
    font-size: 40px;
    color: var(--fourt-color-blue);
    line-height: 1.2;
}
article > :nth-child(2) > .title > h2{
    letter-spacing: 2px;
    font-size: 30px;
    color: var(--main-color-blue);
    animation: glitch 1s linear infinite;
}
article > :nth-child(2) > .title > h2:before,
article > :nth-child(2) > .title > h2:after{
    content: attr(title);
    position: absolute;
    left: 0;
}
article > :nth-child(2) > .title > h2:before{
    animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}
article > :nth-child(2) > .title > h2:after{
    animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}
article > :nth-child(2) > .description{
    width: 100%;
    margin-top: 10px;
}
article > :nth-child(2) > .description > p{
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}


@media screen and (max-width: 1300px){
    article > :nth-child(2) > .title-image > img{
        height: auto;
    }
    article > :nth-child(1) > *{
        margin-bottom: 0;
    }
}

@media screen and (max-width: 1000px){
    article > :nth-child(2) > .title > h1{
        font-size: 35px;
    }
    article > :nth-child(2) > .title > h2{
        font-size: 25px;
    }
    article > :nth-child(2) > .description > p{
        font-size: 15px;
    }
    article > :nth-child(1) > * > i{
        font-size: 40px;
    }
    article > :nth-child(1) > * > p{
        font-size: 15px;
    }
    article{
        flex-direction: column; 
        grid-gap:0;
    }
    article > :nth-child(1){
        width: 100%;
        order: 2;
        margin-top: 2em;
    }
    article > :nth-child(2){
        width: 100%;
        order: 1;
        margin-top: 0;
    }
    article > :nth-child(2) > .title-image {
        text-align: center;
    }
    article > :nth-child(2) > .title-image > img{
        height: 400px;
        width: 400px;
    }
}
@media screen and (max-width: 900px){
    article > :nth-child(2) > .title-image > img{
        height: 350px;
        width: 350px;
    }
}

@media screen and (max-width: 700px){
    article > :nth-child(2) > .title-image > img{
        height: 300px;
        width: 300px;
    }
    article > :nth-child(2) > .title > h1{
        font-size: 30px;
    }
    article > :nth-child(2) > .title > h2{
        font-size: 20px;
    }
    article > :nth-child(2) > .description > p{
        font-size: 14.5px;
    }
    article > :nth-child(1) > * > i{
        font-size: 35px;
    }
    article > :nth-child(1) > * > p{
        font-size: 14.5px;
    }
}
@media screen and (max-width: 550px){
    article > :nth-child(2) > .title-image > img{
        height: 250px;
        width: 250px;
    }
}
@media screen and (max-width: 450px){
    article > :nth-child(2) > .title-image > img{
        height: auto;
        width: 200px;
    }
}
</style>