import React from "react";

export default function SnapTest() {
  return (
    <main className="min-h-screen w-full overflow-y-scroll bg-gray-100 scroll-smooth snap-y snap-mandatory">
      <section className="min-h-[100svh] w-full flex items-center justify-center p-4 md:p-8 overflow-hidden snap-start bg-red-200 border-b-4 border-red-400">
        <h1 className="text-4xl">Section 1</h1>
      </section>
      <section className="min-h-[100svh] w-full flex items-center justify-center p-4 md:p-8 overflow-hidden snap-start bg-green-200 border-b-4 border-green-400">
        <h1 className="text-4xl">Section 2</h1>
      </section>
      <section className="min-h-[100svh] w-full flex items-center justify-center p-4 md:p-8 overflow-hidden snap-start bg-blue-200 border-b-4 border-blue-400">
        <h1 className="text-4xl">Section 3</h1>
      </section>
    </main>
  );
}
