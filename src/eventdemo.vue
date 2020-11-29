<template>
    <div>
        <form>
            <input type="text" v-model="username" />
            <button @click="login($event)">submit</button>
            <button @click.prevent="login1()">submit by eventmodifier</button>
        </form>
    </div>
</template>
<script>
export default {
    name:"eventdemo",
    data(){
        return{
            username:''
        }
    },
    methods:{
        login(eve){
            eve.preventDefault();
            this.username='vinyas'
        },
        login1(){
           
            this.username='vinyas'
        }
    }
}
</script>