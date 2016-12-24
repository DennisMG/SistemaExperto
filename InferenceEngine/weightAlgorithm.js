'use strict';
var weightedVariables;
var totals;
var results;
var weightAlgorithm = function () {
  
}

weightAlgorithm.prototype.AssignWeights = function(pollResults){
  weightedVariables = {};
  totals = {};
  results = pollResults;
  for(var i = 0; i < results.length; i++){
    ProcessAnswers(results[i].answers);
  }
  
  CalcuteAverageWeight();
  return weightedVariables;
}

var ProcessAnswers = function(answers){
  for(var j = 0; j < answers.length; j++){
      WeightVariable(answers[j]);
  }
}

var WeightVariable = function(variable){
  if(!weightedVariables[variable.id]){
    totals[variable.id] = 0;
    weightedVariables[variable.id] = {};
  }
    
  for(var k = 0; k < variable.items.length; k++){
     WeightDimension(variable.items[k], variable.id)
  }
}

var WeightDimension = function(dimension, variableId){
  if(weightedVariables[variableId][dimension.name] === undefined)
    weightedVariables[variableId][dimension.name] = 0;
  weightedVariables[variableId][dimension.name] += dimension.weight;
  totals[variableId] += dimension.weight;
}

var CalcuteAverageWeight = function(){
  for (var variableId in weightedVariables) {
    for (var dimensionName in weightedVariables[variableId]) {
      let subtotal = (weightedVariables[variableId][dimensionName] / results.length);
      let total = (totals[variableId] / results.length);
      weightedVariables[variableId][dimensionName] = Math.round((subtotal / total) * 100)
    }
  }
}

module.exports = weightAlgorithm;
