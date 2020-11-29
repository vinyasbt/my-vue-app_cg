<template>
    <div>
        <h2>Products Available</h2>
        <ul>
            <li v-for="(p,index) in products" :key="index">
                {{p.name}} {{p.cost}}
                <button v-on:click="cartitem(p)">Add to Cart</button></li>
        </ul>
         <ul>
            <li v-for="c in cart" :key="c">
                {{c.name}} {{c.cost}}
                
            </li>
        </ul>
        <p>Total Price={{totalprice}}</p>
    </div>
</template>
<script>
export default {
    name:"shoppingcart",
    data(){
        return{
            products:[
                {name:'iphone',cost:10000},
                {name:'ipad',cost:20000},
                {name:'oneplus',cost:40000}
            ],
            cart:[],
            totalprice:0
        }
    },
    methods:{
        cartitem(item){
            this.cart.push(item);
            this.totalprice=item.cost+this.totalprice;
        }
      

    }
    
}
</script>