<template>
    <div>
        <p v-for="p in products" :key="p.id">
            <singleproduct :product="p" :incrementlikes="updatelikes" @clickhandleevent="handleevents">
                Specification 1GB RAM,16 GB ROM
                <h3 slot="demo">Product Component</h3>
                </singleproduct>
        </p>
    </div>
</template>
<script>
import singleproduct from './singleproduct.vue';
export default {
    name:"productlist",
    components:{
        singleproduct
    },
    data(){
        return{
            products:[
                {likes:1,id:1,name:'apple',price:30,imgurl:'panda.jpg'},
                {likes:1,id:2,name:'orange',price:40,imgurl:'pp.jpg'},
                {likes:1,id:3,name:'pineapple',price:50,imgurl:'pp.jpg'},
                {likes:1,id:4,name:'watermelon',price:60,imgurl:'pp.jpg'},
            ]
        }
    },
    methods:{
        updatelikes(id){
            this.products.map((p)=>{
                if(p.id==id){
                    p.likes+=1;
                }
            })
        },
        handleevents(id){
            alert(id)
        }
    }
}
</script>