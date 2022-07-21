<template>
    <div v-if="products.length">
        <b-card-group columns>
            <product-item
                v-for="product in products"
                :product="product"
                :key="product.id"
                @addToCart="addProductToCart"
            ></product-item>
        </b-card-group>
    </div>
    <b-alert v-else show variant="info">No hay productos que mostrar</b-alert>
</template>

<script>
    import {mapActions, mapMutations, mapState} from 'vuex'
    import ProductItem from './ProductItem'
    export default {
      components: {
        ProductItem
      },
      mounted () {
        this.fetchProducts()
      },
      computed: {
        ...mapState('products', ['products'])
      },
      methods: {
        ...mapActions('products', ['fetchProducts']),
        ...mapMutations('cart', ['addProduct']),
        addProductToCart (product) {
          this.addProduct(product)
        }
      }
    }
</script>