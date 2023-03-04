import Link from "next/link";
import { useRouter } from "next/router";

export default function NavBar() {
  const router = useRouter();

  return (
    <nav>
      <ul>
        <li>
          <Link
            href="/"
            style={{ color: router.pathname === "/" ? "red" : "blue" }}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            href="/about"
            style={{ color: router.pathname === "/about" ? "red" : "blue" }}
          >
            About
          </Link>
        </li>
      </ul>
    </nav>
  );
}
