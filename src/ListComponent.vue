<template>
<div>
<ul>
<li v-for="c in cources" :key="c">{{c}}</li>
</ul>
<select>
<option v-for="c in cources" :key="c">{{c}}</option></select>
<table><tr> 
<th>ID</th>
<th>NAME</th>
<th>CITY</th></tr>
<tr v-for="p in products" :key="p.id">
<td>{{p.id}}</td>
<td>{{p.name}}</td>
<td>{{p.city}}</td></tr>
</table>
</div>
</template>
<script>
export default {
    name:"ListComponent",
    data(){
        return{
            cources:['java','vue','angular','react'],
            products:[
                {id:1,name:'vinyas',city:'tmk'},
                {id:2,name:'paresh',city:'bng'},
                {id:3,name:'santosh',city:'kar'},
            ]
        }
    }
};
</script>