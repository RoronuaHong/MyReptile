import { Fragment, PureComponent } from 'react'

import Head from './head'
import dynamic from 'next/dynamic'
import Containers from '../containers'
import Nav from '../containers/nav'
import Search from '../containers/search'

import '../less/base.less'
import '../less/public/common.less'

const ListWithNoSSR = dynamic(() => import('../containers/list'), {
    loading: () => <p></p>,
    ssr: false
})

class Home extends PureComponent {
    componentDidMount() {
        
    }

    render() {
        return (
            <Fragment>
                <Head />
                <Containers>
                    <Nav />
                    <Search />
                    <ListWithNoSSR />
                </Containers>
            </Fragment>
        )
    }
}

export default Home