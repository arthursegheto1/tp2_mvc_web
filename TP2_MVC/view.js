class View {
    constructor() {
      this.productTableBody = document.querySelector("#product-table tbody");
    }
  
    displayProducts(products) {
      this.productTableBody.innerHTML = "";
  
      products.forEach((product, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
          <td>${product.code}</td>
          <td>${product.name}</td>
          <td>${product.quantity}</td>
          <td>
            <button class="edit" data-index="${index}">Editar</button>
            <button class="delete" data-index="${index}">Remover</button>
          </td>
        `;
        this.productTableBody.appendChild(row);
      });
    }
  
    bindEditProduct(handler) {
      this.productTableBody.addEventListener("click", (event) => {
        if (event.target.className === "edit") {
          const index = event.target.dataset.index;
          const newQuantity = prompt("Digite a nova quantidade:");
          if (newQuantity !== null && !isNaN(newQuantity)) {
            handler(index, parseInt(newQuantity, 10));
          }
        }
      });
    }
  
    bindDeleteProduct(handler) {
      this.productTableBody.addEventListener("click", (event) => {
        if (event.target.className === "delete") {
          const index = event.target.dataset.index;
          handler(index);
        }
      });
    }
  }
  