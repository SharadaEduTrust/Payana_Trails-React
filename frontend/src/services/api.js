// Access the environment variable in Vite
const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL || "http://localhost:8000/api";

export const api = {
  // 1. Fetch Trails (For ExploreOurTrails component)
  getTrails: async (category = "All") => {
    try {
      const url =
        category === "All"
          ? `${API_BASE_URL}/trails`
          : `${API_BASE_URL}/trails?category=${category}`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch trails");
      return await response.json();
    } catch (error) {
      console.error("API Error (getTrails):", error);
      throw error;
    }
  },

  // 2. Fetch Journeys (For your Journeys pages)
  getJourneys: async (category) => {
    try {
      const url = category
        ? `${API_BASE_URL}/journeys?category=${category}`
        : `${API_BASE_URL}/journeys`;

      const response = await fetch(url);
      if (!response.ok) throw new Error("Failed to fetch journeys");
      return await response.json();
    } catch (error) {
      console.error("API Error (getJourneys):", error);
      throw error;
    }
  },

  // 3. Submit Contact Form (For the /connect page)
  submitContact: async (formData) => {
    try {
      const response = await fetch(`${API_BASE_URL}/contact`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to submit contact form");
      return await response.json();
    } catch (error) {
      console.error("API Error (submitContact):", error);
      throw error;
    }
  },
};
