import React,{useEffect,useState} from 'react'
import {Row,Col,Menu,Icon} from 'antd'
import Router from 'next/router'
import {getTypeNameList} from '../api/index'
import '../public/less/components/header.less'
const Header = () => {
    const [navList,setNavList] = useState([])
    useEffect(()=>{
        const getList = async ()=> {
            let res = await getTypeNameList({},'get')
            let data = res.data.data
            if (data) {
                setNavList(data)
            }
        }
        getList()
        
    },[])
    const changeMneu = (e)=> {
        if (e.key == 0) {
            Router.push('/')
        } else {
            Router.push(`/list?typeId=${e.key}`)
        }
    }
    return (
        <>
            <Row type="flex" align="middle" justify="center" className="header">
                <Col sm={10} xs={24} className="left">
                    <span className="header-title">兔子先生</span>
                    <span className="header-dec">天苍苍，野茫茫</span>
                </Col>
                <Col sm={10} xs={0}>
                    <Menu  mode="horizontal" onClick={changeMneu}>
                        <Menu.Item key="0">
                            <Icon type="home" />
                            首页
                        </Menu.Item>
                        {
                            navList.map(item=>{
                                return (
                                    <Menu.Item key={item.Id}>
                                        <Icon type="youtube" />
                                        {item.type_name}
                                    </Menu.Item>
                                )
                            })
                        }
                    </Menu>
                </Col>
            </Row>
        </>
    )
}
export default Header