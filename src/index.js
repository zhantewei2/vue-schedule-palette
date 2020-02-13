import ScheduleComponent from "./components/schedule/schedule.vue";
export const ScheduleModule = {
    install: function (vue) {
        const v = window.Vue || vue;
        v.component("ztwx-schedule", ScheduleComponent);
    }
};
//# sourceMappingURL=index.js.map