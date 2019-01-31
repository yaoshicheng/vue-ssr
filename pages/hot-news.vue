
<template>
    <div>
        <div class="hot-news">
            <!--<div class="about-us">-->
                <!--<div class="ch-text">热 点 新 闻</div>-->
                <!--<div class="zh-text">HOT NEWS</div>-->
                <!--<div class="title">关于我们 / <span class="blue-text">热点新闻</span></div>-->
            <!--</div>-->
            <div style="min-height:300px;">
                <Row class="articleList" type="flex" justify="center" v-for="list in newsList" v-if="total!= 0">
                    <Col span="9" class="articleImg">
                    <img :src="list.NewsImage" alt="图片未找到">
                    </Col>
                    <Col span="12" class="articleContent">
                    <h2>{{list.NewsTitle}}</h2>
                    <div>{{list.NewsSubTitle}}</div>
                    <router-link :to="{path:'/new-detail',query:{newId:list.NewsId}}" target="_blank">阅 读 全 文</router-link>
                    </Col>
                </Row>
                <div class="pages" v-if="total!= 0">
                    <Page :total="total" :page-size="size" @on-change="loadMore" show-total></Page>
                </div>
                <div class="noData" v-if="total== 0">暂无新闻！</div>
            </div>
        </div>
    </div>
</template>

<script>
    import AdminHeader from '../template/admin-header';
    import AdminAdvisory from '../template/admin-advisory';
    import AdminFooter from '../template/admin-footer';
    import HotNews from '../services/hot-news.service';
    export default {
        layout: 'main',
        data(){
            return{
                newsList:[],
                page:1,
                total:null,
                size:6
            };
        },
        methods: {
            loadMore(page) {
                document.body.scrollTop = 0;
                document.documentElement.scrollTop = 0;
                this.page=page;
                HotNews.GetNews( this.page, this.size,2).then((res) => {
                    if (res.data.Code === 1) {
                        this.newsList=res.data.Data.LstHotNewsInfo;
                        this.total=res.data.Data.TotalCount;
                    } else {
                        this.$Message.error({
                            content: res.data.Msg,
                            duration: 0.5
                        });
                    }
                }, () => {
                    this.$Message.warning('网络错误');
                });
            },
        },
        mounted() {
            this.loadMore(1);
        },
    };
</script>
<style lang="scss">
    @import '../assets/css/hot-news';
</style>