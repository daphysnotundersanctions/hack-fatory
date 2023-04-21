import { createApp } from 'vue'
import { createRouter,createWebHistory } from 'vue-router'
import './style.css'
import App from './App.vue'
import Test from './views/Test.vue'

const router = createRouter({
    history: createWebHistory(),
    routes : [
        {path : '/test', name : 'Test', component : Test}
    ]
})

createApp(App).use(router).mount('#app')
