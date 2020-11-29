<template>
    <div>
        <table>
            <tr><th>ID</th>
            <th>NAME</th>
            <th>PRICE</th>
            </tr>
            <tr v-for="p in products" :key="p">
                <td>{{p.id}}</td>
                <td>{{p.name}}</td>
                <td>{{p.price}}</td>
            </tr>
        </table>
    </div>
</template>
<script>
import {getAll, addproduct, update, remove} from './product.service.js'
export default {
    name:"crud",
    data(){
        return{
            products:[]
        }
    },
    methods:{
        add(){
            let p={name:"watch",price:258}
            addproduct(p).then(()=>{
                alert('added')
            });
        },
        update(){
            let p={id:2,name:"mouse",price:111}
            update(p).then(()=>{
                alert('updated')
            })
        },
        remove(){
            remove(2).then(()=>{
                alert('deleted')
            })
        }
    },
    created(){
        getAll().then(res=>(this.products=res.data));
    }

}
</script>