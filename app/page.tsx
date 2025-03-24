import { ToastContainer } from "react-toastify";

import PortfolioContainer from "@/components/PortfolioContainer/PortfolioContainer";

export default function Home() {
  return (
    <main>
      <ToastContainer />
      <PortfolioContainer />
    </main>
  );
}
