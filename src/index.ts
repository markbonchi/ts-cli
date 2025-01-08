#!/usr/bin/env node

import fs from "fs"
import { cmd } from "./utils"
import { Command } from "commander"
import inquirer from "inquirer"


const main = new cmd()

main.mainloop();