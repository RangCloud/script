let Links = {
  setColor: function (color) {
    /*  var aList = document.querySelectorAll("a");
    var i = 0;
    while (i < aList.length) {
      aList[i].style.color = color;
      i = i + 1;
    } */
    $("a").css("color", color);
  },
};

let Body = {
  setColor: function (color) {
    document.querySelector("body").style.color = color;
  },
  setBackgroundColor: function (color) {
    document.querySelector("body").style.backgroundColor = color;
  },
};
function nightDayHandler(self) {
  var target = document.querySelector("body");
  if (self.value === "night") {
    Body.setBackgroundColor("black");
    Body.setColor("white");
    self.value = "day";

    Links.setColor("powderblue");
  } else {
    Body.setBackgroundColor("white");
    Body.setColor("black");
    self.value = "night";

    Links.setColor("blue");
  }
}
