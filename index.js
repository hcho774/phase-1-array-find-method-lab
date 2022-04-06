// code your solution here

function findWin(item){
    return item.result === "W";
} 


function superbowlWin(arr) {
    if(arr.find(findWin)){
        return arr.find(findWin).year;
    }
}

