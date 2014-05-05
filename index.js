
var titleGenerator = {}

titleGenerator.releaseTitle = function(opts){
  var trackName = opts.trackName || "";
  var primaryArtists = opts.primaryArtists || [];
  var featArtists = opts.featArtists || [];
  var remixArtists = opts.remixArtists || [];

  var shortTitle = titleGenerator.shortTitle(opts);
  var featArtists = featArtists.join(" & ")
  var remixArtists = remixArtists.join(" & ")

  if(featArtists.length<=0 && remixArtists.length<=0){
    return shortTitle
  }else if(remixArtists.length<=0){
    return "" + shortTitle + " (feat. " + featArtists + ")";
  } else if(featArtists.length<=0){
    return "" + shortTitle + " (" + remixArtists + " Remix)";
  }else{
    return "" + shortTitle + " (feat. " + featArtists + ") [" + remixArtists + " Remix]";
  }
};

titleGenerator.shortTitle = function(opts){
  trackName = opts.trackName || "";
  primaryArtists = opts.primaryArtists || [];
  primaryArtists = primaryArtists.join(" & ");

  if(primaryArtists.length >0 && trackName.length >0){
    return trackName + " - " + primaryArtists;
  } else{ 
    return trackName || primaryArtists || ""; 
  }
};

module.exports = titleGenerator;
