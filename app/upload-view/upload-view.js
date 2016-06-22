'use strict';

angular.module('wistiaUploader.upload', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/upload', {
    templateUrl: 'upload-view/upload-view.html',
    controller: 'VideoUploadCtrl'
  });
}])

.controller('VideoUploadCtrl', [function() {

}])

.directive('videoUpload', function() {
        return {
            link: function($scope, element) { 

            	$( '#uploadButton' ).on('click', function() {
				  $('#fileupload').click(); 
				});

            	

               $(function () {
			    $('#fileupload').fileupload({
			        dataType: 'json',
			        progressall: function (e, data) {
			        var progress = parseInt(data.loaded / data.total * 100, 10);
			        $('#progressBar').removeClass('hidden');
			        $('.progress-bar').css('width', progress+'%').attr('aria-valuenow', progress);
			    },
			        done: function (e, data) {  
			        	var videoId = data.result.hashed_id; 	
			        	$('#video').html('<div class="wistia_responsive_padding" style="padding:56.38% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_' + videoId + ' videoFoam=true" style="height:100%;width:100%">&nbsp;</div></div></div>')
			            $('#progressBar').addClass('hidden');
			        }
			    });
			});
            }
        }

    });