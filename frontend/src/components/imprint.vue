<template>
  <div>
    <vue-title title="Imprint"></vue-title>

    <!-- Imprint Content -->
    <section id="contacts">
        <!-- Contacts -->
        <div class="text-center">
          <h1 class="section-heading">Imprint</h1>
          <hr class="primary"/>
          <h4 class="section-heading">Contacts</h4>
          <hr class="light"/>
          <div class="panel">

            <!-- Contact Panels -->
            <div class="panel-body">
              <b-row align-h="center">

                <!-- Panel 1 -->
                <div class="col-lg-4">
                  <div class="card" style="width: 18rem;">
                    <div class="card-body">
                      <br/>
                      <font-awesome-icon icon="id-card" size="4x"/>
                      <hr class="primary"/>
                      <h2>Felix Bölz</h2>
                      <hr/>
                      <b-col class="input-group-lg ml-auto">
                        <h6 class="card-subtitle mb-2 text-muted">E-Mail: felix.boelz@uni-passau.de</h6>
                        <br/>
                        <h6 class="card-subtitle mb-2 text-muted">Telefon: (0)851/509-3068</h6>
                      </b-col>
                    </div>
                  </div>
                </div>

              </b-row>
            </div>
          </div>

        </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "imprint"
}
</script>

<style scoped src="../css/startPageStyle.css">

</style>