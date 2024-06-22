import { CreatePost } from "@/app/_components/create-post";
import { api } from "@/trpc/server";
import UserDraftArea from "./_components/user-draft-area";
import { createClient } from "@supabase/supabase-js";
import ClientSide from "./_components/client-side";

export default async function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-200 text-gray-700">
      <div className="bg-pattern absolute inset-0 z-0"></div>
      <div className="bg-gradient absolute inset-0 z-0"></div>
      <div className="bg-vignette absolute inset-0 z-0"></div>

      <ClientSide />

      <div className="container z-10 flex flex-col items-center justify-center gap-12 px-4 py-16">
        <h1 className="text-5xl font-extrabold tracking-tight sm:text-[5rem]">
          BOPL DRAFT
        </h1>
        <div className="grid grid-cols-3 gap-8">
          <UserDraftArea playerIdx={0} />
          <UserDraftArea playerIdx={1} />
        </div>

        <CrudShowcase />
      </div>
    </main>
  );
}

async function CrudShowcase() {
  const latestPost = await api.post.getLatest();

  return (
    <div className="w-full max-w-xs">
      {latestPost ? (
        <p className="truncate">Your most recent post: {latestPost.name}</p>
      ) : (
        <p>You have no posts yet.</p>
      )}

      <CreatePost />
    </div>
  );
}
