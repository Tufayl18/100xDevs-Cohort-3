// https://petal-estimate-4e9.notion.site/Node-js-Bun-and-JS-runtimes-a09a41ccd61c4f498e55750c9a1c9b34
// Create a command line interface that lets the user specify a file path and the nodejs process counts the number of words inside it.

import { Command } from "commander"
import { promises as fs } from "fs"

const program = new Command()

program
  .name("word-counter")
  .description("CLI tool to count words in a file")
  .version("1.0.0")
  .argument("<file>", "Path to the file")
  .action(async (file) => {
    try {
      const content = await fs.readFile(file, "utf-8")
      const wordCount = content.split(/\s+/).filter((word) => word).length

      console.log(`The file contains ${wordCount} words.`)
    } catch (error) {
      console.log("Error : ", error)
    }
  })

program.parse(process.argv)
