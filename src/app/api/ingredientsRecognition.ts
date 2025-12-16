export const recognizeIngredients = async (description: string) => {
  try {
    const response = await fetch(
      "http://localhost:3000/api/recognize-ingredients",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ description }),
      }
    );

    if (!response.ok) {
      throw new Error("Failed to recognize ingredients");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error recognizing ingredients:", error);
    throw error;
  }
};
