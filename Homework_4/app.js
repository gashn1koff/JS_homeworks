const rootDiv = document.querySelector('.root')
const button = document.createElement('button')
button.textContent = 'Click me'
const div = document.createElement('div')
div.classList.add('div-wrapper')


newslist = [{title:'News 1', text:'Some text1'}, 
            {title:'News 2', text:'Some text2'}, 
            {title:'News 3', text:'Some text3'}]

rootDiv.append(button)
rootDiv.append(div)




function handleNewsWrapperClick(event) {
    const newsText = event.currentTarget.querySelector('.news-text')
    newsText.classList.toggle('news-text-visible')
    

}

function renderNewsTitle (title) {
    const newsTitle = document.createElement('h1')
    newsTitle.classList.add('news-title')
    newsTitle.textContent = title
    
    return newsTitle
}

function renderNewsText (text) {
    const newsText = document.createElement('p')
    newsText.classList.add('news-text')
    newsText.textContent = text
    return newsText
}

function renderNews(arr) {
    arr.forEach(news => {
        const newsWrapper = document.createElement('div')
        newsWrapper.classList.add('news-wrapper')
        newsWrapper.addEventListener('click', handleNewsWrapperClick)
        newsTitle = renderNewsTitle(news.title)
        newsText = renderNewsText(news.text)
        
        
        newsWrapper.append(newsTitle)
        newsWrapper.append(newsText)
        div.append(newsWrapper)
        
        
    });
}

button.addEventListener('click', renderNews.bind(null, newslist))





