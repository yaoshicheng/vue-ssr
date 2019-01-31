<template>
    <header>
        <div class="header" :class="{'headerHide':!headerInfo}">
            <Row class="header-info" :class="[headerInfo?'fade-enter-active':'fade-leave-active']">
                <span>
                     <!--<object data="../../img/regist.svg" width="300" height="100"-->
                    <!--type="image/svg+xml"/>-->
                    <img src="../static/img/mail.png" height="10" width="13"/>
                    <a href="mailto:market@deepblueai.com">market@deepblueai.com</a>
                </span>
                <span>
                      <img src="../static/img/phone.png" height="13" width="12"/>
                    <a href="tel:400-117-7928">400-117-7928</a>

                </span>
                <span>
                    <img src="../static/img/note.png" height="12" width="13"/>
                    客服交流
                </span>
            </Row>
            <div class="header-nav">
                <div>
                <img src="../static/img/deepblue-logo.png" height="62" width="133"/>
                </div>
                <div>
                <Menu mode="horizontal" ref="adminMenu" :active-name="active"
                      @on-select="selectMenuItem">
                    <MenuItem name="index">
                        首页
                    </MenuItem>
                    <MenuItem name="follow-us">
                        关于深兰
                    </MenuItem>
                    <MenuItem name="solution">
                        解决方案
                    </MenuItem>
                    <MenuItem name="win-win">
                        合作共赢
                    </MenuItem>
                    <MenuItem name="hot-news" :class="{'ivu-menu-item-active ivu-menu-item-selected':navBottom}">
                        新闻资讯
                    </MenuItem>
                    <MenuItem name="contact-us">
                        联系我们
                    </MenuItem>
                </Menu>
                </div>
            </div>
        </div>
        <img v-if="!headerInfo" @click="jumpTop()" class="top" src="../static/img/top.jpg">
    </header>
</template>
<script>
    export default {
        data() {
            return {
                active: '',
                headerInfo: true,
                changeHeaderOn: 100,
                navBottom:false
            };
        },
        methods: {
            selectMenuItem(name) {
                this.active = name;
                let _open = this.active.split('-')[0];
                localStorage.openList = JSON.stringify([_open]);
                if(name !=="index"){
                    this.$router.push('/' + name);
                }else{
                    this.$router.push('/' );
                }
            },

            scrollPage() {
                let sy = this.scrollY();
                if (sy >= this.changeHeaderOn) {
                    this.headerInfo = false;
                } else {
                    this.headerInfo = true;
                }
                this.didScroll = false;
            },

            scrollY() {
                return window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            },

            // 返回顶部
            jumpTop(){
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
            }
        },
        mounted() {
            //切换nav
            this.active = this.$route.name;
            this.$nextTick(function () {
                if (this.$refs.adminMenu) {
                    this.$refs.adminMenu.updateOpened();
                    this.$refs.adminMenu.updateActiveName();
                }
            });

            // 监听滚动条
            window.addEventListener('scroll', this.scrollPage, false);
            if(this.$route.name == 'new-detail'){
                this.navBottom = true;
            }

        },
        // created(){
        //     document.body.scrollTop = 0;
        //     document.documentElement.scrollTop = 0;
        // }
    };
</script>
<style lang="scss">
    @import '../assets/css/admin-header';
</style>