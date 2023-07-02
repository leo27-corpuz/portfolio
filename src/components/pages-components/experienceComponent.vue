<template>
    <article class="experience section-container">
        <div class="container-experience">
            <div class="title-image show-screen"> 
                <img :src="skillsInfo.image" alt="">
            </div>
            <div class="title show-screen">
                <h2 :title="skillsInfo.title">{{ skillsInfo.title }}</h2>
            </div>
            <hr class="show-screen">
            <div class="description show-screen">
                <p>{{ skillsInfo.description }}</p>
            </div>
        </div>
        <div class="container-experience">
            <div class="experience-list show-screen"  v-for="skill in skillsList">
                <div class="header-experience">
                    <i :class="skill.icon"></i>
                    <p>{{ skill.title }}</p>
                </div>
                <div class="body-experience">
                    <p>{{ skill.description }}</p>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
export default{
    data(){
        return {
            skillsInfo: {
                title: 'Experience',
                image: '/images/exp.svg',
                description: "We humanss need tp Experience everything around technoloy for us to evolve and learn."
            },
            skillsList: [
                {
                   title: 'Junior Web Developer',
                   icon: 'fa-solid fa-code',
                   'description': 'SVEN INGENUITY, INC ( June 27, 2023 - Current Work).'
                },
                {
                   title: 'Fullstack developer in Corporate Work',
                   icon: 'fa-solid fa-code',
                   'description': '(Innovative Solution for Strategic Organization Inc.) for less than 1 year.'
                },
                {
                   title: 'Freelance Developer',
                   icon: 'fa-solid fa-code',
                   'description': 'I work as fullstack developer along side with my team in freelancing specialize in web development.'
                }
            ]
        }
    }
}
</script>
<style scoped>
article{
    position: relative;
    display: flex;
    align-items: flex-start;
    grid-gap:20px;
    z-index: 2;
    justify-content: space-between;
}
article > :nth-child(1){
    width: 35%;
    margin-top: 5em;
}
article > :nth-child(1) > .title-image{
    width: 100%;
}
article > :nth-child(1) > .title{
    width: 100%;
    margin-top: 25px;
}
article > :nth-child(1) > .title > h2{
    letter-spacing: 2px;
    font-size: 30px;
    color: var(--main-color-blue);
    animation: glitch 1s linear infinite;
}
article > :nth-child(1) > .title > h2:before,
article > :nth-child(1) > .title > h2:after{
    content: attr(title);
    position: absolute;
    left: 0;
}
article > :nth-child(1) > .title > h2:before{
    animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}
article > :nth-child(1) > .title > h2:after{
    animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}
article > :nth-child(1) > hr{
    border: none;
    height: 0.5px;
    margin: 10px 0;
    border-radius: 20px;
    width: 0em;
    background-color: var(--main-color-blue);
    animation: hr_animate 3s infinite linear alternate;
}
article > :nth-child(1) > .title-image > img{
    width: 100%;
    height: 270px;
}
article > :nth-child(1) > .description{
    width: 100%;
    margin-top: 25px;
}
article > :nth-child(1) > .description > p{
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}

article > :nth-child(2){
    width: 60%;
    margin-top: 5em;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 25px;
    justify-content: space-between;
}
article > :nth-child(2) > *{
    flex: 1 1 48%;
    position: relative;
    background: var(--secondary-color-black-transparent);
    border-radius: 7px;
    padding: 20px;
    margin-bottom: 10px;
    transition: all 0.5s ease-out;
}
article > :nth-child(2) > *:hover{
    background: var(--secondary-color-black-transparent-v2);
}
article > :nth-child(2) > * > .header-experience{
    width: 100%;
    margin-bottom: 20px;
}
article > :nth-child(2) > * > .header-experience > i{
    font-size: 21px;
    color: var(--fourt-color-blue);
    display: inline;
}
article > :nth-child(2) > * > .header-experience > p{
    display: inline;
    margin-left: 12px;
    font-size: 17.5px;
    letter-spacing: 1.5px;
    font-weight: 700;
    line-height: 1.5;
    color: var(--fourt-color-blue);
}
article > :nth-child(2) > * > .body-experience{
    width: 100%;
}
article > :nth-child(2) > * > .body-experience > p{
    line-height: 1.7;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
}

@media screen and (max-width: 1300px){
    article > :nth-child(1) > .title-image > img{
        height: auto;
    }
    article > :nth-child(2) > *{
        margin-bottom: 0;
    }
}
@media screen and (max-width: 1000px){
    article > :nth-child(1) > .title > h2{
        font-size: 25px;
    }
    article > :nth-child(1) > .description > p{
        font-size: 15px;
    }
    article > :nth-child(2) > * > .header-experience > i{
        font-size: 20px;
    }
    article > :nth-child(2) > * > .header-experience > p{
        font-size: 16px;
    }
    article > :nth-child(2) > * > .body-experience > p{
        font-size: 15px;
    }
    article{
        flex-direction: column; 
        grid-gap:0;
    }
    article > :nth-child(1){
        width: 100%;
        margin-top: 0;
    }
    article > :nth-child(2){
        width: 100%;
        margin-top: 2em;
    }
    article > :nth-child(1) > .title-image {
        text-align: center;
    }
    article > :nth-child(1) > .title-image > img{
        height: 400px;
        width: 400px;
    }
    article > :nth-child(1) > .title{
        margin-top: 15px;
    }
    article > :nth-child(1) > .description{
        margin-top: 15px;
    }
}
@media screen and (max-width: 900px){
    article > :nth-child(1) > .title-image > img{
        height: 350px;
        width: 350px;
    }
}
@media screen and (max-width: 700px){

    article > :nth-child(1) > .title-image > img{
        height: 300px;
        width: 300px;
    }
    article > :nth-child(1) > .title > h2{
        font-size: 20px;
    }
    article > :nth-child(1) > .description > p{
        font-size: 14.5px;
    }
    article > :nth-child(2) > * > .header-experience > i{
        font-size: 19px;
    }
    article > :nth-child(2) > * > .header-experience > p{
        font-size: 15px;
    }
    article > :nth-child(2) > * > .body-experience > p{
        font-size: 14.5px;
    }
}
@media screen and (max-width: 550px){
    article > :nth-child(1) > .title-image > img{
        height: 250px;
        width: 250px;
    }
}
@media screen and (max-width: 450px){
    article > :nth-child(1) > .title-image > img{
        height: auto;
        width: 200px;
    }
}
</style>