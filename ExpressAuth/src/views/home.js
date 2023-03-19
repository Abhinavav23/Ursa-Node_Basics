console.log("home file");
let token= '';
const getProfile = () => {
  console.log("getting profile");
  fetch("http://localhost:6800/user/profile", {
    headers: {
      authorization:
        "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY0MTVlYjEwY2M1NDQ4M2JjNTVjODIxMyIsImVtYWlsIjoiTnVwdXJAbWFpbCIsImlhdCI6MTY3OTE2MDA3OH0.THfxhb8p5ylmMwJ8BMq6wTES5UyGQ6PGF3b3BTh8yDc",
    },
  })
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.log(err);
    });
};

const login = () => {
    // method should be post
    // req.body should be passed in header
    // req.body type should be json
    // content-type: application/json
}
