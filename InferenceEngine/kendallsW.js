var KendallsW = function (opts) {
  this.data = opts.data;

  this.m = this.data.length;
  this.k = this.data[0].classification.length;
}

KendallsW.prototype.calculateW = function () {
  return ( (12 * this.calculateDevSq()) / ((Math.pow(this.m, 2)) * (Math.pow(this.k, 3) - this.k)) );
};

KendallsW.prototype.calculateDevSq = function () {
  var sums = Array.apply(null, Array(this.data[0].classification.length)).map(function() { return 0; });
  for (var i = 0; i < this.data[0].classification.length; i++)
    for (var j = 0; j < this.data.length; j++)
      sums[i] += this.data[j].classification[i];

  var ret_val = 0.0,  r_mean = this.calculateRMean(sums);

  for (var i = 0; i < sums.length; i++)
    ret_val += Math.pow(sums[i] - r_mean, 2);

  return ret_val;
};

KendallsW.prototype.calculateRMean = function (values) {
  var ret_val = 0.0;
  for (var i = 0; i < values.length; i++)
    ret_val += values[i];

  return ret_val / values.length;
};

module.exports = KendallsW;
