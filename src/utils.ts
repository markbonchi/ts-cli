import readline from "readline/promises"
import { argv, stdin as input, stdout as output, stderr } from "process"


export class cmd {
    rl: readline.Interface
    commands: string[] = []


    constructor() {
        const rl = readline.createInterface({ input, output });
        this.rl = rl;
        this.rl.setPrompt("(cmd)> ");
    }

    mainloop = async () => {
        this.rl.prompt();
        for await (const line of this.rl) {
            this.parceCommand(line)
        }
    };

    protected parceCommand = (line: string) => {
        switch (line.toLowerCase()) {
            case "quit":
                this.rl.close();
                break;
            case "clear":
                this.clear()
                this.commands = [...this.commands, line]
                this.mainloop()
                break
            case "hi":
                this.sayHello()
                this.commands = [...this.commands, line]
                this.mainloop()
                break
            case "history":
                this.listHistory()
                this.commands = [...this.commands, line]
                this.mainloop()
                break
            default:
                (line) && this.nonCommand(line)
                this.mainloop()
        }
    }

    private sayHello = () => {
        console.log("Hello")

    }

    private clear = () => {
        console.log("clear")
    }

    private listHistory = () => {
        console.log("----------")
        for (let i in this.commands) {
            console.log(`${i}-----${this.commands[i]}`)
        }
        console.log("----------")
    }

    private nonCommand = (line: string) => {
        console.log(`${line} is not a command`)
    }
}


export default { cmd }