<template>
        <header ref="myHeader">
            <div class="title animate__animated animate__fadeIn">
                <a href="/"><h1>{{ title  }} </h1></a>
            </div>
            <nav v-if="statusPage">
                <transition name="slide-fade">
                        <div class="list" v-show="statusNav" ref="target" @click="handleClick">
                            <div class="line-div">
                                <div class="oval"></div>
                                <div class="line"></div>
                                <div class="oval"></div>
                            </div>
                            <ul>
                                <template v-for="nav in navs" v-if="statusPage == true">
                                    <a @click="navClick(nav.title)" :class="nav.status == true ? 'active' : ''"><li>
                                        {{ nav.title }}
                                    </li></a>
                                </template>
                                <template v-else>
                                    <div>
                                        <router-link :to="{name: 'home'}" class="not-home-page"><li> Back </li></router-link>
                                    </div>
                                </template>
                            </ul>
                        </div>
                </transition>
                <div class="burger animate__animated animate__fadeIn">
                    <!-- burger here -->
                    <div class="button-burger" ref="targetV2" @click="viewNav" :class="statusNav == true ? 'x-close' : ''"> 
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </nav>
            <nav v-else id="homepageback">
                <router-link :to="{name: 'home'}">Back Home</router-link>
            </nav>
        </header>
</template>
<script>
export default{
    props: {
        statusPage: Boolean
    },
    data(){
        return {
            title: 'L.C',
            navs: [
                {
                    title: 'Home',
                    link: 'home',
                    status: true,
                    webTitle: 'Web Developer'
                },
                {
                    title: 'About',
                    link: 'about',
                    status: false,
                    webTitle: 'About Me'
                },
                {
                    title: 'Skills',
                    link: 'skills',
                    status: false,
                    webTitle: 'My Skills'
                },
                {
                    title: 'Experience',
                    link: 'experience',
                    status: false,
                    webTitle: 'My Experience'
                },
                {
                    title: 'Portfolio',
                    link: 'portfolio',
                    status: false,
                    webTitle: 'My Projects'
                },
                {
                    title: 'Contact',
                    link: 'contact',
                    status: false,
                    webTitle: 'Contact Me'
                }
            ],
            statusNav: false
        }
    },
    mounted(){
        if(this.statusPage){
            document.addEventListener('scroll', this.changeActiveLinkScroll)
        }
        document.addEventListener("click", this.handleClick);
    },
    unmounted(){
        if(this.statusPage){
            document.removeEventListener('scroll', this.changeActiveLinkScroll)
        }
        document.removeEventListener("click", this.handleClick);
    },
    methods: {
        changeActiveLinkScroll(){
            this.navs.forEach(element => {
                let top = window.scrollY;
                let linkTO = element.link
                let section = document.querySelector(`.${linkTO}`);
                let offset = section.offsetTop;
                let height = section.offsetHeight - 100;
                if (top >= offset && top < offset + height) {
                    element.status = true
                    this.$emit('changeTitle', element.webTitle)
                }else{
                    element.status = false
                }
            })
        },
        navClick(navtitle){
            let getNav = this.navs.filter(x => x.title == navtitle)[0]
            //get the link
            getNav.status = true
            let linkTo = getNav.link
            let page = document.querySelector(`.${linkTo}`);
            window.scroll({top: page.offsetTop, behavior: "smooth"})
        },
        viewNav(){
            this.statusNav = !this.statusNav
        },
        handleClick(event) {
            const target1 = this.$refs.target
            const targetV2 = this.$refs.targetV2
            if(target1 && targetV2){
                if (!targetV2.contains(event.target) && !target1.contains(event.target)) {
                    this.statusNav = false
                }
            }
        }
    }
}
</script>
<style scoped>
header{
    width: 100%;
    padding: 15px 25px 15px 40px;
    display: flex;
    justify-content: space-between;
    background: var(--main-color-black);
    position: fixed;
    top: 0;
    z-index: 100;
}
header > .title > a > h1{
    font-size: 35px;
    letter-spacing: 4px;
    color: var(--main-color-blue);
    font-weight: 800;
    cursor: pointer;
}
header > nav > .list{
    position: fixed;
    height: 100%;
    background-color: var(--secondary-v2-color-black);
    right: 0;
    width: 400px;
    padding: 40px;
    top: 0;
    display: flex;
    overflow: auto;

}
header > nav > .list::-webkit-scrollbar-thumb{
    background-color:var(--main-color-blue);
    border-radius:10rem;
    border:1px solid var(--main-color-blue);
}
header > nav > .list::-webkit-scrollbar-thumb:hover{
    background-color: var(--main-color-blue);
    border:1px solid var(--main-color-blue);
}
    
