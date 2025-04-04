import Profile from "./Profile/Profile";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";

import classes from "./Home.module.scss";

export default function Home(props: { id: string; sectionName?: string }) {
  return (
    <section className={classes["home-container"]} id={props.id || ""}>
      <Header />
      <Profile />
      <Footer />
    </section>
  );
}
