import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";

export const RequestCard = ({
  name,
  quantity,
  date,
  status,
  pickedBy,
  type,
}) => {
  return (
    <div
      style={{ boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.25)" }}
      className=" w-full rounded-lg  mt-5 items-center p-5"
    >
      <div className={cn(status === "open" && "mb-6")}>
        <h3 className="font-medium text-lg text-left">Pickup for {name}</h3>
        <p className="text-[#8E8E8E] text-xs">{date}</p>
        <Badge
          className={cn(
            "mt-2",
            type === "veg" && "bg-green-500",
            type === "non-veg" && "bg-red-500"
          )}
        >
          {type}
        </Badge>
      </div>
      <div>
        <div>
          {status !== "open" && (
            <>
              <p className=" mt-7 text-[#7A7A7A] font-normal text-xs">
                Pickup by
              </p>
              <div className="flex gap-1">
                <img src="/svg/profile_icon.svg" alt="" />
                <h3 className="font-medium text-sm text-left">{pickedBy}</h3>
              </div>
            </>
          )}
          <div>
            <p className=" mt-2 text-[#7A7A7A] font-normal text-xs">Portions</p>
            <h3 className="font-medium text-sm text-left">{quantity} kg</h3>
          </div>
        </div>
      </div>
    </div>
  );
};
