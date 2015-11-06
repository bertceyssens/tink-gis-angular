'use strict';
(function(module) {
  try {
    module = angular.module('tink.gis.angular');
  } catch (e) {
    module = angular.module('tink.gis.angular', ['leaflet-directive']);
  }
  module.directive('tinkMap', [function () {
    return {
      restrict: 'EA',
      // scope: {
      //   text: '@'
      // },
      template: '<tinkMap><leaflet lf-center="center" layers="layers" width="100%" height="480px"></leaflet><tinkMap>',
      replace: true,
         controller: function($scope) {
              angular.extend($scope, {
                center: {
                    lat: 51.2192159,
                    lng: 4.4028818,
                    zoom: 12
                },
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
              
              console.log($scope)
     
        },
      link: function(scope) {

        // Do this on load
        function initialize() {
          console.log(scope.text);
         
     
          // console.log(scope.defaults);
        }

        initialize();
      }
    };
  }]);
})();


;