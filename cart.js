  document.addEventListener("DOMContentLoaded", function() {
    const addToCartButtons = document.querySelectorAll(".add-to-cart");
    const cartIcon = document.querySelector(".cart-icon");
    const cartItems = document.querySelector(".cart-items");
    const cartContent = document.querySelector(".cart-content");
    const cartTotal = document.querySelector(".cart-total");
    const closeBtn = document.querySelector(".close-btn");
    const checkoutBtn = document.querySelector(".checkout-btn");
    const clearCartBtn = document.querySelector(".clear-cart-btn");
    const textInput = document.getElementById("text");

    checkoutBtn.addEventListener("click", openCartWindow);
    
    

    let cart = [];
    
    
    // Добавление товара в корзину
    addToCartButtons.forEach(button => {
      button.addEventListener("click", addToCart);
      button.addEventListener("click", openCartWindow);
      
    });

    // Отображение корзины
    cartIcon.addEventListener("click", showCart);

    // Закрытие корзины
    closeBtn.addEventListener("click", hideCart);

    // Оформление заказа
    checkoutBtn.addEventListener("click", checkout);

    // Очистка корзины
    clearCartBtn.addEventListener("click", clearCart);
    
    
   
    
    // Добавление товара в корзину
    function addToCart(event) {
      
      const item = event.target.parentNode;
      const itemName = item.querySelector("h3").textContent.trim();
      const itemPrice = parseFloat(item.querySelector("p").textContent.match(/\d+/));
      
      
      const existingItem = cart.find(item => item.name === itemName);
      if (existingItem) {
        existingItem.quantity++;
      } else {
        cart.push({ name: itemName, price: itemPrice, quantity: 1 });
      }
      updateCart();
      updateCartIcon(); // Обновление иконки корзины
    }
    
    function showCart() {
      cartItems.style.display = "block";
    }

    function hideCart() {
      cartItems.style.display = "none";
    }
    
    function updateCart() {   
      cartContent.innerHTML = "";
      cart.forEach(item => {
        const itemElement = document.createElement("div");
        
        itemElement.innerHTML = `
          <div class="cart-item">
            <div class="item-details">
              <h3>${item.name}</h3>
              <p>Цена: ₽${item.price.toFixed(2)}</p>
              <p>Количество: ${item.quantity}</p>
            </div>
          </div>
        `;
        
        cartContent.appendChild(itemElement);
        
      });
      
      function clearCart() {
          // Очищаем поле с текстом
          
          // Очищаем массив корзины
          cart = [];
          cartContent.innerHTML = "";
          textInput.value = '';
          // Обновляем содержимое корзины и общую стоимость
          updateCart();
          // Обновляем иконку корзины
          updateCartIcon();

      }
      
      checkoutBtn.addEventListener("click", copyCartToTextField);

      function copyCartToTextField() {
        const cartText = cart.map(item => `Товар: ${item.name}, цена: ₽${item.price.toFixed(2)}, количество: ${item.quantity}`).join("\n");
        textInput.value = cartText;
      }
      
  // Добавляем обработчик события для кнопки "Очистить корзину"
  
      const clearCartBtn = document.querySelector(".clear-cart-btn");
  
      clearCartBtn.addEventListener("click", clearCart);

      // Update cart total
      const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
      cartTotal.textContent = `Сумма: ₽${total.toFixed(2)}`;
    }
    
   // Открывает новое окно и вставляет содержимое корзины
   function openCartWindow() {
    const cartItems = document.querySelector(".cart-items");
    const cartContentText = document.querySelector(".cart-content-text");
    const cartContent = cartItems.innerHTML;
    const tempElement = document.createElement("div");
    tempElement.innerHTML = cartContent;
    const itemDetails = tempElement.querySelectorAll(".item-details");
    
    const textarea = document.getElementById("text");
    let cartText = "";
    textarea.value = "";
  
    itemDetails.forEach((item) => {
      const itemName = item.querySelector("h3").innerHTML;
      const itemPrice = item.querySelector("p:nth-of-type(1)").innerHTML;
      const itemQuantity = item.querySelector("p:nth-of-type(2)").innerHTML;
  
      cartText += `${itemName}\n${itemPrice}\n${itemQuantity}\n\n`;
    });
  
    textarea.value = cartText;
  }
    
    // Обработчик события для кнопки "оформить"
    checkoutBtn.addEventListener("click", openCartWindow);

    function updateCartIcon() {
      const cartItemCount = cart.reduce((sum, item) => sum + item.quantity, 0);
      const cartIconCount = cartIcon.querySelector(".cart-icon-count");
      

      if (cartItemCount > 0) {
        if (!cartIconCount) {
          const countElement = document.createElement("div");
          countElement.classList.add("cart-icon-count");
          countElement.textContent = cartItemCount;
          cartIcon.appendChild(countElement);
        } else {
          cartIconCount.textContent = cartItemCount;
        }
      } else if (cartIconCount) {
        cartIcon.removeChild(cartIconCount);
      }
    }
  });
  
  
  
  