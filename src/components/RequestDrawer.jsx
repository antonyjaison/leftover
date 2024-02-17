"use client";

import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "./ui/drawer";
import InputBox from "./input_box";
import { useForm } from "react-hook-form";
import { Plus } from "lucide-react";
import { toast } from "sonner";
import { requestSchema } from "@/lib/validation";
import axios from "axios";
import { useRef } from "react";
import { revalidatePath } from "next/cache";

function RequestDrawer() {
  const closeBtnRef = useRef(null);
  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      foodName: "",
      category: "",
      quantity: 0,
      location: "",
    },
  });

  const submitForm = async (data) => {
    console.log(data);
    const parsedData = requestSchema.safeParse(data);
    if (!parsedData.success) {
      console.log(parsedData.error);
      return;
    }

    let refresh = false

    try {
      const resCoords = await axios.post("/api/location/coords", {
        address: parsedData.data.location,
      });
      try {
        const res = await axios.post("/api/food-request", {
          ...parsedData.data,
          coord: {
            lat: resCoords.data.lat,
            lon: resCoords.data.lon,
          },
        });
        reset();
        closeBtnRef.current?.click();

        toast.success("Request added successfully");
        console.log(res.data);
        refresh = true
      } catch (e) {
        toast.error(e.message.data?.error);
      }
    } catch (e) {
      toast.error(e.response.data?.error);
      return;
    }

    if (refresh) {
      window.location.reload()
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

          <form onSubmit={handleSubmit(submitForm)}>
            <div className="flex flex-col gap-7 py-8">
              <InputBox
                placeholder="Food name"
                type="text"
                {...register("foodName", { required: true })}
              />
              <InputBox
                placeholder="Category"
                type="text"
                {...register("category", { required: true })}
              />
              <InputBox
                placeholder="Quantity"
                type="number"
                inputMode="numeric"
                {...register("quantity", { required: true })}
              />
              <InputBox
                placeholder="Location"
                type="text"
                {...register("location", { required: true })}
              />
            </div>

            <button
              onClick={handleSubmit(submitForm)}
              className="w-full rounded-md p-4 bg-[#224E38] text-white text-lg"
            >
              Confirm
            </button>
          </form>
        </DrawerHeader>

        <DrawerFooter>
          <DrawerClose ref={closeBtnRef}>Cancel</DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

export default RequestDrawer;
