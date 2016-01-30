<!doctype html>
<html class="no-js" ng-app="angularMaterialAdmin">
<head>
    <meta charset="utf-8">
    <title>Ruben.edu</title>
    <meta name="description" content="Angular admin dashboard with material design">
    <meta name="author" content="flatlogic.com">
    <meta name="viewport" content="width=device-width">
    <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet">
    <!-- Place favicon.ico and apple-touch-icon.png in the root directory -->

    <!-- build:css({.tmp/serve,src}) styles/vendor.css -->
    <!-- bower:css -->
    <link rel="stylesheet" href="bower_components/angular-material/angular-material.css" />
    <link rel="stylesheet" href="bower_components/nvd3/build/nv.d3.css" />
    <!-- endbower -->
    <!-- endbuild -->

    <!-- build:css({.tmp/serve,src}) styles/app.css -->
    <!-- inject:css -->
    <link rel="stylesheet" href="src/app/index.css">
    <!-- endinject -->
    <!-- endbuild -->
</head>
<body>
<!--[if lt IE 10]>
<p>You are using an <strong>outdated</strong> browser. Please
    <a href="http://browsehappy.com/">upgrade your browser</a>
    to improve your experience.</p>
<![endif]-->

<div ui-view layout="row" layout-fill></div>

<!-- build:js(src) scripts/vendor.js -->
<!-- bower:js -->
<script src="bower_components/jquery/dist/jquery.js"></script>
<script src="bower_components/angular/angular.js"></script>
<script src="bower_components/angular-animate/angular-animate.js"></script>
<script src="bower_components/angular-cookies/angular-cookies.js"></script>
<script src="bower_components/angular-touch/angular-touch.js"></script>
<script src="bower_components/angular-sanitize/angular-sanitize.js"></script>
<script src="bower_components/angular-ui-router/release/angular-ui-router.js"></script>
<script src="bower_components/angular-aria/angular-aria.js"></script>
<script src="bower_components/angular-material/angular-material.js"></script>
<script src="bower_components/d3/d3.js"></script>
<script src="bower_components/nvd3/build/nv.d3.js"></script>
<script src="bower_components/angular-nvd3/dist/angular-nvd3.js"></script>
<!-- endbower -->
<!-- endbuild -->

<!-- build:js({.tmp/serve,.tmp/partials,src}) scripts/app.js -->
<!-- inject:js -->
<script src="src/app/app.js"></script>
<script src="src/app/components/services/TodoListService.js"></script>
<script src="src/app/components/services/TableService.js"></script>
<script src="src/app/components/services/PerformanceService.js"></script>
<script src="src/app/components/services/NavService.js"></script>
<script src="src/app/components/services/MessagesService.js"></script>
<script src="src/app/components/services/CountriesService.js"></script>
<script src="src/app/components/directives/panelWidget.js"></script>
<script src="src/app/components/directives/messagesSection.js"></script>
<script src="src/app/controllers/WarningsController.js"></script>
<script src="src/app/controllers/VisitorsController.js"></script>
<script src="src/app/controllers/UsageController.js"></script>
<script src="src/app/controllers/TodoController.js"></script>
<script src="src/app/controllers/TableController.js"></script>
<script src="src/app/controllers/SearchController.js"></script>
<script src="src/app/controllers/ProfileController.js"></script>
<script src="src/app/controllers/PerformanceController.js"></script>
<script src="src/app/controllers/MessagesController.js"></script>
<script src="src/app/controllers/MemoryController.js"></script>
<script src="src/app/controllers/MainController.js"></script>
<script src="src/app/modules/login/LoginController.js"></script>
<script src="src/app/modules/projects/ProjectsController.js"></script>
<script src="src/app/modules/content/contentController.js"></script>
<script src="src/app/modules/leerbomen/leerbomenController.js"></script>
<script src="src/app/modules/leerdoelen/leerdoelenController.js"></script>
<script src="src/app/modules/leerlingen/leerlingenController.js"></script>
<script src="src/app/index.js"></script>
<!-- endinject -->

<!-- inject:partials -->
<!-- angular templates will be automatically converted in js and inserted here -->
<!-- endinject -->
<!-- endbuild -->

</body>
</html>
