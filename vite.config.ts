import {resolve} from 'path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
	build: {
		outDir: 'dist',
		lib: {
			entry: resolve(__dirname, 'lib/index.ts'),
			name: '@jlfdzdev/react-multiselect',
			fileName: 'index'
		},
		rollupOptions: {
			external: ['react', 'react-dom', 'react/jsx-runtime'],
			output: {
				globals: {
					react: 'React',
					'react-dom': 'ReactDOM'
				}
			}
		},
	},
  	plugins: [
		react(),
		dts({
			tsconfigPath: resolve(__dirname, 'tsconfig.build.json'),
			copyDtsFiles: true,
		})
	],
})
