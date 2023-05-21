<template>
    <article class="project section-container">
        <div class="project-container header-project">
            <div class="project-info">
                <div class="title show-screen">
                    <h3 :title="holdProject.title" class="titles">{{ holdProject.title }}</h3>
                </div>
                <hr class="show-screen">
                <div class="description show-screen">
                    <p>{{ holdProject.description }}</p>
                </div>
                <div class="links show-screen">
                    <ul v-for="link in holdProject.links">
                        <a :href="link.link" target=”_blank”><li><i :class="link.icon"></i></li></a>
                    </ul>
                </div>
            </div>
            <div class="project-image">
                <div class="image-contain-zoom show-screen">
                    <v-lazy-image :src="getTheMainImage"/>
                </div>
            </div>
        </div>
        <div class="project-container body-project">
            <div class="project-tech ">
                <h3 class="show-screen">Technology Used</h3>
                <hr class="show-screen">
                <div class="description show-screen" >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatem, inventore minus laudantium ratione illum numquam placeat recusandae nobis praesentium!</p>
                </div>
                <div class="tech-list" >
                    <div class="tech show-screen" v-for="tech in holdProject.techUsed">
                        <i :class="tech.icon"></i>
                        <p>{{ tech.title }}</p>
                    </div>
                </div>
            </div>
            <div class="project-images">
                <h3 class="show-screen">Images</h3>
                <hr class="show-screen">
                <div class="description show-screen" >
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatem, inventore minus laudantium ratione illum numquam placeat recusandae nobis praesentium!</p>
                </div>
                <div class="image-count-display show-screen" >
                    <span>{{visibleSlide+1}} / {{getTotalImage}}</span>
                </div>
               <div class="images-list show-screen" >
                    <Transition name="fade">
                        <i class="fa-solid fa-angle-left" @click="toLeft" v-show="visibleSlide > 0"></i>
                    </Transition>
                    <carouse-slide v-for="(image, index) in holdProject.images" 
                        :key="image" 
                        :index="index"
                        :visibleSlide="visibleSlide"
                        :direction="direction"
                        @toRight="toRight"
                        @toLeft="toLeft"
                    >
                        <img :src="image">
                    </carouse-slide>
                    <Transition name="fade">
                        <i class="fa-solid fa-angle-right" @click="toRight" v-show="getTotalImage-1 > visibleSlide"></i>
                    </Transition>
               </div>
            </div>
            <div class="project-video">
                <div class="video-details ">
                    <h3 class="show-screen">Video</h3>
                    <hr class="show-screen">
                    <div class="description show-screen" >
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem voluptatem, inventore minus laudantium ratione illum numquam placeat recusandae nobis praesentium!</p>
                    </div>
                </div>
                <div class="video show-screen" >     
                    <!-- <video  controls 
                    poster="/images/porto.png"
                    >
                        <source :src="holdProject.video" type="video/mp4">
                    </video> -->
                    <iframe src="https://www.youtube.com/embed/Qc7_zRjH808" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
