# FAHGIT by: Faiz_Fahmi_ID
> **Your GitHub. Your Files. Your Control.**
> Professional GitHub Repository & File Manager Platform

---

## 1. Deskripsi FAHGIT
**FAHGIT** adalah platform website manajemen repository dan file GitHub modern dan profesional yang memungkinkan pengguna mengelola seluruh file, folder, dan repository GitHub tanpa harus membuka terminal atau mengetik command Git secara manual.

Aplikasi ini menggabungkan kekuatan:
- **GitHub Desktop**: Manajemen branch, commit history, diff viewer, multi-repo workspace.
- **Visual Studio Code / Monaco Editor**: Code editor lengkap dengan syntax highlighting, multiple tabs, word wrap, dan live preview.
- **Windows File Explorer**: Navigasi hierarki folder, multi-select, breadcrumbs, context action, create file/folder dengan `.gitkeep`.
- **ZIP Extractor & Nested Upload Engine**: Ekstraksi arsip ZIP client-side dengan JSZip, proteksi path traversal, dan batch Git commit atomik.
- **Security Vault**: Penyimpanan GitHub Personal Access Token (PAT) terenkripsi AES-GCM 256-bit di IndexedDB via Web Crypto API.

---

## 2. Fitur Utama
1. **GitHub Connection & Security Vault**:
   - Autentikasi langsung HTTPS ke `api.github.com`.
   - Tidak ada backend perantara yang menyimpan PAT.
   - Enkripsi Web Crypto API (PBKDF2 100,000 iterasi + AES-GCM 256-bit).
   - Fitur Lock Application, Master Passphrase, dan Purge Local Credentials.
   - Inspeksi OAuth Scopes dan Rate Limit quota.
2. **Repository Manager**:
   - List dan Grid layout dengan pencarian cepat.
   - Filter Public, Private, dan Archived.
   - Create Repository (dengan opsi README, .gitignore template).
   - Safe Two-Step Delete Repository dengan konfirmasi ketik nama repository.
3. **Repository File Explorer**:
   - Navigasi subfolder interaktif dan breadcrumbs.
   - Preview visual untuk berbagai tipe file (PNG, JPG, SVG, WEBP, GIF, PDF, Binary).
   - Pembuatan file baru dengan isi awal.
   - Pembuatan folder baru otomatis menggunakan `.gitkeep`.
   - Rename file/folder dan Move file/folder.
   - Penghapusan file dan folder dengan konfirmasi jumlah file.
   - Download file satuan atau download folder langsung sebagai ZIP.
4. **Monaco Code Editor**:
   - Integrasi resmi Monaco Editor.
   - Multiple tabs dengan dirty indicator (`*`).
   - Conflict detection: verifikasi SHA sebelum commit untuk mencegah tabrakan data.
   - Live Markdown preview dan Live sandboxed HTML preview.
   - JSON Formatter bawaan.
5. **Upload Center & Batch Git Engine**:
   - Mendukung single file, multi-file, dan nested folders tanpa meratakan direktori (`webkitdirectory`).
   - Drag and drop file upload.
   - Single atomic commit via Git Database API (Blobs, Trees, Commits, Refs).
6. **ZIP Extractor & Deployer**:
   - Ekstraksi arsip ZIP client-side menggunakan JSZip.
   - Deteksi integritas arsip, proteksi ZIP bomb (safety size cap), dan proteksi path traversal (`../`).
   - Preview seluruh file hasil ekstrak sebelum upload.
   - Deploy langsung ke branch repository pilihan.
7. **Branch Manager & Commit History**:
   - Buat branch baru dari commit SHA.
   - Switch active branch secara instan.
   - Hapus branch (dengan proteksi branch default).
   - Riwayat commit lengkap dengan author, timestamp, dan diff patch visual.
8. **Audit Logs & Backup**:
   - Catatan riwayat aksi (tanpa mengekspos token atau rahasia).
   - Ekspor/impor backup terenkripsi (JSON).
   - Download seluruh repository sebagai ZIP.

---

## 3. Teknologi yang Digunakan
- **Frontend Framework**: React 19 + TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS v4 (dengan custom dark variant)
- **Icons**: Lucide React
- **Code Editor**: `@monaco-editor/react`
- **Arsip & Kompresi**: `jszip`
- **Enkripsi Lokal**: Web Crypto API (`window.crypto.subtle`)
- **Penyimpanan Lokal**: IndexedDB (`fahgit_local_db`)
- **Git Engine**: GitHub REST API v2022-11-28 & Git Database API

---

## 4. Panduan Membuat GitHub Personal Access Token (PAT)
Untuk menghubungkan akun GitHub Anda ke FAHGIT:
1. Buka [GitHub Personal Access Tokens Settings](https://github.com/settings/tokens).
2. Pilih **Generate new token (classic)**.
3. Berikan deskripsi token, misalnya: `FAHGIT Platform`.
4. Pilih masa berlaku token (misalnya 30 days, 90 days, atau No expiration).
5. Pilih izin/scopes yang dibutuhkan:
   - `repo` *(Wajib)*: Memberikan akses penuh untuk membaca repository, membuat file, mengedit kode, dan membuat commit.
   - `delete_repo` *(Opsional)*: Hanya centang jika Anda ingin dapat menghapus repository melalui FAHGIT.
6. Klik **Generate token** di bagian bawah halaman.
7. Salin string token (format: `ghp_...`) dan tempelkan ke form koneksi FAHGIT.

---

## 5. Keamanan & Penanganan Kredensial
- **Zero Server Storage**: FAHGIT tidak memiliki database backend atau server relay yang menampung PAT Anda.
- **Enkripsi AES-GCM**: Ketika Anda memilih opsi "Remember token", token dienkripsi secara lokal di browser menggunakan AES-GCM 256-bit dengan initialization vector (IV) acak 12-byte dan salt 16-byte yang diderivasi dari Master Passphrase Anda menggunakan PBKDF2 (100.000 iterasi).
- **Auto-Lock & Purge**: Anda dapat mengunci aplikasi kapan saja dengan tombol Lock Vault, atau menghapus seluruh kredensial lokal dengan tombol Purge Data.

---

## 6. Cara Menjalankan & Membangun Proyek

### Mode Development:
```bash
npm install
npm run dev
```

### Production Build:
```bash
npm run build
```

---

## 7. Batasan Teknis & Rekomendasi
- **Batas Ukuran File Browser**: GitHub Contents API memiliki batas upload file maksimal 100MB per file. Untuk file biner yang sangat besar (>100MB), disarankan menggunakan Git LFS melalui Git CLI lokal.
- **Rate Limit GitHub API**: Akun terautentikasi PAT memiliki kuota 5.000 request per jam. FAHGIT menyediakan indikator kuota real-time di header atas.
- **Single Commit Batch Size**: Engine batch FAHGIT memproses blob dalam batch terkontrol untuk memastikan browser tidak kehabisan memori pada folder berukuran besar.

---
**FAHGIT by: Faiz_Fahmi_ID**  
*Your GitHub. Your Files. Your Control.*
