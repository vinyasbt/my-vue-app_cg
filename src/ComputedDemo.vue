<template>
    <div>{{count}}</div>
</template>
<script>
export default {
    name:"computeddemo",
    data(){
        return{
            nums:[1,2,3,4]
        }
    },
    computed:{
        //it is not a method, So it can trigger directly without any event 
        count(){
            return "count of array"+this.nums.length;
        }
    }
}
</script>