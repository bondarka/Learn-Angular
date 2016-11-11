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

// Make reverse + filter

app.controller('ScopeCtrl', function($scope) {
    $scope.foo = "";
    $scope.reversedMessage = function(message) {
        return message.split("").reverse().join("");

    }

})

app.filter('reverse', function() {
    return function(text) {
        return text.split("").reverse().join("");
    }
})

//  Add ngFilter

app.factory('Starwars', function(){
    var Starwars = {};
    Starwars.set =[
    {
        name:"Hayden Christensen",
        character: "Darth Vader"
    },
    {
        name:"Frank Oz",
        character: "Yoda"
    },
    {
        name:"Ashley Eckstein",
        character: "Alsoka Tano"
    },
    {
        name:"Adam Driver",
        character: "Kylo Ren"
    },
    {
        name:"Jeremy Bulloch",
        character: "Boba Fett"
    },
    {
        name:"Dee Bradley Baker",
        character:"Clone trooper"
    },
    {
        name:"Ewan MgGregor",
        character:"Obi-Wan Kenobi"
    },
    {
        name:"Carrie Fisher",
        character:"Princess Leia"
    },
    {
        name:"Harrison Ford",
        character:"Han Solo"
    },
    {
        name:"Daisy Ridley",
        character:"Rey"
    },
    {
        name:"Mark Hamill",
        character:"Luke Skywalker"
    },
    {
        name:"Andry Serkis",
        character:"Supreme Leader Snoke"
    },
    {
        name:"Matthew Wood",
        character:"General Grievous"
    },
    {
        name:"Ian McDiarmid",
        character:"The Emperor"
    },
    {
        name:"Kevin Michael Richardson",
        character:"Jabba the Hutt"
    },
    {
        name:"Kenny Baker",
        character:"R2-D2"
    },
    {
        name:"Ray Park",
        character:"Darth Maul"
    },
    {
        name:"Natalie Portman",
        character:"Padme Amidala"
    },
    {
        name:"Billy Dee Williams",
        character:"Lando Calrissian"
    },
    {
        name:"Peter Mayhew",
        character:"Chewbacca"
    },
    {
        name:"Liam Neeson",
        character:"Qui-Gon Jinn"
    },
    {
        name:"Christopher Lee",
        character:"Count Dooku"
    },
    {
        name:"Samuel LJackson",
        character:"Mace Windu"
    },
    {
        name:"Ahmed Best",
        character:"Jar Jar Brinks"
    },
    {
        name:"Keira Knightley",
        character:"Sabe"
    },
    {
        name:"Nika Futterman",
        character:"Asajj Ventess"
    },
    {
        name:"Dee Bradley Baker",
        character:"Captain Rex"
    },
    {
        name:"Dee Bradley Baker",
        character:"Commander Cody"
    },
    {
        name:"Plo Koon",
        character:"Matt Sloan"
    },
    {
        name:"Des Webb",
        character:"Wampa"
    },
    {
        name:"Anthony Daniels",
        character:"C-3PO"
    },
    {
        name:"Gwendoline Chrisitie",
        character:"Captain Phasma"
    },
    {
        name:"Oscar Isaac",
        character:"Poe Dameron"
    },
    {
        name:"Andry Secombe",
        character:"Watto"
    },
    {
        name:"Lupita Nyongo",
        character:"Maz Kanata"
    },
    {
        name:"Erik Bauersfeld",
        character:"Admiral Ackbar"
    },
    {
        name:"Jimmy Smits",
        character:"Senator Bail Organa"
    },
    {
        name:"Silas Carson",
        character:"Nute Gunray"
    }
    ];
    return Starwars;
})

app.controller("StarwarsCtrl", function($scope, Starwars){
    console.log('Starwars', Starwars.set);
    $scope.Starwars = Starwars.set; 
})
