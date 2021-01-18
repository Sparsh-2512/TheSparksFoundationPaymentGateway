// for changing quotes
let i = 1;
let quotesContainer = document.getElementById('quotesContainer');
let quotes =
    [
        "“No one has ever become poor by giving.” ―Anne Frank", "“Remember that the happiest people are not those getting more, but those giving more.” ―H. Jackson Brown Jr.", "“We must give more in order to get more. It is the generous giving of ourselves that produces the generous harvest.” ―Orison Swett Marden", "“We make a living by what we get. We make a life by what we give.” ―Winston S. Churchill", "“No one is useless in this world who lightens the burdens of another.” ―Charles Dickens", "“For it is in giving that we receive.” ―St. Francis of Assisi"
    ];
setInterval(() => {
    if (i === quotes.length)
        i = 0;
    quotesContainer.innerText = quotes[i++];
}, 6000);