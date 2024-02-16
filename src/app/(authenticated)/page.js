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


export default function Home() {
  const [foodName, setFoodName] = useState("")
  const [category, setCategory] = useState("")
  const [quantity, setQuantity] = useState("")
  const [preparationTime, setPreparationTime] = useState("")
  const [location, setLocation] = useState("")

  const submitForm = () => {
    if (foodName && category && quantity && preparationTime && location) {
      // api call to submit the form
    }else{
      alert("Enter all fields to submit the form")
    }
  }



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

      <Drawer>
        <DrawerTrigger>
        <button className=" w-[55px] h-[55px] flex justify-center items-center bg-[#224E38] rounded-md fixed bottom-20 right-4 z-10">
      <Plus size={24} color="#fff" />
    </button>
    </DrawerTrigger>

        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>
              <h2 className="text-[#1A1A1A] text-3xl font-semibold text-left">Add request</h2>
              <hr className="w-full h-[1px] mt-5"/>
            </DrawerTitle>
            <DrawerDescription>

            <div className=" flex flex-col gap-7 py-8">
              <InputBox placeholder="Food name" value={foodName} type="text"  onChange={(e) => setFoodName(e.target.value)}/>
              <InputBox placeholder="Category" value={category} type="text"  onChange={(e) => setCategory(e.target.value)}/>
              <InputBox placeholder="Quantity" value={quantity} type="number"  onChange={(e) => setQuantity(e.target.value)}/>
              <InputBox placeholder="Preparation time" value={preparationTime} type="text"  onChange={(e) => setPreparationTime(e.target.value)}/>
              <InputBox placeholder="Location" value={location} type="text"  onChange={(e) => setLocation(e.target.value)}/>
            </div>

            <button onClick={() => submitForm()} className='w-full rounded-md p-4 bg-[#224E38] text-white text-lg'>Confirm</button>

            </DrawerDescription>
          </DrawerHeader>

          <DrawerFooter>
            <DrawerClose>
              <button>Cancel</button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>



    </main>
  );
}
