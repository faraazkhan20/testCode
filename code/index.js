app = angular.module("myApp", []);
app.controller("myCtrl", function ($scope, $http, $window, $timeout) {
  $scope.temp = {};
  $scope.post = {};
  let url = "code/index.php";

  // ╔═══════════════════════════╗
  // ║     UTILITY FUNCTIONS     ║
  // ╚═══════════════════════════╝
  // clearTemp(): function to clear the temp object
  $scope.clearTemp = function () {
    $scope.temp = {};
  };
  // ---------------------------------------
  // ---------------------------------------
  // ---------------------------------------

  // =========================================================================================================================

  // ╔═══════════════════════════╗
  // ║     GET PROBLEMS DATA     ║
  // ╚═══════════════════════════╝
  $scope.getLeetCodeData = function () {
    $http({
      method: "POST",
      url: url,
      processData: false,
      transformRequest: function (data) {
        var formData = new FormData();
        formData.append("type", "getLeetCodeData");
        return formData;
      },
      data: $scope.temp,
      headers: { "Content-Type": undefined },
    }).then(function (data, status, headers, config) {
      console.log(data.data);
      if (data.data.success) {
        $scope.post.leetCodeData = data.data.data;
        console.log($scope.post.leetCodeData);
      } else {
        $scope.post.leetCodeData = [];
      }
    });
  };
  $scope.getLeetCodeData();

  // ╔═══════════════════════╗
  // ║     SAVE SOLUTION     ║
  // ╚═══════════════════════╝
  // $scope.saveSolution = function () {
  //   console.log($scope.temp);
  //   $http({
  //     method: "POST",
  //     url: url,
  //     processData: false,
  //     transformRequest: function (data) {
  //       var formData = new FormData();
  //       formData.append("type", "saveSolution");
  //       formData.append("problem", $scope.temp.problem);
  //       formData.append("solution", $scope.temp.solution);
  //       return formData;
  //     },
  //     data: $scope.temp,
  //     headers: { "Content-Type": undefined },
  //   }).then(function (data, status, headers, config) {
  //     console.log(data.data);
  //     if (data.data.success) {
  //       $scope.post.leetCodeData = data.data.data;
  //       $scope.notificationSuccess(data.data);
  //       console.log($scope.post.leetCodeData);
  //     } else {
  //       $scope.post.leetCodeData = [];
  //     }
  //   });
  // };

  // =========================================================================================================================

  // ╔═══════════════════════╗
  // ║     NOTIFICATIONS     ║
  // ╚═══════════════════════╝
  $scope.notificationSuccess = function (msg) {
    jQuery(".notification-success > span").html(msg);
    jQuery(".notification-success").show().addClass("animateOpen");
    jQuery(".notification-success")
      .delay(3500)
      .slideUp(function () {
        jQuery(".notification-success > span").html("");
      });
  };
  $scope.notificationFailure = function (msg) {
    jQuery(".notification-danger > span").html(msg);
    jQuery(".notification-danger").show().addClass("animateOpen");
    jQuery(".notification-danger")
      .delay(3500)
      .slideUp(function () {
        jQuery(".notification-danger > span").html("");
      });
  };
  $scope.notificationInfo = function (msg) {
    jQuery(".notification-info > span").html(msg);
    jQuery(".notification-info").show().addClass("animateOpen");
    jQuery(".notification-info")
      .delay(3500)
      .slideUp(function () {
        jQuery(".notification-info > span").html("");
      });
  };
  $scope.notificationWarning = function (msg) {
    jQuery(".notification-warning > span").html(msg);
    jQuery(".notification-warning").show().addClass("animateOpen");
    jQuery(".notification-warning")
      .delay(3500)
      .slideUp(function () {
        jQuery(".notification-warning > span").html("");
      });
  };
});
