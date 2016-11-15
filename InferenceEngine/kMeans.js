var KMeans = function (objs) {
	this.k = objs.k;
	this.m = objs.m;
	this.data = objs.data;
	this.assignments = [];
	
	this.data_extension = this.dataDimensionExtension();
	this.data_ranges = this.dataExtensionRanges();
	this.means = this.seeds();
}

KMeans.prototype.dataDimensionExtension = function() {
	var ret_val = [], current_vector;
	for (var i = 0; i < this.data.length; i++) {
		
		current_vector = this.data[i].vector;
		for (var j = 0; j < current_vector.length; j++) {
			if (!ret_val[j])
				ret_val[j] = {
					min: 10000,
					max: 0
				};

			if (current_vector[j] < ret_val[j].min)
				ret_val[j].min = current_vector[j];

			if (current_vector[j] > ret_val[j].max)
				ret_val[j].max = current_vector[j];
		}
	}

	return ret_val;
};

KMeans.prototype.dataExtensionRanges = function() {
	var ret_val = [];
	for (var i = 0; i < this.data_extension.length; i++)
		ret_val[i] = this.data_extension[i].max - this.data_extension[i].min;

	return ret_val;
};

KMeans.prototype.seeds = function() {
	var ret_val = [], mean = [], num_cluster = this.k;
	while (num_cluster > 0) {
		for (var i = 0; i < this.data_extension.length; i++) {
			mean[i] = this.data_extension[i].min + (Math.random() * this.data_ranges[i]);
		}

		ret_val.push(mean);
		mean = [];
		num_cluster--;
	}

	return ret_val;
};

KMeans.prototype.run = function() {
	var itMove = false;
	
	do {
		this.assignments = this.assignClusterToDataPoints();
		itMove = this.moveMeans();
	} while (itMove);

	return this.assignments;
};

KMeans.prototype.assignClusterToDataPoints = function() {
	var ret_val = [];
	for (var i = 0; i < this.data.length; i++) {
		
		var vector = this.data[i].vector;
		var distances = [];
		
		if (this.m == 0)
			distances = this.calculateEuclideanDistance(vector);
		else if (this.m == 1)
			distances = this.calculateManhattanDistance(vector);
		else if (this.m == 2)
			distances = this.calculateMinkowskiDistance(vector, 2);
		else if (this.m == 3)
			distances = this.calculateBhattacharayyaDistance(vector);
		else if (this.m == 4)
			distances = this.calculateKullbackLeiberDistance(vector);

		ret_val[i] = distances.indexOf(Math.min.apply(null, distances));
	}

	return ret_val;
};

KMeans.prototype.calculateEuclideanDistance = function(vector) {
	var ret_val = [], mean, sum = 0;
	for (var i = 0; i < this.means.length; i++) {
		mean = this.means[i];

		for (var d = 0; d < vector.length; d++)
			sum += Math.pow((vector[d] - mean[d]), 2);

		ret_val[i] = Math.sqrt(sum);
		sum = 0;
	}
	return ret_val;
};

KMeans.prototype.calculateManhattanDistance = function(vector) {
	var ret_val = [], mean, sum = 0;
	for (var i = 0; i < this.means.length; i++) {
		mean = this.means[i];

		for (var d = 0; d < vector.length; d++)
			sum += Math.abs((vector[d] - mean[d]), 2);

		ret_val[i] = sum;
		sum = 0;
	}
	return ret_val;
};

KMeans.prototype.calculateMinkowskiDistance = function(vector, exp_value) {
	var ret_val = [], mean, sum = 0;
	for (var i = 0; i < this.means.length; i++) {
		mean = this.means[i];

		for (var d = 0; d < vector.length; d++)
			sum += Math.pow(Math.abs(vector[d] - mean[d]), exp_value);

		ret_val[i] = Math.pow(sum, (1 / exp_value));
		sum = 0;
	}
	return ret_val;
};

KMeans.prototype.calculateBhattacharayyaDistance = function(vector) {
	var ret_val = [], mean, sum = 0;
	for (var i = 0; i < this.means.length; i++) {
		mean = this.means[i];

		for (var d = 0; d < vector.length; d++)
			sum += Math.sqrt(vector[d] * mean[d]);

		ret_val[i] = sum;
		console.log(sum);
		sum = 0;
	}
	console.log(JSON.stringify(ret_val));
	return ret_val;
};

