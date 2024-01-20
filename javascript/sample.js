
var chartLabels = ['Income', 'Expense', 'Balance'];
var chartData = [0, 0, 0];


const ctx = document.getElementById('myChart');
const chart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: chartLabels,
        datasets: [{
            label: ' of Votes',
            data: chartData,
            borderWidth: 1
        }]
    }
});

function calculate() {
    var input1 = document.getElementById("income-1").value;
    var input2 = document.getElementById("catogary-1").value;
    var input3 = document.getElementById("expenses").value;
    var input4 = document.getElementById("catogary-2").value;
    var a = document.querySelectorAll("#create-1");

    var total = document.getElementById("netResult");

    if (input1 !== "") {
        var income = document.createElement("h6");
        income.innerHTML = "Income :";
        a[0].appendChild(income);

        var incomerate = document.createElement("h6");
        incomerate.innerHTML = input1;
        a[1].appendChild(incomerate);

        var currentTotal = parseFloat(total.innerHTML);
        currentTotal += parseFloat(input1);
        total.innerHTML = currentTotal;

        // Update chart data
        chartData[0] = parseFloat(input1);
    }

    var catagory1 = document.createElement("h6");
    catagory1.innerHTML = input2;
    a[2].appendChild(catagory1);

    if (input3 !== "") {
        var expense = document.createElement("h6");
        expense.innerHTML = "Expense:";
        a[3].appendChild(expense);

        var expancerate = document.createElement("h6");
        expancerate.innerHTML = input3;
        a[4].appendChild(expancerate);

        var currentTotal = parseFloat(total.innerHTML);
        currentTotal -= parseFloat(input3);
        total.innerHTML = currentTotal;

        // Update chart data
        chartData[1] = parseFloat(input3);
    }

    var catagory2 = document.createElement("h6");
    catagory2.innerHTML = input4;
    a[5].appendChild(catagory2);

    // Update chart data
    chartData[2] = currentTotal;

    // Update the chart
    chart.update();

    document.getElementById("income-1").value = "";
    document.getElementById("catogary-1").value = "";
    document.getElementById("expenses").value = "";
    document.getElementById("catogary-2").value = "";


if(input1===""){
    document.getElementById("incomeerror").innerHTML = "Enter your income";
    document.getElementById("incomeerror").style.color = "red";
}else{
    document.getElementById("incomeerror").innerHTML = "";
}


if(input2===""){
    document.getElementById("catagoryerror").innerHTML = "Enter Catagory";
    document.getElementById("catagoryerror").style.color = "red";
}else{
    document.getElementById("catagoryerror").innerHTML = "";
}

if(input3===""){
    document.getElementById("expenceerror").innerHTML = "Enter expeence here";
    document.getElementById("expenceerror").style.color = "black";

}else{
    document.getElementById("expenceerror").innerHTML = "";
}

if(input4===""){
    document.getElementById("expencecatogary").innerHTML = "Enter catagory here";
    document.getElementById("expencecatogary").style.color = "black";

}else{
    document.getElementById("expencecatogary").innerHTML = "";
}


}






















