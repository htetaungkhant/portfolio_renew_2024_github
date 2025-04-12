import React, { AnchorHTMLAttributes, MouseEvent } from 'react';
import Link, { LinkProps } from 'next/link';
import { useRouter } from 'next/navigation';

type ScrollLinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & LinkProps & {
  offset?: number;
};

const ScrollLink = ({ offset = 0, ...rest }: ScrollLinkProps) => {
  const router = useRouter();

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    if (rest.href === "/") {
      e.preventDefault();
      router.push(rest.href, { scroll: false }); // Prevent double scroll
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    else if (typeof rest.href === 'string' && rest.href.startsWith('#')) {
      e.preventDefault();
      router.push(rest.href, { scroll: false }); // Prevent double scroll
      const id = rest.href.replace('#', '');
      const el = document.getElementById(id);
      if (el) {
        if (typeof offset === 'number' && offset !== 0) {
            const top = el.getBoundingClientRect().top + window.pageYOffset + offset;
            window.scrollTo({ top, behavior: 'smooth' });
        }
        else {
            el.scrollIntoView({ behavior: 'smooth' });
        }
      }
    }

    if (rest.onClick) {
      rest.onClick(e);
    }
  };

  return (
    <Link
      {...rest}
      onClick={handleClick}
    />
  );
};

export default ScrollLink;
