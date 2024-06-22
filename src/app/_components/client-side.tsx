"use client";

import { supabase } from "@/supabaseclient";
import { useEffect, useState } from "react";

const ClientSide = () => {
  const [messages, setMessages] = useState<any[]>([]);
  const [channels, setChannels] = useState<any[]>(supabase.getChannels());

  useEffect(() => {
    supabase
      .channel("room1")
      .on(
        "broadcast",
        {
          event: "myevents",
        },
        (msg) => {
          setMessages((prev) => [...prev, msg.payload]);
        },
      )
      .subscribe();
  }, []);

  return (
    <div className="z-20">
      {channels.map((channel) => (
        <div key={channel.id}>{channel.name}</div>
      ))}
      {messages.map((msg, idx) => (
        <div key={idx}>
          {msg.x}, {msg.y}
        </div>
      ))}
      <button
        className="bg-red-500 p-2"
        onClick={() => {
          supabase.channel("room1").send({
            type: "broadcast",
            event: "myevents",
            payload: { x: Math.random(), y: Math.random() },
          });
        }}
      >
        Create Channel
      </button>
    </div>
  );
};

export default ClientSide;
