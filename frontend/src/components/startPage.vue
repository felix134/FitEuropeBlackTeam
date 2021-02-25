<template>
  <div>
    <vue-title title="FitEurope-Data Visualization"></vue-title>
    <div id="page-top"></div>

      <div class="headerImg" style="width: 100%; height:550vh">
        <div class="container col-lg-8 col-lg-offset-2 ">
          <Data/>
        </div>
      </div>

  </div>
</template>

<script>
import Data from "../components/data";

export default {
  name: "home",
  components: {
    Data
  }
}
</script>

<style scoped src="../css/startPageStyle.css">

</style>