//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    data: {
      product: 'Socks',
      discription: 'Socks is footwear',
      image: "./assets/vmSocks-green-onWhite.jpg",
      image2: "./assets/vmSocks-blue-onWhite.jpg",
      altText: "A pair of socks",
      inStock: true,
      inventory: 11,
      onSale: false,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: './assets/vmSocks-green-onWhite.jpg'
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: './assets/vmSocks-blue-onWhite.jpg'
        }
      ],
      cart: 0
    },
    methods: {
      // addToCart: function () {
      //   this.cart += 1
      // },
      // updateProduct: function (variantImage) {
      //   this.image = variantImage
      // }
      addToCart() {
          this.cart += 1
      },
      updateProduct(variantImage) {
        this.image = variantImage
      },
      removeFromCart() {
        if (this.cart > 0) {
          this.cart -= 1
        }
      }
    }
  })
