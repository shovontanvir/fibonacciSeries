function fiboSeq(){
    let fibo = [];
    let n = document.querySelector("#limit").value;
    let gRatio = 1.618034;

    for(let i = 0; i <= n; i++){
        fibo[i] = Math.round((Math.pow(gRatio, i) - Math.pow((1 - gRatio), i)) / Math.sqrt(5));
    }

    document.querySelector("#sequence").innerHTML = fibo;
}