import VLazyImage from "v-lazy-image";
import carouseSlide from '../carousel/carouseSlide.vue'
export default{
    components:{
        VLazyImage, carouseSlide, 
    },
    data(){
        return{
            portfoliList: [
                {   
                    id: 1,
                    title: 'My Personal Website',
                    description: 'This is my personal website containing all my information about the IT fields.',
                    techUsed: [
                        {
                            title: 'HTML',
                            icon: 'fa-brands fa-html5'
                        },
                        {
                            title: 'CSS',
                            icon: 'fa-brands fa-css3-alt'
                        },
                        {
                            title: 'Javascript',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'Vuejs',
                            icon: 'fa-brands fa-vuejs'
                        }
                    ],
                    images: ['/images/porto.png', '/images/port-about.png', '/images/port-skill.png', '/images/port-exp.png', '/images/port-port.png', '/images/port-contact.png', '/images/port-footer.png'],
                    video: '/videos/sample.mkv',
                    links: [
                        {
                            title: 'github',
                            icon: 'fa-brands fa-github',
                            link: ''
                        }
                    ]
                },
                {
                    id: 2,
                    title: 'JWT authentication Express',
                    description: 'This is login authentication using express with jwt passport strategy.',
                    techUsed: [
                        {
                            title: 'Javascript',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'Node.js / Express.js Framework',
                            icon: 'fa-brands fa-node'
                        },
                    ],
                    images: ['/images/authjwt.png'],
                    video: '/videos/sample.mkv',
                    links: [
                        {
                            title: 'github',
                            icon: 'fa-brands fa-github',
                            link: ''
                        }
                    ]
                },
                {
                    id: 3,
                    title: 'Local Authentication Express',
                    description: 'This is login authentication using express with local passport strategy.',
                    techUsed: [
                        {
                            title: 'Javascript',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'Node.js / Express.js Framework',
                            icon: 'fa-brands fa-node'
                        },
                    ],
                    images: ['/images/auth.jpg'],
                    video: '/videos/sample.mkv',
                    links: [
                        {
                            title: 'github',
                            icon: 'fa-brands fa-github',
                            link: ''
                        }
                    ]
                },
                {
                    id: 4,
                    title: 'Create, read, update,  and delete',
                    description: 'This simple crud i creted only backend with api implementations.',
                    techUsed: [
                        {
                            title: 'Javascript',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'Node.js / Express.js Framework',
                            icon: 'fa-brands fa-node'
                        },
                    ],
                    images: ['/images/crud.jpg'],
                    video: '/videos/sample.mkv',
                    links: [
                        {
                            title: 'github',
                            icon: 'fa-brands fa-github',
                            link: ''
                        }
                    ]
                },
                {
                    id: 5,
                    title: 'Online rabbit shop.',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about online purchased specialize in rabbit.",
                    techUsed: [
                        {
                            title: 'HTML',
                            icon: 'fa-brands fa-html5'
                        },
                        {
                            title: 'CSS',
                            icon: 'fa-brands fa-css3-alt'
                        },
                        {
                            title: 'Javascript / Jquery',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'PHP',
                            icon: 'fa-brands fa-php'
                        },
                        {
                            title: 'Laravel',
                            icon: 'fa-brands fa-laravel'
                        },
                    ],
                    images: ['/images/coming.jpg'],
                    video: '/videos/sample.mkv',
                    links: []
                },
                {
                    id: 6,
                    title: 'Travel web based application.',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about tourist attraction for all travelers.",
                    techUsed: [
                        {
                            title: 'HTML',
                            icon: 'fa-brands fa-html5'
                        },
                        {
                            title: 'CSS',
                            icon: 'fa-brands fa-css3-alt'
                        },
                        {
                            title: 'Javascript / Jquery',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'PHP',
                            icon: 'fa-brands fa-php'
                        },
                    ],
                    images: ['/images/coming.jpg'],
                    video: '/videos/sample.mkv',
                    links: []
                },
                {
                    id:7,
                    title: 'Learning management system',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about school functionality like for example exams, quizzes, modules and more.",
                    techUsed: [
                        {
                            title: 'HTML',
                            icon: 'fa-brands fa-html5'
                        },
                        {
                            title: 'CSS',
                            icon: 'fa-brands fa-css3-alt'
                        },
                        {
                            title: 'Javascript / Jquery',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'PHP',
                            icon: 'fa-brands fa-php'
                        },
                    ],
                    images: ['/images/coming.jpg'],
                    video: '/videos/sample.mkv',
                    links: []
                },
                {
                    id:8,
                    title: 'Hotel Reservation (Online hotel).',
                    description: 'This website is a project we created during my freelancing along side with my team.',
                    techUsed: [
                        {
                            title: 'HTML',
                            icon: 'fa-brands fa-html5'
                        },
                        {
                            title: 'CSS',
                            icon: 'fa-brands fa-css3-alt'
                        },
                        {
                            title: 'Javascript / Jquery',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'PHP',
                            icon: 'fa-brands fa-php'
                        },
                    ],
                    images: ['/images/sweethotel.png', '/images/hotel1.png', '/images/hotel2.png', '/images/hotel3.png', '/images/hotel4.png'],
                    video: '/videos/sample.mkv',
                    links: []
                },
                {
                    id:9,
                    title: 'Covid web based application.',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about tracing and recording during the covid pandemic.",
                    techUsed: [
                        {
                            title: 'HTML',
                            icon: 'fa-brands fa-html5'
                        },
                        {
                            title: 'CSS',
                            icon: 'fa-brands fa-css3-alt'
                        },
                        {
                            title: 'Javascript / Jquery',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'PHP',
                            icon: 'fa-brands fa-php'
                        },
                    ],
                    images: ['/images/coming.jpg'],
                    video: '/videos/sample.mkv',
                    links: []
                },
                {
                    id:10,
                    title: 'Memorial web based application.',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about memorial services and all functions about memorial.",
                    techUsed: [
                        {
                            title: 'HTML',
                            icon: 'fa-brands fa-html5'
                        },
                        {
                            title: 'CSS',
                            icon: 'fa-brands fa-css3-alt'
                        },
                        {
                            title: 'Javascript / Jquery',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'PHP',
                            icon: 'fa-brands fa-php'
                        },
                    ],
                    images: ['/images/coming.jpg'],
                    video: '/videos/sample.mkv',
                    links: []
                },
                {
                    id:11,
                    title: 'Veterinary clinic web based application.',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about veterinary services such as appointment services and more.",
                    techUsed: [
                        {
                            title: 'HTML',
                            icon: 'fa-brands fa-html5'
                        },
                        {
                            title: 'CSS',
                            icon: 'fa-brands fa-css3-alt'
                        },
                        {
                            title: 'Javascript / Jquery',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'PHP',
                            icon: 'fa-brands fa-php'
                        },
                    ],
                    images: ['/images/coming.jpg'],
                    video: '/videos/sample.mkv',
                    links: []
                },
                {
                    id:12,
                    title: 'Landinng page for online shop.',
                    description: 'I created a landing page for online shop that display all the projuct of the webiste.',
                    techUsed: [
                        {
                            title: 'HTML',
                            icon: 'fa-brands fa-html5'
                        },
                        {
                            title: 'CSS',
                            icon: 'fa-brands fa-css3-alt'
                        },
                        {
                            title: 'Javascript',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'PHP',
                            icon: 'fa-brands fa-php'
                        },
                    ],
                    images: ['/images/shop.png'],
                    video: '/videos/sample.mkv',
                    links: [
                        {
                            title: 'github',
                            icon: 'fa-brands fa-github',
                            link: ''
                        }
                    ]
                },
                {
                    id:13,
                    title: 'Template landinge page.',
                    description: 'This is simple landing page template can be used by other deveopers.',
                    techUsed: [
                        {
                            title: 'HTML',
                            icon: 'fa-brands fa-html5'
                        },
                        {
                            title: 'CSS',
                            icon: 'fa-brands fa-css3-alt'
                        },
                        {
                            title: 'Javascript',
                            icon: 'fa-brands fa-square-js'
                        },
                        {
                            title: 'PHP',
                            icon: 'fa-brands fa-php'
                        },
                    ],
                    images: ['/images/landing.png'],
                    video: '/videos/sample.mkv',
                    links: [
                        {
                            title: 'github',
                            icon: 'fa-brands fa-github',
                            link: ''
                        }
                    ]
                },
            ],
            holdProject: [],
            visibleSlide: 0,
            direction: 'right',
        }
    },
    mounted(){
        this.getTheProject(this.$route.params.id)
    },
    methods: {
        getTheProject(id){
            let getValue = this.portfoliList.find((x) => x.id === Number(id))
            if(!getValue) this.$router.push('/')
            else this.holdProject = getValue
        },
        toRight(){
            this.direction = 'right'
            if(this.visibleSlide < this.holdProject.images.length-1) this.visibleSlide++
        },
        toLeft(){
            this.direction = 'left'
            if(this.visibleSlide >= 1) this.visibleSlide--
        },
    },
    computed:{
        getTheMainImage(){
            return this.portfoliList.find((x) => x.id === Number(this.$route.params.id)).images[0]
        },
        getTotalImage(){
            return this.portfoliList.find((x) => x.id === Number(this.$route.params.id)).images.length
        },
    },
}
</script>
<style scoped>
article{
    height: auto;
    position: relative;
}
article .header-project{
    display: flex;
    /* flex: 1 1 48%; */
    justify-content: space-between;
    cursor: pointer;
    flex-direction: row;
    grid-gap: 25px;
    width: 100%;
    margin-top: 2em;
    align-items: flex-start;
}
article .header-project > :nth-child(1){
    width: 20%;
}
article .header-project > :nth-child(2){
    width: 80%;
}
article .header-project > :nth-child(1) > .title{
    width: 100%;
    position: relative;
    z-index: 99;
}
article .header-project > :nth-child(1) > .title > h3{
    letter-spacing: 2px;
    font-size: 30px;
    color: var(--main-color-blue);
    white-space: nowrap;
    position: relative;
    z-index: 99;
    animation: glitch 1s linear infinite;
}
.titles:before,
.titles:after{
    content: attr(title);
    position: absolute;
    left: 0;
}
.titles:before{
    animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}
