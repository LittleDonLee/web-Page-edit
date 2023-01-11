
const quotes = [
    {
        quote: "삶이 있는 한 희망은 있다.",
        author: "키케로",
    },
    {
        quote: "피할수 없으면 즐겨라 ",
        author: "로버트 엘리엇",
    },
    {
        quote: "행복한 삶을 살기위해 필요한 것은 거의 없다.",
        author: "마르쿠스 아우렐리우스 안토니우스",
    },
    {
        quote: "좋은 성과를 얻으려면 한 걸음 한 걸음이 힘차고 충실하지 않으면 안 된다.",
        author: "단테",
    },
    {
        quote: "자신감 있는 표정을 지으면 자신감이 생긴다.",
        author: "찰스다윈",
    },
    {
        quote: "1퍼센트의 가능성, 그것이 나의 길이다.",
        author: "나폴레옹",
    },
    {
        quote: "꿈을 계속 간직하고 있으면 반드시 실현할 때가 온다. ",
        author: "괴테",
    },
    {
        quote: "마음만을 가지고 있어서는 안된다. 반드시 실천하여야 한다.",
        author: "이소룡",
    },
    {
        quote: "화가 날 때는 100까지 세라. 최악일 때는 욕설을 퍼부어라.",
        author: "마크 트웨인",
    },
];
const quote = document.querySelector("#quote span:first-child ");
const author = document.querySelector("#quote span:last-child ");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText= todaysQuote.quote;
author.innerText= todaysQuote.author;