import { Roboto, Sora, Tilt_Warp } from "next/font/google";
import localFont from "next/font/local";

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const corsiva = localFont({
  src: "../../public/assets/Monotype Corsiva.ttf",
});

export const sora = Sora({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700"],
});

export const tiltWarp = Tilt_Warp({
  subsets: ["latin"],
  weight: ["400"],
});
