"use client";

import { useTheme } from "next-themes";
import { useEffect } from "react";

export function FaviconManager() {
  const { resolvedTheme } = useTheme();

  useEffect(() => {
    // Aguarda o tema ser resolvido
    if (!resolvedTheme) return;

    const isDark = resolvedTheme === "dark";
    const faviconPath = isDark ? "/favicon_dark.png" : "/favicon_light.png";
    const icoPath = isDark ? "/favicon_dark.ico" : "/favicon_light.ico";

    // Remove todos os favicons existentes
    const existingFavicons = document.querySelectorAll(
      'link[rel="icon"], link[rel="shortcut icon"], link[rel="apple-touch-icon"]'
    );
    existingFavicons.forEach((favicon) => favicon.remove());

    // Adiciona o favicon .ico (para compatibilidade)
    const icoFavicon = document.createElement("link");
    icoFavicon.rel = "shortcut icon";
    icoFavicon.type = "image/x-icon";
    icoFavicon.href = `${icoPath}?v=${Date.now()}`; // Cache bust
    document.head.appendChild(icoFavicon);

    // Adiciona o favicon .png (melhor qualidade)
    const pngFavicon = document.createElement("link");
    pngFavicon.rel = "icon";
    pngFavicon.type = "image/png";
    pngFavicon.href = `${faviconPath}?v=${Date.now()}`; // Cache bust
    document.head.appendChild(pngFavicon);

    // Adiciona apple-touch-icon
    const appleTouchIcon = document.createElement("link");
    appleTouchIcon.rel = "apple-touch-icon";
    appleTouchIcon.href = `${faviconPath}?v=${Date.now()}`;
    document.head.appendChild(appleTouchIcon);
  }, [resolvedTheme]);

  return null;
}
