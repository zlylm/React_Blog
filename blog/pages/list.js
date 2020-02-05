import React,{useState} from 'react'
import {Row,Col,List,Icon,Breadcrumb} from 'antd'
import Head from 'next/head'
import Header from '../components/Header'
import Author from '../components/Author'
import Advert from '../components/Advert'
import Footer from '../components/Footer'

const ArtList = () => {
  const [articleList,setArticleList] = useState([
    {title:'create-react-app项目暴露webpack配置文件',context:'create-react-app创建的react项目，webapck配置，默认情况下是在node_modules里面的，我们需要把它暴露到根目录上来。 执行 npm run eject 命令即可，一般情况下，是会报错的。 解决方法，依次执行下面几个命令就可以了。'},
    {title:'create-react-app项目暴露webpack配置文件',context:'create-react-app创建的react项目，webapck配置，默认情况下是在node_modules里面的，我们需要把它暴露到根目录上来。 执行 npm run eject 命令即可，一般情况下，是会报错的。 解决方法，依次执行下面几个命令就可以了。'},
    {title:'create-react-app项目暴露webpack配置文件',context:'create-react-app创建的react项目，webapck配置，默认情况下是在node_modules里面的，我们需要把它暴露到根目录上来。 执行 npm run eject 命令即可，一般情况下，是会报错的。 解决方法，依次执行下面几个命令就可以了。'}
  ])
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

export default ArtList
