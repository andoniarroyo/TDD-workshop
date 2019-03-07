
## The pension calculator:

Calculates the monthly amount to be payed back based on the contributed money and the age:

Should return 0 in the next cases:

 - The age is lower than 65 or higher than 150.
 - The contributed amount is 0

  In any other case should return the quantity to be payed with the next formula:
  
 - paidAmount / (151 - age) (rounded up)

  For example:

    paidAmount = 100000;
    
    age = 75;
    
the calculated pension should be : **1315.79**

   

## **How to start:**
using npm:
 - npm it

using yarn:

 - yarn
 - yarn test