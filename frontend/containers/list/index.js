import { PureComponent } from 'react'
import { color } from '../../constants/list'
import { Row, Col, Layout } from 'antd'
import { getList } from '../../api/boss'

const { Content } = Layout

const renderList = list => list.map((l, i) => {


    return (
        <li>
            <Row key={l.id}>
                <Col span={3} className='name'>
                    {l.name} :
                </Col>
                <Col span={21} className='detail' style={{background: color[i]}}>
                    阿水淀粉撒掉
                </Col>
            </Row>
        </li>
    )
})

export default class List extends PureComponent {
    state = {
        list: []
    }

    async componentDidMount() {
        const option = await getList()

        this.setState({ list: option.data })
    }

    render() {
        const { list } = this.state
    
        console.log(list)
        // const renderLists = renderList(list)

        return (
            <Content>
                <div className='list-box'>
                    <ul className='list-detail'>
                        {/* {renderLists} */}
                    </ul>
                </div>
            </Content>
        )
    }
}