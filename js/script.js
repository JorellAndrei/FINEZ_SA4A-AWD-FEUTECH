var popupViews = document.querySelectorAll('.popup-view');
var popupBtns = document.querySelectorAll('.popup-btn');
var closeBtns = document.querySelectorAll('.close-btn');

function togglePopup(index) {
    var popupViews = document.querySelectorAll('.popup-view');
    popupViews.forEach((popupView, i) => {
        if (i === index) {
            popupView.classList.toggle('active');
        } else {
            popupView.classList.remove('active');
        }
    });
}