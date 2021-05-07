<template>
    <div>
        <order-header/>
        <router-view/>
        <order-footer/>

    </div>
</template>



<script>
import OrderFooter from '../components/Header/OrderHeader.vue'
import OrderHeader from '../components/Header/OrderHeader.vue'

    export default {
        components: {
            OrderHeader,
                OrderFooter            
        }
    }
</script>

<style lang="scss" scoped>

</style>