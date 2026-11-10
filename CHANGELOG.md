# Changelog — FAHGIT by Faiz_Fahmi_ID

Semua perubahan penting pada proyek **FAHGIT** didokumentasikan dalam berkas ini.
Format ini mengacu pada [Keep a Changelog](https://keepachangelog.com/id/1.0.0/) dan proyek ini mematuhi [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.1.0] - 2026-11-10

### 🚀 EVOLUTION RELEASE (FAH INTELLIGENT APP UPDATE ENGINE)

### ADDED
- **Identitas Pengembang Santri Otodidak**: Menambahkan profil dan narasi inspiratif lengkap tentang **Faiz Fahmi (Faiz_Fahmi_ID)** dari pelosok desa di Madiun, Jawa Timur di halaman *Tentang FAHGIT*.
- **Aset Ikon 3D Claymorphic Resmi**:
  - `electron/icon.ico`: File ikon Microsoft Windows Icon (.ico) resmi dengan 6 layer resolusi lengkap (256x256 hingga 16x16 pixel).
  - `electron/icon.png` & `public/icon.png`: Ikon biner PNG 512x512 ber-header IHDR chunk valid.
  - Tampilan visual 3D logo pada pemicu Kapsul Navigasi dan kartu profil aplikasi.
- **Pintasan Keyboard Desktop**: Menambahkan shortcut `F12` / `Ctrl+Shift+I` untuk Developer Tools dan `Ctrl+R` untuk Reload halaman aplikasi secara instan.

### CHANGED
- **Antarmuka Desktop Bersih (Borderless Menu)**: Menghilangkan baris menu standar Windows (*File, Edit, View, Window*) via `mainWindow.setMenu(null)` dan `Menu.setApplicationMenu(null)` untuk estetika modern yang lapang dan fokus.
- **Resolusi Jalur Pemuatan Aplikasi**: Pemuatan berkas `dist/index.html` kini menggunakan resolusi dinamis `app.getAppPath()` untuk keandalan maksimal di seluruh jenis kemasan Windows.

### FIXED
- **Perbaikan Masalah Layar Hitam (Blank Screen)**: Menambahkan `base: './'` pada `vite.config.ts` sehingga seluruh aset JavaScript dan CSS dimuat dengan path relatif saat diakses melalui protokol desktop `file:///`.
- **Perbaikan Validasi Ikon Windows**: Mengganti pemanggilan konversi gambar mentah dengan resource ikon `.ico` biner resmi sehingga proses kompilasi `electron-builder` (`icon-tool.js`) tidak mengalami kegagalan.
- **Perbaikan Konflik TypeScript**: Menyesuaikan compiler TypeScript ke versi stabil (`^5.8.2` / `5.9.x` pure JS) untuk menghindari kebutuhan paket biner native `@typescript/typescript-win32-x64` pada Windows runner.
- **Perbaikan Dependensi Electron**: Memindahkan `electron` dan `electron-builder` ke `devDependencies` sesuai aturan ketat arsitektur `electron-builder`.

### IMPROVED
- **Tiga Format Distribusi Windows Otomatis**:
  1. `FAHGIT-Setup-1.1.0.exe` (Installer resmi NSIS dengan opsi direktori dan uninstaller).
  2. `FAHGIT-Portable-1.1.0.exe` (Biner portabel single-file langsung pakai).
  3. `FAHGIT-win-unpacked.zip` (Folder aplikasi siap pakai tanpa installer).
- **Otomasi Checksum SHA-256**: Otomatis menghasilkan `checksums-sha256.txt` untuk verifikasi integritas seluruh artefak rilis.

### OFFLINE
- **Stabilitas Fitur Lokal**: Editor Monaco, preview markdown & HTML, ekstraksi ZIP, format JSON, dan logs lokal 100% independen tanpa memerlukan koneksi internet.

### ONLINE
- **Auto-Update Engine**: Mendukung deteksi pembaruan otomatis dua kanal (NSIS via `electron-updater` dan Portable via GitHub Releases REST API) dengan pop-up konfirmasi interaktif.
- **Deteksi Jaringan Cerdas**: Heartbeat ping GitHub API (`/zen`) dengan algoritma *exponential backoff* dan notifikasi status banner adaptif.

### SECURITY
- **Zero Token Leakage**: Kredensial PAT terenkripsi AES-GCM 256-bit di IndexedDB lokal dengan PBKDF2 100.000 iterasi.
- **Isolasi Konteks Desktop**: Mempertahankan `contextIsolation: true` dan membatasi IPC hanya untuk kanal whitelist.

---

## [1.0.0] - 2026-11-10

### 🚀 Peluncuran Perdana (Initial Official Release)
- Transformasi Website ke Aplikasi Desktop Windows menggunakan Electron.
- Integrasi Mesin Auto-Update Permanen dengan GitHub Releases.
- Online + Offline Adaptive Engine 5-Tier.
- Monaco Code Editor, ZIP Extractor, Batch Git Database API Commit.
