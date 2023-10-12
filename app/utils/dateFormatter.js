const dateFormat = (date) => {
    const daysArr = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"]

    const weekDay = date.getUTCDay();
    const monthDay = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    const result = `${daysArr[weekDay]},${monthDay}.${month}.${year}`
    return result
}

export default dateFormat