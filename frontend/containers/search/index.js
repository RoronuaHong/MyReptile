import { PureComponent } from 'react'
import { Input } from 'antd'
import { Row, Col } from 'antd'

const Search = Input.Search

export default class Container extends PureComponent {
    render() {
        const { children } = this.props

        return (
            <div className='search-box'>
                <Row>
                    <Col span={19}></Col>
                    <Col span={4}>
                        <Search enterButton
                            placeholder='请输入关键字'
                            onSearch={value => console.log(value)} />
                    </Col>
                    <Col span={1}></Col>
                </Row>
            </div>
        )
    }
}