import React,{useState,useEffect} from 'react'
import {Row,Col,List,Icon,Breadcrumb} from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {getArticleByTypeId} from '../api/index'

const ArtList = (props) => {
  const [articleList,setArticleList] = useState(props.data || [])
  useEffect(()=>{
    setArticleList(props.data)
   })
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row type="flex" justify="center" className="comm-main">
        <Col sm={15} xs={24} className="comm-left">
          <Breadcrumb>
            <Breadcrumb.Item><a href="/">首页</a></Breadcrumb.Item>
            <Breadcrumb.Item>视频列表</Breadcrumb.Item>
          </Breadcrumb>
          <List
            header="最近更新"
            itemLayout="vertical"
            dataSource={articleList}
            renderItem={item=>(
              <List.Item className="article-list">
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><Icon type="calendar" /> {item.createTime}</span>
                  <span><Icon type="folder" /> {item.typeName}</span>
                  <span><Icon type="fire" /> {item.viewCount}人</span>
                </div>
                <div className="list-context">{item.introduce}</div>
              </List.Item>
            )}
          >

          </List>
        </Col>
        <Col sm={5} xs={0} className="comm-right">
          <Author />
          <Advert />
        </Col>
      </Row>
      <Footer />
    </div>
  )
}

ArtList.getInitialProps = async (ctx)=>{
  let id = ctx.query.typeId
  let res = await getArticleByTypeId({id})
  let result = []
  if (res.status == 200) {
    result = res.data
  }
  return result
}

export default ArtList
