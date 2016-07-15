'use strict';

/* jasmine specs for controllers go here */

describe('homeCtrl', function() {
  
  var scope, ctrl, $httpBackend;

  // Load our app module definition before each test.
  beforeEach(module('portfolioApp'));
  
  // The injector ignores leading and trailing underscores here (i.e. _$httpBackend_).
  // This allows us to inject a service but then attach it to a variable
  // with the same name as the service in order to avoid a name conflict.
  beforeEach(inject(function(_$httpBackend_, $rootScope, $controller) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('works.json').
        respond([{id: 'work-one'}, {id: 'work-three'}]);

    scope = $rootScope.$new();
    ctrl = $controller('homeCtrl', {$scope: scope});
  }));

  it('should create "thumbs" model with 2 thumbs fetched from xhr', function() {
	  expect(scope.thumbs).toBeUndefined();
	  $httpBackend.flush();

	  expect(scope.thumbs).toEqual([
	  	{id: 'work-one'},
	    {id: 'work-three'}
	  ]);
	});

});

describe('detailsCtrl', function() {
	
	beforeEach(module('portfolioApp'));

	
})
