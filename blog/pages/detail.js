import React,{useState} from 'react'
import {Row,Col,Icon,Breadcrumb,Affix} from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'
import {getArticleById} from '../api/index'

import '../public/less/pages/detail.less'

const Detail = (props)=> {
    const [articleData,setArticleData] = useState(props.data)
    return (
        <div>
            <Header />
            <Row type="flex" justify="center" className="comm-main">
                <Col sm={15} xs={24} className="comm-left">
                    <Breadcrumb className="bread-main">
                        <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
                        <Breadcrumb.Item><a href="/">视频列表</a></Breadcrumb.Item>
                        <Breadcrumb.Item>xxx</Breadcrumb.Item>
                    </Breadcrumb>
                    <div className="article-title">{articleData.title}</div>
                    <div className="list-icon">
                        <span><Icon type="calendar" /> {articleData.createTime}</span>
                        <span><Icon type="folder" /> {articleData.typeName}</span>
                        <span><Icon type="fire" /> {articleData.viewCount}人</span>
                    </div>
                    <div className="detail-context">
                        <ReactMarkdown
                            source={articleData.content}
                            escapeHtml={false}
                        />
                    </div>
                </Col>
                <Col sm={5} xs={0} className="comm-right">
                    <Author />
                    <Advert />
                    <Affix>
                        <MarkNav
                            className="article-nav"
                            source={articleData.content}
                            ordered={false}
                        />
                    </Affix>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}

Detail.getInitialProps = async (context) => {
    let id = context.query.id
    let res = await getArticleById({id})
    let result = {}
    if (res.status == 200) {
        result = res.data;
    }
    return result;
}

export default Detail