// Local CDN-hosted assets — luxury models + products (bundled, fast, consistent)
import m01 from "@/assets/modaic/01_luxury_model_dark_editorial.png.asset.json";
import m02 from "@/assets/modaic/02_luxury_model_purple_editorial.png.asset.json";
import m03 from "@/assets/modaic/03_luxury_model_cinematic_purple.png.asset.json";
import m04 from "@/assets/modaic/04_luxury_model_monochrome_editorial.png.asset.json";
import m05 from "@/assets/modaic/05_luxury_model_satin_neon.png.asset.json";
import p06 from "@/assets/modaic/06_luxury_product_handbag.png.asset.json";
import p07 from "@/assets/modaic/07_luxury_product_sneaker.png.asset.json";
import p08 from "@/assets/modaic/08_luxury_product_perfume.png.asset.json";
import p09 from "@/assets/modaic/09_luxury_product_watch.png.asset.json";
import p10 from "@/assets/modaic/10_luxury_product_sunglasses.png.asset.json";
import productVideoAsset from "@/assets/modaic/product_video.mp4.asset.json";
import vtonVideoV2 from "@/assets/modaic/vton_v2.mp4.asset.json";
import editorVideoAsset from "@/assets/modaic/editor_video.mp4.asset.json";
import textToVideoV2 from "@/assets/modaic/text_to_video_v2.mp4.asset.json";
import removeBgVideoAsset from "@/assets/modaic/remove_bg_video.mp4.asset.json";
import upscaleVideoAsset from "@/assets/modaic/upscale.mp4.asset.json";
import handbagNoBg from "@/assets/modaic/black_handbag_cutout.png.asset.json";
import handbagScene from "@/assets/modaic/black_handbag_scene.png.asset.json";
import sneakerNoBg from "@/assets/modaic/sneaker_nobg.png.asset.json";
import perfumeNoBg from "@/assets/modaic/modaic_perfume_nobg.png.asset.json";
import watchNoBg from "@/assets/modaic/modaic_watch_nobg.png.asset.json";
import sunglassesNoBg from "@/assets/modaic/modaic_sunglasses_nobg.png.asset.json";

// Reference uploaded photographs
import refWatch from "@/assets/modaic/ref_081ac1cd-7afe-4c5e-83fc-cffd4a132658.png.asset.json";
import refSatinWoman from "@/assets/modaic/ref_40916d80-9aad-46af-9725-0a502ac3663f.png.asset.json";
import refTuxMan from "@/assets/modaic/ref_48470567-643d-4c8e-b79d-880309298cb9.png.asset.json";
import refPerfume from "@/assets/modaic/ref_4ee6f5e4-b34f-4bc4-b0c9-a00da0b0f77c.png.asset.json";
import refLeatherWoman from "@/assets/modaic/ref_6e4a6fea-296f-4c22-8ec7-0aa40802784a.png.asset.json";
import refHalterWoman from "@/assets/modaic/ref_6ea65359-1bde-40d9-830c-5271c548a1e0.png.asset.json";
import refHandbag from "@/assets/modaic/ref_ac1ee2de-6da9-4912-8763-6e5c8d08a7fa.png.asset.json";
import refExtra from "@/assets/modaic/ref_5562d3e0-6585-47a9-97d7-e3800a1604ab.png.asset.json";
import refExtra2 from "@/assets/modaic/ref_ce65db30-6bf6-4d73-97cb-6d7fce944793.png.asset.json";
import logoAsset from "@/assets/modaic/modaic_logo_v2.png.asset.json";

export const modaicLogo = "/modaic_logo_new.png";

// Hero overlapping image stack (legacy — kept for back-compat references)
export const heroStack = {
  primary: refSatinWoman.url,
  secondary: refTuxMan.url,
  background: refLeatherWoman.url,
  accent: refHalterWoman.url,
};

// ---------- HERO 20 UNIQUE IMAGES ----------
const heroRaw = [
  refSatinWoman.url, refTuxMan.url, refLeatherWoman.url, refHalterWoman.url,
  refHandbag.url, refPerfume.url, refWatch.url, refExtra.url, refExtra2.url,
  m01.url, m02.url, m03.url, m04.url, m05.url,
  p06.url, p07.url, p08.url, p09.url, p10.url,
  handbagNoBg.url, perfumeNoBg.url, watchNoBg.url, sunglassesNoBg.url, sneakerNoBg.url,
];
export const heroImagesUnique = Array.from(new Set(heroRaw)).slice(0, 20);

