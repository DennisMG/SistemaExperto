// Subjets = Dimensiones
// Categories = 2 (importante y no importante)
    var kappaFleiss = function(lines){
        var lineCount = lines.length;
        var columnCount = lines[0].length;
        var firstLine = true;
        var columnSums = new Array(columnCount);//[columnCount]
            for (var i = columnSums.length - 1; i >= 0; i--) {
                columnSums[i] = 0;
            };
        var lineConformities = new Array(lineCount);//[lineCount]
        for (var i = lineConformities.length - 1; i >= 0; i--) {
                lineConformities[i] = 0;
            };
            
        var lineSum=0;
        var lineNumber=0;
        for (var i = 0; i < lines.length; i++){
            if (lines[i].length != columnCount){ console.log("Constant number of columns expected."); return;}
            var cellNumber=0;
            var currentLineSum=0;
            var currentLineSquaresSum = 0;

            for (var cell=0; cell < lines[i].length; cell++) {
                columnSums[cellNumber++] += lines[i][cell];
                currentLineSquaresSum += lines[i][cell]*lines[i][cell];
                currentLineSum += lines[i][cell];
            }

            lineConformities[lineNumber++] = (1.00/(currentLineSum*(currentLineSum-1))*(currentLineSquaresSum-currentLineSum)).toFixed(2);
            if (firstLine) {
                lineSum=currentLineSum;
            } else {
                if (lineSum != currentLineSum){ console.log("Constant number of votes expected. (As "+lineSum+" in first line)"); return;}
            }
            firstLine=false;
        }

        if (columnCount==1 || lineSum==1) return 1.0;
        var columnWeightSquareSum=0;
        for (var columnSum = 0;  columnSum < columnSums.length; columnSum++) {
            columnWeightSquareSum += Math.pow((columnSums[columnSum]/lineSum)/lineCount,2);
        }
        var averageConformity=0;
        
        for (var lineConformity = 0; lineConformity < lineConformities.length ; lineConformity++) {
            averageConformity += lineConformities[lineConformity]/lineNumber;
        }
        result = (averageConformity-columnWeightSquareSum)/(1-columnWeightSquareSum);
        if(isNaN(result))
            return 1.00;
        return result;
    }


    // var test = [  [2,0],
    //               [0,2],
    //               [2,0]
                  
    //               ];
            
    // var result = kappaFleiss(test);

    // console.log(result);
module.exports = kappaFleiss;