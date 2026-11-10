/**
 * FAHGIT - Tentang Platform
 * 100% Bahasa Indonesia
 * Identitas: FAHGIT by: Faiz_Fahmi_ID
 * Tagline: Your GitHub. Your Files. Your Control.
 */

import React from 'react';
import {
  HelpCircle,
  ShieldCheck,
  Code2,
  FileArchive,
  Layers,
  KeyRound,
  ExternalLink,
  Cpu,
  GitBranch,
  Terminal,
  Sparkles,
} from 'lucide-react';

export const AboutView: React.FC = () => {
  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Brand Hero */}
      <div className="clay-card-glow rounded-3xl p-6 sm:p-8 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-cyan-500/20 via-blue-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center gap-5">
          <div className="w-16 h-16 rounded-2xl overflow-hidden bg-gradient-to-tr from-cyan-400 via-blue-500 to-indigo-600 flex items-center justify-center text-white font-mono font-black text-3xl clay-button-rgb shadow-xl shrink-0">
            <img
              src="./icon.png"
              alt="FAHGIT Logo"
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.style.display = 'none';
              }}
            />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h1 className="text-2xl font-black text-slate-900 dark:text-white tracking-tight font-mono">FAHGIT</h1>
              <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-700 dark:text-cyan-300 border border-cyan-400/30 font-mono">
                PRO PLATFORM
              </span>
            </div>
            <p className="text-sm font-bold text-cyan-600 dark:text-cyan-300 mt-1">
              Your GitHub. Your Files. Your Control.
            </p>
            <p className="text-xs text-slate-700 dark:text-slate-300 mt-1">
              Dibuat & Dikembangkan oleh: <strong className="text-slate-900 dark:text-white font-bold">Faiz_Fahmi_ID</strong>
            </p>
          </div>
        </div>

        <div className="mt-6 pt-5 border-t border-slate-200 dark:border-white/10 text-xs text-slate-700 dark:text-slate-300 leading-relaxed relative z-10">
          FAHGIT adalah platform visual manajemen repositori dan file GitHub profesional yang dirancang untuk mempermudah pengelolaan repositori, pengeditan kode dengan Monaco Editor, unggah file/folder bertingkat, dan ekstraksi arsip ZIP secara instan tanpa perlu terminal atau perintah Git manual.
        </div>
      </div>

      {/* Arsitektur Utama */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="clay-card rounded-3xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-500 dark:text-emerald-400">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Keamanan Klien 100%</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Personal Access Token disimpan secara lokal di perangkat Anda. Tidak ada server backend perantara yang menyimpan atau melihat token Anda.
          </p>
        </div>

        <div className="clay-card rounded-3xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-600 dark:text-cyan-400">
            <Code2 className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Monaco Code Editor</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Didukung mesin editor yang sama dengan Visual Studio Code dengan pewarnaan sintaks lebih dari 30 bahasa pemrograman, pratinjau Markdown & HTML, dan pemformat JSON.
          </p>
        </div>

        <div className="clay-card rounded-3xl p-5 space-y-2">
          <div className="w-10 h-10 rounded-2xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center text-purple-600 dark:text-purple-400">
            <FileArchive className="w-5 h-5" />
          </div>
          <h3 className="text-sm font-bold text-slate-900 dark:text-white">Ekstraktor ZIP Otomatis</h3>
          <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
            Ekstrak arsip ZIP langsung di browser menggunakan JSZip tanpa server, dengan perlindungan terhadap serangan traversal path dan zip bomb.
          </p>
        </div>
      </div>

      {/* Informasi Pengembang */}
      <div className="clay-card rounded-3xl p-6 space-y-3">
        <h2 className="text-sm font-bold text-slate-900 dark:text-white flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          Tentang Pengembang & Hak Cipta
        </h2>
        <p className="text-xs text-slate-700 dark:text-slate-300 leading-relaxed">
          Aplikasi ini didesain dan dibangun secara khusus dengan standar perangkat lunak modern untuk memberikan pengalaman pengorganisasian file GitHub terbaik, simpel, dan ramah bagi pemula maupun pengembang berpengalaman.
        </p>
        <div className="pt-2 flex items-center gap-4 text-xs font-mono text-cyan-700 dark:text-cyan-300">
          <span>Pengembang: Faiz_Fahmi_ID</span>
          <span>·</span>
          <span>Versi: 2.0.0 Claymorphic Pro</span>
        </div>
      </div>
    </div>
  );
};
