# 🔨 Technical Challenge - QA Challenge RX

## 📌 1. Introduction
This test plan aims to validate the main functionalities of the [QA Challenge RX App](https://qa-challenge-rx.vercel.app/) website to ensure users have a consistent and error-free experience. 
The tests will be automated using **Cypress** with **JavaSscript** and the structure is based
in project object model (POM).  

---

## 📌 2. Scope
The tests will cover the following key functionalities:

✅ Cypress test automation 

✅ DOM element manipulation 

✅ Comportament behavior verification 

✅ HTTP request handling 

✅ Database query testing 

✅ Documentation practices 

✅ Problem-solving approach 


---

## 📌 3. Testing Approach
**Tool:** Cypress   
**Types of Tests:**  
- Application behaviour 
- Functionality

---

## 📌 4. Test Cases
The 7 test cases are in the e2e folder and must obey some business rules described below. 

### **🛠️ Module: Authentication**  
| ID         | Test Case                         | Steps | Expected Result |
|------------|-----------------------------------|--------|--------------------|
| exercise 1 | Find Product with Specific Price  | 1. Access the main page <br> 2. Search for products with 59 value <br> 3. Search the product Mouse with id 45628 | Mouse99 |
| exercise 2 | Complete the code to find specific elements within the row that matches the 05/15/2024 date (in Los Angeles timezone).  | 1. Access the main page <br> 2. Find the table row with the specific date <br> 3. Assert the row contains a <p> with text "First" | 4. Assert the row with a <span> with text "Accept" | 5. "Assert the row contains a "View" button | 6. Click the "Order More" button | Second line with the types assigned have the button "Order More" clicked |
| exercise 3 | Verify if a specific checkbox is checked | 1. Access the main page <br> | 2. Select the component container and find the ".item-content" inside | 3. Locate tag <p> with text "Test2" until to the parent of the <p> element | 4. Find a checkbox inside and assert is checked | Find the second line with "Text2" with a checked box. |
| exercise 4 | Verify elemnts relationship | 1. Access the main page <br> | 2. Locate the container and find a <span> with text "old-car" | 3. Get the parent of the "old-car" span tag | 4. Search within the parent for a <span> with text "1" | Find the second line with "old-car 1" exist. |
| exercise 5 | Create a custom Cypress command for a user login | 1. Access the command.js file and execute the following steps: fill the email and password input, click the submit button and verify welcome message | 2. Go to test and execute the login page | Find a message "Welcome back" after insert email, password and click submit button. |
---

## 📌 5. Setting up environmet

### Requirements
- Node.js installed on your machine.
- Cypress installed globally or locally in the project.

### Installation
1. Clone this repository:
```bash
git clone <REPOSITORY_URL>
cd <REPOSITORY_NAME>
```

2. Install Cypress dependencies in a package.json:
```bash
npm install
```
## 📌 6. Test execution
User can execute Cypress test in a headless or interactive mode. 

- Headless mode:

1. Activate Cypress in a headless mode:
```bash
npx cypress run
```
2. Execute all tests:
```bash
npm tests
```

3. Execute specif test:
```bash
npx cypress run --spec <path to the test file>
```
4. Activate Cypress in a interactive mode:
Insert in the script section of the package.json file the code below:
```bash
"scripts": {
  "cy:open": "cypress open",
  "test": "cypress run" 
  },
```
5. Execute all tests:
```bash
npm run cy:open
```

---

## 📌 6. Conclusion
This plan covers the essential flows of the Magento website. Additional cases can be added as needed to cover more user scenarios.

🚀 **Happy Testing!**
