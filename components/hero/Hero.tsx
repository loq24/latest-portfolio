"use client";

import { useEffect } from "react";

export default function Hero() {
  return (
    <div className="centered-block flex h-screen flex-col flex-wrap items-start justify-center">
      <p className="inline-block overflow-hidden font-inter text-5xl">Hello!</p>
      <h1 className="inline-block overflow-hidden font-anek-bangla text-9xl font-extralight">
        I'm Lougie.
      </h1>
      <h2 className="inline-block overflow-hidden font-inter text-7xl font-normal">
        A full-stack developer.
      </h2>
    </div>
  );
}
