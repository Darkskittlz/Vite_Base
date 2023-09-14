import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'
export default defineConfig({
	  plugins: [
	  	    VitePWA({ 
				registerType: 'autoUpdate',
				injectRegister: 'auto',
				devOptions: {
					enabled: true
				},
				workbox: {
					globPatterns: ['**/*.{js,css,html,ico,png,svg}']
				},
				includeAssets: ['favicon.ico'],
				manifest: {
				  name: 'Model Connect App',
				  short_name: 'PhoMod',
				  description: 'Photo App with Vite',
				  theme_color: '#ffffff',
				  icons: [
					{
					  src: '/icons/pwa-192x192.png',
					  sizes: '192x192',
					  type: 'image/png'
					},
					{
					  src: '/icons/pwa-512x512.png',
					  sizes: '512x512',
					  type: 'image/png'
					}
				  ]
				}
			})
	  	]
    })
	  

