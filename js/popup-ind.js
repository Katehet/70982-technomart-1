var link = document.querySelector(".contacts-btn");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
var form = popup.querySelector("form");
var name = popup.querySelector("[name=u-name]");
var mail = popup.querySelector("[name=u-email]");
var feedback = popup.querySelector("textarea");

			// WRITE-US FORM

link.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-write-us-show");
	name.focus();
});

link.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.add("modal-overlay-show");
});
		
close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-write-us-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("modal-overlay-show");
	popup.classList.remove("modal-error");
});
		
form.addEventListener("submit", function() {
	if (!name.value || !mail.value || !feedback.value) {
		event.preventDefault();
		popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
		popup.classList.add("modal-error");
	} else {
		localStorage.setItem("name", name.value)
		};		
});

			// MODAL MAP

var openMap = document.querySelector(".map");
var popupMap = document.querySelector(".modal-map");
var closeMap = popupMap.querySelector(".modal-close");

openMap.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.add("modal-overlay-show");
});
openMap.addEventListener("click", function(event) {
	event.preventDefault();
	popupMap.classList.add("modal-map-show");
});
closeMap.addEventListener("click", function(event) {
	event.preventDefault();
	overlay.classList.remove("modal-overlay-show");
});
closeMap.addEventListener("click", function(event) {
	event.preventDefault();
	popupMap.classList.remove("modal-map-show");
});

			// BOOKING GOODS

var openToBuy = document.querySelectorAll(".buy-it-btn");
var openToBook = document.querySelectorAll(".book-it-btn");
var modalOrder = document.querySelector(".modal-order");
var clickClose = document.querySelector(".modal-close");
var clickCloseToo = document.querySelector(".keep-on-btn");

for (var i = 0; i < openToBuy.length; i++) {
	clickToBuy(openToBuy[i]);
};
function clickToBuy(openToBuy) {
	openToBuy.addEventListener("click", function(event) {
		event.preventDefault();
		modalOrder.classList.add("modal-order-show");
	})
};

for (var j = 0; j < openToBook.length; j++) {
	clickToBook(openToBook[j]);
};
function clickToBook(openToBook) {
	openToBook.addEventListener("click", function(event) {
		event.preventDefault();
		modalOrder.classList.add("modal-order-show");
	})
};

clickClose.addEventListener("click", function(event) {
event.preventDefault();
modalOrder.classList.remove("modal-order-show");
});

clickCloseToo.addEventListener("click", function(event) {
event.preventDefault();
modalOrder.classList.remove("modal-order-show");
});