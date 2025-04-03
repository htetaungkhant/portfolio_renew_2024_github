import { MAIN_SECTIONS } from "@/lib/commonUtils";

import { PageFooter } from "../Common/PageFooter/PageFooter";

export default function PortfolioContainer() {
  const mapAllSections = () => {
    return MAIN_SECTIONS.map((section) =>
      section.component ? (
        <section.component
          sectionName={section.name}
          key={section.name}
          id={section.name}
        />
      ) : null
    );
  };

  return (
    <>
      {mapAllSections()}
      <PageFooter />
    </>
  );
}
