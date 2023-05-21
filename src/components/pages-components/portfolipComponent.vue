<template>
    <article class="portfolio section-container">
        <div class="portfolio-header">
            <div class="title show-screen">
                <h2 :title="portfoliInfo.title">{{ portfoliInfo.title }}</h2>
            </div>
            <hr class="show-screen">
            <div class="description show-screen">
                <p>{{ portfoliInfo.description }}</p>
            </div>
        </div>
        <div class="portfolio-body">
            <template v-for="project in portfoliList.slice(0, limit)">
                <div class="portfolio-list show-screen" ref="listofProject">
                    <div class="project-info">
                        <div class="project-title">
                            <h3>{{ project.title }}</h3>
                        </div>
                        <div class="project-description">
                            <p>{{ project.description }}</p>
                        </div>
                        <div class="project-tech-used">
                            <ul v-for="tech in project.techUsed">
                                <li>{{tech}}</li>
                            </ul>
                        </div>
                        <div class="project-links">
                            <ul v-for="link in project.links">
                                <a :href="link.link" target=”_blank”><li><i :class="link.icon"></i></li></a>
                            </ul>
                        </div>
                    </div>
                    <div class="project-image">
                        <div class="image-contain-zoom">
                            <v-lazy-image :src="project.image"/>
                        </div>
                    </div>
                </div>
            </template>
            <div class="show-more show-screen" v-if="getTotalNumOfProject > limit ">
                <button-independent :label="labelTitle" :buttonstatus="buttonStatus" :handleClick="showMore"/>
            </div>
        </div>
    </article>
