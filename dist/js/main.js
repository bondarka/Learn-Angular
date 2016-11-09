var app = angular.module('myApp', []);

app.controller('FirstCtrl', function($scope) {
    $scope.data = { message: "Anastasiia" };
})

app.controller('TransactionsCtrl', function($scope) {
    this.transactions = [
        { amount: 500.00, date: "08/08/2016", description: "Subscribe to the magazine", place: "TC Daffi" },
        { amount: 150.00, date: "07/08/2016", description: "buying clothes", place: "Itali" }
    ]

    this.total = this.transactions.reduce(function(res, item) {
        return res + item["amount"];
    }, 0)

    this.balance = 15000 - this.total;
 
    this.addTransaction = function() {
        console.log('this.newTransaction', this.newTransaction);
        var newItem = angular.copy(this.newTransaction);
        this.transactions.push(newItem);

    }
})
