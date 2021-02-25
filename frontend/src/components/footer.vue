<template>
  <div class="footer" style="background-color: #9feafe">
    <div class="container col-lg-6 col-lg-offset-4">
      <b-row align-h="center">

        <!-- Contact us-->
        <div class="col-lg-4" align="center">
          <a href="mailto:support@boelz.net">
            <b-button variant="Link" class="p-button-text" style="color: black">
              <div class="c3-centered">
                <font-awesome-icon icon="envelope" size="2x"/>
                <p>Contact us!</p>
              </div>
            </b-button>
          </a>
        </div>

        <!-- Privacy-->
        <div class="col-lg-4" align="center">
          <b-button variant="Link" v-on:click=goToPrivacy class="p-button-text" style="color: black">
            <div class="c3-centered">
              <font-awesome-icon icon="info-circle" size="2x"/>
              <p>Privacy Policy</p>
            </div>
          </b-button>
        </div>

        <!-- Imprint -->
        <div class="col-lg-4" align="center">
          <b-button variant="Link" v-on:click=goToImprint class="p-button-text" style="color: black">
            <div class="c3-centered">
              <font-awesome-icon icon="copyright" size="2x"/>
              <p>Imprint</p>
            </div>
          </b-button>
        </div>
      </b-row>
    </div>
  </div>
</template>

<script>
import router from "../routes";

export default {
  name: "footer",
  methods: {
    goToPrivacy() {
      router.push("/privacy");
    },
    goToImprint() {
      router.push("/imprint");
    }
  }
}

</script>
<style scoped>
</style>