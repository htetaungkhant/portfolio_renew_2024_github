import AboutMe from "@/components/MainSections/AboutMe";
import ContactMe from "@/components/MainSections/ContactMe";
import Home from "@/components/MainSections/Home";
import Projects from "@/components/MainSections/Projects";
import Resume from "@/components/MainSections/Resume";

export const MAIN_SECTIONS = [
  {
    id: "home",
    name: "Home",
    component: Home,
  },
  {
    id: "about-me",
    name: "AboutMe",
    component: AboutMe,
  },
  {
    id: "resume",
    name: "Resume",
    component: Resume,
  },
  {
    id: "projects",
    name: "Projects",
    component: Projects,
  },
  {
    id: "contact-me",
    name: "ContactMe",
    component: ContactMe,
  },
];

export const HEADER_MENU = [
  ...MAIN_SECTIONS.map((section) => ({
    name: section.name,
    link: `#${section.id}`,
  })),
  {
    name: "Blog",
    link: "https://medium.com/@chitkogyi19950",
  },
];

export const GET_SECTION_INDEX = (name: string) => {
  if (!name) return -1;

  for (let i = 0; i < MAIN_SECTIONS.length; i++) {
    if (MAIN_SECTIONS[i].name === name) return i;
  }

  return -1;
};
