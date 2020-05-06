<template>
     <div>осталось выполнить {{ remaining }}</div>
</template>

<script>
export default {
    name: 'todo-remainig',
    props: {
        remaining: {
            type: Number,
            required: true,
        }
    }
}
</script>