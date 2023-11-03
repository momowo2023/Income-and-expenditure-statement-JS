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
//4. use the stored to show the menu choice ok

1
//object 
const account = { 
   name: "Mowei", //1. doing the name property as the astring
   expenses:[],
   income:[],
   addExpenses: function (item, amount){
    this.expenses.push(item, amount); //use push to add a array
   },
   addIncome: function (item, amount){
    this.income.push(item, amount); 
   },
   ListAllExpenses:[],
   getSummary:[],
};




//function
function menu(){ 
    const choice = parseFloat( //use parseFloat to make the input as a number instead of string
        prompt(
         "Please select from the menu:\n1. Add Income\n2. Add Expenses\n3. List of all Expenses\n4. Check out the balance\n5. I am good "
        )
    );//2. create the manu and different choice for the user

    switch (choice){ // use the stored to show the menu choice
        case 1:
            const incomeItem = prompt("Enter the item of income");
            const income = parseFloat(prompt("Enter income amount:"));
            // make income to be added up；
            menu();
            break;
        case 2: 
            const expensesItem = prompt("Enter the item of expenses");
            const expenses = parseFloat(prompt("Enter expenses amount:"));
            // make it to be added up；
            menu();
            break;
        case 3: 
            // to be solved
            menu();
            break;
        case 4: 
            // to be solved
            menu();
            break;
        case 5: 
            const finalChoice = alert("See ya!")
            break;
        default:
            const defaultChoice = alert("Please select from the menu");    
            menu();                                                        
            break;   
        }
    console.log(`let's check number ${choice}`);    //3. take the input from the user, store the input in a variable, and fix null
}                                                   //4. use the stored to show the menu choice

menu();