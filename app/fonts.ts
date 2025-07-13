import {
  JetBrains_Mono,
  Noto_Sans,
  Noto_Sans_Display,
  Noto_Sans_Mono,
} from "next/font/google";

export const notoSans = Noto_Sans({
  variable: "--font-noto-sans",
  subsets: ["latin", "latin-ext"],
});

export const notoSansDisplay = Noto_Sans_Display({
  variable: "--font-noto-sans-display",
  subsets: ["latin", "latin-ext"],
});

export const notoSansMono = Noto_Sans_Mono({
  variable: "--font-noto-sans-mono",
  subsets: ["latin", "latin-ext"],
});

export const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin", "latin-ext"],
});
