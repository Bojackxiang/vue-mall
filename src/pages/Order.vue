<template>
    <div>
        <order-header/>
        <router-view/>
        <order-footer/>

    </div>
</template>



<script>
import OrderFooter from '../components/OrderHeader.vue'
import OrderHeader from '../components/OrderHeader.vue'

    export default {
        components: {
            OrderHeader,
                OrderFooter            
        }
    }
</script>

<style lang="scss" scoped>

</style>