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
            if (line === "quit") {
                console.log("exit");
                this.rl.close();
            } else {
                this.mainloop();
            }
        }
    };
}

export default { cmd }