		var buyIt = document.querySelector(".buy-it-btn");
		var bookIt = document.querySelector(".book-it-btn");
		var popupBuy = document.querySelector(".modal-order");
		var closePopup = document.querySelector(".modal-close");
		var closeToo = document.querySelector(".keep-on-btn");
			
		buyIt.addEventListener("click", function(event) {
			event.preventDefault();
			popupBuy.classList.add("modal-order-show");
			});
			bookIt.addEventListener("click", function(event) {
				event.preventDefault();
				popupBuy.classList.add("modal-order-show");
			});
			closePopup.addEventListener("click", function(event) {
				event.preventDefault();
				popupBuy.classList.remove("modal-order-show");
			});
			closeToo.addEventListener("click", function(event) {
				event.preventDefault();
				popupBuy.classList.remove("modal-order-show");
			});