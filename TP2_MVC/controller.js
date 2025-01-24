class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;
  
      this.model.bindOnProductsChanged((products) => this.view.displayProducts(products));
      this.view.bindEditProduct(this.editProduct.bind(this));
      this.view.bindDeleteProduct(this.removeProduct.bind(this));
    }
  
    addProduct(name, quantity) {
      const product = {
        code: Date.now().toString(), 
        name,
        quantity,
      };
      this.model.addProduct(product);
    }
  
    editProduct(index, quantity) {
      this.model.editProduct(index, quantity);
    }
  
    removeProduct(index) {
      this.model.removeProduct(index);
    }
  }
  