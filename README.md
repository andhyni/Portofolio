# Andhyni A'syafa A-lifia — Portfolio

Portfolio web berbasis **React + TypeScript + Vite + Tailwind CSS v4** yang sudah dikonfigurasi untuk deployment di **Vercel**.

## Deploy ke Vercel

### 1. Melalui GitHub (Direkomendasikan)
1. Push repository ini ke GitHub / GitLab / Bitbucket.
2. Buka [vercel.com/new](https://vercel.com/new) dan pilih repository ini.
3. Pengaturan berikut otomatis terbaca dari `vercel.json`:
   - **Framework Preset**: `Vite`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Node.js Version**: `20.x` atau lebih baru
4. Tidak ada Environment Variable wajib untuk aplikasi statis ini. Klik **Deploy**.

### 2. Melalui Vercel CLI
```bash
npm install -g vercel
vercel --prod
```

## Menjalankan Secara Lokal
```bash
npm install
npm run dev
```
