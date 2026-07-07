# Garistour — Design System

Dokumen ini adalah sumber kebenaran (single source of truth) untuk bahasa visual Garistour. Semua nilai ditulis sebagai design token agar bisa langsung dipetakan ke CSS variables, Tailwind config, atau tema aplikasi.

---

## 1. Brand Foundation

| Peran | Nama Token | Hex | Deskripsi |
|-------|-----------|-----|-----------|
| Primary | `--color-primary` | `#155079` | Biru laut dalam — warna utama brand, dipakai untuk aksi utama, header, dan elemen navigasi. |
| Secondary | `--color-secondary` | `#DC8D61` | Terracotta hangat — aksen, highlight, dan call-to-action sekunder. |
| Tertiary | `--color-tertiary` | `#0F1B2B` | Navy nyaris hitam — teks gelap, footer, dan latar kontras tinggi. |
| Background | `--color-background` | `#FEFDFD` | Putih hangat — latar utama halaman. |

### Filosofi warna
Palet menggabungkan **kedalaman laut (primary + tertiary)** dengan **kehangatan pasir/senja (secondary)** — cocok untuk brand travel & tour: terpercaya, tenang, tetapi ramah dan mengundang.

---

## 2. Color Tokens

### 2.1 Primary Scale — `#155079`

| Token | Hex | Penggunaan |
|-------|-----|-----------|
| `primary-50` | `#EAF1F6` | Latar sangat lembut, hover row |
| `primary-100` | `#C9DCE8` | Background badge, chip |
| `primary-200` | `#A3C1D6` | Border lembut |
| `primary-300` | `#7CA5C3` | Disabled state teks |
| `primary-400` | `#4E7EA1` | Ikon sekunder |
| `primary-500` | `#155079` | **Base** — tombol utama, link |
| `primary-600` | `#124568` | Hover tombol |
| `primary-700` | `#0E3752` | Active/pressed |
| `primary-800` | `#0A293D` | Teks di atas latar terang |
| `primary-900` | `#061A28` | Kontras maksimum |

### 2.2 Secondary Scale — `#DC8D61`

| Token | Hex | Penggunaan |
|-------|-----|-----------|
| `secondary-50` | `#FCF3EC` | Latar highlight lembut |
| `secondary-100` | `#F7E0CF` | Background badge hangat |
| `secondary-200` | `#F0C9AC` | Border aksen |
| `secondary-300` | `#E9B189` | Ilustrasi |
| `secondary-400` | `#E29F75` | Hover aksen terang |
| `secondary-500` | `#DC8D61` | **Base** — CTA sekunder, harga, promo |
| `secondary-600` | `#C97846` | Hover |
| `secondary-700` | `#A55F34` | Active/pressed |
| `secondary-800` | `#7C4726` | Teks aksen gelap |
| `secondary-900` | `#532F19` | Kontras maksimum |

### 2.3 Tertiary / Neutral Dark Scale — `#0F1B2B`

| Token | Hex | Penggunaan |
|-------|-----|-----------|
| `neutral-900` | `#0F1B2B` | **Base** — teks utama, footer |
| `neutral-800` | `#1B2A3D` | Surface gelap |
| `neutral-700` | `#2C3D52` | Border di dark mode |
| `neutral-600` | `#48596E` | Teks sekunder gelap |
| `neutral-500` | `#6B7C90` | Teks muted / placeholder |
| `neutral-400` | `#94A3B4` | Ikon disabled |
| `neutral-300` | `#BFC9D4` | Border default |
| `neutral-200` | `#DDE3EA` | Divider |
| `neutral-100` | `#EEF1F5` | Surface abu lembut |
| `neutral-50` | `#F7F9FB` | Latar section |

### 2.4 Semantic Colors

| Token | Hex | Penggunaan |
|-------|-----|-----------|
| `success` | `#2E7D5B` | Konfirmasi booking, status sukses |
| `success-bg` | `#E6F4EE` | Latar notifikasi sukses |
| `warning` | `#C9862E` | Peringatan, kursi terbatas |
| `warning-bg` | `#FBF1DF` | Latar notifikasi warning |
| `error` | `#C0392B` | Error, pembatalan |
| `error-bg` | `#FBEAE8` | Latar notifikasi error |
| `info` | `#155079` | Info (memakai primary) |
| `info-bg` | `#EAF1F6` | Latar notifikasi info |

---

## 3. Typography

### 3.1 Font Families

```css
--font-heading: "Staatliches", "Impact", sans-serif;
--font-body: "DM Sans", system-ui, -apple-system, sans-serif;
```

- **Staatliches** — display condensed, huruf kapital. Dipakai untuk heading, judul hero, dan label besar. Selalu tampil dengan `letter-spacing` sedikit dan sering `uppercase`.
- **DM Sans** — sans-serif geometris, sangat mudah dibaca. Untuk seluruh body text, tombol, form, dan UI.

#### Import (next/font direkomendasikan)
```ts
import { Staatliches, DM_Sans } from "next/font/google";

export const staatliches = Staatliches({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-heading",
});

export const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-body",
});
```

### 3.2 Type Scale

