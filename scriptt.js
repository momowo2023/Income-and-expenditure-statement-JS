// THE ACCOUNT OBJECT SHOULD HAVE THE FOLLWOING PROPERTIES:


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
//5. expense, create an empty array that hold all of expenses ok
//6. incone,  create an empty array that hold all of income ok
//7. function listAllExpenses 
//8. display the list of expenses
//9. finction income
//10. doing the operate of summary 


//object 
const account = { 
   name: "Mowei", //1. doing the name property as the astring
   expenses:[],     // 5. an empty array that hold all of expenses
   income:[],       // 6. an empty array that hold all of income
   addExpenses: function (item, amount){
    this.expenses.push({item, amount}); //use push to add a array
   },
   addIncome: function (item, amount){
    this.income.push({item, amount}); 
   },
   listAllExpenses: function(){   //7. function listAllExpenses 
    for (let i = 0; i < this.expenses.length; i++) {
        const expense = this.expenses[i];
        console.log(`${expense.item}: ${expense.amount}`);  
     }
   },  
   getSummary: function (){
    let totalIncome = 0;
    let totalExpenses = 0;

    for (let i = 0; i < this.income.length; i++){ //9. finction income 
        totalIncome += this.income[i].amount;       // +=：calculate the total income within a loop
    }           

    for (let i = 0; i < this.expenses.length; i++){
        totalExpenses += this.expenses[i].amount;
    }
    
    const netValue = totalIncome - totalExpenses;  //10. doing the operate of summary
     return netValue;
    }
};




//function
function menu(){ 
    const choiceOne = "1. Add Expenses";
    const choiceTwo = "2. Add Income";
    const choiceThree = "3. List of all Expenses";
    const choiceFour = "4. Check out the balance";
    const choiceFive = "5. I am good ";
    const choice = parseFloat( //use parseFloat to make the input as a number instead of string
    
        prompt(
         `Please select from the menu:\n${choiceOne} \n${choiceTwo} \n${choiceThree}\n${choiceFour}\n${choiceFive}`
        )
    );//2. create the manu and different choice for the user

    switch (choice){ // use the stored to show the menu choice
        case 1: 
            const expensesItem = prompt("Enter the item of expenses");
            const expensesAmount = parseFloat(prompt("Enter expenses amount:"));
            menu();
            break;
        case 2:
            const incomeItem = prompt("Enter the item of income");
            const incomeAmount = parseFloat(prompt("Enter income amount:"));
            menu();
            break;
        case 3:    
            const listAllExpenses = alert(account.listAllExpenses());  //8. display the list of expenses
        menu();
            break;
        case 4: 
            const netValue = alert(account.getSummary());
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