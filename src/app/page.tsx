import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ImageAnalysisTab from "./features/imageAnalysis/ImageAnalysis";
import IngredientRecognitionTab from "./features/ingredientRecognition/ingredientRecognition";
import ImageCreatorTab from "./features/imageCreator/imageCreator";

export default function Home() {
  return (
    <div className="flex min-h-screen p-7 justify-center">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList>
          <TabsTrigger value="image-analysis">Image Analysis</TabsTrigger>
          <TabsTrigger value="ingredient-recognition">
            Ingredient recognition
          </TabsTrigger>
          <TabsTrigger value="image-creator">Image creator</TabsTrigger>
        </TabsList>
        <TabsContent value="image-analysis">
          <ImageAnalysisTab />
        </TabsContent>
        <TabsContent value="ingredient-recognition">
          <IngredientRecognitionTab />{" "}
        </TabsContent>
        <TabsContent value="image-creator">
          <ImageCreatorTab />
        </TabsContent>
      </Tabs>
    </div>
  );
}
