import { Row, Col, Icon } from 'antd'

const Nav = () => {
    const handleReload = e => window.location.reload()

    return (
        <div className='nav-box'>
            <Row>     
                <Col span={2}>
                    <div className='img-box'>
                        <img src='../../static/img/vs.png' alt=''/>
                    </div>
                </Col>
                <Col span={6}>
                    <span className='nav-title'>职位信息精确搜索</span>
                </Col>
                <Col span={15}></Col>
                <Col className='reload-col' span={1}>
                    <Icon type='reload' className='reload-btn' onClick={handleReload} />
                </Col> 
            </Row>
        </div>
    )
}

export default Nav