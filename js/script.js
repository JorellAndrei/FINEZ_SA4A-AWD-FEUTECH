var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

function togglePopup(index) {
    const popupView = document.querySelectorAll(".popup-view")[index];
    popupView.classList.toggle("active");
}

function closePopup(event) {
    const popupView = event.currentTarget;
    if (!popupView.querySelector(".popup-card").contains(event.target)) {
        popupView.classList.remove("active");
    }
}