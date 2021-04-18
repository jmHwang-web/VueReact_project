<style scoped>

</style>

<template>
                <div class="col-md-3 mt-4">
                    <h1 class="text-center">Login</h1>
                    <template v-if="!isLogin">
                        <form name="loginF" method="POST" v-on:submit.prevent="login">
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    User ID:
                                    <input type="text" name="id" v-model="tmpUser.uid" ref="uid" placeholder="User ID" class="form-control" />
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-10 offset-md-1">
                                    PASSWORD:
                                    <input type="password" name="pwd" v-model="tmpUser.pwd" ref="upwd" placeholder="Password" class="form-control" />
                                </div>
                            </div>
                            <div class="col-md-10 offset-md-1 p-1">
                                <button class="btn btn-block btn-primary mt-3">
                                    Login
                                </button>
                            </div>
                        </form>
                        <div>
                            <p>
                                로그인 테스트용: ID / PW<br />
                                uid01 / pwd01<br />
                                uid02 / pwd02<br />
                                <br />
                                로그인 테스트 URL: http://localhost:5050/user/login?uid=uid01&pwd=pwd01<br />
                            </p>
                        </div>
                    </template>
                    <template v-else>
                        <div class="alert alert-primary m-4">
                            <h4 class="text-primary">{{ user.uid }}님 로그인 중...</h4>
                            <a href="#" v-on:click="logout">로그아웃</a>
                        </div>
                    </template>
                </div>
            </template>

<script>
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