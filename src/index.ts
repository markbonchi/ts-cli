#!/usr/bin/env node

import fs from "fs"
import { cmd } from "./utils"
import { Command } from "commander"
import inquirer from "inquirer"


// const program = new Command()

// inquirer.prompt([])

// program
//     .argument("<string>", "string to log")
//     .action((message: string) => { console.log(`Hello ${message}!`) })


// program.parse(process.argv)




const main = new cmd().mainloop();
