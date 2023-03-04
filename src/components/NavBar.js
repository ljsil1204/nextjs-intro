import Link from "next/link";
import { useRouter } from "next/router";
import styles from "@/components/NavBar.module.css";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link
            href="/"
            className={`${styles.link} ${
              router.pathname === "/" ? styles.active : ""
            }`}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            className={[
              styles.link,
              router.pathname === "/about" ? styles.active : "",
            ].join(" ")}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
