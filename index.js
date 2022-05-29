function fiboSeq(){
    let fibo = [];
    let n = document.querySelector("#limit").value;
    fibo[0] = 0;
    fibo[1] = 1;

    for(let i = 2; i <= n; i++){
        fibo[i] = fibo[i-1] + fibo[i-2];
    }

    document.querySelector("#sequence").innerHTML = fibo;
}