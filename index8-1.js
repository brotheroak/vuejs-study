Vue.component('product-details', {
  props: {
    details: {
      type: Array,
      required: true
    }
  },
  template: `
    <ul>
      <li v-for="detail in details">{{ detail }}</li>
    </ul>
  `
})

Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      requried:true
    }
  },
  template: `
  <div class="product">

            <div class="product-image">
                <img v-bind:src="image" />
                <!-- <img :src="image2" :alt="altText"/> -->
            </div>

            <div class="product-info">
                <!-- <h1>{{ brand }} {{ product }}</h1> -->
                <h1>{{ title }}</h1>
                <p v-if="inStock">In Stock</p>
                <p v-else
                    :class="{ outOfStock: !inStock }">Out of Stock</p>
                <!-- <p v-if="inventory > 10">In Stock</p>
                <p v-else-if="inventory<=10 && inventory >0">Almost sold out!</p>
                <p v-else
                    :class="{ outOfStock: inventory <=0 }">Out of Stock</p> -->
                <!-- <p v-show="inStock">In Stock</p> -->
                <!-- <span v-if="onSale">On Sale!</span> -->

                <!-- <p>{{ sale }}</p> -->
                <p>Shipping: {{ shipping }}</p>

                <product-details :details"details"></product-details>

                <!-- <div v-for="variant in variants"  -->
                <div v-for="(variant, index) in variants"
                    :key="variant.variantId"
                    class="color-box"
                    :style="{ backgroundColor: variant.variantColor }"
                    @mouseover="updateProduct(index)">
                    <!-- <p> {{ variant.variantColor }}</p> -->
                    <!-- <p @mouseover="updateProduct(variant.variantImage)"> {{ variant.variantColor }}</p> -->
                </div>

                <!-- <button v-on:click="cart += 1">Add to Cart</button> -->
                <!-- <button v-on:click="addToCart">Add to Cart</button> -->
                <button v-on:click="addToCart"
                        :disabled="!inStock"
                        :class="{ disabledButton: !inStock }">Add to Cart</button>

                <!-- <button v-on:click="removeFromCart">Remove from cart</button> -->
                <button v-on:click="removeFromCart"
                        :class="{ disabledButton: cart <= 0 }">Remove from cart</button>

                <div class="cart">
                    <p>Cart({{cart}})</p>
                </div>

            </div>
        </div>
  `,
  data() {
    return {
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
    }
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
    },
    sale() {
      if (this.onSale) {
        return this.brand + ' ' + this.product + ' are on sale!'
      }
        return  this.brand + ' ' + this.product + ' are not on sale'
    },
    shipping() {
      if (this.premium) {
        return "Free"
      }
      return 2.99
    }
  }
})

//Add a description to the data object with the value "A pair of warm, fuzzy socks". Then display the description using an expression in an p element, underneath the h1.



var app = new Vue({
    el: '#app',
    data: {
      premium: true
    }
  })
  