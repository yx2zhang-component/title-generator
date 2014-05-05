var expect = require('expect.js')
var titleGenerator = require('./');

var primaryArtists = ["Jack", "Bill"];
var featArtists = ["Rob", "Deadmau5"];
var remixArtists = ["Cat4", "Snow"];
var trackName = "Little Star";


describe('title-generator', function(){

  it('full-title-test', function(){
    var result = "Little Star - Jack & Bill (feat. Rob & Deadmau5) [Cat4 & Snow Remix]"
    var opts = {
      trackName: trackName,
      primaryArtists: primaryArtists,
      featArtists: featArtists,
      remixArtists: remixArtists 
    }

    test = titleGenerator.releaseTitle(opts);
    expect(test).to.eql(result);
  });


  it('primaryArtists-missing-test', function(){
    var result = "Little Star (feat. Rob & Deadmau5) [Cat4 & Snow Remix]"
    var opts = {
      trackName: "Little Star",
      featArtists: featArtists,
      remixArtists: remixArtists 
    }

    test = titleGenerator.releaseTitle(opts);
    expect(test).to.eql(result);
  });


  it('featArtists-missing-test', function(){
    var result = "Little Star (Cat4 & Snow Remix)"
    var opts = {
      trackName: "Little Star",
      remixArtists: remixArtists 
    }

    test = titleGenerator.releaseTitle(opts);
    expect(test).to.eql(result);
  });


  it('remixArtists-missing-test', function(){
    var result = "Little Star (feat. Rob & Deadmau5)"
    var opts = {
      trackName: "Little Star",
      featArtists: featArtists 
    }

    test = titleGenerator.releaseTitle(opts);
    expect(test).to.eql(result);
  });


  it('primaryArtists-only', function(){
    var result = "Jack & Bill"
    var opts = {
      primaryArtists: primaryArtists 
    }

    test = titleGenerator.releaseTitle(opts);
    expect(test).to.eql(result);
  });

});
