const QuantumQuery = require('./QuantumQuery');

function expressQuantumMiddleware(options = {}) {
  return function(req, res, next) {
    req.quantumOptions = options; // Pass custom options to QuantumQuery middleware
    QuantumQuery.middleware(req, res, next);
  };
}

module.exports = expressQuantumMiddleware;