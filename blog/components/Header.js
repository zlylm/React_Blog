import {Row,Col,Menu,Icon} from 'antd'
import '../public/less/components/header.less'
const Header = () => {
    return (
        <>
            <Row type="flex" align="middle" justify="center" className="header">
                <Col sm={10} xs={24} className="left">
                    <span className="header-title">兔子先生</span>
                    <span className="header-dec">天苍苍，野茫茫</span>
                </Col>
                <Col sm={10} xs={0}>
                    <Menu  mode="horizontal">
                        <Menu.Item key="home">
                            <Icon type="home" />
                            首页
                        </Menu.Item>
                        <Menu.Item key="video">
                            <Icon type="youtube" />
                            视频
                        </Menu.Item>
                        <Menu.Item key="life">
                            <Icon type="smile" />
                            生活
                        </Menu.Item>
                    </Menu>
                </Col>
            </Row>
        </>
    )
}
export default Header