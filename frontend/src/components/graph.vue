<template>
  <div>
    <div class="col-lg-12">
      <div :id="'myFunction'"></div>
      {{ this.label() }}
    </div>
    <br/>

    <div class="row">

      <!--      Graph Setting-->
      <div class="col-lg-4">
        <div class="card" style="width: 18rem;">
          <div class="card-body">
            <h4>Graph Settings</h4>
            <hr/>
            <h6 class="card-subtitle mb-2 text-muted">Depending on the graph's x axis' type, default values are taken
              for the calculations.</h6>
            <hr/>
            <b-col class="input-group-lg ml-auto">
              Number of participants:
              <b-form-spinbutton v-model="participants" min="5" max="500" step="5" size="sm" v-on:change="plot"
                                 class="mb-2"></b-form-spinbutton>
              <p></p>
              Type of the x-Axis?
              <b-form-radio v-model="useDistance" v-on:change="plot" name="some-radios" :value="true">Distance
              </b-form-radio>
              <b-form-radio v-model="useDistance" v-on:change="plot" name="some-radios" :value="false">Meeting Time
              </b-form-radio>
            </b-col>
          </div>
        </div>
      </div>

      <!--      Zoom Settings-->
      <div class="col-lg-4">
        <div class="card" style="width: 18rem; color: #0000ff">
          <div class="card-body">
            <h4>Zoom Settings</h4>
            <hr/>
            <h6 class="card-subtitle mb-2 text-muted">The default time for a Zoom-Meeting are 10 hours if the graph is
              based on "Distance".</h6>
            <hr/>
            <b-col class="input-group-lg ml-auto">
              Select the country where the power origins from:
              <b-form-select v-model="selected2" :options="options2" v-on:change="plot" size="sm"
                             class="mt-3"></b-form-select>
              <!--              <input v-model="graphFunction2" type="text" class="c3-input" v-on:change="plot">-->
              <!--              Current plot:-->
              <!--              <p>{{ graphFunctionClean2 }}</p>-->
            </b-col>
          </div>
        </div>
      </div>

      <!--      Travel Settings-->
      <div class="col-lg-4">
        <div class="card" style="width: 18rem; color: #ff8c00">
          <div class="card-body">
            <h4>Traveling Settings</h4>
            <hr/>
            <h6 class="card-subtitle mb-2 text-muted">The default distance for each participant of a meeting is 10 km,
              if the graph is
              based on "Meeting Time".</h6>
            <hr/>
            <b-col class="input-group-lg ml-auto">
              Select the travel type:
              <b-form-select v-model="selected" :options="options" v-on:change="plot" size="sm"
                             class="mt-3"></b-form-select>
              <!--              Current plot:-->
              <!--              <p>{{ graphFunctionClean1 }}</p>-->
              <!--              First function (0 deletes graph):-->
              <!--              <input v-model="graphFunction1" type="text" class="c3-input" v-on:change="plot">-->
              <!--              <p></p>-->
              <!--              Color of the first graph:-->
              <!--              <input type=color class="c3-input" v-model="coloring1" v-on:change="plot">-->
              <!--              <p></p>-->
              <!--              Second function (0 deletes graph):-->
              <!--              <input v-model="graphFunction2" type="text" class="c3-input" v-on:change="plot">-->
              <!--              <p></p>-->
              <!--              Color of the second graph:-->
              <!--              <input type=color class="c3-input" v-model="coloring2" v-on:change="plot">-->
            </b-col>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import functionPlot from "function-plot"

const Algebrite = require('algebrite')

