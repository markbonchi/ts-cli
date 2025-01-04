#!/usr/bin/env node
import fs from "fs"
import { Command } from "commander"

const program = new Command()

program
    .action(() => { console.log("Hello!") })


program.parse(process.argv)