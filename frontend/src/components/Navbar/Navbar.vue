<template>
    <nav :class="classes" class="navbar navbar-expand-lg">
        <div class="container" >
            <div class="navbar-translate">
                <slot v-bind="slotData"></slot>
                <navbar-toggle-button :toggled="showMenu" @click.native.stop="toggle"></navbar-toggle-button>
            </div>
            <div class="collapse navbar-collapse show"
                 v-if="$slots['navbar-menu'] || $scopedSlots['navbar-menu']"
                 data-color="orange"
                 id="navigation">
                <ul class="navbar-nav" :class="menuClasses" v-click-outside="close">
                    <slot name="navbar-menu" v-bind="slotData"></slot>
                </ul>
            </div>
        </div>
    </nav>
</template>
<script>
  import { CollapseTransition } from 'vue2-transitions';
  import NavbarToggleButton from './NavbarToggleButton';
  let resizeTimeout;
  function resizeThrottler(actualResizeHandler) {
    // ignore resize events as long as an actualResizeHandler execution is in the queue
    if ( !resizeTimeout ) {
      resizeTimeout = setTimeout(() => {
        resizeTimeout = null;
        actualResizeHandler();

        // The actualResizeHandler will execute at a rate of 15fps
      }, 66);
    }
  }

  export default {
    name: 'navbar',
    props: {   // define property
      transparent: {
        type: Boolean,
        default: false
      },
      position: {
        type: String,
        default: 'relative'
      },
      menuClasses: {
        type: [String, Object, Array]
      },
      colorOnScroll: {
        type: Number,
        default: 0
      },
      type: {
        type: String,
        default: 'white',
        validator(value) {
          return ['white', 'default', 'primary', 'danger', 'success', 'warning', 'info'].includes(value);
        }
      },
    },
    provide() {
      return {
        closeNavbar: this.close
      }
    },
    components: {   //inkludera komponenter
      CollapseTransition,
      NavbarToggleButton
    },
    data() {
      return {   // define variables
        showMenu: false,
        extraNavClasses: '',
        currentScrollValue: 0
      }
    },
    computed: {  //define computed method
      slotData(){
        return {
          toggle: this.toggle,
          open: this.open,
          close: this.close,
          isToggled: this.showMenu
        }
      },
      classes() {
        let color = `bg-${this.type}`;
        let navPosition = `navbar-${this.position}`;
        let colorOnScrollTransparent = this.colorOnScroll && this.currentScrollValue < this.colorOnScroll;

        if (this.position === 'fixed') {
          navPosition = 'fixed-top';
        }

        return [
          { 'navbar-transparent': (this.transparent || colorOnScrollTransparent) },
          { [color]: (!this.transparent && this.colorOnScroll === 0) },
          navPosition, this.extraNavClasses]
      }
    },
    methods: {  //define methods
      setNav(value){
        let docClasess = document.body.classList;
        if(value){
          docClasess.add('nav-open')
        } else {
          docClasess.remove('nav-open')
        }
        let isOpen = docClasess.contains('nav-open');
        let eventToTrigger = isOpen ? 'open' : 'close';
        this.showMenu = isOpen;
        this.$emit(eventToTrigger)
      },
      toggle() {
        this.setNav(!this.showMenu)
      },
      open(){
        this.setNav(true);
      },
      close(){
        if (this.showMenu === false) {
          return
        }
        this.setNav(false);
      },
      handleScroll(){
        let scrollValue = document.body.scrollTop || document.documentElement.scrollTop;
        this.currentScrollValue = scrollValue;
        if(this.colorOnScroll > 0 && scrollValue > this.colorOnScroll){
          this.extraNavClasses = `bg-${this.type}`;
        } else {
          if(this.extraNavClasses){
            this.extraNavClasses = ''
          }
        }
      },
      scrollListener() {
        resizeThrottler(this.handleScroll)
      }
    },
    mounted () { // När instansen är mounted
      document.addEventListener('scroll', this.scrollListener)
    },
    beforeDestroy () { // before destory
      document.removeEventListener('scroll', this.scrollListener)
    }
  }
</script>
<style>
</style>
