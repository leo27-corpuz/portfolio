<template>
    <article class="home section-container">
        <div class="container-home">
            <div class="title animate__animated animate__fadeIn">
                <h1>Hi, I'm </h1><h1 :title="getFirstName">{{ getFirstName }}</h1> <h1>{{ getLastName }}</h1>
            </div>
            <hr class="animate__animated animate__fadeIn">
            <div class="desciption animate__animated animate__fadeIn">
                <h3>{{ desciptiom.title }}</h3>
                <p>{{ desciptiom.text }}</p>
            </div>
            <div class="buttons animate__animated animate__fadeIn">
                <button @click="downloadCv"><span>Download Cv</span> <i class="fa-solid fa-cloud-arrow-down"></i></button>
                <button @click="contactMe"><span>Contact Me</span> <i class="fa-solid fa-phone"></i></button>
            </div>
        </div>
        <div class="container-home">
            <div class="image-container animate__animated animate__fadeIn">
                <v-lazy-image :src="image"/>
                <!-- <img :src="image" alt=""> -->
            </div>
        </div>
    </article>
</template>
<script>
import VLazyImage from "v-lazy-image";
import { saveAs } from 'file-saver';
export default{
    components: {
        VLazyImage
    },
    data(){
        return{
            name: 'leo corpuz.',
            desciptiom: {
                title: 'Web Developer',
                text: 'Empower everyone using technology to make life meaningful to the world, Code with passion and purpose.'
            },
            contactNumber: '09814636355',
            image: '/images/png.png',
            resume: '/files/resume.pdf'
        }
    },
    computed:{
        getFirstName(){
            return this.name.split(' ')[0].toUpperCase()
        },
        getLastName(){
            let name = this.name.split(' ')[1]
            return name.charAt(0).toUpperCase() + name.slice(1)
        }
    },
    methods: {
        contactMe(){
            let aTag = document.createElement('a')
            aTag.setAttribute('href', `tel:${this.contactNumber}`)
            aTag.textContent = 'Call Me';
            aTag.click();
        },
        downloadCv(){
            // const aTag = document.createElement('a');
            // aTag.setAttribute('href', this.resume);
            // aTag.setAttribute('download', 'leocorpuz_resume.pdf');
            // aTag.setAttribute('target','_blank')
            // aTag.click()
            saveAs(this.resume, 'leocorpuz_resume')
        }
    },
}
</script>
<style scoped>
article{
    position: relative;
    display: flex;
    grid-gap:20px;
    z-index: 2;
    height: auto;
}
article > :nth-child(1){
    width: 50%;
    margin-top: 9em;
}
article > :nth-child(1) > .title{
    width: 100%;
    display: flex;
    grid-gap: 15px;
    white-space: nowrap;
}
article > :nth-child(1) > .title > h1{
    letter-spacing: 2px;
    font-size: 40px;
    color: var(--fourt-color-blue);
}
article > :nth-child(1) > .title > :nth-child(2){
    color: var(--main-color-blue);
    animation: glitch 1s linear infinite;
}
article > :nth-child(1) > .title > :nth-child(2):before,
article > :nth-child(1) > .title > :nth-child(2):after{
    content: attr(title);
    position: absolute;
    left: 0;
}
article > :nth-child(1) > .title > :nth-child(2):before{
    animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}
article > :nth-child(1) > .title > :nth-child(2):after{
    animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}

article > :nth-child(1) > hr{
    border: none;
    height: 0.5px;
    margin: 25px 0;
    border-radius: 20px;
    width: 0em;
    background-color: var(--main-color-blue);
    animation: hr_animate 3s infinite linear alternate;
}
article > :nth-child(1) > .desciption{
    width: 100%;
    margin-top: 25px;
}
article > :nth-child(1) > .desciption > h3{
    letter-spacing: 2px;
    font-size: 30px;
    color: var(--fourt-color-blue);
}
article > :nth-child(1) > .desciption > p{
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}
article > :nth-child(1) > .buttons{
    width: 100%;
    margin-top: 25px;
}
article > :nth-child(1) > .buttons > button{
    background: var(--main-color-blue);
    border: none;
    padding: 10px 15px;
    width: auto;
    border-radius: 10%;
    margin-right: 10px;
    font-size: 15px;
    cursor: pointer;
    letter-spacing: 1.7px;
    color: var(--fourt-color-blue);
    transition: all 0.5s ease-out;
}
article > :nth-child(1) > .buttons > button:hover{
    background: var(--secondary-color-blue);
    transform:translateY(-3px)
}
article > :nth-child(1) > .buttons > button > i{
    font-size: 20px !important;
}


