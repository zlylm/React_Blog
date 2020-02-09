import React,{useState} from 'react'
import {Row,Col,List,Icon} from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {test} from '../api/index'
import '../public/less/pages/index.less'

const Home = (props) => {
  const [articleList,setArticleList] = useState(props.data)
  return (
    <div>
      <Head>
        <title>My Blog</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Row type="flex" justify="center" className="comm-main">
        <Col sm={15} xs={24} className="comm-left">
          <List
            header="最近更新"
            itemLayout="vertical"
            dataSource={articleList}
            renderItem={item=>(
              <List.Item className="article-list">
                <div className="list-title">{item.title}</div>
                <div className="list-icon">
                  <span><Icon type="calendar" /> 2019-06-28</span>
                  <span><Icon type="folder" /> 视频教程</span>
                  <span><Icon type="fire" /> 5498人</span>
                </div>
                <div className="list-context">{item.context}</div>
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

Home.getInitialProps = async ()=>{
  let res = await test({},'get')
  let result = []
  if (res.status == 200) {
    result = res.data
  }
  return result
}

export default Home
