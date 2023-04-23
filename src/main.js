import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import List from './views/List.vue'
import Docs from './views/Docs.vue'
import Doc from './views/Doc.vue'
import Test from './views/Test.vue'
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

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path : '/test', name : 'Test', component : Test},
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
    ]
})

createApp(App).use(router).mount('#app')
