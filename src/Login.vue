<template>
    <div>
Username:<input type="text" name="username" v-model="username" /><br />
password:<input type="password" name="password" v-model="password" /><br />
<button v-on:click="showData()">Submit</button>
{{username}}
{{password}}

    </div>
</template>
<script>
export default {
    name:"Login",
    data(){
        return{
            username:'',
            password:''
        };
    },
    methods:{
        showData(){
            alert(this.username+" "+this.password)
        }
    }
}
</script>
<style  scoped>

</style>