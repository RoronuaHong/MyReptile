import { Fragment, PureComponent } from 'react'
import { Row, Col } from 'antd'
import Head from './head'
import Containers from '../containers'
import Nav from '../containers/nav'
import Search from '../containers/search'

import '../less/index.less'

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <Head />
                <Containers>
                    <Row>
                        <Nav />
                    </Row>
                </Containers>
            </Fragment>
        )
    }
}

export default Home