Basis `1rem = 16px`, rasio ~1.25 (major third).

| Token | Size | Line-height | Font | Weight | Tracking | Contoh |
|-------|------|-------------|------|--------|----------|--------|
| `display` | 4.5rem / 72px | 1.0 | Staatliches | 400 | 0.02em | Hero title |
| `h1` | 3rem / 48px | 1.05 | Staatliches | 400 | 0.02em | Judul halaman |
| `h2` | 2.25rem / 36px | 1.1 | Staatliches | 400 | 0.02em | Judul section |
| `h3` | 1.75rem / 28px | 1.15 | Staatliches | 400 | 0.02em | Sub-section |
| `h4` | 1.375rem / 22px | 1.2 | Staatliches | 400 | 0.02em | Judul kartu |
| `body-lg` | 1.125rem / 18px | 1.6 | DM Sans | 400 | 0 | Lead paragraph |
| `body` | 1rem / 16px | 1.6 | DM Sans | 400 | 0 | Teks utama |
| `body-sm` | 0.875rem / 14px | 1.5 | DM Sans | 400 | 0 | Teks pendukung |
| `caption` | 0.75rem / 12px | 1.4 | DM Sans | 500 | 0.01em | Caption, meta |
| `overline` | 0.75rem / 12px | 1.4 | DM Sans | 600 | 0.08em | Label uppercase |
| `button` | 1rem / 16px | 1 | DM Sans | 600 | 0.01em | Teks tombol |

### 3.3 Font Weight (DM Sans)
| Token | Value |
|-------|-------|
| `regular` | 400 |
| `medium` | 500 |
| `semibold` | 600 |
| `bold` | 700 |

---

## 4. Spacing Scale

Basis 4px. Gunakan token, bukan angka lepas.

| Token | px | rem |
|-------|-----|-----|
| `space-0` | 0 | 0 |
| `space-1` | 4 | 0.25rem |
| `space-2` | 8 | 0.5rem |
| `space-3` | 12 | 0.75rem |
| `space-4` | 16 | 1rem |
| `space-5` | 20 | 1.25rem |
| `space-6` | 24 | 1.5rem |
| `space-8` | 32 | 2rem |
| `space-10` | 40 | 2.5rem |
| `space-12` | 48 | 3rem |
| `space-16` | 64 | 4rem |
| `space-20` | 80 | 5rem |
| `space-24` | 96 | 6rem |

---

## 5. Border Radius

| Token | px | Penggunaan |
|-------|-----|-----------|
| `radius-none` | 0 | Elemen tegas |
| `radius-sm` | 6px | Input, badge |
| `radius-md` | 10px | Tombol, kartu kecil |
| `radius-lg` | 16px | Kartu, modal |
| `radius-xl` | 24px | Hero card, section |
| `radius-full` | 9999px | Avatar, pill, chip |

---

## 6. Elevation / Shadow

Bayangan memakai basis navy (`#0F1B2B`) agar menyatu dengan palet, bukan hitam murni.

| Token | Value |
|-------|-------|
| `shadow-xs` | `0 1px 2px rgba(15,27,43,0.06)` |
| `shadow-sm` | `0 2px 4px rgba(15,27,43,0.08)` |
| `shadow-md` | `0 4px 12px rgba(15,27,43,0.10)` |
| `shadow-lg` | `0 8px 24px rgba(15,27,43,0.12)` |
| `shadow-xl` | `0 16px 48px rgba(15,27,43,0.16)` |
| `shadow-focus` | `0 0 0 3px rgba(21,80,121,0.35)` |

---

## 7. Component Guidelines

### 7.1 Button

| Varian | Background | Teks | Border | Hover |
|--------|-----------|------|--------|-------|
| Primary | `primary-500` | `background` | — | `primary-600` |
| Secondary | `secondary-500` | `tertiary` | — | `secondary-600` |
| Outline | transparan | `primary-500` | 1.5px `primary-500` | bg `primary-50` |
| Ghost | transparan | `primary-500` | — | bg `primary-50` |
| Danger | `error` | `background` | — | gelap 8% |

- Tinggi: `sm` 36px · `md` 44px · `lg` 52px
- Padding horizontal: `space-4` → `space-6`
- Radius: `radius-md`
- Font: `button` (DM Sans 600)
- Focus: `shadow-focus`

### 7.2 Card
- Background: `background` / surface `neutral-50`
- Radius: `radius-lg`
- Shadow: `shadow-sm`, hover `shadow-md`
- Padding: `space-6`
- Judul: `h4` (Staatliches), body: `body-sm`

### 7.3 Input
- Tinggi 44px, radius `radius-sm`, border `neutral-300`
- Focus: border `primary-500` + `shadow-focus`
- Placeholder: `neutral-500`
- Error: border `error`, helper text `error`

### 7.4 Badge / Chip
- Radius `radius-full`, padding `space-1` `space-3`
- Font `overline`
- Varian: primary (`primary-100`/`primary-800`), secondary (`secondary-100`/`secondary-800`), success/warning/error memakai `*-bg` + warna dasar.

---

## 8. Accessibility

