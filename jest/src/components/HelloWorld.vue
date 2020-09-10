<template>
    <div>
        <span>{{ message }}</span>
        <my-component msg="message"></my-component>
    </div>
</template>

<script>
import myComponent from './myComponent.vue'
export default {
    name: "HelloWorld",
    components: { myComponent },
    data () {
        return {
            message: 'hello!'
        }
    },
    created () {
        this.message = 'bye!'
    }
}
</script>