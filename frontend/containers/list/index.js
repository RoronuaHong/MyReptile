import { list, color } from '../../constants/list'
import { Row, Col, Layout } from 'antd'

const { Content } = Layout

const renderList = list => list.map((l, i) => (
    <Row key={l.id}>
        <Col span={3} className='name'>
            {l.name} :
        </Col>
        <Col span={21} className='detail' style={{background: color[i]}}>
            阿水淀粉撒掉
        </Col>
    </Row>
))  

const List = lists => {
    const renderLists = renderList(list)

    return (
        <Content>
            <div className='list-box'>
                <ul className='list-detail'>
                    {/* {renderLists} */}
                    <li>
                        <Row type='flex'>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{background: color[0]}}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row type='flex'>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[1] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[2] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[3] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[4] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[5] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[6] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[7] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[0] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[1] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[2] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[3] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[4] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[5] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[6] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[7] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[0] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[1] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[2] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[3] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[4] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[5] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[6] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[7] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[0] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[1] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[2] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[3] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[4] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[5] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[6] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[7] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[0] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[1] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[2] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[3] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[4] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[5] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[6] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[7] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[0] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[1] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[2] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[3] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[4] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[5] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[6] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[7] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[0] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[1] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[2] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[3] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[4] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[5] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[6] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[7] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                    </li>
                    <li>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[0] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                            </Col>
                            <Col span={21} className='detail' style={{ background: color[1] }}>
                                阿水淀粉撒掉
                            </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[2] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[3] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[4] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[5] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[6] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                        <Row>
                            <Col span={3} className='name'>
                                {`职位名称`} :
                        </Col>
                            <Col span={21} className='detail' style={{ background: color[7] }}>
                                阿水淀粉撒掉
                        </Col>
                        </Row>
                    </li>
                </ul>
            </div>
        </Content>
    )
}

export default List