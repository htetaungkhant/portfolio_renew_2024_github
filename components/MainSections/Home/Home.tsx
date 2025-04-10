import Footer from "./Footer/Footer";
import Profile from "./Profile/Profile";
import classes from "./Home.module.scss";

export default function Home(props: { id: string; sectionName?: string }) {
  return (
    <section className={classes["home-container"]} id={props.id || ""}>
      <Profile />
      <Footer />
    </section>
  );
}
