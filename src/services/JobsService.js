export async function fetchJobs() {
  const result = await fetch("./jobs.json", {
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  });
  return await result.json();
}
