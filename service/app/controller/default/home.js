'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
    async test(){
        const {ctx,app} = this;
        let result = await app.mysql.get('blog_context')
        ctx.body = result
    }
    // 获取文章列表
    async getArticleList(){
        const {ctx,app} = this;
        let sql = 'SELECT article.id as id,' + 
                  'article.title as title,' +
                  'article.introduce as introduce,' +
                  'article.create_time as createTime,' +
                  'article.view_count as viewCount,' +
                  'article_type.type_name as typeName'+
                  ' FROM blog_article AS article LEFT JOIN blog_article_type AS article_type ON article.type_id = article_type.Id'
        let result = await app.mysql.query(sql)
        ctx.body = {
            data: result
        }
    }

    // 获取文章详情
    async getArticleById(){
        const {ctx,app} = this;
        // 需要先在路由配置动态传值
        let id = ctx.request.body.id;
        let sql = 'SELECT article.id as id,' + 
                  'article.title as title,' +
                  'article.introduce as introduce,' +
                  'article.content as content,'+
                  "FROM_UNIXTIME(article.create_time,'%Y-%m-%d %H:%i:%s' ) as createTime,"+
                  'article.view_count as viewCount,' +
                  'article_type.type_name as typeName'+
                  ' FROM blog_article AS article LEFT JOIN blog_article_type AS article_type ON article.type_id = article_type.Id' +
                  ' WHERE article.id ='+id;
        let result = await app.mysql.query(sql)
        ctx.body = {
            data: result[0]
        }
    }

    // 获取文章分类标签
    async getTypeNameList(){
        const {ctx,app} = this;
        let result = await app.mysql.select('blog_article_type')
        ctx.body = {
            data: result
        }
    }

    // 根据分类获取相应的文章列表
    async getArticleByTypeId(){
        const {ctx,app} = this;
        let id = ctx.request.body.id;
        let sql = 'SELECT article.id as id,' + 
                  'article.title as title,' +
                  'article.introduce as introduce,' +
                  'article.create_time as createTime,' +
                  'article.view_count as viewCount,' +
                  'article_type.type_name as typeName'+
                  ' FROM blog_article AS article LEFT JOIN blog_article_type AS article_type ON article.type_id = article_type.Id' + 
                  ' WHERE article.type_id ='+id;
        let result = await app.mysql.query(sql)
        ctx.body = {
            data: result
        }
    }
}

module.exports = HomeController
