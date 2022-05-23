const heartWrapper = document.querySelector(".hearts");


const hearts = document.querySelectorAll(".hearts a");

hearts.forEach((heart, clickedIdx) => {
    heart.addEventListener("click", () => {
        heartWrapper.classList.add("disabled")
        hearts.forEach((otherHeart, otherIdx) => {
            if (otherIdx <= clickedIdx) {
                otherHeart.classList.add("active");

            }
        });
        console.log(`Rating of ${clickedIdx +1} was clicked`);
    });
});