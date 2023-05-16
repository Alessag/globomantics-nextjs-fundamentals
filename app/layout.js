import { Open_Sans } from "@next/font/google";
import Link from "next/link";
import styles from "./rootStyle.module.css";
import "./global.css";

const openSans = Open_Sans({
  subsets: ["latin"],
  weights: [400],
});

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={openSans.className}>
      <body>
        <header>
          <h3>
            <Link className={styles.homeLink} href="/home">
              Globomantics
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href="/blog">
              Blog
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href="/conference">
              Conference
            </Link>
          </h3>
          <h3>
            <Link className={styles.menuBarLink} href="/settings">
              Settings
            </Link>
          </h3>
        </header>
        {children}
      </body>
    </html>
  );
}
