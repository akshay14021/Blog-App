export const setTextFilter = (text = '') => {
    return {
        type: 'SET_TEXT_FILTER',
        text
    }
}

export const sortByDate = () => {
    return {
        type: 'SORT_BY_DATE'
    }
}