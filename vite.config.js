import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Mendengarkan pada semua alamat IP
    port: 3000,      // (Opsional) Ubah jika Anda menggunakan port lain
  },
})
