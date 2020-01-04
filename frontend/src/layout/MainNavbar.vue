<template>
    <navbar position="fixed"
            :transparent="transparent"
            :color-on-scroll="colorOnScroll"
            menu-classes="ml-auto">
        <template slot-scope="{toggle, isToggled}">
            <router-link v-if="isClient" v-popover:popover1 class="navbar-brand" :to="'/client/'+$route.params.id">
                Home
            </router-link>
            <router-link v-if="!isClient" v-popover:popover1 class="navbar-brand" to="/presentation">
                Real Estate
            </router-link>
            <el-popover
                    ref="popover1"
                    popper-class="popover"
                    placement="bottom"
                    width="220"
                    trigger="hover">
                <div class="popover-body">Designed by Mattias Ronge</div>
            </el-popover>
        </template>
        <template slot="navbar-menu">
            <li class="nav-item">
                <a class="nav-link" href="#/components">
                    <i class="fa fa-search" style="padding: 3px;"></i>  Search
                </a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#/contact">
                    <i class="now-ui-icons location_pin"></i> Contact
                </a>
            </li>


        </template>
    </navbar>
</template>

<script>
  import { DropDown, Navbar } from '@/components';
  import { Popover } from 'element-ui'
  export default {
    name: 'main-navbar',
    props: {
      transparent: Boolean,
      isClient: Boolean,
      colorOnScroll: Number,
    },
    components: {
      DropDown,
      Navbar,
      [Popover.name]: Popover
    }
  }
</script>

<style scoped>

</style>
