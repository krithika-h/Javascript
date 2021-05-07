// class keyword Product is class name
// whitespace hyphens are not allowed
class Product {
  // assign with equal sign => called as fields in class
  // title = 'DEFAULT';
  // imageUrl;
  // description;
  // price;

  // this.title and other are called as properties
  // constructor 
  // js automatically calls this method when we create a new instance of this class
  // new instance of class is created when we call new Product() and execute like a function
  // THis special method js executes for us is called constructor method or function
  // constructor accepts arguments like any normal method
  // this refers to this class Product
  constructor(title, image, desc, price) {
    this.title = title;
    this.imageUrl = image;
    this.description = desc;
    this.price = price;
  }
}

const productList = {
  products: [
    // new keyword => js understands that together with a function execution
    // which is based on a class, basically create a new object
    //  new Product returns a new product object
    new Product(
      'A Pillow',
      'https://www.maxpixel.net/static/photo/2x/Soft-Pillow-Green-Decoration-Deco-Snuggle-1241878.jpg',
      'A soft pillow!',
      19.99
    ),
    new Product(
      'A Carpet',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Ardabil_Carpet.jpg/397px-Ardabil_Carpet.jpg',
      'A carpet which you might like - or not.',
      89.99
    )
  ],
  render() {
    const renderHook = document.getElementById('app');
    const prodList = document.createElement('ul');
    prodList.className = 'product-list';
    for (const prod of this.products) {
      // console.log('prod',prod);
      const prodEl = document.createElement('li');
      prodEl.className = 'product-item';
      prodEl.innerHTML = `
        <div>
          <img src="${prod.imageUrl}" alt="${prod.title}" >
          <div class="product-item__content">
            <h2>${prod.title}</h2>
            <h3>\$${prod.price}</h3>
            <p>${prod.description}</p>
            <button>Add to Cart</button>
          </div>
        </div>
      `;
      prodList.append(prodEl);
    }
    renderHook.append(prodList);
  }
};

productList.render();
