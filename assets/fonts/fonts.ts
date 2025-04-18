import { Poppins } from "next/font/google";

export const FontPoppins = Poppins({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: '--font-poppins',
  display: "swap",
});
