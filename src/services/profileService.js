export async function fetchProfile() {
  const result = await delayCall(
    fetch("./profile.json", {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    })
  );
  return await result.json();
}

// only for demonstrate reasons
function delayCall(call) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(call);
    }, 2000);
  });
}
