import Footer from "./Footer";
import Profile from "./Profile";
import classes from "./index.module.scss";

export default function Home(props: { id: string; sectionName?: string }) {
  return (
    <section className={classes["home-container"]} id={props.id || ""}>
      <Profile />
      <Footer />
    </section>
  );
}
