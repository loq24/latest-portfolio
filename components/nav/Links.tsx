"use client";

import gsap from "gsap";
import { usePathname } from "next/navigation";

const links = ["about", "projects", "contact"];

type LinksType = {
  liClassName: string;
  anchorClassName: string;
};

export default function Links({ liClassName, anchorClassName }: LinksType) {
  const pathname = usePathname();

  const scrollToSection = (
    e: React.MouseEvent<HTMLAnchorElement> | undefined,
    section: string
  ) => {
    e?.preventDefault();

    gsap.to(window, {
      duration: 1,
      scrollTo: { y: `#${section}` },
    });
  };

  return links.map((link: string) => {
    if (pathname === "/projects" && link != "contact") return;

    return (
      <li key={link} className={liClassName}>
        <a
          className={anchorClassName}
          onClick={(e) => scrollToSection(e, link)}
        >
          {link}
        </a>
      </li>
    );
  });
}
