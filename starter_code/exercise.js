var exercise = {};

exercise.countRecords = function(data){
    //-------------------------------------------
    // YOUR CODE
    // Return the total number of records
    //-------------------------------------------

    return data.length; //'Error: countRecords not implemented'; 
};

exercise.countDistrictCrimes = function(data,district){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given district
    //-------------------------------------------

    //district info at index 19

    /*
    var num_crimes = data.reduce(function(previous, current) {	 
        if(current[19] === district){
            return previous++;
        }
        else 
            return previous;
    }, 0); 
    //better way to do this? 
    //previous is alawys being returned vs just returning the last count

    return num_crimes; //'Error: countDistrictCrimes not implemented'; 

    */
    //--------------------------------------------

    var filtered = data.filter(function(element) {
        return (element[19] === district);  
    });

    return filtered.length;
};

exercise.countPrimaryType = function(data,primaryType){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the giving primary type
    //-------------------------------------------

    //primary type info at index 13

    /*
    var num_crimes = data.reduce(function(previous, current) {	 
        if(current[13] === primaryType){
            return previous++;
        }
        else 
            return previous;
    }, 0); 

    return num_crimes; //'Error: countPrimaryType not implemented';

    */
    //--------------------------------------------
    
    var filtered = data.filter(function(element) {
        return (element[13] === primaryType);  
    });

    return filtered.length;    
};

exercise.countLocation = function(data,location){
    //-------------------------------------------
    // YOUR CODE
    // Return the number of crimes 
    // for the given location
    //-------------------------------------------

    //location info at index 15

    /*
    var num_crimes = data.reduce(function(previous, current) {	 
        if(current[15] === location){
            return previous++;
        }
        else 
            return previous;
    }, 0); 

    return num_crimes; //'Error: countLocation not implemented';

    */
    //--------------------------------------------
    
    var filtered = data.filter(function(element) {
        return (element[15] === location);  
    });

    return filtered.length;
};


exercise.buildLatLngPoint = function(crime){
    //-------------------------------------------
    // YOUR CODE
    // build the point for the given crime
    // 
    // For example:
    //
    // var point = {};    
    // point.latitude = crime[latitudeColumnNumber];
    // point.longitude = crime[longitudeColumnNumber];
    // return point;    
    //-------------------------------------------    

    var point = {};    
    point.latitude = crime[29][1];
    point.longitude = crime[29][2];

    return point; //'Error: buildLatLngPoint not implemented';
};




