<template>
    <Transition :name="direction" mode="in-out">
        <div class="carousel-slide" ref="carousel" v-show="visibleSlide === index"
        @mousedown="draggingStart"
        @mouseup="draggingStop" 
        @mousemove="drag"
        @mouseleave="draggingStop"
        >
        <!-- @touchstart="touchStart"
        @touchmove="touchGrab"
        @touchend="touchEnd" -->
            <slot></slot>
        </div>
    </Transition>
</template>
<script>
export default{
   data(){
        return {
            isDragStgar: false,
            directionDetected: false,
            startX: 0,
            prevScrollLeft: 0
        }
   },
   props:['key', 'index', 'visibleSlide', 'direction'],
   methods: {
        draggingStart(e){
            let carousel = this.$refs.carousel
            this.isDragStgar = true
            this.directionDetected  = false
            this.startX = e.clientX
            carousel.style.cursor = 'grabbing'
        },
        draggingStop(){
            let carousel = this.$refs.carousel
            this.isDragStgar = false
            carousel.style.cursor = 'grab'
            this.directionDetected  = false
        },
        drag(e){
            e.preventDefault();
            if (this.isDragStgar && !this.directionDetected) {
                const deltaX = e.clientX - this.startX;
                if (deltaX > 0) {
                    this.directionDetected  = true
                    this.$emit('toLeft')
                } else if (deltaX < 0) {
                    this.$emit('toRight')
                    this.directionDetected  = true
                }
            }
        },
        // touchStart(e){
        //     this.isDragStgar = true
        //     this.directionDetected  = false
        //     this.startX = e.touches[0].clientX
        // },
        // touchGrab(e){
        //     e.preventDefault();
        //     if (this.isDragStgar && !this.directionDetected) {
        //         const deltaX = e.touches[0].clientX - this.startX;
        //         if (deltaX > 0) {
        //             this.directionDetected  = true
        //             this.$emit('toLeft')
        //         } else if (deltaX < 0) {
        //             this.$emit('toRight')
        //             this.directionDetected  = true
        //         }
        //     }
        // },
        // touchEnd(){
        //     this.isDragStgar = false
        //     this.directionDetected  = false
        // }
   }
}
</script>
<style scoped>
.carousel-slide{
    position: relative;
    perspective: 3000px;
}
.right-enter-active{
    animation: toInrightAnimate 1500ms ease-in-out;
    z-index: 1;
    position: absolute;
    backface-visibility: hidden;
}
.right-leave-active {
    animation: toOutrightAnimate 1500ms ease-in-out;
    z-index: 2;
    position: absolute;
    backface-visibility: hidden;
}
@keyframes toInrightAnimate{
    from{ 
        transform:  perspective(3000px) rotateY(180deg);
    }
    to{
        transform: perspective(3000px) rotateY(0deg);
    }
}
@keyframes toOutrightAnimate{
    from{ 
        transform: perspective(3000px) rotateY(0deg);
    }
    to{
        transform: perspective(3000px) rotateY(-180deg); 
    }
}

.left-enter-active{
    animation: toInleftAnimate 1500ms ease-in-out;
    z-index: 1 !important;
    position: absolute;
    backface-visibility: hidden;
}
.left-leave-active {
    animation: toOutleftAnimate 1500ms ease-in-out;
    z-index: 2 !important;
    position: absolute;
    backface-visibility: hidden;
}
@keyframes toInleftAnimate{
    from{ 
        transform:  perspective(3000px) rotateY(-180deg);
    }
    to{
        transform:  perspective(3000px) rotateY(0deg);
    }
}
@keyframes toOutleftAnimate{
    from{ 
        transform:  perspective(3000px) rotateY(0);
    }
    to{
        transform:  perspective(3000px) rotateY(180deg);
    }
}


</style>