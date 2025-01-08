import readline from "readline/promises"
import { stdin as input, stdout as output, stderr } from "process"


export class cmd {
    rl: readline.Interface
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
        switch (line) {
            case "quit":
                this.rl.close();
                console.log("You quit");
                break;
            case "clear":
                console.log("clear")
            default:
                this.mainloop()
        }
    }
}

export default { cmd }