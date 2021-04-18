<style scoped>

</style>

 <template>
                <div class="signup">
                    <h1>This is an signup page</h1>
                    <user-register></user-register>
                </div>
            </template>

<script>
    import UserRegister from "./../components/user/UserRegister"

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
            'user-register':UserRegister,

        },
        computed: {
            /* 자동처리 + 동기식. 메서드로 작성. return 필수. */

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