import { Subject } from "rxjs";

import { MAIN_SECTIONS } from "./commonUtils";

export default class ScrollService {
  /* SINGLETON CLASS INSTANCE */
  static scrollHandler = new ScrollService();

  /* Lets instantiate the subject BROADCASTERS */
  static currentSectionBroadcaster = new Subject();
  static currentSectionFadeIn = new Subject();

  //lets have a constructor here and add the scroll event to window
  constructor() {
    /* ADD SCROLL EVENT TO WINDOW */
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", this.checkCurrentSectionUnderViewport);
    }
  }

  /* SCROLL TO HIRE ME / CONTACT ME SCREEN */
  scrollToHireMe = () => {
    let contactMeSection = document.getElementById("ContactMe");
    if (!contactMeSection) return;

    contactMeSection.scrollIntoView({ behavior: "smooth" });
  };
  scrollToHome = () => {
    let homeSection = document.getElementById("Home");
    if (!homeSection) return;

    homeSection.scrollIntoView({ behavior: "smooth" });
  };

  /* CHECK IF ELEMENT IS IN VIEW .this simply means if the document appears fully on the screen or not */
  isElementInView = (elem: HTMLElement, type: string) => {
    let rec = elem.getBoundingClientRect();
    //this method returns a DOMRect object providing information about the size of an element and its position relative to the viewport.
    // the view port  refers to the part of the document you're viewing which is currently visible in its window
    let elementTop = rec.top;
    let elemBottom = rec.bottom;

    /* when the element is Partially Visible */
    let partiallyVisible = elementTop < window.innerHeight && elemBottom >= 0;

    /* Completely Visible */
    let completelyVisible = elementTop >= 0 && elemBottom <= window.innerHeight;

    switch (type) {
      case "partial":
        return partiallyVisible;

      case "complete":
        return completelyVisible;

      default:
        return false;
    }
  };

  /* CHECK THE SCREEN THATS CURRENTLY UNDER VIEWPORT */
  // which means the screen that is displayed fully
  checkCurrentSectionUnderViewport = (event: Event) => {
    if (!event || Object.keys(event).length < 1) return;

    for (const section of MAIN_SECTIONS) {
      const sectionFromDOM = document.getElementById(section.name);
      if (!sectionFromDOM) continue;

      const fullyVisible = this.isElementInView(sectionFromDOM, "complete");
      const partiallyVisible = this.isElementInView(sectionFromDOM, "partial");

      if (fullyVisible || partiallyVisible) {
        if (
          partiallyVisible &&
          !(section as { alreadyRendered?: boolean }).alreadyRendered
        ) {
          // BROADCAST FADE IN EFFECT
          ScrollService.currentSectionFadeIn.next({
            fadeInSection: section.name,
          });
          (section as { alreadyRendered?: boolean }).alreadyRendered = true;
          break;
        }

        if (fullyVisible) {
          // BROADCAST SCREEN NAME
          ScrollService.currentSectionBroadcaster.next({
            sectionInView: section.name,
          });
          break;
        }
      }
    }
  };
}
