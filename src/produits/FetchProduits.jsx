export async function fetchData() {
  try {
    const response = await fetch(
      "https://api.thecatapi.com/v1/images/search?limit=10",
    );
    if (!response.ok) {
      throw new Error("Erreur réseau");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Erreur lors de la récupération des données :", error);
    return [];
  }
}
