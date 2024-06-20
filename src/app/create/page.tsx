import PageWrapper from "@/components/page-wrapper";

import FormSection from "./form-section";
import { getGames } from "@/server/queries";

// export const dynamic = 'force-dynamic';

export default async function Page() {
  // TODO get most popular games first
  const games = await getGames(5);

  return (
    <PageWrapper>
      <FormSection />
    </PageWrapper>
  );
}
