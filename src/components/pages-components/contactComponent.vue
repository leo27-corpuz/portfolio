<template>
    <Transition name="slide-fade">
      <loadingComponent v-if="loadingTitle" :loadingtitle="loadingTitle"/>
    </Transition>
    <Transition name="slide-fade">
        <errorComponent v-if="errorMessage" :errormessage="errorMessage"/>
    </Transition>
    <Transition name="slide-fade">
        <successMessage v-if="successMessage" :successmessage="successMessage"/>
    </Transition>
    <article class="contact section-container">
        <div class="container-contact" >
            <div class="contact-image show-screen">
                <img :src="contactMe.image" alt="">
            </div>
        </div>
        <div class="container-contact" >
            <div class="contact-title show-screen">
                <h2 :title="contactMe.title">{{ contactMe.title }}</h2>
            </div>
            <div class="contact-description show-screen">
                <p>{{ contactMe.description }}</p>
            </div>
            <div class="contact-details">
                <div class="contact-info show-screen" >
                    <div>
                        <a :href="`mailto:${contactMe.email}`"><i class="fa-solid fa-envelope"></i><span>{{ contactMe.email }}</span></a>
                    </div>
                    <div>
                        <a :href="`tel:${contactMe.contactNumber}`"><i class="fa-solid fa-phone"></i><span>{{ contactMe.contactNumber }}</span></a>
                    </div>
                </div>
                <div class="form-data">
                    <form @submit.prevent="sendEmail">
                        <div class="wrap-input join-input">
                            <div class="input-data show-screen">
                                <label for="">Name*</label>
                                <input type="text" v-model="dataInputs.name" :disabled="buttonStatus">
                            </div>
                            <div class="input-data show-screen">
                                <label for="">Email*</label>
                                <input type="email" v-model="dataInputs.email" :disabled="buttonStatus">
                            </div>
                        </div>
                        <div class="wrap-input">
                            <div class="input-data show-screen">
                                <label for="">Say Something*</label>
                                <textarea v-model="dataInputs.saySomething" :disabled="buttonStatus"></textarea>
                            </div>
                        </div>
                        <div class="wrap-button show-screen">
                            <button type="submit" :disabled="buttonStatus">
                                <span>Submit</span>
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </article>
</template>
<script>
import loadingComponent from '../status-components/loadingComponent.vue'
import errorComponent  from '../status-components/errorComponent.vue'
import successMessage from '../status-components/successMessage.vue'
export default{
    components: {
        loadingComponent, errorComponent, successMessage
    },
    data(){
        return {
            contactMe: {
                title: 'Get in touch',
                image: '/images/contact.svg',
                description: "Technoloy give us a better and effiecient way of communication around the world, Contact me for details.",
                email: 'leocorpuz.jr27@gmail.com',
                contactNumber: '09814636355',
            },
            dataInputs: {
                name: '',
                email: '',
                saySomething: ''
            },
            buttonStatus: false,
            loadingTitle: '',
            errorMessage: '',
            successMessage: ''
        }
    },
    computed:{
        upperCaseTitle(){
            return this.title.toUpperCase()
        }
    },
    methods: {
        sendEmail(){
            this.loadingTitle = 'Sending Email'
            this.buttonStatus = true
            this.errorMessage = ''
            this.successMessage = ''
            setTimeout(() => {
                if(this.dataInputs.name == '' || this.dataInputs.email== '' || this.dataInputs.saySomething == ''){
                    this.loadingTitle = ''
                    this.buttonStatus = false
                    this.errorMessage = 'Empty fields'
                    this.successMessage = ''
                }
                else{
                    this.loadingTitle = ''
                    this.buttonStatus = false
                    this.errorMessage = ''
                    this.successMessage = 'Send Successfully'
                }
            }, 2000)
        },
    }
}
</script>
<style scoped>
article{
    position: relative;
    align-items: flex-start;
    display: flex;
    grid-gap:50px;
    z-index: 2;
    justify-content: space-between;
}
article > :nth-child(1){
    width: 42%;
    margin-top: 5em;
}
article > :nth-child(1) > .contact-image {
    width: 100%;
}
article > :nth-child(1) > .contact-image > img{
    width: 100%;
    height: auto;
}
article > :nth-child(2){
    width: 57%;
    margin-top: -1em;
}
article > :nth-child(2) > .contact-title {
    width: 100%;
}
article > :nth-child(2) > .contact-title > h2{
    letter-spacing: 2px;
    font-size: 40px;
    color: var(--main-color-blue);
    animation: glitch 1s linear infinite;
}
article > :nth-child(2) > .contact-title > h2:before,
article > :nth-child(2) > .contact-title > h2:after{
    content: attr(title);
    position: absolute;
    left: 0;
}
article > :nth-child(2) > .contact-title > h2:before{
    animation: glitchTop 1s linear infinite;
  clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
  -webkit-clip-path: polygon(0 0, 100% 0, 100% 33%, 0 33%);
}
article > :nth-child(2) > .contact-title > h2:after{
    animation: glitchBotom 1.5s linear infinite;
  clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
  -webkit-clip-path: polygon(0 67%, 100% 67%, 100% 100%, 0 100%);
}
article > :nth-child(2) > .contact-description {
    width: 100%;
    margin-top: 25px;
}
article > :nth-child(2) > .contact-description > p{
    margin-top: 10px;
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}
article > :nth-child(2) > .contact-details > .contact-info{
    width: 100%;
    margin-top: 25px;
    display: flex;
    flex-direction: row;
    grid-gap: 25px;
    white-space: nowrap;
}
article > :nth-child(2) > .contact-details > .contact-info{
    margin-bottom: 25px;
}
article > :nth-child(2) > .contact-details > .contact-info > div > a{
    color: var(--secondary-color-blue);
}
article > :nth-child(2) > .contact-details > .contact-info > div > a > i{
    font-size: 25px;
    margin-right: 10px;
}
article > :nth-child(2) > .contact-details > .contact-info > div > a > span{
    font-size: 16px;
    letter-spacing: 1.5px;
    line-height: 1.5;
}