</template>
<script>
import VLazyImage from "v-lazy-image";
import buttonIndependent from '../status-components/button-independent.vue'
export default{
    components:{
        VLazyImage, buttonIndependent
    },
    data(){
        return{
            portfoliInfo:{
                title: 'Portfolio',
                description: 'Here is some of my basic personal projects'
            },
            portfoliList: [
                {   
                    id: 14,
                    title: "Filipino Dishes ('Backend Source Code')",
                    description: 'This website provide a information about the filipino authentic dishes that will guide them to cook it.',
                    techUsed: ['HTML', 'CSS', 'Javascript / Vue.js', 'NodeJs / ExpessJs'],
                    image: '/images/backend.png',
                    links: [
                        {
                            title: 'github',
                            icon: 'fa-brands fa-github',
                            link: 'https://github.com/leo27-corpuz/backend_filipino_dishes'
                        }
                    ]
                },
                {   
                    id: 15,
                    title: "Filipino Dishes ('Front Source Code')",
                    description: 'This website provide a information about the filipino authentic dishes that will guide them to cook it.',
                    techUsed: ['HTML', 'CSS', 'Javascript / Vue.js', 'NodeJs / ExpessJs'],
                    image: '/images/frontend.png',
                    links: [
                        {
                            title: 'github',
                            icon: 'fa-brands fa-github',
                            link: 'https://github.com/leo27-corpuz/frontend_filipino_dishes'
                        }
                    ]
                },
                {   
                    id: 13,
                    title: 'Expenses Management',
                    description: 'This system is provide the user and admin to upload, process of tracking their expenses',
                    techUsed: ['HTML', 'CSS', 'Javascript / Vue.js', 'Laravel'],
                    image: '/images/expense.png',
                    links: [
                        {
                            title: 'github',
                            icon: 'fa-brands fa-github',
                            link: 'https://github.com/leo27-corpuz/expense-management'
                        }
                    ]
                },
                {   
                    id: 1,
                    title: 'My Personal Website',
                    description: 'This is my personal website containing all my information about the IT fields.',
                    techUsed: ['HTML', 'CSS', 'Javascript / Vue.js'],
                    image: '/images/porto.png',
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
                    techUsed: ['Javascript', 'Node.js / Express.js Framework'],
                    image: '/images/authjwt.png',
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
                    techUsed: ['Javascript', 'Node.js / Express.js Framework'],
                    image: '/images/auth.jpg',
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
                    techUsed: ['Javascript', 'Node.js / Express.js Framework'],
                    image: '/images/crud.jpg',
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
                    techUsed: ['HTML', 'CSS', 'Javascript / Jquery', 'PHP', 'Laravel'],
                    image: '/images/coming.jpg',
                    links: [
                       
                    ]
                },
                {
                    id: 6,
                    title: 'Travel web based application.',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about tourist attraction for all travelers.",
                    techUsed: ['HTML', 'CSS', 'Javascript / Jquery', 'PHP'],
                    image: '/images/coming.jpg',
                    links: [
                       
                    ]
                },
                {
                    id:7,
                    title: 'Learning management system',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about school functionality like for example exams, quizzes, modules and more.",
                    techUsed: ['HTML', 'CSS', 'Javascript / Jquery', 'PHP'],
                    image: '/images/coming.jpg',
                    links: [
                       
                    ]
                },
                {
                    id:8,
                    title: 'Hotel Reservation (Online hotel).',
                    description: 'This website is a project we created during my freelancing along side with my team.',
                    techUsed: ['HTML', 'CSS', 'Javascript / Jquery', 'PHP'],
                    image: '/images/sweethotel.png',
                    links: [
                       
                    ]
                },
                {
                    id:9,
                    title: 'Covid web based application.',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about tracing and recording during the covid pandemic.",
                    techUsed: ['HTML', 'CSS', 'Javascript / Jquery', 'PHP'],
                    image: '/images/coming.jpg',
                    links: [
                       
                    ]
                },
                {
                    id:10,
                    title: 'Memorial web based application.',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about memorial services and all functions about memorial.",
                    techUsed: ['HTML', 'CSS', 'Javascript / Jquery', 'PHP'],
                    image: '/images/coming.jpg',
                    links: [
                       
                    ]
                },
                {
                    id:11,
                    title: 'Veterinary clinic web based application.',
                    description: "This website is a project we created during my freelancing along side with my team, it's basically a system about veterinary services such as appointment services and more.",
                    techUsed: ['HTML', 'CSS', 'Javascript / Jquery', 'PHP'],
                    image: '/images/coming.jpg',
                    links: [
                       
                    ]
                },
                {
                    id:12,
                    title: 'Landinng page for online shop.',
                    description: 'I created a landing page for online shop that display all the projuct of the webiste.',
                    techUsed: ['HTML', 'CSS', 'Javascript'],
                    image: '/images/shop.png',
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
                    techUsed: ['HTML', 'CSS', 'Javascript'],
                    image: '/images/landing.png',
                    links: [
                        {
                            title: 'github',
                            icon: 'fa-brands fa-github',
                            link: ''
                        }
                    ]
                },
            ],
            limit: 4,
            buttonStatus: false,
            loadingTitle: '',
            labelTitle: 'Show More',
        }
    },
    computed: {
        getTotalNumOfProject(){
            return this.portfoliList.length
        }
    },
    methods: {
        showMore(){
            this.buttonStatus = true,
            this.labelTitle = 'Showing More'
            setTimeout(() => {
                this.limit = this.limit + 4
                this.buttonStatus = false,
                this.labelTitle = 'Show More'
                this.$emit('showProjectEmit')
            }, 3000)
        },
    }
}
</script>
<style scoped>
article{
    height: auto;
    position: relative;
}
article > .portfolio-header{
    width: 100%;
    margin-top: 2em;
}
article > .portfolio-header > .title{
    width: 100%;
    margin-top: 25px;
}
article > .portfolio-header > .title > h2{
    letter-spacing: 2px;
    font-size: 30px;
    color: var(--main-color-blue);
    animation: glitch 1s linear infinite;
}
article > .portfolio-header > .title > h2:before,
article > .portfolio-header > .title > h2:after{
    content: attr(title);
    position: absolute;
    left: 0;
}
article > .portfolio-header > .title > h2:before{
    animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}
article > .portfolio-header > .title > h2:after{
    animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}
