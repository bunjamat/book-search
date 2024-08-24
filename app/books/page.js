"use client";

import { Button } from "@material-tailwind/react";
import React from "react";

function Page() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center py-2">
      <h1 className="text-4xl font-bold">หนังสือทั้งหมด</h1>
      <p className="text-2xl mb-4">By : Thongchai Bunjamat</p>
      <Button color="lightBlue" ripple="light">
        ค้นหาหนังสือ
      </Button>
    </div>
  );
}

export default Page;
