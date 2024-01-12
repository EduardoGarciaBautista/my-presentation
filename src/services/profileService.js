export async function fetchProfile() {
  const result = await fetch("./profile.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await result.json();
}
