<template>
     <div>осталось выполнить {{ remaining }}</div>
</template>

<script>
export default {
    name: 'todo-remainig',
    computed: {
        remaining () {
            return this.$store.getters.remaining
        }
    }
}
</script>