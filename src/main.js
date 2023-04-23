import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import List from './views/List.vue'
import Docs from './views/Docs.vue'
import Doc from './views/Doc.vue'
import Tech from './views/Tech.vue'
import Schedule from './views/Schedule.vue'
import Preparation from './views/Preparation.vue'
import M4 from './views/M4.vue'
import Check from './views/Check.vue'
import Sprint from './views/Sprint.vue'
import Dogovor from './views/Dogovor.vue'
import nameproject from './views/nameproject.vue'
import stateproject from './views/stateproject.vue'
import Table from './views/Table.vue'
import week from './views/week.vue'
import Dogovors from './views/Dogovors.vue'
import Graphic from './views/Graphic.vue'
import Personal from './views/Personal.vue'
import Cmp from './views/CMP.vue'
import M1 from './views/M1.vue'
import M2 from './views/M2.vue'
import M3 from './views/M3.vue'
import M5 from './views/M5.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path : '/list', name : 'List', component : List},
        {path : '/docs', name : 'Docs', component : Docs},
        {path : '/doc', name : 'Doc', component : Doc},
        {path : '/schedule', name : 'Schedule', component : Schedule},
        {path :  '/tech', name : 'Tech', component : Tech},
        {path : '/Preparation', name : 'Preparation', component : Preparation},
        {path : '/M4', name : 'M4', component : M4},
        {path : '/check', name : 'Check', component : Check},
        {path : '/sprint', name : 'Sprint', component : Sprint},
        {path : '/dogovor', name : 'Dogovor', component : Dogovor},
        {path : '/', name: 'nameproject', component : nameproject},
        {path : '/stateproject', name: 'stateproject', component : stateproject},
        {path : '/table', name: 'Table', component : Table},
        {path : '/week', name: 'week', component: week},
        {path : '/week', name: 'week', component: week},
        {path : '/dogovors', name: 'Dogovors', component: Dogovors},
        {path : '/graphic', name: 'Graphic', component: Graphic},
        {path : '/personal', name: 'Personal', component: Personal},
        {path : '/cmp', name: 'CMP', component: Cmp},
        {path : '/M1', name: 'm1', component: M1},
        {path : '/M2', name: 'm2', component: M2},
        {path : '/M3', name: 'm3', component: M3},
        {path : '/M5', name: 'm5', component: M5},
    ]
})

createApp(App).use(router).mount('#app')
