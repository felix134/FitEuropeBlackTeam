<template>
  <div class="text-center">
    <!-- Data stuff -->
    <h1 class="section-heading">Zoom Example Visualization</h1>
    <hr/>
    <div class="panel">
      <div class="panel-body">
        <div class="row">
          <Graph/>
        </div>
      </div>
    </div>
    <br/>
    <br/>
    <br/>
    <br/>
    <br/>

    <!-- Additional Infos-->
    <h1 class="section-heading">Methods & Data Sources</h1>
    <hr/>
    <div class="text-left">
      Please note, that all gathered data only serves as a rough approximation. Let's assumes a
      scenario similar to our FitEurope seminar with <b>40 participants</b>. Each <b>10 participants</b> are from
      Passau, Lyon, Milan, and Bucharest respectively.
    </div>
    <div class="text-left">
      As a result, our FitEurope emissions are calculated as follows:
    </div>
    <div>

    </div>
    <br/>
    <br/>
    <h4>Travel Emissions</h4>
    <hr/>
    <div class="text-left">
      As an approximation, we take the average distance from each city to passau. Thus, the following values can be
      derived
    </div>
    <div class="text-left">(Source: <a href="https://www.google.com/maps/">Google maps</a>):</div>
    <div class="text-left">
      <b>Car</b>: Lyon - Passau: 916 km, Milan - Passau: 679 km, Bucharest - Passau: 1,357 km (Fastest path via car)
    </div>
    <div class="text-left">
      <b>Train</b>: No Data found, assumes the same distance as for the car.
    </div>
    <div class="text-left">
      <b>Plane</b>: Lyon - Passau: 445 km, Milan - Passau: 292 km, Bucharest - Passau: 1,080 km (Direct path)
    </div>
    <br/>
    <div class="text-left">
      The travel distance in combination of its carbon footprint (based on the type of used vehicle) results in the
      overall emission of the given trip.
    </div>
    <br/>
    <div class="panel">
      <div class="panel-body">
        <div class="row">
          <iframe
              src="https://ourworldindata.org/grapher/carbon-footprint-travel-mode?tab=chart&stackMode=absolute&time=latest&region=World"
              loading="lazy" style="width: 100%; height: 600px; border: 0px none;"></iframe>
        </div>
      </div>
    </div>
    <br/>

<!--    <div class="panel">-->
<!--      <div class="panel-body">-->
<!--        <div class="row">-->
<!--          <iframe width="1024" height="640" src="http://globalcarbonatlas.org/en/CO2-emissions" frameborder="0"></iframe>-->
<!--        </div>-->
<!--      </div>-->
<!--    </div>-->
<!--    <br/>-->

    <div class="text-left">
      As a result, a calculation of given scenario is given in the following. As a rough approximation, is is assumed
      that all participants from Passau travel an average distance of 5km by bike. Also, all other participants from
      Lyon and Milan travel by train. Participants from Bucharest decide to use a plane, omitting the travel emissions
      from and to the airports.
    </div>
    <br/>
    <div class="text-left">
      <b>
        "Passau"-Emissions:
      </b>
      10 [Passau Participants] * 2 [travel back and forth] * 5 [km traveled by bike]
      * 16 [g of CO2 by bike travelling] = 1.600 [kg of CO2]
    </div>
    <div class="text-left">
      <b>
        "Lyon"-Emissions:
      </b>
      10 [Lyon Participants] * 2 [travel back and forth] * 916 [km traveled by train]
      * 6 [g of CO2 by train travelling] = 109.920 [kg of CO2]
    </div>
    <div class="text-left">
      <b>
        "Milan"-Emissions:
      </b>
      10 [Milan Participants] * 2 [travel back and forth] * 679 [km traveled by train]
      * 6 [g of CO2 by train travelling] = 81.480 [kg of CO2]
    </div>
    <div class="text-left">
      <b>
        "Bucharest"-Emissions:
      </b>
      10 [Bucharest Participants] * 2 [travel back and forth] * 1,357 [km traveled by plane]
      * 156 [g of CO2 by train travelling] = 4,233.840 [kg of CO2]
    </div>
    <div class="text-left">
      <b>
        "FitEurope"-Emissions:
      </b>
      1.600 [kg of CO2] + 109.920 [kg of CO2] + 81.480 [kg of CO2] + 4,233.840 [kg of CO2] =
      <b>4,426.840 [kg of CO2]</b>
    </div>
    <br/>
    <br/>
    <h4>Zoom Emissions</h4>
    <hr/>
    <div>
      TODO
    </div>
    <br/>
    <br/>
    <br/>
    <h4>Limitations</h4>
    <hr/>
    <div class="text-right">
      The local emissions factor for each person was also not taken into consideration. The reason is, that the
      calculation highly depends on the country and its distribution of different energy sources like coal, atom or
      renewables. Those factors, transforming a power consumption in Wh into its local emissions into g of CO2, can be
      found in the literature.
    </div>
    <br/>
    <div class="text-right">
      In our calculations it is assumed that each user device is connected to a physical BUS network. However, the
      emission also depends on the network type. For example, mobile connectivity uses 0.1kWh/GB.
    </div>
    <br/>
    <div class="text-right">
      The data from the data centers are also limited due to the fact that Zoom does not publish number? The consumption
      is also approximated based on similar cloud servers in the related literature.
    </div>
    <br/>
    <div class="text-right">
      The emissions for some travel types, like for instance a plane, do not grow linearly as assumed for the
      calculations. In this example, the plane emits the most emissions from its start to its final flight destination.
    </div>
    <br/>
    <div class="text-right">
      Also, the power of the devices and routers must be put into consideration. This factor is also excluded in our
      example.
    </div>
    <br/>
    <div class="text-right">
      The distance between the given places is also approximated. There were no further efforts made in calculating, for
      example, the missing few kilometers between a meeting place and an airport or train station.
    </div>
    <br/>
    <div class="text-right">(Source: <a href="https://davidmytton.blog/zoom-video-conferencing-energy-and-emissions/">Blog
      Article on the limitations regarding the Zoom calculations.</a>)
    </div>
    <br/>
  </div>
</template>

<script>
import Graph from "../components/graph";

export default {
  name: "data",
  components: {
    Graph
  }
}


</script>

<style scoped src="../css/startPageStyle.css">

</style>