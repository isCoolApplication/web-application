'use strict';

(function () {
	app.service('NavigationLinkSrv', [function () {

		this.setNav = function ( nav, data ) {
			navigation = navigations[nav];
			navigation.settings = {
				'name': (angular.isObject(data))? data.name: data,
				'links': [
					{ 'name': 'Account Information', 'link': '/account-information' }
				]
			};
			if( angular.isObject(data) )
				navigation.brandName = data.department;
		};
		this.getNav = function () { return navigation; };
		this.clear = function () {
			navigation = null;
		};

		var navigation,
			navigations = {
				"operator": {
					"brandName" : "OPERATOR",
					"brandLink" : "/operator"
				},
				"administrator":
					{
						"brandName": "ADMINISTRATOR",
						"brandLink" : "/admin",
						"links": [
							{
								"hasSub": true,
								"name": "Registrations",
								"subLinks": [
									{
										"name": "Instructors",
										"link": "/instructors"
									},{
										"name": "Students",
										"link": "/students"
									},{
										"name": "Operators",
										"link": "/operators"
									}
								]
							},{
								"hasSub": true,
								"name": "Courses",
								"subLinks": [
									{
										"name": "CIIT",
										"link": "/course/ciit"
									},{
										"name": "CEA",
										"link": "/course/cea"
									},{
										"name": "CAS",
										"link": "/course/cas"
									},{
										"name": "CPSEM",
										"link": "/course/cpsem"
									}
								]
							},{
								"hasSub": true,
								"name": "Subjects",
								"subLinks": [
									{
										"name": "CIIT",
										"link": "/subject/ciit"
									},{
										"name": "CEA",
										"link": "/subject/cea"
									},{
										"name": "CAS",
										"link": "/subject/cas"
									},{
										"name": "CPSEM",
										"link": "/subject/cpsem"
									}
								]
							}
						]
					}
			};
	}]);
})();