<template>
    <div class="main">
        
        <div class="image">
            <img :src="product.imgurl" />
        </div>
        <div  class="content">
            <div>ID:{{product.id}}</div>
        <div>NAME:{{product.name}}</div>
        <div>PRICE:{{product.price}}</div>
        <div><a href="#" @click.prevent="incrementlikes(product.id)">Likes:{{product.likes}}</a></div>
        <div><button @click="addtocart(product.id)">Add to cart</button></div>
        </div>
       <p><slot name="demo" /></p> 
       <!-- accessing naming slot -->
       <p><slot  /></p> 
       <!-- accessing  slot -->
    </div>
</template>
<script>
export default {
    name:"singleproduct",
    props:{
        product:Object,
        incrementlikes:Function
        
    },
    methods:{
        addtocart(id){
            this.$emit("clickhandleevent",id)
        }
    }
}
</script>
<style scoped>
.main{
    width: 300px;
    height:100px;
    border: 1px solid black;
    margin-left: 100px;
}
.image{
    width:10px;
    height: 100%;
    float: left;
}
.content{
    width:90px;
    height: 100%;
    float:right;
}
</style>