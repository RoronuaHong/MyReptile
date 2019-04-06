import { PureComponent } from 'react'

export default class Container extends PureComponent {
    render() {
        const { children } = this.props

        return (
            <div className='container'>
                {children}
            </div>
        )
    }
}