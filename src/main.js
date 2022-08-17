import { createApp } from 'vue'
import App from '@/App.vue'
import store from '@/store'
import globalui from "@/components/ui/global"

const app = createApp(App)

globalui.forEach( ui =>{
    app.component(ui.name, ui)
})

app.use(store).mount('#app')