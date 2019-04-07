import { Fragment, PureComponent } from 'react'
import dynamic from 'next/dynamic'

import Head from './head'
const ContainersWithNoSSR = dynamic(() => import('../containers'), {
    loading: () => <p></p>,
    ssr: false
})

import '../less/base.less'
import '../less/public/common.less'

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <Head />
                <ContainersWithNoSSR />
            </Fragment>
        )
    }
}

export default Home