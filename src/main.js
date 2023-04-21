import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import List from './views/List.vue'
import Docs from './views/Docs.vue'
import Test from './views/Test.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path : '/test', name : 'Test', component : Test},
        {path : '/list', name : 'List', component : List},
        {path : '/docs', name : 'Docs', component : Docs}
    ]
})

createApp(App).use(router).mount('#app')
