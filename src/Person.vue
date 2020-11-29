<template>
    <div>
        parent component
        <employee :empname="name" :empcity="city" />
    </div>
</template>
<script>
import employee from './Employee.vue'
export default {
    name:"person",
    components:{
        employee
    },
    data(){
        return{
            name:'vinyas',
            city:'tumkur'
        }
    }
}
</script>