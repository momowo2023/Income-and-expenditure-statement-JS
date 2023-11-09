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
//7. function listAllExpenses ok
//8. display the list of expenses ok
//9. finction income ok
//10. doing the operate of summary  ok


//object 
const account = { 
   name: "Mowei", //1. doing the name property as the astring
   expenses:[],     // 5. an empty array that hold all of expenses
   income:[],       // 6. an empty array that hold all of income
   addExpenses: function (){
        const expensesItem = prompt("Enter the item of expenses");
        const expensesAmount = parseFloat(prompt("Enter expenses amount:"));   
        this.expenses.push({expensesItem, expensesAmount}); //use push to add a array
        menu();
    },
   addIncome: function (){
        const incomeItem = prompt("Enter the item of income");
        const incomeAmount = parseFloat(prompt("Enter income amount:"));
        this.income.push({incomeItem,incomeAmount}); 
        menu();    
    },
   listAllExpenses: function(){   //7. function listAllExpenses 
        let message = ""  ;
        this.expenses.forEach(function(expense) {       //8. call the function to display the list of expenses
            message +=
                "Expense item: " + expense.expensesItem+ "; " +
                "Expense amount: " + expense.expensesAmount +
                "\n";
            }
        );
        alert(message);         
        menu();
    },
   getSummary: function (){
        let totalIncome = 0;
        let totalExpenses = 0;
        this.income.forEach(function (income) { //9. finction income 
                totalIncome += income.incomeAmount;       // +=：calculate the total income within a loop
            }
        );         

        this.expenses.forEach(function(expense) {
                totalExpenses += expense.expensesAmount;
            }
        );   
        const netValue = totalIncome - totalExpenses;  //10. doing the operate of summary
        alert(`Net Balance: ${netValue}`);
        menu();
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

    switch (choice){  //4. use the stored to show the menu choice
        case 1: 
            account.addExpenses();
            break;
        case 2:
            account.addIncome();
            break;
        case 3:    
            account.listAllExpenses();  
            break;
        case 4: 
            account.getSummary();
            break;
        case 5: 
            alert("See ya!")
            break;
        default:
            alert("Please select from the menu");    
            menu();                                                        
            break;   
        }
    console.log(`let's check number ${choice}`);    //3. take the input from the user, store the input in a variable, and fix null
}                                                  
menu();
