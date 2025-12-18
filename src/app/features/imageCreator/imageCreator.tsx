"use client";

import { createFoodImage } from "@/app/api/imageCreator";
import { Button } from "@/components/ui/button";
import { FileText, Image, RotateCw, Sparkles } from "lucide-react";
import { useState } from "react";

export default function ImageCreatorTab() {
  const [loading, setLoading] = useState<boolean>(false);
  const [prompt, setPrompt] = useState("");

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter a description");
      return;
    }

    setLoading(true);
    try {
      const response = await createFoodImage(prompt);
      console.log("Generated image:", response);
    } catch (error) {
      console.error(error);
      alert("Failed to generate image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="gap-2 flex flex-col">
      <div className="flex justify-between">
        <p className="text-[#09090B] font-sans text-xl font-semibold leading-7 tracking-normal flex flex-row gap-2">
          <Sparkles />
          Image creator
        </p>
        <Button variant="outline" className="h-10 w-12">
          <RotateCw />
        </Button>
      </div>

      <p className="text-[#71717A] font-sans text-sm font-normal leading-5 tracking-normal">
        What image do you want? Describe it briefly.{" "}
      </p>
      <textarea
        id="picture"
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        className="cursor-pointer flex h-[124px] p-2.5 items-start self-stretch rounded-md border border-[#E4E4E7] bg-white"
      />

      <div className="w-full flex justify-end">
        <Button onClick={handleGenerate} disabled={loading} className="w-fit">
          {loading ? (
            <>
              <RotateCw className="w-4 h-4 mr-2 animate-spin" />
              Generating...
            </>
          ) : (
            <>
              <FileText className="w-4 h-4 mr-2" />
              Generate
            </>
          )}
        </Button>
      </div>

      <p className="text-[#09090B] font-sans text-xl font-semibold leading-7 tracking-normal flex flex-row gap-2">
        <Image />
        Result
      </p>
    </div>
  );
}