article > .portfolio-header > hr{
    border: none;
    height: 0.5px;
    margin: 10px 0;
    border-radius: 20px;
    width: 0em;
    background-color: var(--main-color-blue);
    animation: hr_animate 3s infinite linear alternate;
}
article > .portfolio-header > .description{
    width: 100%;
    margin-top: 10px;
}
article > .portfolio-header > .description > p{
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}
article > .portfolio-body{
    width: 100%;
    margin-top: 3em;
    display: flex;
    flex-wrap: wrap;
    grid-gap: 25px;
    justify-content: space-between;
}
article > .portfolio-body > .portfolio-list{
    display: flex;
    width: 48%;
    /* flex: 1 1 48%; */
    justify-content: space-between;
}
article > .portfolio-body > .portfolio-list > .project-info {
    width: 30%;
    margin-top: 1.5em;
    position: relative;
    z-index: 2;
}
article > .portfolio-body > .portfolio-list > .project-info > .project-title{
    width: 100%;
    position: relative;
    margin-bottom: 15px;
}
article > .portfolio-body > .portfolio-list > .project-info > .project-title > h3{
    letter-spacing: 2px;
    font-size: 25px;
    color: var(--third-color-blue);
    /* white-space: nowrap; */
    text-shadow: 6px 3px 12px rgba(14, 64, 87, 0.6);
}
article > .portfolio-body > .portfolio-list > .project-info > .project-description{
    width: 200%;
    position: relative;
    margin-bottom: 15px;
    background: var(--main-color-blue);
    padding: 15px;
    border-radius: 7px;
}
article > .portfolio-body > .portfolio-list > .project-info > .project-description > p{
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}
article > .portfolio-body > .portfolio-list > .project-info > .project-tech-used{
    width: 100%;
    margin-bottom: 15px;
}
article > .portfolio-body > .portfolio-list > .project-info > .project-tech-used > ul > li{
    line-height: 1.5;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
}
article > .portfolio-body > .portfolio-list > .project-info > .project-links{
    width: 100%;
}
article > .portfolio-body > .portfolio-list > .project-info > .project-links > ul{
    display: flex;
    grid-gap:15px;
}
article > .portfolio-body > .portfolio-list > .project-info > .project-links > ul > a{
    font-size: 25px;
    color: var(--main-color-blue);
    cursor: pointer;
    transition: all 0.5s ease-out;
    position: relative;
}
article > .portfolio-body > .portfolio-list > .project-info > .project-links > ul > a:hover{
    color: var(--secondary-color-blue);
    transform:translateY(-3px)
}
article > .portfolio-body > .portfolio-list > .project-image{
    width: 70%;
    position: relative;
    z-index: 1;
}
article > .portfolio-body > .portfolio-list > .project-image  > .image-contain-zoom{
    width: 100%;
    overflow: hidden;
    border-radius: 8px;
}
article > .portfolio-body > .portfolio-list > .project-image  > .image-contain-zoom > img{
    width: 100%;
    height: 210px;
    object-fit: cover;
    border-radius: 8px;
    transition: all 0.5s ease-out;
    transition: all 0.5s ease-out;
    box-shadow: rgba(35, 4, 206, 0.15) 0px 48px 100px 0px;
}
article > .portfolio-body > .portfolio-list > .project-image  > .image-contain-zoom > img:hover{
    transform: scale(1.1);
}
.show-more{
    width: 100%;
    text-align: center;
    margin-top: 25px;
}

@media screen and (max-width: 1200px){
    article > .portfolio-body > .portfolio-list > .project-info > .project-title > h3{
        font-size: 20px;
        white-space: inherit;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-title{
        width: 180%;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-description{
        width:250%;
    }
}
@media screen and (max-width: 1100px){
    article > .portfolio-body > .portfolio-list > .project-info > .project-links > ul > a{
        font-size: 20px;
    }
}
@media screen and (max-width: 1000px){
    article > .portfolio-header > .title > h2{
        font-size: 25px;
    }
    article > .portfolio-header > .description > p{
        font-size: 15px;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-title > h3{
        font-size: 17px;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-description > p{
        font-size: 14.5px;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-tech-used > ul > li{
        font-size: 15px;
    }
    article > .portfolio-body{
        flex-direction: column; 
        grid-gap:0;
    }
    article > .portfolio-body > .portfolio-list{
        width: 100%;
        margin-bottom: 40px;
    }
}
@media screen and (max-width: 900px){
    article > .portfolio-body > .portfolio-list > .project-image  > .image-contain-zoom > img{
        width: 100%;
        height: 250px;
    }
}
@media screen and (max-width: 700px){
    article > .portfolio-body > .portfolio-list > .project-image  > .image-contain-zoom > img{
        width: 100%;
        height: 200px;
    }
    article > .portfolio-header > .title > h2{
        font-size: 20px;
    }
    article > .portfolio-header > .description > p{
        font-size: 14.5px;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-title > h3{
        font-size: 17px;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-description > p{
        font-size: 14.5px;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-tech-used > ul > li{
        font-size: 14.5px;
    }
    article > .portfolio-body > .portfolio-list{
        flex-direction: column; 
        grid-gap:0;
        margin-bottom: 50px;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-title{
        width: 100%;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-title > h3{
        white-space: inherit;
    }
    article > .portfolio-body > .portfolio-list > .project-info {
        width: 100%;
        order: 2;
    }
    article > .portfolio-body > .portfolio-list > .project-info > .project-description{
        width: 100%;
    }
    article > .portfolio-body > .portfolio-list > .project-image{
        width: 100%;
        order: 1;
    }
    article > .portfolio-body > .portfolio-list > .project-image  > .image-contain-zoom > img{
        width: 100%;
        height: auto;
    }
}


/* loadingimagge */
.v-lazy-image {
    transition: filter 0.7s;
    animation: skeleton-loading 1s linear infinite alternate;
    border-radius: 50px;
}
.v-lazy-image-loaded {
    background: none !important;
    animation:  blur-effect 2s normal forwards ease-in-out !important;
}


.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>