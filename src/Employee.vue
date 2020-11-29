<template>
    <div>Employee component<br />
        Name:{{empname}}<br />
        City: {{empcity}}<br />
        Age:{{empage}}
    </div>
</template>
<script>
export default {
    name:'employee',
    props:{
        empcity:String,
        empname:{
            type:String,
            required:true//making empname as mandatory
        },
        empage:{
            type:Number,
            default:23//giving default value to prop
        }
    }
}
</script>