article > :nth-child(2) > .contact-details > .form-data{
    width: 100%;
}
article > :nth-child(2) > .contact-details > .form-data > form{
    width: 100%;
    margin-top: 50px;
}
article > :nth-child(2) > .contact-details > .form-data > form > .wrap-input{
    width: 100%;
    margin-bottom: 40px;
}
article > :nth-child(2) > .contact-details > .form-data > form  > .join-input{
    display: flex;
    flex-wrap: wrap;
    grid-gap:20px;
}
article > :nth-child(2) > .contact-details > .form-data > form  > .join-input > *{
    flex: 1 1 30%;
}
article > :nth-child(2) > .contact-details > .form-data > form  > .join-input > .input-data > input{
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
    background: rgba(53, 53, 53, 0.18);
    padding: 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: var(--secondary-color-blue);
    letter-spacing: 1.5px;
    transition: all 0.5s ease-out;
}
article > :nth-child(2) > .contact-details > .form-data > form  > .join-input > .input-data > input:focus{
    box-shadow: #3f33ac 0px 0px 0px 1px;
    transform:translateY(-5px)
}
article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-input > .input-data > label{
    line-height: 1.5;
    font-size: 16px;
    letter-spacing: 3px;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis; 
    color: var(--third-color-blue);
}
article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-input > .input-data > textarea{
    width: 100%;
    margin-top: 10px;
    font-size: 16px;
    background: rgba(53, 53, 53, 0.18);
    padding: 15px;
    border-radius: 5px;
    border: none;
    outline: none;
    color: var(--secondary-color-blue);
    letter-spacing: 1.5px;
    transition: all 0.5s ease-out;
    height: 150px;
    resize: none;
}
article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-input > .input-data > textarea:focus{
    box-shadow: #3f33ac 0px 0px 0px 1px;
    transform:translateY(-5px)
}
article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-button{
    width: 100%;
}
article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-button > button{
    background: var(--main-color-blue);
    border: none;
    color: var(--fourt-color-blue);
    padding:14px;
    letter-spacing: 1.5px;
    border-radius: 5px;
    font-size: 16px;
    transition: all ease .35s;
    width: 50%;
    transition: all 0.5s ease-out;
    cursor: pointer;
}
article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-button > button:hover{ 
    background: var(--secondary-color-blue);
}


@media screen and (max-width: 1300px){
    article > :nth-child(1) > .contact-image > img{
        height: auto;
    }
    article > :nth-child(2) > *{
        margin-bottom: 0;
    }
}
@media screen and (max-width: 1000px){
    article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-button > button{
        font-size: 15px;
    }
    article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-input > .input-data > label{
        font-size: 15px;
    }
    article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-input > .input-data > textarea{
        font-size: 15px;
    }
    article > :nth-child(2) > .contact-details > .form-data > form  > .join-input > .input-data > input{
        font-size: 15px;
    }
    article > :nth-child(2) > .contact-title > h2{
        font-size: 30px;
    }
    article > :nth-child(2) > .contact-description > p{
        font-size: 15px;
    }
    article > :nth-child(2) > .contact-details > .contact-info > div > a > i{
        font-size: 22px;
    }
    article > :nth-child(2) > .contact-details > .contact-info > div > a > span{
        font-size: 15px;
    }
    article > :nth-child(2) > .contact-details > .contact-info{
        flex-direction: column;
        grid-gap: 10px;
        white-space: nowrap;
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
    article > :nth-child(1) > .contact-image {
        text-align: center;
    }
    article > :nth-child(1) > .contact-image > img{
        height: 400px;
        width: 400px;
    }
    article > :nth-child(1) > .contact-title {
        margin-top: 15px;
    }
    article > :nth-child(2) > .contact-description {
        margin-top: 15px;
    }
}
@media screen and (max-width: 900px){
    article > :nth-child(1) > .contact-image > img{
        height: 350px;
        width: 350px;
    }
}
@media screen and (max-width: 700px){
    article > :nth-child(2) > .contact-details > .form-data > form  > .join-input{
        flex-direction: column; 
        grid-gap:30px;
    }
    article > :nth-child(1) > .contact-image > img{
        height: 300px;
        width: 300px;
    }
    article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-button > button{
        font-size: 14.5px;
    }
    article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-input > .input-data > label{
        font-size: 14.5px;
    }
    article > :nth-child(2) > .contact-details > .form-data > form  > .wrap-input > .input-data > textarea{
        font-size: 14.5px;
    }
    article > :nth-child(2) > .contact-details > .form-data > form  > .join-input > .input-data > input{
        font-size: 14.5px;
    }
    article > :nth-child(2) > .contact-title > h2{
        font-size: 20px;
    }
    article > :nth-child(2) > .contact-description > p{
        font-size: 14.5px;
    }
    article > :nth-child(2) > .contact-details > .contact-info > div > a > i{
        font-size: 19px;
    }
    article > :nth-child(2) > .contact-details > .contact-info > div > a > span{
        font-size: 14.5px;
    }
}


/*
  Enter and leave animations can use different
  durations and timing functions.
*/
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