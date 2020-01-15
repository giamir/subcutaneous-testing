# Subcutaneous Testing

> If a unit test is testing the smallest testable component of application code, then a subcutaneous test is a single workflow which can be identified and tested of the application code. Subcutaneous testing treats a workflow as a testable unit.

### Why subcutaneous testing over traditional unit testing?

Advantages:
* Reduced coupling between implementation and tests
* Improve ease of refactoring
* Reduce cost of evolving design
* Brings business-focus to developers
* Reduce need for brittle end-to-end tests

Disadvantages:
* More setup
* Hard to focus on a unit of work
* Debugging tests
* Decide when to add complementary unit tests is subjective

### Prepare for the exercise

Install dependencies
```
$ yarn
```

Familiarize with the todos application at [http://localhost:3000](http://localhost:3000)
```
$ yarn start
```

Run the test
```
$ yarn test
```
All the unit tests should pass.

Now Identify different workflow in the application and for each of them you will write a subcutaneous test.
When you are ready to start, open the todos.workflows.spec.js and start to write your first subcutaneous test.

If you cannot identify any user workflow here are a couple to get you started:

First flow (Basic usage)
- user type a todo
- user click the add todo button
- user see the added todo in the list
- user click on todo to mark it as completed
- user see the todo marked as completed

Second flow (Visibility Filters)
- user type a todo (todo one)
- user click the add todo button
- user type another todo (todo two)
- user click the add todo button
- user click on (todo one) to mark it as completed
- user click on active filter
- user only see (todo two)
- user click on completed filter
- user only see (todo one)
- user click on all filter
- user see all todos

You can find an implementation of the subcutaneous tests in the branch named `solution` (only with enzyme).
