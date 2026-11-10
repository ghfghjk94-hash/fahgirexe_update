# Changelog — FAHGIT by Faiz_Fahmi_ID

Semua perubahan penting pada proyek **FAHGIT** didokumentasikan dalam berkas ini.
Format ini mengacu pada [Keep a Changelog](https://keepachangelog.com/id/1.0.0/) dan proyek ini mematuhi [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

---

## [1.0.0] - 2026-11-10

### 🚀 Peluncuran Perdana (Initial Official Release)
- **Transformasi Desktop Windows**:
  - Ditenagai oleh runtime Electron dengan isolasi konteks (`contextIsolation = true`, `nodeIntegration = false`) dan IPC yang aman.
  - Distribusi Windows Lengkap:
    1. **Windows Installer (NSIS)**: `FAHGIT-Setup-1.0.0.exe` dengan dukungan pintasan Desktop, Start Menu, dan uninstaller resmi.
    2. **Windows Portable**: `FAHGIT-Portable-1.0.0.exe` yang dapat langsung dijalankan tanpa proses instalasi.
    3. **Unpacked Application**: `win-unpacked/` dan arsip distribusi `FAHGIT-win-unpacked.zip`.
- **Mesin Auto-Update Permanen**:
  - Terintegrasi dengan GitHub Releases API dan `electron-updater`.
  - Pop-up pembaruan wajib interaktif dengan tombol:
    1. **UPDATE SEKARANG** (Unduh langsung di dalam aplikasi atau melalui browser).
    2. **LEWATI** (Mengabaikan versi untuk sesi yang sedang berjalan).
    3. **SILANG (X)** (Menutup notifikasi tanpa mengganggu alur kerja).
  - Indikator progres unduhan persentase, kecepatan, dan tombol restart/instalasi instan.
- **Online + Offline Adaptive Engine**:
  - Klasifikasi 5 tingkat fitur: Full Offline, Online Required, Offline with Local Fallback, Online Sync, dan Local Data.
  - Deteksi koneksi ganda (status navigator peramban + heartbeat aktif ke GitHub API).
  - Banner adaptif offline yang menjelaskan fitur mana yang tetap dapat digunakan secara lokal dan fitur mana yang membutuhkan koneksi internet.
  - Antrean operasi offline dengan mekanisme sinkronisasi otomatis menggunakan *exponential backoff* saat koneksi pulih.
- **Manajemen Repositori & Berkas Visual**:
  - Penjelajah berkas grafis dan editor kode Monaco terpadu.
  - Pusat unggah terpadu mendukung unggah berkas tunggal, folder bersarang, dan ekstraksi arsip ZIP langsung di browser.
  - Keamanan token PAT lokal berbasis Web Crypto AES-GCM tanpa server backend perantara.
- **Otomasi CI/CD GitHub Actions**:
  - Pipeline `.github/workflows/build-release.yml` untuk membangun installer EXE, portable EXE, unpacked ZIP, checksum SHA-256, dan rilis GitHub otomatis saat push tag `v*`.
