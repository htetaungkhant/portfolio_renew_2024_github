import { TOTAL_SCREENS } from "@/lib/commonUtils";

import { PageFooter } from "../Common/PageFooter/PageFooter";

export default function PortfolioContainer() {
  const mapAllScreens = () => {
    return TOTAL_SCREENS.map((screen) =>
      screen.component ? (
        <screen.component
          screenName={screen.screen_name}
          key={screen.screen_name}
          id={screen.screen_name}
        />
      ) : null
    );
  };

  return (
    <div>
      {mapAllScreens()}
      <PageFooter />
    </div>
  );
}
