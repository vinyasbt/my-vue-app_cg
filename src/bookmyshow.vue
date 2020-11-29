<template>
    <div>
        <label>Enter Ticket Count</label>
        <input type="number" name="count" v-model="count" /><br />
        <button v-on:click="totalPrice()">Submit</button>
    </div>
</template>
<script>
export default {
    name:"bookmyshow",
    data(){
        return{
            count:0,
            baseprice:150
        }
    },
    methods:{
        totalPrice(){
            alert(this.baseprice*this.count)
        }
    }
}
</script>