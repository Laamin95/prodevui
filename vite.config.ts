import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'
import { resolve } from 'path'

export default defineConfig({
  plugins: [
    vue(),
    dts({ tsconfigPath: './tsconfig.app.json', insertTypesEntry: true }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ProdevUI',
      formats: ['es', 'cjs'],
      fileName: (format) => `index.${format === 'es' ? 'js' : 'cjs'}`
    },
    rollupOptions: {
      // Externalize dependencies that shouldn't be bundled
      external: [
        'vue',
        '@heroicons/vue',
        '@vuepic/vue-datepicker',
        '@vueuse/core',
        '@vueuse/components',
      ],
      output: {
        exports: 'named' as const,
        globals: {
          vue: 'Vue',
          '@heroicons/vue': 'HeroiconsVue',
          '@vuepic/vue-datepicker': 'VueDatePicker',
          '@vueuse/core': 'VueUseCore',
          '@vueuse/components': 'VueUseComponents',
        },
        // Preserve CSS
        assetFileNames: (assetInfo) => {
          if (assetInfo.name === 'style.css') return 'style.css'
          return assetInfo.name ?? 'assets/[name]-[hash][extname]'
        }
      }
    },
    // Generate source maps
    sourcemap: true,
    // Ensure CSS is extracted
    cssCodeSplit: false
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src'),
      '@components': resolve(__dirname, 'src/components')
    }
  }
})
