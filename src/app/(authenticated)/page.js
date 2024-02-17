
import HomeOpenRequests from "@/components/home_open_requests";
import Insights from "@/components/insights";
import QuoteSection from "@/components/quote_section";
import SectionHeader from "@/components/section_header";

import RequestDrawer from "@/components/RequestDrawer";
import { auth } from "@/lib/auth";


export default async function Home() {

  const { user } = await auth()


  return (
    <main className=" px-6 mb-28">
      <div className="mt-5">
        <SectionHeader name="Requests" isSeeAll={true}/>
      </div>
      <HomeOpenRequests/>

      <div className="mt-10">
        <SectionHeader name="Insights" isSeeAll={true}/>
      </div>
      <div className="mt-5">
        <Insights uid={user?.id}/>
      </div>

      <div className="mt-10">
        <SectionHeader name="crumbsAI" isSeeAll={false}/>
      </div>
      <div className="mt-5">
        <QuoteSection/>
      </div>

      <RequestDrawer />



    </main>
  );
}
