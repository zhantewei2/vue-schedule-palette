import ScheduleComponent from "./components/schedule/schedule.vue"
export {PaletteItem,SignalItem} from "./components/schedule/lib";
export {Item,x_list_item} from "./components/schedule/interface";

export const ScheduleModule:any={
  install:function(vue:any){
    const v:any=(window as any).Vue||vue;
    (v as any).component("ztwx-schedule",ScheduleComponent)
  }
};