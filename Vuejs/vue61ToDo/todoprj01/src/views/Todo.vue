<style scoped>
body {
    text-align: center;
    background-color: #f6f6f8;
}
input {
    border-style: groove;
    width: 200px;
}
button {
    border-style: groove;
}
.shadow {
    box-shadow: 5px 10px 10px rgba(0, 0, 0, 0.03);
}
</style>

<template>
    <div id="app">
        <!-- TodoHeader -->
        <TodoHeader></TodoHeader>
        <TodoInput v-on:addTodo="addTodo"></TodoInput>
        <TodoList v-bind:todoItems="todoItems"
                      v-on:doneToggle="doneToggle"
                      v-on:removeTodo="removeTodo"
        ></TodoList>
        <TodoFooter v-on:clearAll="clearAll"></TodoFooter>
    </div>
</template>

<script>
import TodoHeader from "./../components/todo/TodoHeader";
import TodoInput from "./../components/todo/TodoInput";
import TodoList from "./../components/todo/TodoList";
import TodoFooter from "./../components/todo/TodoFooter";

export default {
    /* pdtmc^2w */
    props: [],
    data: function () {
        return {
            todoItems:[
                { id: 1, todo:"영화보기", done: false}
                ,{ id: 2, todo:"주말 산책", done: true}
                ,{ id: 3, todo: "ES6 학습", done: false}
                ,{ id: 4, todo: "잠실 야구장", done: false}
            ]
        };
    },
    //template: ``,
    methods: {
        addTodo: function(newTodoItem) {
            // create. store "addTodo" dispatch
        },
        doneToggle: function(id, index) {
            // update. store의 "doneToggle" dispatch
        },
        removeTodo: function(id, index) {
            // delete each. store의 "removeTodo" dispatch
        },
        clearAll: function() {
            // delete all. store의 "clearAll" dispatch
        }
    },
    components: {
        /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */
        TodoHeader: TodoHeader,
        TodoInput: TodoInput,
        TodoList: TodoList,
        TodoFooter:TodoFooter
    },
    computed: {
        /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
    },
    watch: {
        /* 자동처리 + 비동기식. data 에 등록된 프로퍼티 모니터링. 메서드로 작성. 매개변수 입력 필수  */
    },
    mounted: function () {
        console.log("mounted");
    },
    updated: function () {
        console.log("updated");
    }
};
</script>
