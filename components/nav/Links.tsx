"use client";

import gsap from "gsap";

const links = ["about", "projects", "contact"];

type LinksType = {
  liClassName: string;
  anchorClassName: string;
};

export default function Links({ liClassName, anchorClassName }: LinksType) {
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
