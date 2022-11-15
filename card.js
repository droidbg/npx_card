#!/usr/bin/env node

"use strict";

const boxen = require("boxen");
const chalk = require("chalk");
const inquirer = require("inquirer");
const clear = require("clear");
const open = require("open");

clear();

const prompt = inquirer.createPromptModule();

const questions = [
  {
    type: "list",
    name: "action",
    message: "What you want to do?",
    choices: [
      {
        name: `Send me an ${chalk.green.bold("email")}?`,
        value: () => {
          open("mailto:binni1108@gmail.com");
          console.log("\nDone, see you soon at inbox.\n");
        },
      },
      {
        name: "Just quit.",
        value: () => {
          console.log("Hasta la vista.\n");
        },
      },
    ],
  },
];

const data = {
  name: chalk.bold.magenta("                   Binni Goel"),
  handle: chalk.white("@droidbg"),
  work: `${chalk.white("Software Dev Engineer at")} ${chalk
    .red
    .bold("Thoughtworks")}`,
  medium: chalk.gray("https://medium.com/") + chalk.cyan("@droidbg"),
  github: chalk.gray("https://github.com/") + chalk.green("droidbg"),
  linkedin: chalk.gray("https://linkedin.com/in/") + chalk.yellow("binni-goel"),
  // web: chalk.cyan("https://anmolsingh.me"),
  npx: chalk.red("npx") + " " + chalk.white("droidbg"),

  labelWork: chalk.white.bold("       Work:"),
  labelMedium: chalk.white.bold("    Medium:"),
  labelGitHub: chalk.white.bold("     GitHub:"),
  labelLinkedIn: chalk.white.bold("   LinkedIn:"),
  // labelWeb: chalk.white.bold("        Web:"),
  labelCard: chalk.white.bold("       Card:"),
};

const me = boxen(
  [
    `${data.name}`,
    ``,
    `${data.labelWork}  ${data.work}`,
    ``,
    `${data.labelMedium}  ${data.medium}`,
    `${data.labelGitHub}  ${data.github}`,
    `${data.labelLinkedIn}  ${data.linkedin}`,
    // `${data.labelWeb}  ${data.web}`,
    ``,
    `${data.labelCard}  ${data.npx}`,
    ``,
    `${chalk.italic("I am currently looking for new opportunities,")}`,
    `${chalk.italic("my inbox is always open. Whether you have a")}`,
    `${chalk.italic("question or just want to say hi, I will try ")}`,
    `${chalk.italic("my best to get back to you!")}`,
  ].join("\n"),
  {
    margin: 1,
    float: "center",
    padding: 1,
    borderStyle: "single",
    borderColor: "magenta",
  }
);

console.log(me);
const tip = [
  `Tip: Try ${chalk.cyanBright.bold("cmd/ctrl + click")} on the links above`,
  "",
].join("\n");
console.log(tip);

prompt(questions).then((answer) => answer.action());
