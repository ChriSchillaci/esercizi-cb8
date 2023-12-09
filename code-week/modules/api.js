const getApi = async (endpoint) => {
  const res = await fetch(`${baseUrl}${endpoint}`, {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization: AUTH,
    },
  });
  const data = res.json();

  return data;
};

const baseUrl = "https://api.themoviedb.org/3";
const AUTH =
  "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJjZGNiNzY2YTllNWM0N2ZkOGMzYzg0ODRlZjVjZTY4OSIsInN1YiI6IjY1MGQ0ZDJhZjkyNTMyMDBhZGUxMTJkMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.KIhoXnYP6YFHse-oAlJpKUpNxh599De8UFJI3BnxvTE";

export { getApi };
