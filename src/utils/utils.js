const utils = {
    /**
     * array 降维
     * @param  {string} search
	 * @return {object} URLSearchParams
     */
    arrayDimensionReduction: arr => {
        let newArr = []

        function reduction(array) {
            array.forEach(item => {
                Array.isArray(item) ? reduction(item) : newArr.push(item)
            })
        }
         
        reduction(arr)

        return newArr
    }
}

module.exports = { utils }