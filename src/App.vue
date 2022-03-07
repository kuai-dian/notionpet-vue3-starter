<script setup lang="ts">
import { reactive, ref } from "@vue/reactivity";
import { defaultOptions } from "./types";
import { makeStyle } from "./style";
import { api, defineUpdate } from "@notionpet/sdk";
import { onMounted } from "@vue/runtime-core";

const { options, data } = defineProps(["options", "data"]);
let option = reactive(Object.assign(defaultOptions, options));
const visitorCount = ref(data?.visitorCount || 0);
const { userName, visitor } = makeStyle(option);

defineUpdate(({ options }) => (option = options));

onMounted(() => {
  ++visitorCount.value;
  api.update({ visitorCount: visitorCount + 1 });
});
</script>

<template>
  <div>
    👏 欢迎来到 <span :style="userName">{{option.userName}}</span>
    的小屋，你是本小屋第 <span :style="visitor">{{visitorCount}}</span> 位访客
  </div>
</template>

<style>
</style>
