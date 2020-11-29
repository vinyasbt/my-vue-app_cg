<template>
    <div>
        <label>Category</label>
        <select v-model="cat">
            <option v-for="c in category" :key="c">{{c}} </option>
        </select>
        <div v-if="cat=='electronics'">
             <label>Product</label>
        <select v-model="productname">
            <option v-for="ce in cat_ele" :key="ce">{{ce}} </option>
        </select>
        </div>
        <div v-else-if="cat=='grocery'">
             <label>Product</label>
        <select v-model="productname">
            <option v-for="cg in cat_gro" :key="cg">{{cg}} </option>
        </select>
        </div>
         <p>Quantity:
            <input type="number" v-model="quantity" />
        </p>
        <p>Total amount:
            <input type="number" v-model="totalprice" readonly />
        </p>
        <button v-on:click="calculate()">Submit</button>
    </div>
</template>
<script>
export default {
    name:"categoryandproduct",
    data(){
        return{
            category:['electronics','grocery'],
            cat_ele:['Tv','phone','laptop'],
            cat_gro:['soap','powder'],
            cat:'',
            quantity:0,
            totalprice:0,
            productname:''
        }
    
    },
    methods:{
        calculate(){
            if(this.productname=="tv"){
                this.totalprice=this.quantity*30000;
            }
            else if(this.productname=="phone"){
                this.totalprice=this.quantity*10000;
            }
            else if(this.productname=="laptop"){
                this.totalprice=this.quantity*50000;
            }
            else if(this.productname=="soap"){
                this.totalprice=this.quantity*30;
            }
            else if(this.productname=="powder"){
                this.totalprice=this.quantity*100;
            }
        }
    }
}
</script>