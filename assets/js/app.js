$(document).ready(()=>{
    $(".get_quote").click(()=>{
        const getQoute = async()=>{
            const res = await fetch("https://api.adviceslip.com/advice");
            const {slip: {id, advice}} = await res.json();
            $(".advice").text(advice);
            $(".advice_number").text(`ADVICE #${id}`);
        }
        getQoute();

    })
})
