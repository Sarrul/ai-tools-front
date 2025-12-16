export const createFoodImage = async (foodDescription: string) => {
  try {
    const response = await fetch("http://localhost:3000/api/create-image", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ foodDescription }),
    });

    if (!response.ok) {
      throw new Error("Failed to create image");
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error creating image:", error);
    throw error;
  }
};
