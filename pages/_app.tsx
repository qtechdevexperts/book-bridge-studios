import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import '@/styles/icomoon/style.css';
import '@/styles/globals.scss'
import type { AppProps } from 'next/app'
import { Poppins } from "next/font/google";
const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
});
export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <style lang="scss" jsx global>
        {`
        body {
          font-family: ${poppins.style.fontFamily};
        }
        * {
          font-family: ${poppins.style.fontFamily} !important;
        }
      `}
      </style>
      <div className="main_wrapper">
        <Component {...pageProps} />
      </div>
    </>
  )
}
