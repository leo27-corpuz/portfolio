<template>
    <headerComponent @change-title="changeTitle" :statusPage="true"/>
    <main>
        <socialmediaSideComponent />
        <verticalSidebar />
        <backgroundTextComponent>
            {{ WebTitle }}
        </backgroundTextComponent>
        <section>
            <homeComponent />
            <aboutComponent />
            <skillsComponent />
            <experienceComponent />
            <portfolipComponent @showProjectEmit="showProjectEmit"/>
            <contactComponent />
            <footerComponent />
        </section>
    </main>
</template>
<script>
import verticalSidebar from '../components/pages-components/verticalSidebar.vue'
import homeComponent from '../components/pages-components/homeComponent.vue'
import aboutComponent from '../components/pages-components/aboutComponent.vue'
import skillsComponent from '../components/pages-components/skillsComponent.vue'
import experienceComponent from '../components/pages-components/experienceComponent.vue'
import portfolipComponent from '../components/pages-components/portfolipComponent.vue'
import headerComponent from '../components/pages-components/headerComponent.vue'
import socialmediaSideComponent from '../components/pages-components/socialmediaSideComponent.vue'
import contactComponent from '../components/pages-components/contactComponent.vue'
import backgroundTextComponent from '../components/pages-components/backgroundTextComponent.vue'
import footerComponent from '../components/pages-components/footerComponent.vue'
export default{
    data(){
        return {
            WebTitle: 'Web Developer'
        }
    },
    components: {
        homeComponent, headerComponent, socialmediaSideComponent, aboutComponent, skillsComponent, experienceComponent, portfolipComponent,contactComponent,verticalSidebar, backgroundTextComponent, footerComponent
    },
    mounted(){
        document.title = "Leo | Home Page"
        document.addEventListener('scroll', this.showDiv)
        this.divAvailability()
    },
    unmounted(){
        document.removeEventListener('scroll', this.showDiv)
        this.hideAllComponet()
    },
    methods:{
        changeTitle(data){
            this.WebTitle = data
        },
        showDiv(){
           setTimeout(() => {
                let getDiv = document.querySelectorAll('.show-screen')
                getDiv.forEach(div => {
                    let position = div.getBoundingClientRect();
                    if(position.top <= window.innerHeight - 100) {
                        div.style.top = '0em';
                        div.style.opacity = 1
                    }
                })
           }, 100);
        },
        divAvailability(){
            this.showDiv()
        },
        showProjectEmit(){
            this.showDiv()
        },
        hideAllComponet(){
            let getDiv = document.querySelectorAll('.show-screen')
            getDiv.forEach(div => {
                div.style.top = '4em';
                div.style.opacity = 0
            })
        }
    },
}
</script>
<style scoped>
</style>