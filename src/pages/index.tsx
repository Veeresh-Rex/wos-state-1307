import AlliancePage from "./alliance";
import Homepage from "./homepage";
import Members from "./members";
import StateOverview from "./stateoverview";
import StateRules from "./staterules";

import DefaultLayout from "@/layouts/default";

export default function IndexPage() {
  return (
    <DefaultLayout>
      <Homepage />
      <StateOverview />
      <StateRules />
      <AlliancePage />
      <Members />
    </DefaultLayout>
  );
}
