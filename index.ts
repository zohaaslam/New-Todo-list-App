#!/usr/bin/env node

import inquirer from "inquirer";
import chalk from "chalk";
console.log("<<<=====================================================================================>>>");
console.log(chalk.bold.yellowBright("\n \t\t  Welcome To `Code with Zoha` - `Todo-List-App`"));
console.log("<<<=====================================================================================>>>");


let todos: string[] = [];
let condition = true;

let main = async () => {

    while(condition){
        let option = await inquirer.prompt([
            {
                name: "choice",
                type: "list",
                message: "select an option what u want to do",
                choices: ["AddTask","Delete Task","Update Task","View-Todo-list","Exit"]
            }
        ]);
        if(option.choice === "AddTask"){
           await addTask();
        }
        else if(option.choice === "Delete Task"){
            await delettask();
        }
        else if(option.choice === "Update Task"){
            await Update_Task();

        }
        else if(option.choice === "View-Todo-list"){
            await viewTask();
        }
        else if(option.choice === "Exit"){
            condition = false;
            console.log(chalk.yellow.blue("<<<=========================================================================>>>"));   

        }
     }
    }
    let addTask = async() =>{
        let newTask = await inquirer.prompt([
            {
                name: "task",
                type:"input",
                message: "Enter a new Task"
            }
        ]);
        todos.push(newTask.task)
        console.log(`${newTask.task} task added sucessfully in Todo-list!`);
         }
         let viewTask = () =>{
            console.log(`"\n Your Todo-List: \n"`);
            todos.forEach((task,index) =>{
                console.log(`${index +1}: ${task}`);
                
            });
            }
         let delettask = async() =>{
            await viewTask();
            let Taskindex = await inquirer.prompt([
                {
                    name: "index",
                    type: "number",
                    message: "Enter 'the index.no' of the task you want to delet"
                }
            ]);
            let deletedtask = todos.splice(Taskindex.index -1,1)
            console.log(`\n ${deletedtask} Your task has been deleted sucessfully from your todo-list\n`);
            

         }
         let Update_Task = async() =>{
            await viewTask();
            let Update_index_task = await inquirer.prompt([
                {
                    name : "index",
                    type : "number",
                    message : "Enter the index no. of the task you want to update"
                },
                {
                    name: "new_task",
                    type : "input",
                    message: "Now Enter new task name"
                }
                
            ]);
        todos[Update_index_task.index -1]  = Update_index_task.new_task
        console.log(`\n Task at index no'${Update_index_task.index -1} updated sucessfully [For update list check option:"View Todo-list"]`);
        
         }  
            main();
            
            
