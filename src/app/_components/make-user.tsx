"use client";

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { supabase } from "@/supabaseclient";
import { SetStep, StepProps } from "@/types";
import { useState } from "react";

const MakeUser: React.FC<StepProps> = ({ setStep }) => {
  const [userName, setUserName] = useState(
    localStorage.getItem("userName") || "",
  );

  const handleSubmit = async (e: React.FormEvent) => {
    const name = userName.trim();
    e.preventDefault();

    if (!name) {
      return;
    }

    const { data, error } = await supabase
      .from("bopl_users")
      .insert({
        name,
      })
      .select();

    if (error) {
      console.error(error);
      return;
    }

    localStorage.setItem("userName", name);
    setStep("make_room");
  };

  return (
    <div className="h-full p-12">
      <Card className="p-6">
        <form onSubmit={handleSubmit} className="max-w-[32rem]">
          <div>
            <Label htmlFor="userName">Username</Label>
            <Input
              type="text"
              value={userName}
              className="mb-4"
              onChange={(e) => setUserName(e.target.value)}
            />
          </div>
          <Button type="submit">Submit</Button>
        </form>
      </Card>
    </div>
  );
};

interface MakeUserProps {
  setStep: SetStep;
}

export default MakeUser;
