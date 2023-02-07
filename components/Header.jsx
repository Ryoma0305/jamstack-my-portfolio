import Link from "next/link";

export function Header() {
  return (
    <header>
      <div className="header-content">
        <h1 className="header-content-logo robot">
          <Link href="/">RYOMA ARIMURA</Link>
        </h1>
        <nav className="header-content-menu robot">
          <ul>
            <li>
              <Link href="/#about">ABOUT</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </nav>
      </div>
      <div className="nav-drawer inner">
        <input id="nav-input" type="checkbox" className="nav-unshown" />
        <label id="nav-open" htmlFor="nav-input">
          <span></span>
        </label>
        <label
          className="nav-unshown"
          id="nav-close"
          htmlFor="nav-input"
        ></label>
        <h1 className="header-content-logo robot">
          <Link href="/">RYOMA ARIMURA</Link>
        </h1>
        <div id="nav-content">
          <ul className="robot">
            <li>
              <Link href="/#about">ABOUT</Link>
            </li>
            <li>
              <Link href="/blog">BLOG</Link>
            </li>
            <li>
              <Link href="/contact">CONTACT</Link>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
