import { ToastContainer } from "react-toastify";

import PageHeader from "@/components/Common/PageHeader";
import SectionsContainer from "@/components/MainSections/SectionsContainer";

export default function Home() {
  return (
    <main>
      <ToastContainer />
      <PageHeader />
      <SectionsContainer />
    </main>
  );
}