// ---------- BAG ASSET (same bag used with / without background) ----------
export const bagAsset = {
  id: "modaic-handbag",
  withBackground: "/handbag_original.png",
  noBackground: "/handbag_bg_removed.png",
};

// Paired with-bg / no-bg product set for the Remove Background section.
const removeBgAll = [
  { id: "perfume", name: "Purple Perfume", type: "fragrance", bg: refPerfume.url, nobg: perfumeNoBg.url },
  { id: "watch", name: "Chronograph Watch", type: "watch", bg: refWatch.url, nobg: watchNoBg.url },
];
export const removeBgPairs = removeBgAll;

// ---------- PRODUCT CAROUSEL 12 UNIQUE ----------
const productRaw = [
  p06.url, p07.url, p08.url, p09.url, p10.url,
  refHandbag.url, refWatch.url, refPerfume.url,
  m01.url, m02.url, m03.url, m04.url, m05.url,
  refSatinWoman.url, refTuxMan.url, refHalterWoman.url,
];
export const productGalleryUnique = Array.from(new Set(productRaw)).slice(0, 12);

// Upscale grid
export const upscaleImages = [
  { id: "u1", name: "Editorial Dark", url: m01.url },
  { id: "u2", name: "Purple Editorial", url: m02.url },
  { id: "u3", name: "Cinematic Purple", url: m03.url },
  { id: "u4", name: "Monochrome", url: m04.url },
  { id: "u5", name: "Satin Neon", url: m05.url },
  { id: "u6", name: "Leather Handbag", url: refHandbag.url },
  { id: "u7", name: "Chronograph Watch", url: refWatch.url },
  { id: "u8", name: "Purple Perfume", url: refPerfume.url },
  { id: "u9", name: "Satin Gown", url: refSatinWoman.url },
  { id: "u10", name: "Tux Portrait", url: refTuxMan.url },
  { id: "u11", name: "Leather Jacket", url: refLeatherWoman.url },
  { id: "u12", name: "Halter Gown", url: refHalterWoman.url },
];

export const productToVideoSrc = productVideoAsset.url;

const P = {
  jacketBlack: m01.url, jacketBrown: m04.url,
  sneakerWhite: p07.url, sneakerHigh: p07.url,
  bagBlack: p06.url, bagLuxury: bagAsset.withBackground, bagBrown: p06.url,
  perfumeGold: p08.url, perfumeAmber: p08.url,
  watchSilver: p09.url, watchGold: p09.url,
  sunglassesGold: p10.url, sunglassesBlack: p10.url,
  shoesHeels: p07.url,
};

const M = {
  modelEditorial1: m01.url, modelEditorial2: m04.url,
  modelStreet: m02.url, modelHighFashion: m03.url,
  modelStudio: m05.url, modelBeauty: m05.url,
};

