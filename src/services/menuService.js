export async function fetchMenu() {
  const result = await fetch("./menu.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  const data = await result.json();
  return data;
}
