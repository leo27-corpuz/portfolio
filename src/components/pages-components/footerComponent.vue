<template>
    <footer>
        <div class="header-footer" >
            <div class="image-header show-screen">
                <img :src="image" alt="">
            </div>
        </div>
        <div class="body-footer" >
            <div class="title show-screen">
                <h1>L.C</h1>
            </div>
            <div class="description show-screen">
                <p>Empower everyone using technology to make life meaningful to the world, Code with passion and purpose.</p>
            </div>
            <hr class="show-screen">
            <div class="copyright show-screen">
                <p>&copy; Copyright 2023 by Leo Corpuz</p>
            </div>
        </div>
    </footer>
</template>
<script>
export default{
    data(){
        return {
            image: '/images/png.png',
        }
    }
}
</script>
<style scoped>
footer{
    width: 100%;
    height: 700px;
    background: rgba(24, 24, 24, 0.25);
    padding: 6em;
    position: relative;
}
footer > .header-footer{
    width: 100%;
    text-align: center;
}
footer > .header-footer > .image-header{
    width: 10em;
    margin-left: auto;
    margin-right: auto;
    text-align: center;
    height: 10em;
    background-image: linear-gradient(to top, var(--main-color-blue), var(--secondary-color-blue), var(--third-color-blue),
    var(--fourt-color-blue));
    border-radius: 68% 32% 57% 43% / 30% 56% 44% 70% ;
    overflow: hidden;
    border: none;
}
footer > .header-footer > .image-header > img{
    width: 100%;
    height: 100%;
    object-fit: cover;
}
footer > .body-footer{
    width: 100%;
    margin-top: 3em;
    text-align: center;
}
footer > .body-footer > .title{
    margin-bottom: 30px;    
}
footer > .body-footer > .title > h1{
    letter-spacing: 2px;
    font-size: 40px;
    color: var(--main-color-blue);
}

footer > .body-footer > .description{
    width: 50%;
    margin-left: auto;
    margin-bottom: 30px;    
    margin-right: auto;
    padding: 10px;
}
footer > .body-footer > .description > p{
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
    /* margin-top: 30px; */
}
footer > .body-footer > hr{
    border: none;
    height: 0.5px;
    border-radius: 20px;
    width: 20em;
    margin-left: auto;
    margin-right: auto;
    /* margin-bottom: 30px; */
    background: var(--main-color-blue);
    /* background-image: linear-gradient(to right, rgba(0, 0, 0, 0), var(--main-color-blue), rgba(0, 0, 0, 0)); */
}
footer > .body-footer > .copyright{
    margin-top: 30px;
}
footer > .body-footer > .copyright > p{
    font-size: 16px;
    letter-spacing: 1.5px;
    color: var(--fourt-color-blue);
    line-height: 1.5;
}


@media screen and (max-width: 1000px){
    footer > .body-footer > .description{
        width: 80%;
    }
    footer > .body-footer > .description > p{
        font-size: 15px;
    }
    footer > .body-footer > .title > h1{
        font-size: 35px;
    }
    footer > .body-footer > .copyright > p{
        font-size: 15px;
    }
    footer > .body-footer > hr{
        width: 30em;
    }
}
@media screen and (max-width: 800px){
    footer{
        padding: 6em 0;
    }
}
@media screen and (max-width: 700px){
    footer > .body-footer > .description{
        width: 100%;
    }
    footer > .body-footer > .description > p{
        font-size: 14.5px;
    }
    footer > .body-footer > .title > h1{
        font-size: 30px;
    }
    footer > .body-footer > .copyright > p{
        font-size: 14px;
    }
    footer > .body-footer > hr{
        width: 80%;
    }
}
</style>