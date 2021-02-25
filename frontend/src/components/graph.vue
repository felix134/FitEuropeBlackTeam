<template>
  <div>
    <div class="col-lg-12">
      <div :id="'myFunction'"></div>
      {{this.label()}}
    </div>
    <br/>

    <div class="row">
      <div class="col-lg-4">
        <Card>
          <template #header><h4>Graph Settings</h4><hr/></template>
          <template #subtitle>The default Time for a Zoom-Meeting is 1 hour, the default distance
            for each participant of a meeting is 100km.<hr/></template>
          <template #content>
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
          </template>
        </Card>
      </div>
      <div class="col-lg-4">
        <Card>
          <template #header><h4>Zoom Settings</h4><hr/></template>
          <template #content>
            <b-col class="input-group-lg ml-auto">
              <!--              xMin:-->
              <!--              <input type=number class="c3-input" v-model="minX" v-on:change="plot" value=-5 step=0.5>-->
              <!--              <p></p>-->
              <!--              xMax:-->
              <!--              <input type=number class="c3-input" v-model="maxX" v-on:change="plot" value=6.28 step=0.5>-->
              <!--              <p></p>-->
              <!--              yMin:-->
              <!--              <input type=number class="c3-input" v-model="minY" v-on:change="plot" value=-6 step=0.5>-->
              <!--              <p></p>-->
              <!--              yMax:-->
              <!--              <input type=number class="c3-input" v-model="maxY" v-on:change="plot" value=6 step=0.5>-->
            </b-col>
          </template>
        </Card>
      </div>
      <div class="col-lg-4">
        <Card>
          <template #header><h4>Traveling Settings</h4><hr/></template>
          <template #content>
            <b-col class="input-group-lg ml-auto">
              Select the travel type:
              <b-form-select v-model="selected" :options="options" v-on:change="plot" size="sm"
                             class="mt-3"></b-form-select>
              <!--              First function (0 deletes graph):-->
              <input v-model="graphFunction1" type="text" class="c3-input" v-on:change="plot">
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
          </template>
        </Card>
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
        // {value: 0, text: 'Select travel type'},
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

      participants: 25,
      useDistance: true,

      xLabel: "Distance [km]",

      graphFunction1: "x",
      graphFunction2: "x*x",
      minX: 0,
      maxX: 100,
      minY: 0,
      maxY: 400,
      coloring1: "#0000ff",
      coloring2: "#43ff00",

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
        disableZoom: false,
        yAxis: {domain: [this.minY, this.maxY], label: "CO2 Emissions [kg]"},
        xAxis: {domain: [this.minX, this.maxX], label: ""}
      },
    }
  },
  methods: {
    plot: function () {
      if (this.useDistance) {//use x axis as distance
        //add params to basic function (*2: two way travel) //TODO DISTANCE OR TIME
        this.graphFunction1 = "(" + this.selected + "*2*" + this.participants + ")/1000";
      } else {//use x axis as time spent
        this.graphFunction1 = "((" + this.selected + ")/x*2*" + this.participants + ")/1000";
      }

      //simplify function
      let f1 = Algebrite.simplify(this.graphFunction1).toString();
      let f2 = Algebrite.simplify(this.graphFunction2).toString();
      let xMin = this.minX;
      let xMax = this.maxX;
      let yMin = this.minY;
      let yMax = this.maxY;
      let color1 = this.coloring1;
      let color2 = this.coloring2;

      this.parameters.data[0].fn = f1;
      this.parameters.data[1].fn = f2;
      this.parameters.xAxis.domain = [xMin, xMax];
      this.parameters.yAxis.domain = [yMin, yMax];

      // Plot graph in white and probably outside of the graph in order to hide them
      // Use 325 to raise the chances that the hidden function does not cross a gridline
      if (f1 === '0' || f1 === 'nil') {
        this.parameters.data[0].fn = yMin + "-325"
        this.parameters.data[0].color = '#ffffff';
      } else
        this.parameters.data[0].color = color1;

      if (f2 === '0' || f2 === 'nil') {
        this.parameters.data[1].fn = yMin + "-325"
        this.parameters.data[1].color = '#ffffff';
      } else {
        this.parameters.data[1].color = color2;
      }

      functionPlot(this.parameters);
    },
    label: function () {
      if (this.useDistance) {
        return  "Distance [km]";
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