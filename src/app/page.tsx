import ClientSide from "./_components/client-side";

export default async function Page() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-b from-blue-500 to-blue-200 text-gray-700 ">
      <div className="bg-pattern absolute inset-0 z-0"></div>
      <div className="bg-gradient absolute inset-0 z-0"></div>
      <div className="bg-vignette absolute inset-0 z-0"></div>
      <div className="container z-10 flex flex-col items-center justify-center gap-12">
        <ClientSide />
      </div>
    </main>
  );
}