KMeans.prototype.calculateKullbackLeiberDistance = function(vector) {
	var ret_val = [], mean, sum = 0;
	for (var i = 0; i < this.means.length; i++) {
		mean = this.means[i];

		for (var d = 0; d < vector.length; d++) {
			sum += ((mean[d] + 1) * (Math.log((mean[d] + 1)/(vector[d] + 1))));
		}
		ret_val[i] = sum;
		sum = 0;
	}
	return ret_val;
};

KMeans.prototype.moveMeans = function() {
	// var sums = Array(this.means.length);
	// var counts = Array(this.means.length);
	// var moved = false;

	// for (var i = 0; i < this.means.length; i++) {
	// 	counts[i] = 0;
	// 	sums[i] = Array(this.means[i].length);
	// 	for  (var d = 0; d < this.means[i]; d++) {
	// 		sums[i][d] = 0;
	// 	}
	// }

	// for (var point_index = 0; point_index < this.assignments.length; point_index++) {
	// 	var mean_index = this.assignments[point_index];
	// 	var point = this.data[point_index].vector;
	// 	var mean = this.means[mean_index];

	// 	counts[mean_index]++;

	// 	for (var d = 0; d < mean.length; d++) {
	// 		sums[mean_index][d] += point[d];
	// 	}
	// }

	// for (var mean_index = 0; mean_index < sums.length; mean_index++) {
	// 	if (0 === counts[mean_index]) {
	// 		sums[mean_index] = means[mean_index];
	// 		for (var d = 0; d < this.data_extension.length; d++) {
	// 			sums[mean_index][d] = this.data_extension[d].min + (Math.random() * this.data_ranges[d]);
	// 		}
	// 		continue;
	// 	}

	// 	for (var d = 0; d < sums[mean_index].length; d++) {
	// 		sums[mean_index][d] /= counts[mean_index];
	// 	}
	// }

	// if (this.means.toString() !== sums.toString()) {
	// 	moved = true;
	// }

	// means = sums;

	// return moved;

	var sums = fillArray(this.means.length, 0); 
	var counts = fillArray(this.means.length, 0);
	var moved = false, i, meanIndex, dim;

	for (i = 0; i < this.means.length; i++)
		sums[i] = fillArray(this.means[i].length, 0);
	

	for (var vectorIndex = 0; vectorIndex < this.assignments.length; vectorIndex++) {
		meanIndex = this.assignments[vectorIndex];
		var vector = this.data[vectorIndex].vector;
		
		// console.log("assignments: " + this.assignments);
		// console.log("means: " + this.means);
		// console.log("looking for: " + meanIndex);
		// console.log("mean[meanIndex]: " + this.means[meanIndex]);

		var mean = this.means[meanIndex];

		counts[meanIndex]++;


		for (var dim = 0; dim < mean.length; dim++)
			sums[meanIndex][dim] += vector[dim];
		
	}

	for (meanIndex = 0; meanIndex < sums.length; meanIndex++) {
		if (0 === counts[meanIndex]) {
			sums[meanIndex] = this.means[meanIndex];

			for (dim = 0; dim < this.data_extension.length; dim++) {
				sums[meanIndex][dim] = this.data_extension[dim].min + (Math.random() * this.data_ranges[dim]);
			}
			continue;
		}

		for (dim = 0; dim < sums[meanIndex].length; dim++) {
			sums[meanIndex][dim] /= counts[meanIndex];
			sums[meanIndex][dim] = Math.round(100*sums[meanIndex][dim])/100;
		}
	}

	if (this.means.toString() !== sums.toString()) {
		var diff;
		moved = true;

		for (meanIndex = 0; meanIndex < sums.length; meanIndex++) {
			for (dim = 0; dim < sums[meanIndex].length; dim++) {
				diff = (sums[meanIndex][dim] - this.means[meanIndex][dim]);
				if (Math.abs(diff) > 0.1) {
					stepsPerIteration = 10;
					this.means[meanIndex][dim] += diff / stepsPerIteration;
					this.means[meanIndex][dim] = Math.round(100*this.means[meanIndex][dim])/100;
				} else {
					this.means[meanIndex][dim] = sums[meanIndex][dim];
				}
			}
		}
	}

	return moved;
};

function fillArray(length, val) {
  return Array.apply(null, Array(length)).map(function() { return val; });
}


module.exports = KMeans;
