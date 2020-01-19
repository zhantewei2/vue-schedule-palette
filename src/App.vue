<template>
  <div id="app">
    <schedule
      :items=items
      :xList=x_list
      :switchColor=colorController
      @cardClick="click"
    />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';
import {Item,x_list_item} from "./components/schedule/interface";
import schedule from "./components/schedule/schedule.vue"

@Component({
  components: {
    schedule,
  },
})
export default class App extends Vue {

  items:Item[]=[
    {
      title:'title1',
      content:"content1",
      positionIndex:1,
      startTuple:[9,30],
      endTuple:[9,50]
    },
    {
      title:'标题一',
      content:'content2',
      positionIndex:1,
      startTuple:[11,0],
      endTuple:[13,0]
    },
    {
      title:'记录二',
      content:"content1",
      positionIndex:2,
      startTuple:[8,30],
      endTuple:[9,20]
    },

    {
      title:'事记3',
      content:"content1",
      positionIndex:3,
      startTuple:[8,32],
      endTuple:[11,50]
    },

    {
      title:'title4',
      content:"content1",
      positionIndex:4,
      startTuple:[10,30],
      endTuple:[11,30]
    },
  ]
  x_list:x_list_item[]=[
    {index:1,title:"a"},
    {index:2,title:"b"},
    {index:3,title:"c"},
    {index:4,title:"d"},
    {index:5,title:"f"}
  ]
  colorController=(costMinutes:number):string=>{
      if(costMinutes<30){
        return "EF476F"
      }else if(costMinutes>=30 &&costMinutes<60){
        return '06D6A0'
      }else if(costMinutes>=60 && costMinutes<180){
        return 'FFD166'
      }else{
        return '5193f7';
      }
    }
  click(e:Item){
    console.log(e)
  }

}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
