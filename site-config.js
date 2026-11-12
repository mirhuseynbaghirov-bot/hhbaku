// HH.BAKU - bütün tənzimləmələr bu fayldadır. TUTORIAL.txt faylına baxın.

// 1) Firebase Console -> Project settings -> Your apps -> Config
export const firebaseConfig = {
  apiKey: "AIzaSyDP1267d8uLEGl4lU43xHEZ0BtYyUQmW3I",
  authDomain: "hhbaku-fda38.firebaseapp.com",
  projectId: "hhbaku-fda38",
  appId: "1:44436854304:web:90ec5e26c3df5a61ee0e45"
};

// 2) Admin e-poçtu (Firebase Authentication-da yaratdığınız istifadəçi)
export const ADMIN_EMAIL = "hhbaku@gmail.com";

// 3) Cloudinary (şəkil yaddaşı)
export const CLOUD_NAME = "n0htkufr";
export const UPLOAD_PRESET = "wen8csod";

// 4) Əlaqə: Instagram adı (@ olmadan). WhatsApp nömrəsi ölkə kodu ilə, + və boşluqsuz (məs. 994501234567). Boş qoysanız yalnız Instagram işləyir.
export const INSTAGRAM = "hh.baku";
export const WHATSAPP = "+994552401070";

// 5) Məhsul limiti (0 = limitsiz) və valyuta
export const MAX_PRODUCTS = 50;
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
