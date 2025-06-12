import AlliancePage from "./alliance";
import Homepage from "./homepage";
import StateOverview from "./stateoverview";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Homepage />
      <StateOverview />
      <AlliancePage />
    </DefaultLayout>
  );
}
