$.getJSON("data.json", function (resp) {
  let all = resp;
  console.log(all);

  var name = resp[0]["name"];
  var username = resp[0]["username"];
  var points = resp[0]["points"];

  console.log(name + " " + username + " " + points);

  $(jQuery.parseJSON(JSON.stringify(all))).each(function () {
    var name = this["name"];
    var username = this["username"];
    var Email = this["Email"];
    var points = this["points"];

    var arr = [];
    for (var i = 1; i <= points; i++) arr.push("" + i);

    $("#table").append(
      "<tr>" +
        "<td>" +
        name +
        "</td>" +
        "<td>" +
        username +
        "</td>" +
        "<td>" +
        Email +
        "</td>" +
        "<td>" +
        points +
        "</td>" +
        "</tr>" +
        "<br>"
    );
  });
});
