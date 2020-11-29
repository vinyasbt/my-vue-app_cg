<template>
    <div>
        <p>My name is {{user}}</p>
        <input type="password" v-model="pass" />
        <button @click="changename()">change</button>
    </div>
</template>
<script>
export default {
    name:"watcherdemo",
    data(){
        return{
            user:'bt',
            pass:''
        }
    },
    methods:{
        changename(){
            this.user='vinyas'
        }
    },
    watch:{
        user(){
            console.log(this.user);
        },
        pass(newVal,oldVal){
            console.log(newVal,oldVal);
        }
    }
}
</script>