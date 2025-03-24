import Home from "@/components/PortfolioContainer/Home/Home";
import AboutMe from "@/components/PortfolioContainer/AboutMe/AboutMe";
import Resume from "@/components/PortfolioContainer/Resume/Resume";
import Projects from "@/components/PortfolioContainer/Projects/Projects";
import ContactMe from "@/components/PortfolioContainer/ContactMe/ContactMe";

export const TOTAL_SCREENS = [
  {
    screen_name: "Home",
    component: Home,
  },
  {
    screen_name: "AboutMe",
    component: AboutMe,
  },
  {
    screen_name: "Resume",
    component: Resume,
  },
  {
    screen_name: "Projects",
    component: Projects,
  },
  {
    screen_name: "ContactMe",
    component: ContactMe,
  },
  {
    screen_name: "Blog",
  },
];

export const GET_SCREEN_INDEX = (screen_name: string) => {
  if (!screen_name) return -1;

  for (let i = 0; i < TOTAL_SCREENS.length; i++) {
    if (TOTAL_SCREENS[i].screen_name === screen_name) return i;
  }

  return -1;
};