.titles:after{
    animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}
article .header-project > :nth-child(1) > .description{
    width: 200%;
    position: relative;
    margin-bottom: 15px;
    background: var(--main-color-blue);
    padding: 15px;
    border-radius: 7px;
    margin-top: 24px;
    z-index: 99;
}
article .header-project > :nth-child(1) > .description > p{
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}
article .header-project > :nth-child(2) > .image-contain-zoom{
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
}
article .header-project > :nth-child(2) > .image-contain-zoom > img{
    width: 100%;
    height: 550px;
    object-fit: cover;
    border-radius: 8px;
    transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
    box-shadow: rgba(35, 4, 206, 0.15) 0px 48px 100px 0px;
}


article .body-project > .project-tech {
    width: 100%;
    margin-top: 12em;
}
article .body-project > .project-tech > h3{
    letter-spacing: 2px;
    font-size: 30px;
    color: var(--main-color-blue);
    /* white-space: nowrap; */
}
article .body-project > .project-tech > .description{
    width: 70%;
    margin-bottom: 30px;
    /* background: var(--main-color-blue); */
    /* padding: 15px; */
    border-radius: 7px;
    margin-top: 24px;
    z-index: 99;
}
article .body-project > .project-tech > .description > p{
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}
article .body-project > .project-tech > .tech-list{
    margin-top: 1em;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 25px;
    justify-content: space-between;
}
article .body-project > .project-tech > .tech-list > *{
    flex: 1 1 30%;
    background: var(--secondary-color-black-transparent);
    height: 100%;
    border-radius: 7px;
    padding: 50px 20px;
    margin-bottom: 10px;
    text-align: center;
}