- Teks normal butuh kontras ≥ 4.5:1. Kombinasi aman:
  - `tertiary` / `neutral-900` di atas `background` → kontras tinggi ✔
  - `background` di atas `primary-500` → ✔ (tombol primary)
  - `tertiary` di atas `secondary-500` → gunakan navy, JANGAN putih (kontras putih di atas terracotta < 4.5:1) ⚠
- Jangan sampaikan makna hanya lewat warna — sertakan ikon/teks pada status.
- Focus ring (`shadow-focus`) wajib terlihat pada semua elemen interaktif.

---

## 9. Implementasi — CSS Variables

```css
:root {
  /* Brand */
  --color-primary: #155079;
  --color-secondary: #DC8D61;
  --color-tertiary: #0F1B2B;
  --color-background: #FEFDFD;

  /* Primary scale */
  --primary-50: #EAF1F6;
  --primary-100: #C9DCE8;
  --primary-200: #A3C1D6;
  --primary-300: #7CA5C3;
  --primary-400: #4E7EA1;
  --primary-500: #155079;
  --primary-600: #124568;
  --primary-700: #0E3752;
  --primary-800: #0A293D;
  --primary-900: #061A28;

  /* Secondary scale */
  --secondary-50: #FCF3EC;
  --secondary-100: #F7E0CF;
  --secondary-200: #F0C9AC;
  --secondary-300: #E9B189;
  --secondary-400: #E29F75;
  --secondary-500: #DC8D61;
  --secondary-600: #C97846;
  --secondary-700: #A55F34;
  --secondary-800: #7C4726;
  --secondary-900: #532F19;

  /* Neutral (tertiary-based) */
  --neutral-900: #0F1B2B;
  --neutral-800: #1B2A3D;
  --neutral-700: #2C3D52;
  --neutral-600: #48596E;
  --neutral-500: #6B7C90;
  --neutral-400: #94A3B4;
  --neutral-300: #BFC9D4;
  --neutral-200: #DDE3EA;
  --neutral-100: #EEF1F5;
  --neutral-50: #F7F9FB;

  /* Semantic */
  --success: #2E7D5B;  --success-bg: #E6F4EE;
  --warning: #C9862E;  --warning-bg: #FBF1DF;
  --error:   #C0392B;  --error-bg:   #FBEAE8;
  --info:    #155079;  --info-bg:    #EAF1F6;

  /* Typography */
  --font-heading: "Staatliches", "Impact", sans-serif;
  --font-body: "DM Sans", system-ui, sans-serif;

  /* Radius */
  --radius-sm: 6px;
  --radius-md: 10px;
  --radius-lg: 16px;
  --radius-xl: 24px;
  --radius-full: 9999px;

  /* Shadow */
  --shadow-xs: 0 1px 2px rgba(15,27,43,0.06);
  --shadow-sm: 0 2px 4px rgba(15,27,43,0.08);
  --shadow-md: 0 4px 12px rgba(15,27,43,0.10);
  --shadow-lg: 0 8px 24px rgba(15,27,43,0.12);
  --shadow-xl: 0 16px 48px rgba(15,27,43,0.16);
  --shadow-focus: 0 0 0 3px rgba(21,80,121,0.35);
}
```

---

## 10. Implementasi — Tailwind (v4 `@theme`)

```css
@import "tailwindcss";

@theme {
  --color-primary: #155079;
  --color-primary-50: #EAF1F6;
  --color-primary-100: #C9DCE8;
  --color-primary-200: #A3C1D6;
  --color-primary-300: #7CA5C3;
  --color-primary-400: #4E7EA1;
  --color-primary-500: #155079;
  --color-primary-600: #124568;
  --color-primary-700: #0E3752;
  --color-primary-800: #0A293D;
  --color-primary-900: #061A28;

  --color-secondary: #DC8D61;
  --color-secondary-500: #DC8D61;
  --color-secondary-600: #C97846;
  --color-secondary-700: #A55F34;

  --color-tertiary: #0F1B2B;
  --color-background: #FEFDFD;

  --font-heading: "Staatliches", sans-serif;
  --font-body: "DM Sans", sans-serif;

  --radius-md: 10px;
  --radius-lg: 16px;
}
```

Pakai di markup:
```html
<h1 class="font-heading text-primary tracking-wide uppercase">Garistour</h1>
<p class="font-body text-tertiary">Jelajahi destinasi terbaik bersama kami.</p>
<button class="bg-primary text-background rounded-[10px] px-6 py-3 font-body font-semibold">
  Pesan Sekarang
</button>
```

---

## 11. Do & Don't

**Do**
- Gunakan Staatliches hanya untuk heading/label besar, selalu dengan tracking.
- Pasangkan terracotta (`secondary`) dengan navy, bukan putih, untuk teks.
- Jaga latar tetap `background` (`#FEFDFD`) yang hangat, bukan putih murni.

**Don't**
- Jangan pakai Staatliches untuk paragraf panjang (sulit dibaca).
- Jangan menumpuk primary dan tertiary tanpa jeda neutral — keduanya gelap.
- Jangan buat teks putih di atas `secondary-500` (gagal kontras).
