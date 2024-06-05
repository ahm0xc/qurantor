import Image from "next/image";

import BackgroundImage from "~/assets/Background main.png";

import "~/styles/globals.css";
import "~/styles/docs.css";

export default function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Image
        src={BackgroundImage}
        style={{
          pointerEvents: "none",
          position: "fixed",
          top: 0,
          right: 0,
          width: "75%",
          height: "75%",
          zIndex: -1,
        }}
        alt=""
      />
      <Component {...pageProps} />
    </div>
  );
}
