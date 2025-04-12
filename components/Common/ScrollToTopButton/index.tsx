"use client";

import { useRouter } from 'next/navigation';

import { scrollToTop } from "@/lib/utils";

import classes from "./index.module.scss";

interface ScrollToTopButtonProps {
  backToRootUrl?: boolean;
}

export default function ScrollToTopButton({ backToRootUrl = false }: ScrollToTopButtonProps) {
  const router = useRouter();
  const handleClick = () => {
    if (backToRootUrl) {
      router.push("/", { scroll: false });
    }
    scrollToTop();
  };

  return (
    <div className={classes["scroll-container"]}>
      <button
        className={classes["btn-scroll"]}
        onClick={handleClick}
      >
        <i className="fa fa-arrow-up"></i>
      </button>
    </div>
  );
}
