<style scoped>

</style>

<template>
<div id="app">
    <h2>{{msg}}</h2>
    <Child1/>
    <Child2/>
    <Module1/>
</div>
</template>

<script>
import Child1 from './components/Child1';
import Child2 from './components/Child2';
import Module1 from './components/Module1';

export default {
        /* pdtmc^2w */
        props: [] ,
        data: function() {
            return {

            }
        },
        //template: ``,
        methods: {

        },
        components: {
            /* 컴포넌트 등록. 예시) "태그명" : 컴포넌트명 */

        },
        computed: {
            /* 자동처리 + 동기식. 메서드로 작성. return 필수. */
            'Child1':Child1,
            'Child2':Child2,
            'Module1':Module1
        },
        watch: {
            /* 자동처리 + 비동기식. data 에 등록된 프로퍼티 모니터링. 메서드로 작성. 매개변수 입력 필수  */

        },
        mounted: function() {
            console.log("mounted");
        },
        updated: function() {
            console.log("updated");
        },
    }
</script>