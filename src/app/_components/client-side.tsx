"use client";

import { supabase } from "@/supabaseclient";
import { useEffect, useState } from "react";
import UserDraftArea from "./user-draft-area";
import MakeUser from "./make-user";
import { StepProps, Steps } from "@/types";
import { Database } from "@/types/supabase";
import { Button } from "@/components/ui/button";
import RoomBrowser from "./room-browser";

const ClientSide = () => {
  const whereToStart = localStorage.getItem("userName")
    ? "make_room"
    : "make_user";

  const [step, setStep] = useState<Steps>(whereToStart);

  const [messages, setMessages] = useState<any[]>([]);
  const [channels, setChannels] = useState<any[]>(supabase.getChannels());
  const [user, setUser] = useState<
    undefined | Database["public"]["Tables"]["bopl_users"]["Row"]
  >(undefined);

  useEffect(() => {
    populateUser();
  }, [step]);

  const populateUser = async () => {
    if (localStorage.getItem("userName") && !user) {
      const { data: userData, error: userError } = await supabase
        .from("bopl_users")
        .select()
        .eq("name", localStorage.getItem("userName") as string);

      if (userError) {
        console.error(userError);
        return;
      }

      if (userData && userData.length > 0) {
        setUser(userData[0]);
      }
    }
  };

  const stepProps: StepProps = {
    setStep,
    step,
    user,
    setUser,
  };

  return (
    <div className="z-20 h-screen w-screen border-2 border-red-500">
      <div className="flex w-full justify-end border-b bg-blue-500 p-2 text-sm shadow-xl">
        {user ? (
          <div>
            <span className="mr-2">Hello, {user.name}</span>
            <Button
              className="p-1 !py-1 text-sm"
              onClick={() => {
                localStorage.removeItem("userName");
                setUser(undefined);
                setStep("make_user");
              }}
            >
              Logout
            </Button>
          </div>
        ) : (
          "Hello, Guest"
        )}
      </div>
      {step === "make_user" && <MakeUser {...stepProps} />}
      {step === "make_room" && <RoomBrowser {...stepProps} />}
    </div>
  );
};

export default ClientSide;
