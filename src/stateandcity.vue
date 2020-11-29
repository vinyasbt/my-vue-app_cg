<template>
    <div>
        <label>State</label>
        <select v-model="statename">
            <option v-for="s in states" :key="s">{{s}}</option>
        </select>
         <div v-if="statename=='karnataka'">
             <label>City</label>
        <select v-model="city">
            <option v-for="c in st_kar" :key="c">{{c}} </option>
        </select>
        </div>
        <div v-if="statename=='telangana'">
             <label>City</label>
        <select v-model="city">
            <option v-for="c in st_te" :key="c">{{c}} </option>
        </select>
        </div>
        
       
    </div>
</template>
<script>
export default {
    name:"stateandcity",
    data(){
        return{
            states:['karnataka','telangana'],
            st_kar:['bangalore','tumkur'],
            st_te:['hyderabad','gachibowli'],
            statename:'',
            city:''
        }
    }
}
</script>