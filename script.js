
let quoteText = ''
let authorText = ''

const quoteContainer = document.getElementById('quote-container')
const quoteEl = document.getElementById('quote')
const authorEl = document.getElementById('author')
const newBtn = document.getElementById('new-quote')
const tweetBtn = document.getElementById('twitter')
const loader = document.getElementById('loader')

// Show Loading

function loading(){
    loader.hidden = false
    quoteContainer.hidden = true
}

// Hide Loading

function complete(){
    loader.hidden = true
    quoteContainer.hidden = false
}

// Get quote from API

async function getQuotes() {
    loading()
    const apiUrl = `https://thequoteshub.com/api/`
    try {
        const response = await fetch(apiUrl)
        .then(res => res.json())
        .then(data => {
            quoteText = data.text 
            authorText = data.author

            quoteEl.innerHTML = quoteText
            authorEl.innerHTML = authorText

            // This is to load quote after fetching and hiding the load
            complete()

            tweetBtn.addEventListener('click', function(){
                const twitterUrl = `https://twitter.com/intent/tweet?text=${quoteText} - ${authorText}`
                window.open(twitterUrl, '_blank')
             })

            if(quoteText.length > 120){
                quoteEl.classList.add('long-quote')
            } else {
                quoteEl.classList.remove('long-quote')
            }
        })
    } catch (error){
        // Catch error here
    }
}

// On page loading
getQuotes()


// New quote on new quote button click
newBtn.addEventListener('click', function(){
    getQuotes()
})

// Tweet button click




