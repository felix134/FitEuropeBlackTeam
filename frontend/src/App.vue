<!--This is the root vue file. This is shown at each frontend site. Should contain header and footer.-->

<template>
  <div class="box">
    <div id="mainApp">
      <router-view/>
    </div>
    <!-- empty content div that scales to fit viewport-->
    <div class="content"></div>
    <footer-component/>
  </div>
</template>

<script>
import FooterComponent from "./components/footer";

export default {
  name: "app",
  components: {
    FooterComponent
  }
}
</script>

<!--imported global styles are only used for custom c3. class imports-->
<style src="../src/css/globalStyles.css">
@import url(https://unpkg.com/bootstrap@4.1.0/dist/css/bootstrap.min.css);

header {
  border-bottom: 2px solid black;
  margin-bottom: 15px;
}

footer {
  border-top: 2px solid black;
  margin-top: 15px;
}
</style>