<template>
        <headerComponent :statusPage="false"/>
    <main>
        <socialmediaSideComponent />
        <verticalSidebar />
        <backgroundTextComponent>
            {{ WebTitle }}
        </backgroundTextComponent>
        <section>
            <projectComponent />
            <footerComponent />
        </section>
    </main>
</template>
<script>
import { defineAsyncComponent } from 'vue'
import footerComponent from '../../components/pages-components/footerComponent.vue'
import socialmediaSideComponent from '../../components/pages-components/socialmediaSideComponent.vue'
import backgroundTextComponent from '../../components/pages-components/backgroundTextComponent.vue'
import verticalSidebar from '../../components/pages-components/verticalSidebar.vue'
import projectComponent from '../../components/pages-components/projectComponent.vue'
import headerComponent from '../../components/pages-components/headerComponent.vue'
export default{
    data(){
        return {
            WebTitle: 'Web Developer'
        }
    },
    components: {
        footerComponent, verticalSidebar, socialmediaSideComponent, backgroundTextComponent, projectComponent, headerComponent
    },
    mounted(){
        document.title = "Leo | Project Page"
        document.addEventListener('scroll', this.showDiv)
        this.divAvailability()
    },
    unmounted(){
        document.removeEventListener('scroll', this.showDiv)
        this.hideAllComponet()
    },
    methods: {
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
        hideAllComponet(){
            let getDiv = document.querySelectorAll('.show-screen')
            getDiv.forEach(div => {
                div.style.top = '4em';
                div.style.opacity = 0
            })
        }
    }
}
</script>