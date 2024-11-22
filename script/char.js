const containerEl = document.querySelector(".container");
// console.log(containerEl);
// btnEl.addEventListener("click", () => {
//     // trailerContainerEl.classList.remove("active");
// });

const str = "如여,是시,我아,聞문,A,하오니";
const words = str.split(",");

let SS =
    '<div class="item"><span class="ko">수</span><div class="han">數</div></div>';
SS =
    SS +
    '<div class="item"><span class="ko">수</span><div class="han">數</div></div>';
containerEl.innerHTML = SS;
