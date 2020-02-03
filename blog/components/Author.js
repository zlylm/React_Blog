import {Icon,Divider,Avatar} from 'antd'
import '../public/less/components/author.less'

const Author = ()=> {
    return (
        <div className="author-main">
            <Avatar size={100} src="http://img3.imgtn.bdimg.com/it/u=4246467955,3763781490&fm=26&gp=0.jpg"/>
            <div className="author-dec">因为天气好，因为天气不好，因为天气刚刚好。</div>
            <Divider>社交账号</Divider>
            <Avatar size={28} icon="github" className="account"  />
            <Avatar size={28} icon="qq"  className="account" />
            <Avatar size={28} icon="wechat"  className="account"  />
        </div>
    )
}
export default Author