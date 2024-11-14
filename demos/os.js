import os from 'os'

//Platform

console.log(`Platform: ${os.platform()}`)

//CPU architecture

console.log(`CPU Architecture: ${os.arch()}`)

//CPU Core info
console.log(os.cpus())

//Free Memory

console.log(`Free memory: ${os.freemem()}`)

//Total Memory

console.log(`Total memory: ${os.totalmem()}`)

//Home Directory

console.log(`Home Directory: ${os.homedir()}`)

//UpTime

console.log(`UpTime: ${os.uptime()}`)