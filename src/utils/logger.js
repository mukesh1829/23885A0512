const logger = (funcName, args) => {
  console.log(`[LOG] ${new Date().toISOString()} | Function: ${funcName} | Args:`, args);
};

export default logger;
