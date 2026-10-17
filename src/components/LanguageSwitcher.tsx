"use client";

import Script from "next/script";
import { useEffect, useSyncExternalStore } from "react";
import { Languages } from "lucide-react";

const LANGS = [
  { code: "en", label: "EN" },
  { code: "hi", label: "हिंदी" },
  { code: "bn", label: "বাংলা" },
] as const;

type LangCode = (typeof LANGS)[number]["code"];

declare global {
  interface Window {
    googleTranslateElementInit?: () => void;
    google?: {
      translate: {
        TranslateElement: new (options: object, elementId: string) => unknown;
      };
    };
  }
}

// Google Translate swaps text nodes for <font> wrappers behind React's back, which makes
// React throw "removeChild"/"insertBefore" errors on the next re-render (e.g. opening the
// mobile menu). Make those two calls tolerant of nodes Google has already moved.
if (typeof window !== "undefined" && !(window as { __gtPatched?: boolean }).__gtPatched) {
  (window as { __gtPatched?: boolean }).__gtPatched = true;
  const originalRemoveChild = Node.prototype.removeChild;
  Node.prototype.removeChild = function <T extends Node>(this: Node, child: T): T {
    if (child.parentNode !== this) return child;
    return originalRemoveChild.call(this, child) as T;
  };
  const originalInsertBefore = Node.prototype.insertBefore;
  Node.prototype.insertBefore = function <T extends Node>(this: Node, node: T, ref: Node | null): T {
    if (ref && ref.parentNode !== this) return node;
    return originalInsertBefore.call(this, node, ref) as T;
  };
  // Defined before element.js loads so its ?cb= callback always finds it.
  window.googleTranslateElementInit = () => {
    if (!window.google?.translate) return;
    new window.google.translate.TranslateElement(
      { pageLanguage: "en", includedLanguages: "en,hi,bn", autoDisplay: false },
      "google_translate_element",
    );
  };
}

function readLang(): LangCode {
  const match = document.cookie.match(/(?:^|;\s*)googtrans=\/en\/(hi|bn)/);
  return (match?.[1] as LangCode) ?? "en";
}

function chooseLang(code: LangCode) {
  const host = window.location.hostname;
  // Google may have written the cookie host-only or on the domain; clear every variant.
  for (const domain of ["", `; domain=${host}`, `; domain=.${host}`]) {
    document.cookie = `googtrans=; expires=Thu, 01 Jan 1970 00:00:00 GMT; path=/${domain}`;
  }
  if (code !== "en") document.cookie = `googtrans=/en/${code}; path=/`;
  // Hard reload: a unique query param makes the browser fetch a fresh page instead of a cached one.
  const url = new URL(window.location.href);
  url.searchParams.set(RELOAD_PARAM, Date.now().toString());
  window.location.replace(url.toString());
}

const RELOAD_PARAM = "_lang";
const noSubscribe = () => () => {};

export default function LanguageSwitcher() {
  const lang = useSyncExternalStore<LangCode>(noSubscribe, readLang, () => "en");

  // Remove the cache-busting param from the address bar after the fresh load.
  useEffect(() => {
    const url = new URL(window.location.href);
    if (url.searchParams.has(RELOAD_PARAM)) {
      url.searchParams.delete(RELOAD_PARAM);
      window.history.replaceState(null, "", url.pathname + url.search + url.hash);
    }
  }, []);

  return (
    <div className="notranslate flex items-center gap-1" translate="no">
      <Languages size={12} className="text-[#6b7b8f]" aria-hidden />
      <div role="group" aria-label="Choose language" className="flex rounded-full border border-[#1e2738] overflow-hidden">
        {LANGS.map((l) => (
          <button
            key={l.code}
            type="button"
            lang={l.code}
            aria-pressed={lang === l.code}
            onClick={() => lang !== l.code && chooseLang(l.code)}
            className={`px-2 py-0.5 text-[11px] font-semibold transition-colors ${
              lang === l.code ? "bg-primary/90 text-white" : "text-[#8494a7] hover:text-primary"
            }`}
          >
            {l.label}
          </button>
        ))}
      </div>
      <div id="google_translate_element" hidden />
      <Script
        src="https://translate.google.com/translate_a/element.js?cb=googleTranslateElementInit"
        strategy="afterInteractive"
      />
    </div>
  );
}
