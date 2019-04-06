import { Fragment, PureComponent } from 'react'
import Head from './head'
import Containers from '../containers'
import Nav from '../containers/nav'
import List from '../containers/list'
import Search from '../containers/search'

import '../less/base.less'
import '../less/public/common.less'

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <Head />
                <Containers>
                    <Nav />
                    <Search />
                    <List />
                </Containers>
            </Fragment>
        )
    }
}

export default Home