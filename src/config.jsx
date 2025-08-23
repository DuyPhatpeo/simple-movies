export const fetcher = (...args) => {
  return fetch(...args).then((res) => res.json());
};
export const apiKey = "c636315d4d2f58e0941242e787a663fb";
