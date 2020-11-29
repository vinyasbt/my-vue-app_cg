<template>
    <div>
        <input type="text" v-model="task" />
        <button v-on:click="addTask()">Add Task</button><br />
        <button v-on:click="alltodo()">All</button>
        <button v-on:click="activetodo()">active</button>
        <button v-on:click="completedtodo()">completed</button>
        <ul v-if="allflag">
            <li v-for="(t,index) in todolist" :key="t">
                {{t}}
                <button v-on:click="removeTask(index)">Remove</button></li>
                <li v-for="c in completed" :key="c">
                <div class="overlinestyle">{{c}}</div>
            </li>
        </ul>
         <ul v-if="activeflag">
            <li v-for="(a,index) in active" :key="index">
                {{a}}
                <button v-on:click="removeTask(index)">Remove</button></li>
        </ul>
        <ul v-if="completedflag">
            <li v-for="c in completed" :key="c">
                <div class="overlinestyle">{{c}}</div>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    name:"todo",
    data(){
        return{
            todolist:[],
            active:[],
            completed:[],
            task:'',
            allflag:false,
            activeflag:false,
            completedflag:false
        }
    },
    methods:{
        addTask(){
            this.todolist.push(this.task);

            this.active.push(this.task);
            // this.todolist=[...this.active,...this.completed]
        },
        removeTask(ind){
           this.completed.push(this.todolist.splice(ind,1));
           this.active.splice(ind,1);
        },
        alltodo(){
            this.activeflag=false;
            this.completedflag=false;
            this.allflag=true;
        },
        activetodo(){
            this.allflag=false;
            this.completedflag=false;
            this.activeflag=true;
        },
        completedtodo(){
            this.allflag=false;
            this.activeflag=false;
            this.completedflag=true;
        }
    }
}
</script>
<style  scoped>
.overlinestyle{
    text-decoration: line-through;
}
</style>