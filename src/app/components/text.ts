export function FetchFakeData() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ message: "This is fake data!" });
    }, 2000);
  });
}
