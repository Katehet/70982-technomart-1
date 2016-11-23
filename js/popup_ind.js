			var buyIt = document.querySelector(".buy-it-btn");
			var bookIt = document.querySelector(".book-it-btn");
			var popupBuy = document.querySelector(".modal-order");
			var closePopup = document.querySelector(".modal-close");
			var closeToo = document.querySelector(".keep-on-btn");

				// BOOK THE GOOD
			
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
				document.classList.remove("modal-order-show");
			});
			closeToo.addEventListener("click", function(event) {
				event.preventDefault();
				popupBuy.classList.remove("modal-order-show");
			});

			var link = document.querySelector(".contacts-btn");
			var popup = document.querySelector(".modal-write-us");
			var close = document.querySelector(".modal-close");
			var overlay = document.querySelector(".modal-overlay");
			var form = popup.querySelector("form");
			var name = popup.querySelector("[name=u-name]");
			var mail = popup.querySelector("[name=u-email]");
			var feedback = popup.querySelector("textarea");

			var openMap = document.querySelector(".map");
			var popupMap = document.querySelector(".modal-map");
			var closeMap = popupMap.querySelector(".modal-close");

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

			// Map Modal window
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
