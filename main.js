const app = new Vue({
  el: '#app',
  data: {
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