article > :nth-child(2){
    width: 50%;
}
article > :nth-child(2) > .image-container{
    width: 100%;
    text-align: center;
    height: 570px;
    background-image: linear-gradient(to top, var(--main-color-blue), var(--secondary-color-blue), var(--third-color-blue),
    var(--fourt-color-blue));
    border-radius: 68% 32% 57% 43% / 30% 56% 44% 70% ;
    overflow: hidden;
    border: none;
}
article > :nth-child(2) > .image-container > img{
    width: 570px;
    height: 570px;
    object-fit: cover;
}
.v-lazy-image-loaded {
    background: none !important;
    animation:  blur-effect 2s normal forwards ease-in-out !important;
}


/* media query here */
@media screen and (max-width: 1300px){
    article > :nth-child(2) > .image-container{
        height: 500px;
    }
    article > :nth-child(2) > .image-container > img{
        width: 500px;
        height: 500px;
    }
}
@media screen and (max-width: 1100px){
    article > :nth-child(2) > .image-container{
        height: 450px;
    }
    article > :nth-child(2) > .image-container > img{
        width: 450px;
        height: 450px;
    }
    article > :nth-child(1) > .title > h1{
        font-size: 35px;
    }
    article > :nth-child(1) > .desciption > h3{
        font-size: 25px;
    }
    article > :nth-child(1) > .desciption > p{
        font-size: 15px;
    }
    article > :nth-child(1) > .buttons > button{
        font-size: 14px;
    }
    article > :nth-child(1) > .buttons > button > i{
        font-size: 17px !important;
    }
}
@media screen and (max-width: 1000px){
    article{
        flex-direction: column; 
        grid-gap:0;
    }
    article > :nth-child(1){
        width: 100%;
        order: 2;
        margin-top: 3em;
    }
    article > :nth-child(2){
        width: 100%;
        order: 1;
        margin-top: 3em;
    }
    article > :nth-child(2) > .image-container{
        height: 400px;
        width: 400px;
        margin-left: auto;
        margin-right: auto;
    }
    article > :nth-child(2) > .image-container > img{
        width: 400px;
        height: 400px;
    }
}
@media screen and (max-width: 900px){
    article > :nth-child(2) > .image-container{
        width: 350px;
        height: 350px;
    }
    article > :nth-child(2) > .image-container > img{
        width: 350px;
        height: 350px;
    }
}

@media screen and (max-width: 700px){
    article > :nth-child(2) > .image-container{
        width: 300px;
        height: 300px;
    }
    article > :nth-child(2) > .image-container > img{
        width: 300px;
        height: 300px;
    }
    article > :nth-child(1) > .title > h1{
        font-size: 30px;
    }
    article > :nth-child(1) > .desciption > h3{
        font-size: 20px;
    }
    article > :nth-child(1) > .desciption > p{
        font-size: 14.5px;
    }
    article > :nth-child(1) > .buttons > button{
        font-size: 13.5px;
    }
    article > :nth-child(1) > .buttons > button > i{
        font-size: 16px !important;
    }
}
@media screen and (max-width: 550px){
    article > :nth-child(2) > .image-container{
        width: 250px;
        height: 250px;
    }
    article > :nth-child(2) > .image-container > img{
        width: 250px;
        height: 250px;
    }
    article > :nth-child(1) > .buttons > button{
        width: 100%;
        margin-bottom: 15px;
    }
}
@media screen and (max-width: 450px){
    article > :nth-child(2) > .image-container{
        width: 200px;
        height: 200px;
    }
    article > :nth-child(2) > .image-container > img{
        height: auto;
        height: 200px;
    }
}
</style>