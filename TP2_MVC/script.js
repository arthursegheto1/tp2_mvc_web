document.addEventListener("DOMContentLoaded", () => {
    const model = new Model();
    const view = new View();
    const controller = new Controller(model, view);
  
    const form = document.getElementById("add-product-form");
    form.addEventListener("submit", (event) => {
      event.preventDefault(); 
  
      const productName = document.getElementById("product-name").value.trim();
      const productQuantity = parseInt(document.getElementById("product-quantity").value.trim(), 10);
  
      if (productName && !isNaN(productQuantity)) {
        controller.addProduct(productName, productQuantity);
        form.reset(); 
      } else {
        alert("Por favor, insira dados válidos para o produto.");
      }
    });
  });
  