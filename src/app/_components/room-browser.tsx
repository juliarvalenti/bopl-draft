import { supabase } from "@/supabaseclient";
import { Database } from "@/types/supabase";
import { useEffect, useState } from "react";
import Container from "./container";
import { StepProps } from "@/types";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

const RoomBrowser: React.FC<StepProps> = (stepProps) => {
  const [passcode, setPasscode] = useState("");
  const [rooms, setRooms] = useState<
    ReturnType<typeof fetcher> extends Promise<{ data: infer T }> ? T : never
  >([]);

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const { data: roomsData, error: roomsError } = await fetcher();

    if (roomsError) {
      console.error(roomsError);
      return;
    }

    if (roomsData) {
      setRooms(roomsData);
    }
  };

  const fetcher = async () => {
    return supabase
      .from("bopl_rooms")
      .select("*, bopl_rooms_users!inner(room_id), bopl_users!inner(id, name)");
  };

  const handleCreateRoom = async () => {
    const userId = stepProps.user?.id;
    if (!userId) {
      return;
    }

    const { data, error } = await insertRoom();

    if (error) {
      console.error(error);
      return;
    }

    if (data) {
      const roomId = data[0]?.id;
      await insertUserInRoom(roomId);
    }
  };

  const insertRoom = async () => {
    return supabase
      .from("bopl_rooms")
      .insert({
        is_active: true,
        created_by: stepProps.user?.id,
        passcode: passcode.trim() || null,
      })
      .select();
  };

  const insertUserInRoom = async (roomId?: number) => {
    if (!stepProps.user?.id || !roomId) {
      return;
    }

    return supabase.from("bopl_rooms_users").insert({
      room_id: roomId,
      user_id: stepProps.user?.id,
    });
  };

  return (
    <Container>
      <h1>Rooms</h1>
      <ul>
        {rooms?.map((room) => (
          <li key={room.id}>
            {room.id} - {room.bopl_users.name} -{" "}
            {room.passcode ? "Locked" : "Open"} -{room.bopl_rooms_users.length}{" "}
            / 4
          </li>
        ))}
      </ul>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          handleCreateRoom();
        }}
      >
        <Input
          type="text"
          placeholder="Passcode (optional)"
          value={passcode}
          onChange={(e) => setPasscode(e.target.value)}
        />
        <Button type="submit">Create Room</Button>
      </form>
    </Container>
  );
};

export default RoomBrowser;
