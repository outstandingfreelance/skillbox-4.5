import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { patchCssModules } from 'vite-css-modules'


// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),
    // patchCssModules() // ← This is all you need to add!
  ],

  css: {
    // Your existing CSS Modules configuration
    modules: {
      localsConvention: 'camelCase',
      generateScopedName: '[name]__[local]___[hash:base64:5]'
    },

    //   // Or if using LightningCSS
    //   lightningcss: {
    //     cssModules: {
    //       // ...
    //     }
    //   }
    // },
    // build: {
    //   // Recommended minimum target (See FAQ for more details)
    //   target: 'es2022'
    
  }

})

