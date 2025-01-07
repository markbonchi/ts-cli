#!/usr/bin/env node
import fs from "fs"
import { Command } from "commander"
import readline from "readline/promises"
import { stdin as input, stdout as output, stderr } from "process"
import inquirer from "inquirer"

// const program = new Command()

// inquirer.prompt([])

// program
//     .argument("<string>", "string to log")
//     .action((message: string) => { console.log(`Hello ${message}!`) })


// program.parse(process.argv)


class main {
    rl: readline.Interface
    constructor() {
        const rl = readline.createInterface({ input, output });
        this.rl = rl;
        this.rl.setPrompt("(cmd)> ");
        this.rl.prompt();
    }

    mainloop = async () => {
        for await (const line of this.rl) {
            if (line === "quit") {
                console.log("exit");
                this.rl.close();
            } else {
                this.rl.prompt();
                this.mainloop();
            }
        }
    };
}

new main().mainloop();
