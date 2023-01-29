document.addEventListener("DOMContentLoaded", () => {
  console.log("document loaded");

  document
    .querySelector("#contactForm")
    .addEventListener("submit", async (event) => {
      event.preventDefault();
      console.log("submit");

      const data = {
        firstname: document.querySelector("#firstname").value,
        lastname: document.querySelector("#lastname").value,
        email: document.querySelector("#email").value,
        subject: document.querySelector("#subject").value,
        message: document.querySelector("#message").value,
      };

      console.log(data);

      const response = await axios.post(
        "https://form--first-fullstack-exercise--dlbmkp758p4j.code.run/form",
        data
      );
      console.log(response);
    });
});
