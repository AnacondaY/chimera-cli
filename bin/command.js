#! /usr/bin/env node
const command = require('commander');
const chalk = require('chalk');

command
    .command('chimera-cli')
    .option('--colors', '是否采用彩色模式log')
    .description('chimera-ui的脚手架工具')
    .action(function(opts){
        
    })