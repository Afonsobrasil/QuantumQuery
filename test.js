const Quantum = require('./src/a');

async function main() {
    const quantumQuery = new QuantumQuery();
  
    // Define tasks
    const tasks = ["API request", "Database query", "File I/O"];
  
    // Add tasks to QuantumQuery
    tasks.forEach(task => quantumQuery.addTask(task));
  
    // Observer function to observe task execution
    function observer(tasks) {
      console.log("Tasks executed:", tasks);
    }
  
    // Add observer to QuantumQuery
    quantumQuery.observeTasks(observer);
  
    // Execute tasks
    await quantumQuery.executeTasks();
    console.log("Tasks executed successfully.");
}
  
main();