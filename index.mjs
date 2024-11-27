#!/usr/bin/env node

import inquirer from 'inquirer';
import shell from 'shelljs';
import chalk from 'chalk';

const installZsh = () => {
  console.log(chalk.blue('🔧 Installing Zsh...'));
  if (!shell.which('zsh')) {
    shell.exec('sudo apt update && sudo apt install -y zsh', { silent: false });
    console.log(chalk.green('✅ Zsh installed successfully!'));
  } else {
    console.log(chalk.green('✅ Zsh is already installed.'));
  }
};

const installOhMyZsh = () => {
  console.log(chalk.blue('🌟 Installing Oh My Zsh...'));
  if (!shell.which('zsh')) {
    console.log(chalk.red('❌ Zsh is not installed. Please install Zsh first.'));
    return;
  }

  shell.exec('sh -c "$(curl -fsSL https://raw.githubusercontent.com/ohmyzsh/ohmyzsh/master/tools/install.sh)"', { silent: false });
  console.log(chalk.green('✅ Oh My Zsh installed successfully!'));

  console.log(chalk.blue('⚙️  Enabling the git plugin in .zshrc...'));
  const zshrcPath = `${shell.env.HOME}/.zshrc`;
  if (shell.test('-f', zshrcPath)) {
    shell.sed('-i', /^plugins=\(.*\)/, 'plugins=(git)', zshrcPath);
    console.log(chalk.green('✅ Git plugin enabled successfully!'));
  } else {
    console.log(chalk.red('❌ .zshrc file not found. Oh My Zsh might not have installed correctly.'));
  }
};

const setDefaultShell = () => {
  console.log(chalk.blue('🖥️ Setting Zsh as the default shell...'));
  if (!shell.which('zsh')) {
    console.log(chalk.red('❌ Zsh is not installed. Please install Zsh first.'));
    return;
  }

  const user = shell.env.USER;
  console.log(chalk.yellow(`🔄 Changing the default shell to Zsh for user: ${user}`));
  const result = shell.exec(`sudo chsh -s $(which zsh) ${user}`, { silent: false });
  if (result.code !== 0) {
    console.log(chalk.red('❌ Failed to set Zsh as the default shell. Ensure you have the necessary permissions.'));
  } else {
    console.log(chalk.green('✅ Zsh has been set as the default shell successfully!'));
  }
};

const menu = async () => {
  const { choice } = await inquirer.prompt([
    {
      type: 'list',
      name: 'choice',
      message: '🤔 What do you want to do?',
      choices: [
        { name: '🔧 Install Zsh', value: 'installZsh' },
        { name: '🌟 Install Oh My Zsh (with git plugin)', value: 'installOhMyZsh' },
        { name: '🖥️  Set Zsh as the default shell', value: 'setDefaultShell' },
        { name: '🚀 Install everything (Zsh, Oh My Zsh, set Zsh as default)', value: 'installAll' },
        { name: '❌ Exit', value: 'exit' },
      ],
    },
  ]);

  switch (choice) {
    case 'installZsh':
      installZsh();
      break;
    case 'installOhMyZsh':
      installOhMyZsh();
      break;
    case 'setDefaultShell':
      setDefaultShell();
      break;
    case 'installAll':
      installZsh();
      installOhMyZsh();
      setDefaultShell();
      break;
    case 'exit':
      console.log(chalk.yellow('👋 Exiting... Have a nice day!'));
      process.exit(0);
  }

  // Volver al menú después de completar una acción
  console.log(chalk.blue('\nReturning to the menu...\n'));
  await menu();
};

// Iniciar el menú
menu();
