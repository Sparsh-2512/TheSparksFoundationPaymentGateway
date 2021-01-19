// for changing quotes
let i = 1;
setInterval(() => {
    let pre = i-1;
    let quote = document.getElementById(`quote${i++}`);
    if (i === 7)
        i = 1;
    if (pre === 0)
        pre = 6;
    let preQuote = document.getElementById(`quote${pre}`);
    preQuote.style.display = 'none';
    quote.style.display = 'inline-block';
}, 6000);