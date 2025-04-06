import AboutMe from "@/components/MainSections/AboutMe/AboutMe";
import ContactMe from "@/components/MainSections/ContactMe/ContactMe";
import Home from "@/components/MainSections/Home/Home";
import Projects from "@/components/MainSections/Projects/Projects";
import Resume from "@/components/MainSections/Resume/Resume";

export const MAIN_SECTIONS = [
  {
    name: "Home",
    component: Home,
  },
  {
    name: "AboutMe",
    component: AboutMe,
  },
  {
    name: "Resume",
    component: Resume,
  },
  {
    name: "Projects",
    component: Projects,
  },
  {
    name: "ContactMe",
    component: ContactMe,
  },
];

export const HEADER_MENU = [
  ...MAIN_SECTIONS.map((section) => ({
    name: section.name,
  })),
  {
    name: "Blog",
  },
];

export const GET_SECTION_INDEX = (name: string) => {
  if (!name) return -1;

  for (let i = 0; i < MAIN_SECTIONS.length; i++) {
    if (MAIN_SECTIONS[i].name === name) return i;
  }

  return -1;
};
