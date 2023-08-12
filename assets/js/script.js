document.addEventListener("DOMContentLoaded", () => {
    console.log("document loaded");

    document
        .querySelector("#contactForm")
        .addEventListener("submit", async (e) => {
            e.preventDefault();

            const data = {
                firstname: document.querySelector("#firstname").value,
                lastname: document.querySelector("#lastname").value,
                email: document.querySelector("#email").value,
                subject: document.querySelector("#subject").value,
                message: document.querySelector("#message").value,
            };

            // console.log(data);

            const response = await axios.post("https://site--backendform--btd2t595ypnp.code.run/form", data);
            console.log(response);
        });
});
