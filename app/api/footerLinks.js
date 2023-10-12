const mainPages = [
    {
        title:'Контакты',
        url:'#'
    },
    {
        title:'Редакция',
        url:'#'
    }
]

const servicePages = [
    {
        title:'Политика конфиденциальности',
        url:'#'
    },
    {
        title:'Условия использования',
        url:'#'
    },
    {
        title:'Реклама',
        url:'#'
    }
]

const footerLinks = {
    mainPages,
    servicePages
}

const getFooterLinks = () => {
    return Promise.resolve(footerLinks)
}

export default getFooterLinks