export const modules = [
  { n: "01", tag: "IMAGE · GENERATION", tagline: "Studio output. Zero studio.", title: "AI Image Generation", desc: "Transform a brief into campaign-ready fashion imagery. No sets, no photographers. MODAIC renders studio-quality visuals at the speed of thought — and the scale of a production house.", img: M.modelEditorial1 },
  { n: "02", tag: "VTON · COMMERCE", tagline: "Every garment. Every model. Instantly.", title: "Virtual Try-On", desc: "Dress any product or garment onto a chosen model digitally, precisely, and commercially. Eliminate sampling costs and production delays with pixel-perfect virtual styling.", img: M.modelStudio, video: vtonVideoV2.url, videoCaption: "Virtual Try-On Preview" },
  { n: "03", tag: "VIDEO · ANIMATION", tagline: "Give your catalogue a heartbeat.", title: "Product Image to Video", desc: "Turn static product photography into cinematic brand content in seconds. From still to scroll-stopping — MODAIC brings your inventory to life with motion that converts.", img: P.sneakerHigh, video: productVideoAsset.url },
  { n: "04", tag: "CATALOG · AUTOMATION", tagline: "From garment to channel. One pipeline.", title: "Create Catalog", desc: "Upload a garment, select your channel — Amazon, Myntra, Shopify — and receive perfectly formatted marketplace-ready catalogue images. End-to-end. Automated. Accurate.", img: P.jacketBlack },
  { n: "05", tag: "EDIT · RETOUCH", tagline: "Edit with language, not layers.", title: "AI Image Editor", desc: "Describe the change. Watch it happen. Professional-grade retouching and creative direction — powered by natural language. No Photoshop. No hours. Just precision at scale.", img: M.modelBeauty, video: editorVideoAsset.url, videoCaption: "AI Image Editor Preview" },
  { n: "06", tag: "ISOLATION · PROCESSING", tagline: "Clean. Precise. Instant.", title: "Remove Background", desc: "Isolate any product from any background with sub-pixel accuracy — at any volume, any format, any deadline. The foundation of great product photography, fully automated.", img: P.bagLuxury, video: removeBgVideoAsset.url },
  { n: "07", tag: "UPSCALE · ENHANCE", tagline: "Restore resolution. Recover detail.", title: "Upscale Image", desc: "Transform low-resolution assets into print-ready quality imagery without reshooting. MODAIC recovers texture, sharpness, and detail that compression erased.", img: P.watchGold, video: upscaleVideoAsset.url, videoCaption: "Upscale Image Preview" },
  { n: "08", tag: "VIDEO · GENERATION", tagline: "From copy to film. Instantly.", title: "Text to Video", desc: "Describe your creative vision in plain language. MODAIC renders brand-accurate, campaign-ready video content in seconds. The future of content production starts with a sentence.", img: M.modelHighFashion, video: textToVideoV2.url, videoCaption: "Text to Video Preview" },
];

export const features = [
  ["Batch Processing", "Process hundreds of garments simultaneously. Upload a ZIP, get a ZIP back — fully transformed, channel-ready, in minutes."],
  ["Style Transfer", "Apply the aesthetic of one image to another. Transfer mood, lighting, and visual language across your entire catalogue instantly."],
  ["Multi-Model Casting", "Shoot one garment on 10 different models without a single booking. Represent every body, every skin tone, every market."],
  ["Color Variant Generator", "Expand a single product into every colorway automatically. White, black, red, navy — generated in seconds, not weeks."],
  ["Marketplace Formatter", "Auto-format images to the exact specifications of Amazon, Myntra, Flipkart, Shopify, and 20+ other platforms simultaneously."],
  ["AI Studio Backgrounds", "Replace any background with photorealistic studio environments — seamless white, gradient, lifestyle, architectural — at scale."],
] as const;

export const heroProducts = heroImagesUnique;
export const galleryImages = productGalleryUnique;

export const stats = [
  { n: 8, suffix: "", label: "AI Modules" },
  { n: 10, suffix: "×", label: "Faster Production" },
  { n: 0, suffix: "", label: "Studio Required" },
  { n: 100, suffix: "%", label: "Automated Pipeline" },
];

export const testimonials = [
  { q: "MODAIC cut our time-to-publish from 3 weeks to 3 days.", a: "Head of E-commerce, D2C Fashion Brand" },
];

export const marketplaces = ["AMAZON READY", "MYNTRA READY", "SHOPIFY READY", "FLIPKART READY", "NYKAA READY", "MEESHO READY", "AJIO READY", "TATA CLIQ READY"];
export const marqueeTags = ["PRODUCT IMAGES", "CATALOG OUTPUTS", "STUDIO BACKGROUNDS", "MARKETPLACE FORMATS", "PRINT READY EXPORTS"];

export const removeBgProducts = removeBgPairs;
export const removeBgBefore = removeBgPairs[0].bg;
export const removeBgAfter = removeBgPairs[0].nobg;

export const catalogChannels = [
  { name: "Amazon Ready", img: P.jacketBlack },
  { name: "Myntra Ready", img: M.modelStudio },
  { name: "Shopify Ready", img: bagAsset.withBackground },
];

export const catalogUploadImg = P.jacketBlack;
export const upscaleBefore = P.watchGold;
export const upscaleAfter = P.watchGold;

const u = (src: string) => src;
export { u };
