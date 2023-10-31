// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:

// expenses: an array that should hold all of your expenses, can be empty from start
// income: an array that should hold all of your income, can be empty from start
// addExpenses: a function that vill add an expense to the expenses array
// addIncome: a function that vill add an income to the income array
// listAllExpenses: a function that should list all the expenses in the expenses array
// getSummary: a function that should summarize your total balances. It should show your total
// income, your total expenses and also calculate your current balances (income - expenses).


//step
//1. doing the name property as the astring  ok
//2. create the manu and different choice for the user ok
//3. take the input from the user, store the input in a variable ok
//4. use the stored to show the menu choice

1
//object 
const account = { 
   name: "Mowei", //1. doing the name property as the astring
   expenses:"",
   income:"",
   addExpenses:"",
   addIncome: "",
   ListAllExpenses:"",
   getSummary:"",
};



 // the function menu() should only be responsible to show the different choices
// for the user.
//function
function menu(){ 
    const choice = parseFloat( //use parseFloat to make the input as a number instead of string
        prompt(
         "Please select from the menu:\n1. Add Income\n2. Add Expenses\n3. List of all Expenses\n4. Check out the balance"
        )
    );//2. create the manu and different choice for the user

    switch (choice){ // use the stored to show the menu choice
        case 1:
            const income = parseFloat(prompt("Enter income amount:"));
            // make income to be added up；
            break;
        case 2: 
            const expenses = parseFloat(prompt("Enter expenses amount:"));
            // make it to be added up；
            break;
        case 3: 
            // to be solved
            
            break;
        case 4: 
            // to be solved
            
            break;

    }
    console.log( choice ? `Let's check No. ${choice}` : "Please select from the menu" );
    //3. take the input from the user, store the input in a variable, and fix null
}

menu();