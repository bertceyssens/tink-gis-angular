'use strict';
(function(module) {
  try {
    module = angular.module('tink.gis.angular');
  } catch (e) {
    module = angular.module('tink.gis.angular', ['leaflet-directive']);
  }
  


module.directive('tinkMap', function() {
  return {
    template: '<leaflet center="center" layers="layers" width="100%" height="480px"></leaflet>',
    controller: function($scope) {
            
            if ($scope.center == undefined)
            {
      
              angular.extend($scope, {
                center: {
                    lat: 51.2192159,
                    lng: 4.4028818,
                    zoom: 12
                }
              })
                
              }
              
              if ($scope.layers == undefined || $scope.layers.baselayers == undefined)
              {
                  angular.extend($scope, {
                layers: {
                    baselayers: {
                        xyz: {
                            name: 'Stadsplan',
                            url: 'http://tiles.arcgis.com/tiles/1KSVSmnHT2Lw9ea6/arcgis/rest/services/basemap_stadsplan_v6/MapServer/tile/{z}/{y}/{x}',
                            type: 'xyz',
                            layerOptions: {
                                showOnSelector: false
                            }
                        }
                    }
                }
              
              })
            }
             
       
     
        }
  
  
  
  };
});
  

})();


