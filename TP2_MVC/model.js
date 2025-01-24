class Model {
    constructor() {
      this.products = []; 
      this.onProductsChanged = null; 
    }
  
    addProduct(product) {
      this.products.push(product);
      this._triggerChange();
    }
  
    editProduct(index, quantity) {
      if (this.products[index]) {
        this.products[index].quantity = quantity;
        this._triggerChange();
      }
    }
  
    removeProduct(index) {
      if (this.products[index]) {
        this.products.splice(index, 1);
        this._triggerChange();
      }
    }
  
    bindOnProductsChanged(callback) {
      this.onProductsChanged = callback;
    }
  
    _triggerChange() {
      if (this.onProductsChanged) {
        this.onProductsChanged(this.products);
      }
    }
  }