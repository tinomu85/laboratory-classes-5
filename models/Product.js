class Product {
  constructor(name, description, price) {
    this.name = name;
    this.description = description;
    this.price = Number(price);
  }

  static #products = [];

  static getAll() {
    return this.#products;
  }

  static add(productData) {
    const { name, description, price } = productData;
    const newProduct = new Product(name, description, price);
    this.#products.push(newProduct);
  }

  static findByName(name) {
    return this.#products.find((product) => product.name === name);
  }

  static deleteByName(name) {
    this.#products = this.#products.filter((product) => product.name !== name);
  }

  static getLast() {
    return this.#products[this.#products.length - 1];
  }
}

module.exports = Product;
