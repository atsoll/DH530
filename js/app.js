var app = angular.module('datanerds', ['slickCarousel', 'ngRoute', 'ui.bootstrap']);

prefix='/DH530/'

var gradient = new Rainbow();
gradient.setNumberRange(0, 6);
gradient.setSpectrum('green', 'red');
var vh = window.innerHeight/100

app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : prefix + "views/main.html"
    })
    .when("/report", {
        templateUrl : prefix + "views/report.html"
    })
});


app.controller('ctrl', function($scope, $window, $document, $uibModal) {

  this.$onInit = function () {
    AOS.init();
  }

  $scope.model = {

    scroll_bubbles: [
      "In 2017 women received 31.1 % of directing contracts for Canadian films, a 2.9% increase from 2016",
      "Between 2016 and 2017 the fraction of writing contracts awarded to women in the Canadian Film industry rose from 28.2% to 34.1%",
      "In Western Canada, the fraction of female led projects awarded public funding rose from 20% in 2016 to 28.6% in 2017",
      "In Atlantic Canada, the fraction of female led projects awarded public funding dropped from 60% in 2016 to 50% in 2017",
      "The portion of total cinematography contracts awarded to women in the canadian film industry decreased from from 14.6% in 2016 to 6.8% in 2017",
      "The fraction of Canadian TV series having not a single female director increased from 45% in 2013 to 59% in 2017.",
      "Between 2015 and 2017, the presence of indigenous women in the Canadian screen industry passed 'from insignificant to negligible'"
    ],

    carouselData: [
      { img: "./style/img/iceland.jpeg", title:"Iceland", timeframe: "1975", action:"One of the most successful women's strikes took place on October 24, 1975. In response to growing frustration about the 40% gender pay gap in the country, organizers planned a 'day off' strike-like event where women would not go to work and not do unpaid housework.", result:"Since 1975, there have been five more women's strikes in Iceland leading to sustained awareness of gender equality issues. The country today has an image as a front-runner in gender equality"},
      {img: "./style/img/poland.jpg", title:"Poland", timeframe: "2016", action:"In deeply conservative Poland, the ruling Law and Justice Party introduced legislation in 2016 to further limit already strict abortion laws, effectively banning all abortions including those resulting from rape and those where fetal health is compromised. Women's rights organizers coalesced around a #BlackProtest, encouraging women to wear black and post their protest on social media, and to strike on October 3 wearing black", result:"Their success inspired other Polish people to take to the streets in protest of the ecological disaster in the Białowieża primeval forest, air pollution, the courts' dependence on executive power, fascist demonstrations, and the government's violations of labor rights."},
      {img: "./style/img/india.jpg", title:"India", timeframe: "2020", action:"Since December 2019, a leaderless sit-in community composed of more than 200 women has been blocking a major road in Shaheen Bagh in Delhi. The women, and their families, gathered to protest changes to the Indian citizenship process that discriminates against Muslim immigrants.", result:" The site of the sit-in became a small village of sorts, with communal living supports, art installations, and crowds of supporters that swelled to 100,000."},
      {img: "./style/img/mexico.jpg", title:"Mexico", timeframe: "2020", action:"On March 9, millions of women in Mexico participated in “a day without us,” a national women's strike to protest a shocking 137% rise in femicide in five years.", result:"In this case, the tactic of a women’s strike is particularly poignant because it is drawing attention to what a world without women would look like in order to raise awareness about the absence of so many women due to femicide. The tactic has been used in several Latin American countries dealing with the same femicide rise."},

    ],
    carouselIndex:0
  }

  $scope.slickConfig = {
        event: {
            afterChange: function (event, slick, currentSlide, nextSlide) {
              $scope.model.carouselIndex = currentSlide; // save current index each time
            }
        },
        dots:true,
        inifinite: true
    };

  $scope.getGradient = function(i){
    return "#" + gradient.colourAt(i);
  }



  $scope.getOffset = function(i) {
    return (50*(i+1)).toString() + "vh"
  }

  $scope.getHoriz = function(i) {
    if(i%2==0) {
      return '58%'
    }
    return '18%'
  }

  $scope.openModal = function(url) {
    $scope.model.modalInstance = $uibModal.open({
       templateUrl: prefix + url,
       scope: $scope
     });
  }

  $scope.closeModal = function() {
    $scope.model.modalInstance.close();
  }


  $document.on('scroll', function() {
    AOS.refreshHard()
    $scope.$apply(function() {
        $scope.pixelsScrolled = $window.scrollY;
    })
  });

});
