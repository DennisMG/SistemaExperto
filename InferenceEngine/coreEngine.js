var KMeans = require('./kMeans');
var KendallsW = require('./kendallsW');
var coreEngine = function  (opts) {
	this.file_name = opts.file_name;
	this.k = opts.k;
	this.m = opts.m;
	this.shuffle = opts.shuffle;
	this.k_times = opts.times;

	this.biggest_cluster = -1;

	this.data = this.extractData(opts.data);
	this.vectors = this.asingNumericValueToParticipant();

	// console.log("this.data: ",this.data);
	// console.log( "this.vectors: ",this.vectors );


	//this.executeMethods();
}

coreEngine.prototype.getVectors = function() {
	return this.vectors;
};

coreEngine.prototype.getMainCluster = function() {
	return this.biggest_cluster;
};

coreEngine.prototype.setK = function(k) {
	this.k = k;
};

coreEngine.prototype.setM = function(m) {
	this.m = m;
};

coreEngine.prototype.executeMethods = function() {
	var kmeans_result = this.runKMeans();
	var kendall = this.calculateKendallsW();
	// console.log(kmeans_result);
	// console.log(kendall);
	// this.runDBSCAN();
};

coreEngine.prototype.calculateKendallsW = function () {
	var kendalls = new KendallsW({
		data: this.vectors
	});

	return kendalls.calculateW();
	// this.showKendallsResultOnHTML(w);
};



coreEngine.prototype.runKMeans = function() {
	var data = [], cluster_assignments = [];
	for (var i = 0; i < this.vectors.length; i++)
		data.push({expert: this.vectors[i], vector: this.vectors[i].classification});

	var rounds = this.k_times;
	while (rounds--) {
		var kmeans = new KMeans({
			k: this.k,
			m: this.m,
			data: data
		});

		var cluster_assignment = kmeans.run();
		var found = false;
		for (var i = 0; i < cluster_assignments.length; i++) {
			if (cluster_assignments[i].result.toString() === cluster_assignment.toString()) {
				found = true;
				cluster_assignments[i].times++;
			}
		}


		if (!found) {
			cluster_assignments.push({
				result: cluster_assignment,
				times: 1
			});
		}

		found = false;
	}


	var max_result, max_times = 0;
	for (var i = 0; i < cluster_assignments.length; i++)
		if (cluster_assignments[i].times > max_times) {
			max_times = cluster_assignments[i].times;
			max_result = cluster_assignments[i].result;
		}

		this.biggest_cluster = this.getBiggestCluster(max_result);
		return max_result;
		this.showNoiselessTable(max_result);

		//this.showTableOnHTML(max_result);
};

coreEngine.prototype.getBiggestCluster = function (cluster_results) {
	var clusters = [], cluster_found = false;
	for (var i = 0; i < cluster_results.length; i++) {

		cluster_found = false;
		for (var j = 0; j < clusters.length; j++)
			if (clusters[j].id === cluster_results[i]) {
				clusters[j].appearances++;
				cluster_found = true;
			}

		if (!cluster_found)
			clusters.push({id: cluster_results[i], appearances: 1});

	}

	var ret_val = {id: -1, appearances: -1};
	for (var i = 0; i < clusters.length; i++)
		if (clusters[i].appearances > ret_val.appearances) {
			ret_val.id = clusters[i].id;
			ret_val.appearances = clusters[i].appearances;
		}

	return ret_val.id;
};

coreEngine.prototype.extractData = function(file) {
	return {
		experts: this.extractExperts(file),
		participants: this.extractParticipants(file),
		classifications: this.extractClassifications(file)
	};
};

coreEngine.prototype.extractExperts = function(file) {
	var ret_val = [];
	for (var expert = 0; expert < file.length; expert++)
		ret_val.push(file[expert][0]);

	return ret_val;
};

coreEngine.prototype.extractParticipants = function(file) {
	var ret_val = [];
	// console.log("participants: ", file);
	for (var participant = 1; participant < file[0].length; participant++)
		ret_val.push(file[0][participant]);

	if (this.shuffle) {
		// console.log("Shuffling")
		var i = 0, j = 0, temp = null

		for (i = ret_val.length - 1; i > 0; i -= 1) {
			j = Math.floor(Math.random() * (i + 1))
			temp = ret_val[i]
			ret_val[i] = ret_val[j]
			ret_val[j] = temp
		}

		return ret_val;
	}

	return ret_val.sort(function(a, b) { return a.localeCompare(b); });
};

coreEngine.prototype.extractClassifications = function(file) {
	var ret_val = [], data_row = [];
	for (var row = 0; row < file.length; row++) {
		data_row = file[row];
		ret_val.push({
			expert: data_row[0],
			classification: data_row.splice(1)
		});

	}
	return ret_val;
};

coreEngine.prototype.asingNumericValueToParticipant = function() {
	/*
	 *ret_val: the same classifications but the participants has been changed by their lexicographical index when compare to the others
	 *current_n_c: current numeric classificaction (participants are being changed)
	 *current_c: current classification with tha participants labels (participants haven't changed)
	 */
	var ret_val = [], current_n_c = [], current_c = [];
	for (var classification = 0; classification < this.data.classifications.length; classification++) {
		current_c = this.data.classifications[classification];
		for (var participant = 0; participant < current_c.classification.length; participant++)
			current_n_c.push(this.data.participants.indexOf(current_c.classification[participant]) + 1);

		ret_val.push({expert: current_c.expert, classification: current_n_c});
		current_n_c = [];
	}

	return ret_val;
};

coreEngine.prototype.showNoiselessTable = function (results) {
	var ret_val = [], temp_array = [];


	for (var i = 0; i < this.vectors.length; i++) {
		if (results[i] === this.biggest_cluster) {

			temp_array.push(" " + this.vectors[i].expert + "");


			for (var j = 0; j < this.vectors[0].classification.length; j++) {
				temp_array.push(this.data.participants[this.vectors[i].classification[j] - 1]);
			}
			ret_val.push(temp_array);
			temp_array = [];
		}
	}

	noiseless_file = ret_val;

	
};

module.exports = coreEngine;
