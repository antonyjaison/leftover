import React, { useEffect, useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import InputBox from "./input_box";
import { Plus } from "lucide-react";

function RequestDrawer() {
  const [foodName, setFoodName] = useState("");
  const [category, setCategory] = useState("");
  const [quantity, setQuantity] = useState("");
  const [preparationTime, setPreparationTime] = useState("");
  const [location, setLocation] = useState("");

  const submitForm = () => {
    if (foodName && category && quantity && preparationTime && location) {
      // api call to submit the form
    } else {
      alert("Enter all fields to submit the form");
    }
  };
  return (
    <Drawer>
      <DrawerTrigger className=" w-[55px] h-[55px] flex justify-center items-center bg-[#224E38] rounded-md fixed bottom-20 right-4 z-10">
        <Plus size={24} color="#fff" />
      </DrawerTrigger>

      <DrawerContent>
        <DrawerHeader>
          <DrawerTitle className="text-[#1A1A1A] text-3xl font-semibold text-left">
            Add request
            <hr className="w-full h-[1px] mt-5" />
          </DrawerTitle>

            <div className="flex flex-col gap-7 py-8">
              <InputBox
                placeholder="Food name"
                value={foodName}
                type="text"
                onChange={(e) => setFoodName(e.target.value)}
              />
              <InputBox
                placeholder="Category"
                value={category}
                type="text"
                onChange={(e) => setCategory(e.target.value)}
              />
              <InputBox
                placeholder="Quantity"
                value={quantity}
                type="number"
                onChange={(e) => setQuantity(e.target.value)}
              />
              <InputBox
                placeholder="Preparation time"
                value={preparationTime}
                type="text"
                onChange={(e) => setPreparationTime(e.target.value)}
              />
              <InputBox
                placeholder="Location"
                value={location}
                type="text"
                onChange={(e) => setLocation(e.target.value)}
              />
            </div>

            <button
              onClick={() => submitForm()}
              className="w-full rounded-md p-4 bg-[#224E38] text-white text-lg"
            >
              Confirm
            </button>
        </DrawerHeader>

        <DrawerFooter>
          <DrawerClose>
            Cancel
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default RequestDrawer;
