#! /usr/bin/env node
import inquirer from "inquirer";
let todos = ["Parlor - (5.00 to 7.00 PM)", "Learning - (9.00 to 7.00 PM)"];
async function createTodo(todos) {
    do {
        let answer = await inquirer.prompt({
            type: "list",
            message: "select an option",
            name: "option",
            choices: ["Add", "Update", "View", "Delete"],
        });
        if (answer.option === "Add") {
            let addMore = await inquirer.prompt({
                type: "input",
                message: "Add task in the list",
                name: "addmore",
            });
            todos.push(addMore.addmore);
            todos.forEach((addMore) => console.log(addMore));
        }
        if (answer.option === "Update") {
            let updateMore = await inquirer.prompt({
                type: "list",
                message: "update task in the list",
                name: "todos",
                choices: todos.map((item) => (item))
            });
            let addMore = await inquirer.prompt({
                type: "input",
                message: "Add item in the list",
                name: "todo",
            });
            let newTask = todos.filter((val) => val !== updateMore.todos);
            todos = [...newTask, addMore.todo];
        }
        if (answer.option === "View") {
            console.log("****TO DO LIST****");
            if (todos.length) {
                console.log(todos);
            }
            else {
                console.log("You don't have any task right now.");
            }
            console.log("***************");
        }
        if (answer.option === "Delete") {
            let deleteTask = await inquirer.prompt({
                type: "list",
                message: "Delete task from the list",
                name: "deletetask",
                choices: todos.map((item) => (item))
            });
            let newTask = todos.filter((val) => val !== deleteTask.deletetask);
            todos = [...newTask];
            if (todos.length) {
                console.log(todos);
            }
            else {
                console.log("You don't have any task right now.");
            }
        }
    } while (true);
}
createTodo(todos);
