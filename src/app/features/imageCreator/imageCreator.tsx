"use client";

import { Button } from "@/components/ui/button";
import { Image, RotateCw, Sparkles } from "lucide-react";
// import { useState } from "react";

export default function ImageCreatorTab() {
  // const [loading, setLoading] = useState<boolean>(false);

  return (
    <div className="gap-2 flex flex-col">
      <div className="flex justify-between">
        <p className="text-[#09090B] font-sans text-xl font-semibold leading-7 tracking-normal flex flex-row gap-2">
          <Sparkles />
          Food image creator
        </p>
        <Button variant="outline" className="h-10 w-12">
          <RotateCw />
        </Button>
      </div>

      <p className="text-[#71717A] font-sans text-sm font-normal leading-5 tracking-normal">
        What food image do you want? Describe it briefly.{" "}
      </p>
      <textarea
        id="picture"
        className="cursor-pointer flex h-[124px] p-2.5 items-start self-stretch rounded-md border border-[#E4E4E7] bg-white"
      />

      <div className="w-full flex justify-end">
        <Button
          // onClick={handleGenerate}
          // disabled={!selectedImage || loading}
          className="w-fit"
        >
          {/* {loading ? (
            <>
              <RotateCw className="w-4 h-4 mr-2 animate-spin" />
              Analyzing...
            </>
          ) : (
            <>
              <FileText className="w-4 h-4 mr-2" />
              Generate
            </>
          )} */}
        </Button>
      </div>

      <p className="text-[#09090B] font-sans text-xl font-semibold leading-7 tracking-normal flex flex-row gap-2">
        <Image />
        Result
      </p>
    </div>
  );
}
