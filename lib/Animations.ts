export default class Animations {
  /* SINGLETON CLASS INSTANCE */
  static animations = new Animations();

  fadeInSection = (name: string) => {
    let section = document.getElementById(name);
    if (!name || !section) return;

    section.style.opacity = "5";
    section.style.transform = "translateY(1px)";
  };
}
