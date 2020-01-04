<template>
  <component class="dropdown"
             :is="tag"
             :class="[{show: isOpen}, {'dropdown': direction === 'down'}, {'dropup': direction ==='up'}]"
             aria-haspopup="true"
             :aria-expanded="isOpen"
             @click="toggleDropDown"
             v-click-outside="closeDropDown">

    <slot name="title">
      <a class="dropdown-toggle nav-link"
         :class="{'no-caret': hideArrow}"
         data-toggle="dropdown">
        <i :class="icon"></i>
        <span class="no-icon">{{title}}</span>
      </a>
    </slot>
    <ul class="dropdown-menu"
        :class="[{'dropdown-menu-right': position === 'right'}, {show: isOpen}]">
      <slot></slot>
    </ul>
  </component>
</template>
<script>
  export default {
    name: 'drop-down',
    props: {   // define property
      direction: {
        type: String,
        default: 'down'
      },
      title: String,
      icon: String,
      position: String,
      hideArrow: Boolean,
      tag: {
        type: String,
        default: 'li'
      }
    },
    data() { // define variable
      return {
        isOpen: false
      }
    },
    provide() {  
      return {
        closeDropDown: this.closeDropDown
      }
    },
    methods: { // define method
      toggleDropDown() {
        this.isOpen = !this.isOpen
        this.$emit('change', this.isOpen)
      },
      closeDropDown() {
        this.isOpen = false
        this.$emit('change', this.isOpen)
      }
    }
  }
</script>
<style>
  .dropdown {
    list-style-type: none;
  }

  .dropdown .dropdown-toggle {
    cursor: pointer;
  }
</style>
