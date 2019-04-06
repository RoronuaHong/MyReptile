import { PureComponent } from 'react'
import { Input } from 'antd'

const Search = Input.Search

export default class Container extends PureComponent {
    render() {
        const { children } = this.props

        return (
            <div className='search-box'>
                <Search
                    placeholder='input search text'
                    enterButton='Search'
                    size='large'
                    onSearch={value => console.log(value)}
                />
            </div>
        )
    }
}