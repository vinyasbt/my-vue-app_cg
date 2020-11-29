<template>
    <div>
        <input type="number" v-model="num" />
        <button @click="addNumber()">Submit</button>
    </div>
</template>
<script>
import {EventBus} from './EventBus.js'
export default {
    name:"numbersubmit",
    data(){
        return{
            num:0
        }
    },
    methods:{
        addNumber(){
            EventBus.$emit("numberadded",this.num);
        }
    }
}
</script>