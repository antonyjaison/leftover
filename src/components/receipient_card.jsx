"use client"
import axios from "axios";
import { LocateFixed, Check } from "lucide-react";

const Receipientcard = ({ name, createdAt, quantity, id}) => {
  async function handleConfirmPickup() {
    try{
      const res = await axios.post("/api/pickup", {
        requestId: id
      })

      window.location.reload()
    }catch(e){
      console.log(e)
    }
  }
  return (
    <div className="flex flex-col rounded-lg p-5 mt-5" style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
    >
      <div
        className=" flex justify-between w-full items-center"
      >
        <div className="">
          <div>
            <h3 className="font-medium text-lg text-left">{name}</h3>
            <p className="text-[#8E8E8E] text-xs">Prepared on : {createdAt}</p>
          </div>
          <div>
            <div>
              <p className=" mt-2 text-[#7A7A7A] font-normal text-xs">
                Portions
              </p>
              <h3 className="font-medium text-sm text-left">{quantity} kg</h3>
            </div>
          </div>
        </div>

        <div className="flex flex-col items-end relative">
          <img
            className=" w-[100px] object-cover rounded-md"
            src="/images/map.png"
            alt="map"
          />
          <button className="rounded-md bg-[#224E38] text-white text-xs flex items-center p-2 absolute bottom-2 right-2">
            <LocateFixed size={20} />
          </button>
        </div>
      </div>
      <button
      onClick={handleConfirmPickup}
        style={{ border: "1px solid #224E38" }}
        className="flex items-center gap-4 rounded-md px-4 mt-5 p-2 justify-center"
      >
        <Check size={20} color="#224E38" />
        <p className=" text-[#224E38] text-sm">Confirm pickup</p>
      </button>
    </div>
  );
};

export default Receipientcard;
