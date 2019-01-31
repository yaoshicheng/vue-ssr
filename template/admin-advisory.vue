<template>
    <div>
        <div class="advisory">
            <h1>致力于人工智能基础研究和应用开发</h1>
            <div class="company">
                <div>深兰科技（上海）有限公司</div>
                <div>DeepBlue Technology (Shanghai) Co.,Ltd</div>
            </div>
            <!--<div><Button>免费咨询</Button></div>-->
        </div>
    </div>
</template>
<script>
    export default {
        data() {
            return {
                active:''
            };
        },
        mounted(){
            //切换nav
            this.active = this.$route.name;
            this.$nextTick(function () {
                if (this.$refs.adminMenu) {
                    this.$refs.adminMenu.updateOpened();
                    this.$refs.adminMenu.updateActiveName();
                }
            });
        },
        methods: {
            selectMenuItem(name){
                this.active = name;
                let _open = this.active.split('-')[0];
                localStorage.openList = JSON.stringify([_open]);
                this.$router.push('/' + name);
            },
        }
    };
</script>
<style lang="scss">
    @import '../assets/css/admin-advisory';
</style>