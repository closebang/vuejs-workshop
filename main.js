Vue.component('product', {
  props: {
    premium: {
      type: Boolean,
      required: true
    }
  },
  template: `
    <div class="product">
        <div class="product-image">
          <img :src="image" />
        </div>
        <div class="product-info">
          <h1>{{title}}</h1>
          <p v-if="inStock"> In Stock</p>
          <p v-else> Out of Stock</p>
          <p>Shipping: 
            <span v-if="premium"> Free</span>
            <span v-else> 4.99</span>
          </p>
          <ul>
            <li v-for="detail in details">{{detail}}</li>
          </ul>

          <div
            class="color-box"
            v-for="(variant, index) in variants"
            :key="variant.variantId"
            :style="{ backgroundColor: variant.variantColor }"
            @mouseover="updateProduct(index)"
          >
          </div>

          <button v-on:click="addToCart"
                  :disabled="!inStock"
                  :class="{ disabledButton: !inStock }" >Add to cart</button>

          <div class="cart">
            <p>Cart ({{cart}})</p>
          </div>

        </div>

      </div>
  `,
  data () {
    return {
      brand: 'Erasys',
      product: 'Socks',
      details: ['80% Cotton', '20% polyester', 'Gender-neutral'],
      selectedVariant: 0,
      cart: 0,
      variants: [{
        variantId: 1111,
        variantColor: 'white',
        variantImage: '/img/socks_white.jpg',
        variantQuantity: 0,
      }, {
        variantId: 2222,
        variantColor: 'black',
        variantImage: '/img/socks_black.jpg',
        variantQuantity: 10,
      }],
    }
  },
  methods: {
    updateProduct(index) {
      this.selectedVariant = index;
    },
    addToCart() {
      this.variants[this.selectedVariant].variantQuantity -= 1;
      this.cart += 1;
    }
  },
  computed: {
    title() {
      return this.brand + ' ' + this.product;
    },
    image() {
      return this.variants[this.selectedVariant].variantImage;
    },
    inStock() {
      return this.variants[this.selectedVariant].variantQuantity;
    },
  }
});


const app = new Vue({
  el: '#app',
  data: {
    premium: true
  }
});




