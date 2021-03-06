StarTripApp.service('research', function(){

  var warpDriveResearched = false;
  //research costs
  var warpDriveResearchCost = 10;

  this.displayResearchWarpDriveButton = function(numNuclearShips, numNuclearShipsToShowMineDilithiumButton){
    return (numNuclearShips >= numNuclearShipsToShowMineDilithiumButton && !warpDriveResearched);
  };

  this.researchWarpDriveButtonDisabled = function(knowledgeCount){
    return (warpDriveResearchCost >= knowledgeCount);
  };

  this.getWarpDriveResearchCost = function(){
    return warpDriveResearchCost;
  };

  this.researchWarpDrive = function(){
    warpDriveResearched = true;
  };

  this.isWarpDriveResearched = function(){
    return warpDriveResearched;
  };

});
