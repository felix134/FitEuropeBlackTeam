<template>
  <div>
    <vue-title title="Imprint"></vue-title>

    <!-- Imprint Content -->
    <div class="panel-group container" style="margin-top: 80px;">
      <div class="panel panel-default">
        <div class="panel-heading">
          <h1 class="section-heading">Impressum</h1>
          <br/>
        </div>
        <div class="panel-body">
          <div class="row">

            <div class="panel panel-default col-lg-12">
              <div class="panel-heading">
                <h3 class="panel-title">Inhaltliche Verantwortung: </h3>
              </div>
              <div class="panel-body">
                <div>Universität Passau</div>
                <div>Innstraße 41</div>
                <div>94032 Passau</div>
                <br/>
                <div> Telefon: 0851 / 509 - 0</div>
                <div>Telefax: 0851 / 509 - 1005</div>
                <div>E-Mail: Praesident@uni-passau.de</div>
                <br/>
                <a href="https://www.uni-passau.de/"
                   target="_blank">Internetseite der Universität Passau</a>
              </div>
              <br/>
            </div>

            <div class="panel panel-default col-lg-12">
              <div class="panel-heading">
                <h3 class="panel-title">USt-Id-Nr.: </h3>
              </div>
              <div class="panel-body">
                <div>DE 811193057
                  .
                </div>
              </div>
              <br/>
            </div>


            <div class="panel panel-default col-lg-12">
              <div class="panel-heading">
                <h3 class="panel-title">Organisation und Rechtsform: </h3>
              </div>
              <div class="panel-body">
                <div>Gemäß Art. 11 Abs. 1 BayHSchG ist die Universität Passau als Hochschule des Freistaates Bayern eine
                  Körperschaft des öffentlichen Rechts und zugleich staatliche Einrichtung. Aufsichtsbehörde ist das
                  Bayerische Staatsministerium für Wissenschaft und Kunst in München (Anschrift: Salvatorstraße 2, 80333
                  München).
                </div>
              </div>
              <br/>
            </div>


            <div class="panel panel-default col-lg-12">
              <div class="panel-heading">
                <h3 class="panel-title">Vertretung: </h3>
              </div>
              <div class="panel-body">
                <div>Die Universität Passau wird von der Vorsitzenden des Leitungsgremiums, Präsident Prof. Dr. Ulrich
                  Bartosch, gesetzlich vertreten. Verantwortliche im Sinne des § 5 TMG (Telemediengesetz) ist der
                  Präsident. Für namentlich oder mit einem gesondertem Impressum gekennzeichnete Beiträge liegt die
                  Verantwortung bei den jeweiligen Autoren.
                </div>

                <br/>
                <h4 class="section-heading">Inhaltliche Verantwortung: </h4>
                <div>Felix Bölz</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <section id="contacts">
        <!-- Contacts -->
        <div class="text-center">
          <h4 class="section-heading">Kontakt</h4>
          <hr class="light"/>
          <div class="panel">

            <!-- Contact Panels -->
            <div class="panel-body">
              <b-row align-h="center">

                <!-- Panel 1 -->
                <div class=" col-lg-2">
                  <Card>
                    <template #header>
                      <br/>
                      <font-awesome-icon icon="id-card" size="4x"/>
                      <hr class="primary"/>
                    </template>
                    <template #title>
                      Felix Bölz
                    </template>
                    <template #content>
                      E-Mail: felix.boelz@uni-passau.de
                      <br/>
                      Telefon: (0)851/509-3068
                    </template>
                  </Card>
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