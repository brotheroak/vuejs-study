//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.

var app = new Vue({
    el: '#app',
    data: {
      brand: 'Vue Mastery',
      product: 'Socks',
      discription: 'Socks is footwear',
      // image: "./assets/vmSocks-green-onWhite.jpg",
      selectedVariant: 0,
      altText: "A pair of socks",
      // inStock: true,
      // inventory: 11,
      onSale: false,
      details: ['80% cotton', '20% polyester', 'Gender-neutral'],
      variants: [
        {
          variantId: 2234,
          variantColor: "green",
          variantImage: './assets/vmSocks-green-onWhite.jpg',
          variantQuantity: 10
        },
        {
          variantId: 2235,
          variantColor: "blue",
          variantImage: './assets/vmSocks-blue-onWhite.jpg',
          variantQuantity: 0
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
      // updateProduct(variantImage) {
      //   this.image = variantImage
      // },
      updateProduct(index) {
        this.selectedVariant = index
        console.log(index)
      },
      removeFromCart() {
        if (this.cart > 0) {
          this.cart -= 1
        }
      }
    },
    computed: {
      title() {
        return this.brand + ' ' + this.product
      },
      image() {
        return this.variants[this.selectedVariant].variantImage
      },
      inStock() {
        return this.variants[this.selectedVariant].variantQuantity
      }
    }
  })
  