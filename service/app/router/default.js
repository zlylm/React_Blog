module.exports = app=> {
    const {router,controller} = app;
    router.get('/default/list',controller.default.home.test)
    router.get('/default/getArticleList',controller.default.home.getArticleList)
}