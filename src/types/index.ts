import { Dispatch, SetStateAction } from "react";
import { Database } from "./supabase";

export type Steps = "make_user" | "make_room" | "waiting_room" | "draft";

export type SetStep = Dispatch<SetStateAction<Steps>>;

// In lieu of a zustand store, we'll just use props to pass down the state into the children
export interface StepProps {
  setStep: SetStep;
  step: Steps;

  // User data
  user: Database["public"]["Tables"]["bopl_users"]["Row"] | undefined;
  setUser: Dispatch<
    SetStateAction<
      Database["public"]["Tables"]["bopl_users"]["Row"] | undefined
    >
  >;
}
