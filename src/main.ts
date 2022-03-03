import { createApp } from 'vue'
import App from './App.vue'
import { defineRender } from "@notionpet/sdk";

defineRender(({ options = {}, data = {} }) => {
  createApp(App, {options, data}).mount('#app')
}, process.env.NODE_ENV === "development");