export default {
  name: "Graph",
  data() {
    return {
      options: [
        {value: "x*16", text: 'Cycling (efficient)'},
        {value: "x*50", text: 'Cycling (inefficient)'},
        {value: "x*105", text: 'Small car (hybrid)'},
        {value: "x*132", text: 'Large car (hybrid)'},
        {value: "x*43", text: 'Diesel car, 4 passengers'},
        {value: "x*85", text: 'Diesel car, 2 passengers'},
        {value: "x*142", text: 'Small car (diesel)'},
        {value: "x*209", text: 'Large car (diesel)'},
        {value: "x*48", text: 'Petrol car, 4 passengers'},
        {value: "x*96", text: 'Petrol car, 2 passengers'},
        {value: "x*154", text: 'Small car (petrol)'},
        {value: "x*283", text: 'Large car (petrol)'},
        {value: "x*6", text: 'Train (international)'},
        {value: "x*41", text: 'Train (national)'},
        {value: "x*156", text: 'Short-haul flight (economy)'},
        {value: "x*234", text: 'Short-haul flight (business class)'},
        {value: "x*240", text: 'Long-haul flight (economy)'},
        {value: "x*434", text: 'Long-haul flight (business class)'},
        {value: "x*599", text: 'Long-haul flight (first class)'},
      ],
      selected: [0],

      options2: [
        {value: "x*440", text: 'Germany'},
        {value: "x*58", text: 'France'},
        {value: "x*256", text: 'Italy'},
        {value: "x*306", text: 'Romania'},
      ],
      selected2: [0],

      participants: 25,
      useDistance: true,

      xLabel: "Distance [km]",

      graphFunction1: "x",
      graphFunction2: "x*x",
      graphFunctionClean1: "x",
      graphFunctionClean2: "x*x",
      minX: 0,
      maxX: 100,
      minY: 0,
      maxY: 400,
      coloring1: "#ff8c00",
      coloring2: "#0000ff",

      graphInput1Border: "lightgray",
      graphInput2Border: "lightgray",

      parameters: {
        target: "#myFunction",
        data: [{
          fn: this.graphFunction1,
          color: this.coloring1
        },
          {
            fn: this.graphFunction2,
            color: this.coloring2
          },
          {
            fn: '0',
            color: '#ffffff',
            nSamples: 50,
            graphType: 'scatter'
          },
          {
            fn: '0',
            color: '#ffffff',
            nSamples: 50,
            graphType: 'scatter'
          },],
        grid: true,
        width: 1000,
        height: 500,
        disableZoom: true,
        yAxis: {domain: [this.minY, this.maxY], label: "CO2 Emissions [kg]"},
        xAxis: {domain: [this.minX, this.maxX], label: ""}
      },
    }
  },
  methods: {
    plot: function () {
      // Network consumption HD video meeting ~ 0.037 kWh / hour / participants
      // Personal Laptop consumption ~ 0.100 kWh / hour / participants
      // Zoom server consumption ~ 0.300 kWh / hour

      //Selected 2 is in g CO2 / kWh

      if (this.useDistance) {//use x axis as distance
        //add params to basic function (*2: two way travel)
        this.graphFunction1 = "(" + this.selected + "*2*" + this.participants + ")/1000";

        let videoCons = this.participants + "* (37 / 100) * ((" + this.selected2 + ")/x)";
        let laptopCons = this.participants + " * ((" + this.selected2 + ")/x)";
        let zoomCons = "3 * ((" + this.selected2 + ")/x)";
        this.graphFunction2 = "(" + videoCons + "+" + laptopCons + "+" + zoomCons + ")/1000";
      } else {//use x axis as time spent
        this.graphFunction1 = "((" + this.selected + ")/x*2*10*" + this.participants + ")/1000";

        let videoCons = this.participants + "* (37 / 1000) *" + this.selected2;
        let laptopCons = this.participants + "* (1 / 10) *" + this.selected2;
        let zoomCons = "(3 / 10) *" + this.selected2;
        this.graphFunction2 = "(" + videoCons + "+" + laptopCons + "+" + zoomCons + ")/1000";
      }

      //simplify function
      this.graphFunctionClean1 = Algebrite.simplify(this.graphFunction1).toString();
      this.graphFunctionClean2 = Algebrite.simplify(this.graphFunction2).toString();
      let xMin = this.minX;
      let xMax = this.maxX;
      let yMin = this.minY;
      let yMax = this.maxY;
      let color1 = this.coloring1;
      let color2 = this.coloring2;

      this.parameters.data[0].fn = this.graphFunctionClean1;
      this.parameters.data[1].fn = this.graphFunctionClean2;
      this.parameters.xAxis.domain = [xMin, xMax];
      this.parameters.yAxis.domain = [yMin, yMax];

      // Plot graph in white and probably outside of the graph in order to hide them
      // Use 325 to raise the chances that the hidden function does not cross a gridline
      if (this.graphFunctionClean1 === '0' || this.graphFunctionClean1 === 'nil') {
        this.parameters.data[0].fn = yMin + "-325"
        this.parameters.data[0].color = '#ffffff';
      } else
        this.parameters.data[0].color = color1;

      if (this.graphFunctionClean2 === '0' || this.graphFunctionClean2 === 'nil') {
        this.parameters.data[1].fn = yMin + "-325"
        this.parameters.data[1].color = '#ffffff';
      } else {
        this.parameters.data[1].color = color2;
      }

      functionPlot(this.parameters);
    },
    label: function () {
      if (this.useDistance) {
        return "Distance [km]";
      } else {
        return "Time of the Meeting [h]";
      }
    }
  },
  created() {
    this.plot();
  },
  mounted() {
    functionPlot(this.parameters);
  }
}
</script>

<style scoped src="../css/globalStyles.css">

</style>