import styles from "../styles/About.module.css";
import Link from "next/link";

export const metadata = {
  title: "SketchesXR | Yi-Wen Lin",
  description: "WebXR Sketches by Yi-Wen Lin",
  metadataBase: new URL("https://yiwenl.github.io/SketchesXR"),
  openGraph: {
    title: "SketchesXR | Yi-Wen Lin",
    type: "website",
    description: "WebXR Sketches by Yi-Wen Lin",
    url: "http://yiwenl.github.io/SketchesXR/",
    image: "/coverSketches.jpg",
    images: [
      {
        url: "https://yiwenl.github.io/SketchesXR/coverSketches.jpg",
      },
    ],
  },
  twitter: {
    card: "photo",
    creator: "@yiwenl",
    title: "SketchesXR | Yi-Wen Lin",
    description: "WebXR Sketches by Yi-Wen Lin",
    url: "http://yiwenl.github.io/SketchesXR/",
    image: "https://yiwenl.github.io/SketchesXR/coverSketches.jpg",
  },
  viewport: {
    width: "device-width",
    initialScale: 1,
    maximumScale: 1,
  },
};

export default function About() {
  return (
    <div>
      <Link href="/" as={`/`} className={styles.closeButton}>
        <svg width="512px" height="512px" viewBox="0 0 512 512">
          <path
            d="M437.5,386.6L306.9,256l130.6-130.6c14.1-14.1,14.1-36.8,0-50.9c-14.1-14.1-36.8-14.1-50.9,0L256,205.1L125.4,74.5
						c-14.1-14.1-36.8-14.1-50.9,0c-14.1,14.1-14.1,36.8,0,50.9L205.1,256L74.5,386.6c-14.1,14.1-14.1,36.8,0,50.9
						c14.1,14.1,36.8,14.1,50.9,0L256,306.9l130.6,130.6c14.1,14.1,36.8,14.1,50.9,0C451.5,423.4,451.5,400.6,437.5,386.6z"
          />
        </svg>
      </Link>

      <div className={styles.descContainer}>
        <p className="About-Desc">
          A place for my native WebXR sketches. Note currently these experiments
          only works on android phones with webXR enabled browsers, iOS mobile
          doesn't support native WebXR yet.
          <br />
          <br />
          Most of them are not optimised so it might take a bit of time to load,
          please be patient. The way it works are mostly similar : pointing the
          camera to the floor, looking around to let the WebXR API to detect the
          floor, then tap on the screen to start the experience.
          <br />
          <br />
          And apologies for some of the sketches might not work across different
          devices and platforms. This is more a playground for me to tryout
          ideas.
        </p>
        <p>
          <br />
        </p>
        <p className={styles.linkTitle}>Source code could be found here :</p>
        <a href="https://github.com/yiwenl/SketchesXR" target="_blank">
          <p className={styles.link}>https://github.com/yiwenl/SketchesXR</p>
        </a>
        <p>
          <br />
        </p>
        <p className={styles.linkTitle}>Built with my WebGL Tools : </p>
        <a href="https://github.com/yiwenl/Alfrid" target="_blank">
          <p className={styles.link}>https://github.com/yiwenl/Alfrid</p>
        </a>
        <p>
          <br />
        </p>
        <a href="https://wensday.co/" target="_blank" className={styles.link}>
          <p className={styles.link}>wensday.co</p>
        </a>
        <a href="https://twitter.com/yiwen_lin" target="_blank">
          <p className={styles.link}>@yiwen_lin</p>
        </a>
      </div>
    </div>
  );
}
