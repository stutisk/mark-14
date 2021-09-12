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
            showMessageError("fields cannot be empty or less than zero")
        } else {
            calculateProfitAndLoss(initial,quantity,current);
        }
    }
    
        
   



function calculateProfitAndLoss(initialPrice, quantity, currentPrice) {


    if (currentPrice > initialPrice) {
        var profit = (currentPrice - initialPrice) * quantity;
        var profitPercentage = (profit / initialPrice) * 100;


        showMessage(`hey you made a profit of ${profit.toFixed(2)} and the percentage is ${profitPercentage.toFixed(2)} %`)
       

    } else if (initialPrice > currentPrice) {
        var loss = (initialPrice - currentPrice) * quantity;


        var lossPercentage = (loss / initialPrice) * 100;

        showMessage(`hey you made a loss of ${loss.toFixed(2)} and the percentage is ${lossPercentage.toFixed(2)} %`)

    }
    
    else {
        showMessage("no pain no gain!!")
    }


}
function showMessage(message) {
    outPut.innerHTML = message;
   
    
}
   
function showMessageError(message){
    outPut.innerHTML = message;

   
}







