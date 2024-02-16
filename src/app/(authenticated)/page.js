'use client'

import AddButton from "@/components/add_button";
import HomeOpenRequests from "@/components/home_open_requests";
import Insights from "@/components/insights";
import QuoteSection from "@/components/quote_section";
import SectionHeader from "@/components/section_header";
import { Plus } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import InputBox from "@/components/input_box";
import { useState } from "react";
import RequestDrawer from "@/components/RequestDrawer";


export default function Home() {


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
        <Insights/>
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
