import React,{useState} from 'react'
import {Row,Col,Icon,Breadcrumb,Affix} from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import ReactMarkdown from 'react-markdown'
import MarkNav from 'markdown-navbar'

import '../public/less/pages/detail.less'

const Detail = ()=> {
    let markdown='# P01:课程介绍和环境搭建\n' +
  '[ **M** ] arkdown + E [ **ditor** ] = **Mditor**  \n' +
  '> Mditor 是一个简洁、易于集成、方便扩展、期望舒服的编写 markdown 的编辑器，仅此而已... \n\n' +
   '**这是加粗的文字**\n\n' +
  '*这是倾斜的文字*`\n\n' +
  '***这是斜体加粗的文字***\n\n' +
  '~~这是加删除线的文字~~ \n\n'+
  '\`console.log(111)\` \n\n'+
  '# p02:来个Hello World 初始Vue3.0\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n'+
  '***\n\n\n' +
  '# p03:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p04:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '#5 p05:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p06:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '# p07:Vue3.0基础知识讲解\n' +
  '> aaaaaaaaa\n' +
  '>> bbbbbbbbb\n' +
  '>>> cccccccccc\n\n'+
  '``` var a=11; ```'
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
                    <div className="article-title">create-react-app项目暴露webpack配置文件</div>
                    <div className="list-icon">
                        <span><Icon type="calendar" /> 2019-06-28</span>
                        <span><Icon type="folder" /> 视频教程</span>
                        <span><Icon type="fire" /> 5498人</span>
                    </div>
                    <div className="detail-context">
                        <ReactMarkdown
                            source={markdown}
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
                            source={markdown}
                            ordered={false}
                        />
                    </Affix>
                </Col>
            </Row>
            <Footer />
        </div>
    )
}
export default Detail