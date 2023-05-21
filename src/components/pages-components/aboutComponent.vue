<template>
    <article class="about section-container">
        <div class="container-about">
            <div class="title-image show-screen">
                <img :src="aboutMe.image" alt="">
            </div>
            <div class="title show-screen">
                <h2 :title="aboutMe.title">{{ aboutMe.title }}</h2>
            </div>
            <hr class="show-screen"> 
            <div class="about-description show-screen">
                <p>{{ aboutMe.description }}</p>
            </div>
        </div>
        <div class="container-about">
            <div class="about-list show-screen" v-for="aboutMeData in aboutMeList">
                <div class="header-about">
                    <i :class="aboutMeData.icon"></i>
                    <p>{{ aboutMeData.title }}</p>
                </div>
                <div class="body-about">
                    <ul v-for="list in aboutMeData.list">
                        <li>{{ list }}</li>
                    </ul>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
export default{
    data(){
        return{
            aboutMe: {
                title: 'About Me',
                image: '/images/aboutme.svg',
                description: "It's about time to move to the world of technology with me."
            },
            aboutMeList: [
                {
                    title: 'Personal Information',
                    icon: 'fa-regular fa-address-card',
                    list: ['Leo Domingo Corpuz Jr.', '23 Years Old', 'Moncada, Tarlac']
                },
                {
                    title: 'Degree',
                    icon: 'fa-solid fa-check',
                    list: ['Bachelor of Sciencce in Information Technology']
                },
                {
                    title: 'College',
                    icon: 'fa-solid fa-school',
                    list: ['AMA Computer College-Tarlac (2018-2022)']
                },
                {
                    title: 'Senior High School',
                    icon: 'fa-solid fa-school',
                    list: ['AMA Computer College-Tarlac (2016-2018)']
                },
                {
                    title: 'Junior High School',
                    icon: 'fa-solid fa-school',
                    list: ['Moncada Catholic School (2012-2016)']
                },
                {
                    title: 'Elementary School',
                    icon: 'fa-solid fa-school',
                    list: ['Moncada South Central Elementary School (2006-2012)']
                },
            ]
        }
    },
}
</script>
<style scoped>
article{
    position: relative;
    align-items: flex-start;
    display: flex;
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
article > :nth-child(1) > .title-image > img{
    width: 100%;
    height: 270px;
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
article > :nth-child(1) > .about-description{
    width: 100%;
    margin-top: 25px;
}
article > :nth-child(1) > .about-description > p{
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
    background: var(--secondary-color-black-transparent);
    border-radius: 7px;
    padding: 20px;
    height: auto;
    margin-bottom: 10px;
    transition: all 0.5s ease-out;
}
article > :nth-child(2) > *:hover{
    background: var(--secondary-color-black-transparent-v2);
}
article > :nth-child(2) > * > .header-about{
    width: 100%;
    margin-bottom: 20px;
}
article > :nth-child(2) > * > .header-about > i{
    font-size: 21px;
    color: var(--fourt-color-blue);
    display: inline;
}
article > :nth-child(2) > * > .header-about > p{
    display: inline;
    margin-left: 12px;
    font-size: 17.5px;
    letter-spacing: 1.5px;
    font-weight: 700;
    color: var(--fourt-color-blue);
}
article > :nth-child(2) > * > .body-about{
    width: 100%;
}
article > :nth-child(2) > * > .body-about > ul > li{
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
    article > :nth-child(1) > .about-description > p{
        font-size: 15px;
    }
    article > :nth-child(2) > * > .header-about > p{
        font-size: 16px;
    }
    article > :nth-child(2) > * > .header-about > i{
        font-size: 20px;
    }
    article > :nth-child(2) > * > .body-about > ul > li{
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
    article > :nth-child(1) > .about-description{
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
    article > :nth-child(1) > .about-description > p{
        font-size: 14.5px;
    }
    article > :nth-child(2) > * > .header-about > p{
        font-size: 15px;
    }
    article > :nth-child(2) > * > .header-about > i{
        font-size: 19px;
    }
    article > :nth-child(2) > * > .body-about > ul > li{
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