article .body-project > .project-tech > .tech-list > *  > i{
    font-size: 50px;
    color: var(--main-color-blue);
}
article .body-project > .project-tech > .tech-list > *  > p{
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}



article .header-project > :nth-child(1) .links{
    width: 100%;
}
article .header-project > :nth-child(1) .links > ul{
    display: flex;
    grid-gap:15px;
}
article .header-project > :nth-child(1) .links > ul > a{
    font-size: 25px;
    color: var(--main-color-blue);
    cursor: pointer;
    transition: all 0.5s ease-out;
    position: relative;
}
article .header-project >  :nth-child(1) .links > ul > a:hover{
    color: var(--secondary-color-blue);
    transform:translateY(-3px)
}

article .body-project > .project-images{
    width: 100%;
    margin-top: 12em;
}
article .body-project > .project-images > h3{
    letter-spacing: 2px;
    font-size: 30px;
    color: var(--main-color-blue);
    /* white-space: nowrap; */
}
article .body-project > .project-images > .description{
    width: 70%;
    margin-bottom: 30px;
    /* background: var(--main-color-blue); */
    /* padding: 15px; */
    border-radius: 7px;
    margin-top: 24px;
    z-index: 99;
}
article .body-project > .project-images > .description > p{
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}
article .body-project > .project-images > .images-list{
    margin-top: 1em;
    width: 100%;
    position: relative;
    /* overflow: hidden; */
     height: 550px;
    /* box-shadow: rgba(9, 79, 170, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px;  */
}
article .body-project > .project-images > .images-list >  .carousel-slide{
    width: 100%;
    height: 550px;
    position: absolute;
    user-select: none;
}
article .body-project > .project-images > .images-list >  .carousel-slide >  img{
    height: 550px;
    object-fit: cover;
    width: 100%;
    position: absolute;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    border-radius: 20px;
    border-radius: 20px;
    box-shadow: rgba(9, 79, 170, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px; 
}

article .body-project > .project-images > .images-list > i:first-child{
    left: 0;
}
article .body-project > .project-images > .images-list >  i:last-child{
    right: 0;
}
article .body-project > .project-images > .images-list > i{
    height: 40px;
    top: 50%;
    text-align: center;
    line-height: 40px;
    background: var(--secondary-color-black-transparent-v2);
    border-radius: 5px;
    width: 40px;
    font-size: 20px;
    cursor: pointer;
    color: var(--third-color-blue);
    position: absolute;
    transform: translateY(-50%);
    z-index: 99;
    transition: all 0.5s ease-out;
}
article .body-project > .project-images > .images-list > i:hover{
    background: var(--secondary-color-blue);
    color: var(--main-color-white);
}

.v-lazy-image {
    transition: filter 0.7s;
    animation: skeleton-loading 1s linear infinite alternate;
}
.v-lazy-image-loaded {
    background: none !important;
    animation:  blur-effect 2s normal forwards ease-in-out !important;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
.image-count-display{
    margin-bottom: 30px;
}
.image-count-display > span{
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
    background: var(--main-color-blue);
    color: var(--third-color-blue);
    padding: 10px 20px;
    border-radius: 7px;
}

article .body-project > .project-video{
    width: 100%;
    margin-top: 12em;
    display: flex;
    flex-direction: row;
}
article .body-project > .project-video > .video-details{
    width: 30%;
    position: relative;
}
article .body-project > .project-video > .video-details > h3{
    letter-spacing: 2px;
    font-size: 30px;
    color: var(--main-color-blue);
    /* white-space: nowrap; */
}
article .body-project > .project-video > .video-details > .description{
    width: 35em;
    margin-bottom: 30px;
    background: var(--main-color-blue);
    padding: 15px;
    border-radius: 7px;
    margin-top: 24px;
    z-index: 99;
    position: relative;
}
article .body-project > .project-video > .video-details > .description > p{
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}
article .body-project > .project-video > .video {
    border-radius: 20px;
    width: 70%;
}
article .body-project > .project-video > .video > iframe{
    width: 100%;
    height: 500px;
    border-radius: 20px;
}

hr{
    border: none;
    height: 0.5px;
    margin: 20px 0;
    border-radius: 20px;
    width: 0em;
    background-color: var(--main-color-blue);
    animation: hr_animate 3s infinite linear alternate;
}
/* responsiveness */

@media screen and (max-width: 1300px){
    article .header-project > :nth-child(2) > .image-contain-zoom > img{
        height: 380px;
    }
    article .body-project > .project-images > .images-list{
        height: 400px;
    }
    article .body-project > .project-images > .images-list >  .carousel-slide{
        height: 400px;
    }
    article .body-project > .project-images > .images-list >  .carousel-slide >  img{
        height: 100%;
    }
}
@media screen and (max-width: 1100px){
    article .header-project > :nth-child(1) > .description{
        width: 300%;
    }
    article .header-project > :nth-child(1) > .title > h3{
        font-size: 25px;
    }
    article .body-project > .project-tech > h3{
        font-size: 25px;
    }
    article .body-project > .project-images > h3{
        font-size: 25px;
    }
    article .body-project > .project-video > .video-details > h3{
        font-size: 25px;
    }
    article .header-project > :nth-child(1) > .description > p{
        font-size: 15px;
    }
    article .body-project > .project-tech > .description > p{
        font-size: 15px;
    }
    article .body-project > .project-tech > .tech-list > *  > p{
        font-size: 15px;
    }
    article .body-project > .project-images > .description > p{
        font-size: 15px;
    }
    article .body-project > .project-video > .video-details > .description > p{
        font-size: 15px;
    }
    article .body-project > .project-images > .images-list{
        height: 350px;
    }
    article .body-project > .project-images > .images-list >  .carousel-slide{
        height: 350px;
    }
    article .body-project > .project-images > .images-list >  .carousel-slide >  img{
        height: 100%;
    }
}
@media screen and (max-width: 1000px){
    article .header-project{
        flex-direction: column;
        margin-top: 1em;
    }
    article .body-project > .project-video{
        flex-direction: column;
    }
    article .body-project > .project-video > .video-details{
        width: 100%;
    }
    article .body-project > .project-video > .video-details > .description{
        width: 100%;
    }
    article .body-project > .project-video > .video {
        width: 100%;
    }
    article .body-project > .project-tech > .description{
        width: 100%;
    }
    article .body-project > .project-images > .description{
        width: 100%;
    }
    article .header-project > :nth-child(1){
        width: 100%;
    }
    article .header-project > :nth-child(2){
        width: 100%;
        margin-bottom: 3em;
    }
    article .header-project > :nth-child(1) > .description{
        width: 100%;
    }
    article .body-project > .project-video > .video > iframe{
        height: 350px;
    }
}

@media screen and (max-width: 900px){
    article .header-project > :nth-child(2) > .image-contain-zoom > img{
        height: 350px;
    }
}
@media screen and (max-width: 700px){
    article .header-project > :nth-child(2) > .image-contain-zoom > img{
        height: 100%;
    }
    article .header-project > :nth-child(1) > .title > h3{
       font-size: 20px;
    }
    article .body-project > .project-tech > h3{
       font-size: 20px;
    }
    article .body-project > .project-images > h3{
       font-size: 20px;
    }
    article .body-project > .project-video > .video-details > h3{
       font-size: 20px;
    }
    article .header-project > :nth-child(1) > .description > p{
        font-size: 14.5px;
    }
    article .body-project > .project-tech > .description > p{
        font-size: 14.5px;
    }
    article .body-project > .project-tech > .tech-list > *  > p{
        font-size: 14.5px;
    }
    article .body-project > .project-images > .description > p{
        font-size: 14.5px;
    }
    article .body-project > .project-video > .video-details > .description > p{
        font-size: 14.5px;
    }
    article .body-project > .project-images > .images-list{
        height: 300px;
    }
    article .body-project > .project-images > .images-list >  .carousel-slide{
        height: 300px;
    }
    article .body-project > .project-images > .images-list >  .carousel-slide >  img{
        height: 100%;
    }
}
</style>