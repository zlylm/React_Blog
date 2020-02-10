import React,{useState} from 'react'
import Link from 'next/link'
import {Row,Col,List,Icon} from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import {getArticleList} from '../api/index'
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
                <Link href={{pathname:'/detail',query:{id:item.id}}}>
                  <a className="list-title">{item.title}</a>
                </Link>
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

Home.getInitialProps = async ()=>{
  let res = await getArticleList({},'get')
  let result = []
  if (res.status == 200) {
    result = res.data
  }
  return result
}

export default Home