header > nav > .list::-webkit-scrollbar {
    width: 7px;
    height:7px;
}
header > nav > .list > ul{
    margin-top: 12em;
    margin-left: 15%;
}
header > nav > .list > ul > a {
    letter-spacing: 2.5px;
    font-size: 15px;
    padding: 10px 10px 9px 10px;
    line-height: 1.5;
    cursor: pointer;
    color: var(--main-color-white);
    transition: all 0.5s ease-out;
}
header > nav > .list > ul > a:hover{
    color: var(--main-color-blue) !important;
}
.active{
    color: var(--main-color-blue) !important;
}

.button-burger {
    cursor: pointer;
    padding: 5px 10px;
    width: auto;
    margin-top: 6px;
    z-index: 100;
    position: relative;
}
.button-burger > span{
    display: block;
    width: 33px;
    height: 3px;
    margin-bottom: 5px;
    position: relative;
    background: var(--main-color-blue);
    border-radius: 3px;
    margin: 7px 0;
    transform-origin: 4px 0px;
    transition: all 0.5s ease-out;
}

.x-close > :nth-child(1){
    transform: rotate(35deg) translate(-3px, -6px) !important;
}
.x-close > :nth-child(2){
    transform: rotate(-36deg) translate(1px, -3px);
}
header > nav > .list > .line-div{
    margin-top: 7em;
}

.line-div > .oval{
    width: 20px;
    border-radius: 50%;
    border: 2px solid var(--secondary-color-blue);
    height: 20px;
    background: var(--main-color-blue);
}
.line-div > .line{
    margin-left: 8.5px;
    width: 3px;
    background: var(--secondary-color-blue);
    height: 0;
    animation: lineAnimate 1.2s normal forwards ease-in-out;
}
#homepageback{
    cursor: pointer;
    padding: 5px 10px;
    width: auto;
    margin-top: 10px;
    z-index: 100;
    position: relative;

}
#homepageback > a{
    letter-spacing: 2.5px;
    font-size: 16px;
    padding: 10px 10px 9px 10px;
    line-height: 1.5;
    cursor: pointer;
    color: var(--main-color-blue);
    transition: all 0.5s ease-out;
    font-weight: 700;
}
.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}
.not-home-page{
    letter-spacing: 2.5px;
    font-size: 15px;
    padding: 10px 10px 9px 10px;
    line-height: 1.5;
    cursor: pointer;
    color: var(--main-color-white);
    transition: all 0.5s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

@media screen and (max-width: 1100px){
    header > .title > a > h1{
        font-size: 30px;
    } 
}
@media screen and (max-width: 800px){
    header{
        padding: 15px 10px 15px 15px;
    }
}
@media screen and (max-width: 600px){
    header > nav > .list{
        width: 300px;
    }
}
@media screen and (max-width: 500px){
    header > nav > .list{
        width: calc(100% - 5em);
    }
}


/* :vertical */
@media screen and (max-height: 700px){
    header > nav > .list > ul{
        margin-top: 5em;
    }
    header > nav > .list > .line-div{
        margin-top: 6em;
    }
}
@media screen and (max-height: 500px){
    header > nav > .list > ul{
        margin-top: 3em;
    }
    header > nav > .list > .line-div{
        margin-top: 4em;
    }
}
@media screen and (max-height: 400px){
    header > nav > .list > ul{
        margin-top: 5%;
    }
    header > nav > .list > .line-div{
        margin-top: 15%;
    }
    .line-div > .line{
        height: 100%;
    }
}
</style>