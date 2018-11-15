const app = new Vue({
  el: '#app',
  data: {
    product: 'Socks',
    image: '/img/socks_black.jpg',
    inStock: false,
    details: ['80% Cotton', '20% polyester', 'Gender-neutral'],
    cart: 0,
    variants: [{
      variantId: 1111,
      variantColor: 'white',
      variantImage: '/img/socks_white.jpg',
    }, {
      variantId: 2222,
      variantColor: 'black',
      variantImage: '/img/socks_black.jpg',
    }],
  },
  methods: {
    updateProduct(image) {
      this.image = image
    }
  }
});


