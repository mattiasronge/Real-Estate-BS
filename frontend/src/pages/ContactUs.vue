<template>
    <div class="wrapper">
        <div class="page-header page-header-small">
            <parallax class="page-header-image"
                 style="background-image: url('video/video.jpg')">
            </parallax>
            <div class="content-center">
                <div class="row">
                    <div class="col-md-8 ml-auto mr-auto">
                        <h1 class="title">Contact Us</h1>
                        <h4>Meet the Administrator to require more Products</h4>
                    </div>
                </div>
            </div>
        </div>

        <div class="main">
            <div class="contact-content">
                <div class="container">
                    <div class="row">
                        <div class="col-md-5 ml-auto mr-auto">
                            <h2 class="title">Send us a message</h2>
                            <p class="description">You can contact us with anything related to our Products. We'll get
                                in touch with you as soon as possible.
                                <br>
                                <br>
                            </p>
                            <form role="form" id="contact-form" method="post" v-on:submit.prevent="submitForm()">
                                <label>Your name</label>
                                <fg-input
                                        placeholder="Your Name..."
                                        v-model="form.name"
                                        v-on:blur="isValidName" 
                                        addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>

                                <label>Email address</label>
                                <fg-input
                                        placeholder="Email Here..."
                                        v-model="form.email"
                                        v-on:blur="isValidEmail"
                                        addon-left-icon="now-ui-icons users_circle-08">
                                </fg-input>
                                <label>Phone</label>

                                <fg-input
                                        placeholder="Number Here..."
                                        v-model="form.phone"
                                        addon-left-icon="now-ui-icons tech_mobile">
                                </fg-input>

                                <div class="form-group">
                                    <label>Your message</label>
                                    <textarea name="message" class="form-control" id="message" rows="6" v-model="form.message" v-on:blur="isValidMessage" ></textarea>
                                </div>
                                <!-- <p class="text-danger" v-show="errorMessage!=''">{{errorMessage}}</p> -->
                                <div class="submit text-center">
                                   <button type="submit" class="btn round btn-primary">Contact Us</button>
                                </div>
                            </form>
                        </div>
                        <div class="col-md-5 ml-auto mr-auto">
                            <info-section type="primary"
                                          class="mt-5"
                                          icon="now-ui-icons location_pin">
                                <h4 class="info-title">Find us at the office</h4>
                                <p> Mattias Ronge,
                                    <br> Home address,
                                    <br> Spain
                                </p>
                            </info-section>

                            <info-section type="primary"
                                          icon="now-ui-icons tech_mobile">
                                <h4 class="info-title">Give us a ring</h4>
                                <p> Mattias Ronge
                                    <br> +44 123 321 123
                                    <br> Mon - Fri, 8:00-22:00
                                </p>
                            </info-section>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script>
  import { mapState, mapActions } from "vuex";
  import { Button, InfoSection, FormGroupInput } from '@/components';
  import {API_KEY} from '@/constants'
  import Vue from 'vue'

  export default {
    name: 'contact-us',
    components: {  // inkluderar externa komponenter för återanvändning.
      InfoSection,
      [Button.name]: Button,
      [FormGroupInput.name]: FormGroupInput,
    },
    data() {  // definiera variabler som kan användas i templates

      return {
        form: {
          name: '',
          email: '',
          phone: '',
          message:'',
          maxLength: 1500, // maximal längd på formulärmeddelandet
          errorMessage: ''// meddelande för att visa användaren om det finns ett fel
        },

      }
    },
    computed:{
      ...mapState({ // Efter modifierat state i store så kan datan skickas direkt till en komponent.
        is_contact: state => state.category.is_contact
      })
    },
    methods: { 
        isValidName: function () {  // namn validerings funktion
            var valid = this.form.name.length > 0;
            return valid;
        },
        isValidEmail: function () { // e-post validering funktion
            var valid = this.form.email.indexOf('@') > 0;
            return valid;
        },
        isValidMessage: function () { // meddelande validering funktion
            var valid = (this.form.message.length > 0) &&
                (this.form.message.length < this.form.maxLength);
            return valid;
        },
        checkMessage: function () {
        },
        submitForm: function () { // när användaren klickar på skicka-knappen, skickas data från formulär som användaren matade in -> till store action via 'dispatch' och sparas i db
          let params =  {name: this.form.name, email: this.form.email, phone: this.form.phone, message:this.form.message};
          if (! this.isValidName() || ! this.isValidEmail() || ! this.isValidMessage()) {  // efter valideringskontroll
             // this.errorMessage = 'Vänligen fyll all information';
              this.$toasted.show('Please fill all informations or correctly', {theme: 'outline',position: "top-center", icon : 'error', type: 'error', duration: 3000});
              return false;
          } else {
              this.errorMessage = '';
          }
          //this.$store.dispatch('category/saveContact', params);  //call the action(category/saveContact)
          this.$store.dispatch('category/sendEmailToAdmin', params);  //call the action(category/saveContact)
          this.$toasted.show('The Email is sent to Administrator successfully!', {theme: 'outline',position: "top-center", icon : 'info', type: 'info', duration: 3000});// om det lyckas, visa meddelandet på skärmen
          this.form.name = "";
		  this.form.email = "";
		  this.form.phone = "";
		  this.form.message = "";
        }

    }   
  }
</script>
<style>
</style>
