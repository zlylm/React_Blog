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
}

module.exports = HomeController
