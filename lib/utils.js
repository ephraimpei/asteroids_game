;(function() {

  var Asteroids = window.Asteroids = window.Asteroids || {};

  var Util = Asteroids.Util = Asteroids.Util || {};

  // Asteroids.Util.inherits = "";
  Util.inherits = function (ChildClass, ParentClass) {
    function Surrogate () {};
    Surrogate.prototype = ParentClass.prototype;
    ChildClass.prototype = new Surrogate();
    ChildClass.prototype.constructor = ChildClass;
  };
})();
