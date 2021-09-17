const initialPriceRef = document.querySelector("#initial-price");
const stocksQuantityRef = document.querySelector("#stocks-quantity");
const currentPriceRef = document.querySelector("#current-price");
const showResult = document.querySelector("#show-result");
const outPut = document.querySelector("#output");

showResult.addEventListener("click",clickHandler);

function clickHandler(e){
    e.preventDefault();
    var initial = Number(initialPriceRef.value);
    var quantity = Number(stocksQuantityRef.value);
    var current = Number(currentPriceRef.value);

        if(initial==0 || initial<0 || quantity==0 ||quantity<0 || current==0 || current<0){
            outPut.innerText=`fields cannot be empty or less than zero`;
            outPut.style.color=`red`;
            
        } else {
            calculateProfitAndLoss(initial,quantity,current);
        }
    }
    
        
   



function calculateProfitAndLoss(initialPrice, quantity, currentPrice) {


    if (currentPrice > initialPrice) {
        var profit = (currentPrice - initialPrice) * quantity;
        var profitPercentage = (profit / initialPrice) * 100;


        outPut.innerText=`hey you made a profit of ${profit.toFixed(2)} and the percentage is ${profitPercentage.toFixed(2)} %`
        outPut.style.color=`green`;
       
       
       

    } else if (initialPrice > currentPrice) {
        var loss = (initialPrice - currentPrice) * quantity;


        var lossPercentage = (loss / initialPrice) * 100;

        outPut.innerText=`hey you made a loss of ${loss.toFixed(2)} and the percentage is ${lossPercentage.toFixed(2)} %`
        outPut.style.color=`blue`;
        
    }
    
    else {
        outPut.innerText=`no pain no gain!!`
        outPut.style.color=`black`;
    }


}









