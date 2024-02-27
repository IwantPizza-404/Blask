import './assets/main.css'
import Header from './components/Header.vue'
import Hero from './components/Hero.vue'
import Services from './components/Services.vue'
import About from './components/About.vue'
import Projects from './components/Projects.vue'

import { createApp, ref } from 'vue'
import App from './App.vue'

const app = createApp(App)

app.component('Header', Header)
app.component('Hero', Hero)
app.component('Services', Services)
app.component('About', About)
app.component('Projects', Projects)

app.mount('#app')
