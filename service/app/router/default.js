module.exports = app=> {
    const {router,controller} = app;
    router.get('/default/list',controller.default.home.test)
    router.get('/default/getArticleList',controller.default.home.getArticleList)
    router.get('/default/getTypeNameList',controller.default.home.getTypeNameList)
    router.post('/default/getArticleById',controller.default.home.getArticleById)
    router.post('/default/getArticleByTypeId',controller.default.home.getArticleByTypeId)
}