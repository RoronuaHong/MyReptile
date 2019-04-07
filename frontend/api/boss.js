import { http, config } from '../utils'

const getList = () => {
    const url = config.API_COMPLETE_BOSS + '/list'

    return http.get(url)
}

export { getList }