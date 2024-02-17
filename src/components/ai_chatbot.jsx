'use client'

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Rocket } from "lucide-react";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { useSession } from "next-auth/react";
import { Plus } from "lucide-react";
import axios from "axios";

function AiChatBot() {
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  const messages = [
    {
        from:"user",
        message:"How are you ?"
    },
    {
        from:"bot",
        message:"I am fine"
    }
  ]

  function handleSubmit(e) {
    e.preventDefault();
    // setLoading(true);
    // if(input.trim() === "") return;
    // addMessage("user", input);
    // axios.post("https://6e5a-2409-40f3-100b-2c2a-d236-ad14-ace6-d586.ngrok-free.app/chat", {
    //   message: input,
    // }).then((res) => {
    //   addMessage("bot", res.data);
    // }).catch(err => console.log(err)).finally(() => setLoading(false));
    // setInput("");
  }
  return (
    <main className="mx-6 mt-4">
      <h1 className="text-[#1A1A1A] text-3xl mb-5 font-medium border-b border-lightsilver pb-4">
        crumbsAI®
      </h1>
      <hr />
      <div className="space-y-4 pt-4 min-h-[70%] overflow-auto pb-48 mt-6">
        {messages.map((message, i) => (
          <Message key={i} from={message.from} message={message.message} />
        ))}
      </div>
      <form onSubmit={handleSubmit}>
        <input
        disabled={loading}
          value={input}
          onChange={(e) => setInput(e.target.value)}
          className="bg-white border-[#707070]  border px-6 py-3 fixed w-[87%] md:w-[90%] bottom-[6rem] rounded-sm "
          type="text"
          placeholder="Type or say to begin chat..."
        />
        <button disabled={loading} className="fixed bottom-[6rem] right-[10%] -translate-y-3 bg-[#1A4CD3] text-white p-2 rounded-sm">
          <Rocket size={12} />
        </button>
      </form>
    </main>
  );
}

function Message({ from, message }) {
    const { data } = useSession()
    const userImage = data?.user?.image
    console.log(userImage)
  return (
    <div className={twMerge("flex flex-col w-[90%] gap-1.5 rounded-[0.9375rem] border border-[#8D8D8D] p-5 text-[0.69156rem]",
    from === "bot" && "mr-auto",
    from === "user" && "translate-x-[30px] bg-[#224E38]"
    )}>
      <div>
        <Avatar
          className={twMerge(
            "w-8 h-8 rounded-full",
            from === "bot" && "mr-auto",
            from === "user" && "ml-auto "
          )}
        >
          <AvatarImage
            src={from === "bot" ? "/svg/ai.svg" : userImage}
          />
            </ Avatar>
      </div>
      <div
        className={twMerge(
          "rounded-[1.875rem] flex-grow text-[#A8A8A8] text-sm",
          from === "bot" && "text-left",
          from === "user" && "text-right"
        )}
      >
        {message}
      </div>
    </div>
  );
}
export default AiChatBot;