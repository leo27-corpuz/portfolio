<template>
      <button @click="handleClick" :disabled="buttonstatus" :class="buttonstatus === true ? 'not-allowed' : ''">
        <Transition name="fade">
          <span class="loader" v-if="buttonstatus"></span>
        </Transition>
        <span>
          {{ label }}
        </span>
    </button>
</template>
<script>
export default{
    props: {
        label: String,
        handleClick: Function,
        buttonstatus: Boolean,
  },
}
</script>
<style scoped>
button{
    position: relative;
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
    display: flex;
    margin: auto;
    grid-gap:15px;
}
button:hover{
    background: var(--secondary-color-blue);
    transform:translateY(-3px)
}
.not-allowed{
  cursor: not-allowed;
}
.loader {
        transform: rotateZ(45deg);
        perspective: 1000px;
        border-radius: 50%;
        width: 20px;
        height: 20px;
        color: var(--fourt-color-blue);
      }
        .loader:before,
        .loader:after {
          content: '';
          display: block;
          position: absolute;
          top: 0;
          left: 0;
          width: inherit;
          height: inherit;
          border-radius: 50%;
          transform: rotateX(70deg);
          animation: 1s spin linear infinite;
        }
        .loader:after {
          color: var(--main-color-black);
          transform: rotateY(70deg);
          animation-delay: .4s;
        }

      @keyframes rotate {
        0% {
          transform: translate(-50%, -50%) rotateZ(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotateZ(360deg);
        }
      }

      @keyframes rotateccw {
        0% {
          transform: translate(-50%, -50%) rotate(0deg);
        }
        100% {
          transform: translate(-50%, -50%) rotate(-360deg);
        }
      }

      @keyframes spin {
        0%,
        100% {
          box-shadow: .2em 0px 0 0px currentcolor;
        }
        12% {
          box-shadow: .2em .2em 0 0 currentcolor;
        }
        25% {
          box-shadow: 0 .2em 0 0px currentcolor;
        }
        37% {
          box-shadow: -.2em .2em 0 0 currentcolor;
        }
        50% {
          box-shadow: -.2em 0 0 0 currentcolor;
        }
        62% {
          box-shadow: -.2em -.2em 0 0 currentcolor;
        }
        75% {
          box-shadow: 0px -.2em 0 0 currentcolor;
        }
        87% {
          box-shadow: .2em -.2em 0 0 currentcolor;
        }
      }
      .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>