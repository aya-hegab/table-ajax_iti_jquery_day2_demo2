$("input").on("click", function () {
  $.ajax({
    url: "https://jsonplaceholder.typicode.com/users",
    method: "GET",
    dataType: "json",
    success: function (response) {
      var table = $(`
      <table>
      <tr>
        <th>ID</th>
        <th>NAME</th>
        <th>EMAIL</th>
        <th>STREET</th>
      </tr>
    </table>
    `);
      $("body").append(table);
      for (var obj of response) {
        var newRow = $(`
      <tr>
        <td>${obj.id}</td>
        <td>${obj.name}</td>
        <td>${obj.email}</td>
        <td>${obj.address.street}</td>
      </tr>
      `);
        $("table").append(newRow);
      }
    },
    error: function (error) {
      console.log(error);
    },
  });
});
