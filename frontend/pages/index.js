import { Fragment, PureComponent } from 'react'
import Head from './head'
import Containers from '../containers'
import Search from '../containers/search'

class Home extends PureComponent {
    render() {
        return (
            <Fragment>
                <Head />
                <Containers>
                    <Search />
                </Containers>
            </Fragment>
        )
    }
}

export default Home