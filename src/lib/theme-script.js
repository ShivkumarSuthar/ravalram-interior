// Inline script that runs in <head> before first paint (no flash of the wrong theme or loader):
//  1. applies the saved theme ("light" | "dark" | "system", default system)
//  2. marks whether the intro loader should play: html[data-loader="skip"] after the first visit in a
//     session, and sets window.__sutharPreloading so the hero knows to wait for the loader.
// ThemeToggle and SiteLoader keep these in sync afterwards.
export const THEME_STORAGE_KEY = "theme";
export const LOADER_KEY = "suthar_preloaded";

export const headScript = `(function(){var r=document.documentElement;try{var t=localStorage.getItem("${THEME_STORAGE_KEY}")||"system";var d=t==="dark"||(t==="system"&&window.matchMedia("(prefers-color-scheme: dark)").matches);r.classList.toggle("dark",d);r.dataset.theme=t;}catch(e){}try{var s=sessionStorage.getItem("${LOADER_KEY}");r.dataset.loader=s?"skip":"show";window.__sutharPreloading=!s;}catch(e){}})();`;
