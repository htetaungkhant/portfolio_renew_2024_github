import { PageFooter } from "@/components/Common/PageFooter";
import { MAIN_SECTIONS } from "@/lib/commonUtils";

export default function SectionsContainer() {
  const mapAllSections = () => {
    return MAIN_SECTIONS.map((section) =>
      section.component ? (
        <section.component
          sectionName={section.name}
          key={section.name}
          id={section.id}
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
