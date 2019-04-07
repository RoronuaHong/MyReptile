import { PureComponent } from 'react'
import { rowList, color } from '../../constants/list'
import { Row, Col, Layout } from 'antd'
import { getList } from '../../api/boss'

const { Content } = Layout

const renderList = list => list.map((item, i) => {
    const rowLists = rowList.map(m => {
        switch(m.match) {
            case 'url':
                m.detail = item.url
                break
            case 'releaseTime': 
                m.detail = item.detail.releaseTime
                break
            case 'companyName': 
                m.detail = item.detail.companyName
                break
            case 'typeOfBusiness': 
                m.detail = item.detail.typeOfBusiness
                break
            case 'numberOfPeople': 
                m.detail = item.detail.numberOfPeople
                break
            case 'address': 
                m.detail = item.detail.address
                break
            case 'jobName': 
                m.detail = item.job.jobName
                break
            case 'jobRequirement': 
                m.detail = item.job.jobRequirement
                break
            case 'jobDetail': 
                m.detail = item.job.jobDetail
                break
        }

        return m
    })

    const renderRowList = rowLists.map(l => (
        l.id !== 100 && <Row type='flex' key={l.id}>
            <Col span={3} className='name'>
                {l.name} :
            </Col>
            <Col span={21} className='detail' style={{ background: color[l.id] }}>
                {l.detail}
            </Col>
        </Row>
    ))

    return <li key={item.url}>{renderRowList}</li>
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
        const renderLists = renderList(list)

        return (
            <Content>
                <div className='list-box'>
                    <ul className='list-detail'>
                        {renderLists}
                    </ul>
                </div>
            </Content>
        )
    }
}