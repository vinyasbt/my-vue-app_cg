<template>
    <div>
        <ul>
            <li v-for="n in nums" :key="n">{{n}}</li>
        </ul>
    </div>
</template>
<script>
import {EventBus} from './EventBus.js'
export default {
    name:"numberdisplay",
    data(){
        return{
            nums:[]
        }
    },
    created(){
        EventBus.$on("numberadded",(n)=>{
            this.nums.push(n);
        })
    }
}
</script>