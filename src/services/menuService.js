export async function fetchMenu() {
  const result = await fetch("./menu.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await result.json();
}
