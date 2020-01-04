import clickOutside from '../directives/click-ouside.js';

/**
 * Här kan vi registerar globala directives och använda dem som en plugin i main vue instansen. 
 */


const GlobalDirectives = {
  install (Vue) {
    Vue.directive('click-outside', clickOutside);
  }
}

export default GlobalDirectives
