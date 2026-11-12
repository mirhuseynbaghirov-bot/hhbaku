// HH.BAKU - bütün tənzimləmələr bu fayldadır. TUTORIAL.txt faylına baxın.

// 1) Firebase Console -> Project settings -> Your apps -> Config
export const firebaseConfig = {
  apiKey: "BURA_YAZIN",
  authDomain: "BURA_YAZIN.firebaseapp.com",
  projectId: "BURA_YAZIN",
  appId: "BURA_YAZIN"
};

// 2) Admin e-poçtu (Firebase Authentication-da yaratdığınız istifadəçi)
export const ADMIN_EMAIL = "admin@hhbaku.az";

// 3) Cloudinary (şəkil yaddaşı)
export const CLOUD_NAME = "BURA_YAZIN";
export const UPLOAD_PRESET = "BURA_YAZIN";

// 4) Əlaqə: Instagram adı (@ olmadan). WhatsApp nömrəsi ölkə kodu ilə, + və boşluqsuz (məs. 994501234567). Boş qoysanız yalnız Instagram işləyir.
export const INSTAGRAM = "hh.baku";
export const WHATSAPP = "";

// 5) Məhsul limiti (0 = limitsiz) və valyuta
export const MAX_PRODUCTS = 0;
export const CURRENCY = "₼";

// 6) Mətnlər
export const BRAND = {
  name: "HH.BAKU",
  tagline: "Bakıdan, küçə üslubunda.",
  text: "Yeni gələn paltarlar. Ölçünü seç, bizə yaz, sifarişin hazırdır.",
  steps: ["Paltarı seçin, ölçünü yoxlayın", "Sifariş et düyməsinə basın", "Ünvan və ödənişi mesajda razılaşın"]
};

// 7) Admin paneldə kateqoriya təklifləri
export const CATEGORIES = ["Futbolka", "Köynək", "Şalvar", "Hudi", "Gödəkçə", "Ayaqqabı"];
