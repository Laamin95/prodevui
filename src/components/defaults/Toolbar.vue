<template>
    <div :class="['flex items-center justify-between gap-4', bg, border, roundedMap[rounded], padding, margin, width, height, elevation]">
        <slot name="title" >
            <h1 v-if="title" :class="[textClass ?? 'text-2xl font-semibold md:text-nowrap md:whitespace-nowrap']">
                {{ title }}
            </h1>
        </slot>
        <slot />
    </div>
</template>
<script setup>
    import { heights, roundedMap } from "@/lib/componentConfig";
import { ref } from "vue";

    const props = defineProps({
        title: { type: String },
        bg: { type: String, default: 'ui-bg-color' },
        border: { type: String, default: 'border border-solid ui-border-color' },
        rounded: { type: String, default: 'none' },
        padding: { type: String, default: 'p-4' },
        margin: { type: String, default: 'm-0' },
        width: { type: String, default: 'w-full' },
        height: { type: String, default: 'h-auto' },
        elevation: { type: String, default: 'shadow-lg' },  
        titleClass: { type: String },   
    });
</script>