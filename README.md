title-generator
===============

## Installation

  Install with [component(1)](http://component.io):

    $ component install yx2zhang-component/title-generator

## Example

```
var primaryArtists = ["Jack", "Bill"];
var featArtists = ["Rob", "Deadmau5"];
var remixArtists = ["Cat4", "Snow"];
var trackName = "Little Star";
var opts = {
  trackName: trackName,
  primaryArtists: primaryArtists,
  featArtists: featArtists,
  remixArtists: remixArtists 
}
titleGenerator.releaseTitle(opts); //"Little Star - Jack & Bill (feat. Rob & Deadmau5) [Cat4 & Snow Remix]"

```
