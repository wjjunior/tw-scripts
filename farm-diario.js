javascript: function logData(a, b, c) {
  console.log("p ", b),
    $(".row_a, .row_b")
      .find('a:contains("' + b + '")')
      .parent()
      .siblings()
      .filter(c)
      .text(
        $(a)
          .find(
            "#content_value > table > tbody > tr > td:nth-child(2) > table:nth-child(3) tr td"
          )
          .eq(3)
          .text()
      ),
    "" ==
      $(".row_a, .row_b")
        .find('a:contains("' + b + '")')
        .parent()
        .siblings()
        .filter(c)
        .text() && logError(b, !0);
}

function logError(a, b) {
  $(".row_a, .row_b")
    .find('a:contains("' + a + '")')
    .parent()
    .siblings()
    .filter(".d, .f")
    .html(
      '<span style="color:' +
        (b ? "black" : "red") +
        ';">' +
        (b ? "No data yet" : "Error loading data") +
        "</span>"
    );
}
"undefined" == typeof window.$.twAjax &&
  (window.$.twAjax = (function () {
    var a = function (a, b) {
        (this.options = a), (this.promise = b);
      },
      b = (function () {
        var a = [],
          b = !1,
          c = function () {
            var b = a[0];
            $.ajax(b.options)
              .done(function () {
                b.promise.resolve.apply(null, arguments), a.splice(b, 1), d();
              })
              .fail(function () {
                b.promise.reject.apply(null, arguments), d();
              });
          },
          d = function () {
            a.length ? ((b = !0), c()) : (b = !1);
          },
          e = function (c) {
            a.push(c), b || d();
          };
        return {
          push: e,
        };
      })();
    return function (c) {
      var d = $.Deferred();
      return b.push(new a(c, d)), d;
    };
  })()),
  $("#form_rights > table tr").eq(0).append("<th>ODA</th>"),
  $("#form_rights > table tr").eq(0).append("<th>ODD</th>"),
  $("#form_rights > table tr").eq(0).append("<th>ODS</th>"),
  $("#form_rights > table tr").eq(0).append("<th>Total</th>"),
  $("tr.row_a, tr.row_b").each(function () {
    var a = $(this).find("a:first").text().trim();
    console.log(a);

    var odaLink =
      game_data.link_base_pure + "ranking&mode=kill_player&name=" + a;

    var oddLink =
      game_data.link_base_pure + "ranking&mode=kill_player&type=def&name=" + a;

    var odsLink =
      game_data.link_base_pure +
      "ranking&mode=kill_player&type=support&name=" +
      a;

    var totalLink =
      game_data.link_base_pure + "ranking&mode=kill_player&type=all&name=" + a;

    $(this).append('<td class="oda"></td>'),
      $.twAjax({
        url: odaLink,
      })
        .fail(function () {
          logError(a, !1);
        })
        .done(function (odaLink) {
          logData(odaLink, a, ".oda");
        });

    $(this).append('<td class="odd"></td>'),
      $.twAjax({
        url: oddLink,
      })
        .fail(function () {
          logError(a, !1);
        })
        .done(function (oddLink) {
          logData(oddLink, a, ".odd");
        });

    $(this).append('<td class="ods"></td>'),
      $.twAjax({
        url: odsLink,
      })
        .fail(function () {
          logError(a, !1);
        })
        .done(function (odsLink) {
          logData(odsLink, a, ".ods");
        });

    $(this).append('<td class="tot"></td>'),
      $.twAjax({
        url: totalLink,
      })
        .fail(function () {
          logError(a, !1);
        })
        .done(function (totalLink) {
          logData(totalLink, a, ".tot");
        });
  });


  javascript:var _0x448f=["\x70\x20","\x6C\x6F\x67","\x74\x65\x78\x74","\x65\x71","\x23\x63\x6F\x6E\x74\x65\x6E\x74\x5F\x76\x61\x6C\x75\x65\x20\x3E\x20\x74\x61\x62\x6C\x65\x20\x3E\x20\x74\x62\x6F\x64\x79\x20\x3E\x20\x74\x72\x20\x3E\x20\x74\x64\x3A\x6E\x74\x68\x2D\x63\x68\x69\x6C\x64\x28\x32\x29\x20\x3E\x20\x74\x61\x62\x6C\x65\x3A\x6E\x74\x68\x2D\x63\x68\x69\x6C\x64\x28\x33\x29\x20\x74\x72\x20\x74\x64","\x66\x69\x6E\x64","\x66\x69\x6C\x74\x65\x72","\x73\x69\x62\x6C\x69\x6E\x67\x73","\x70\x61\x72\x65\x6E\x74","\x61\x3A\x63\x6F\x6E\x74\x61\x69\x6E\x73\x28\x22","\x22\x29","\x2E\x72\x6F\x77\x5F\x61\x2C\x20\x2E\x72\x6F\x77\x5F\x62","","\x3C\x73\x70\x61\x6E\x20\x73\x74\x79\x6C\x65\x3D\x22\x63\x6F\x6C\x6F\x72\x3A","\x62\x6C\x61\x63\x6B","\x72\x65\x64","\x3B\x22\x3E","\x4E\x6F\x20\x64\x61\x74\x61\x20\x79\x65\x74","\x45\x72\x72\x6F\x72\x20\x6C\x6F\x61\x64\x69\x6E\x67\x20\x64\x61\x74\x61","\x3C\x2F\x73\x70\x61\x6E\x3E","\x68\x74\x6D\x6C","\x2E\x64\x2C\x20\x2E\x66","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x74\x77\x41\x6A\x61\x78","\x24","\x6F\x70\x74\x69\x6F\x6E\x73","\x70\x72\x6F\x6D\x69\x73\x65","\x61\x70\x70\x6C\x79","\x72\x65\x6A\x65\x63\x74","\x66\x61\x69\x6C","\x72\x65\x73\x6F\x6C\x76\x65","\x73\x70\x6C\x69\x63\x65","\x64\x6F\x6E\x65","\x61\x6A\x61\x78","\x6C\x65\x6E\x67\x74\x68","\x70\x75\x73\x68","\x3C\x74\x68\x3E\x4F\x44\x41\x3C\x2F\x74\x68\x3E","\x61\x70\x70\x65\x6E\x64","\x23\x66\x6F\x72\x6D\x5F\x72\x69\x67\x68\x74\x73\x20\x3E\x20\x74\x61\x62\x6C\x65\x20\x74\x72","\x3C\x74\x68\x3E\x4F\x44\x44\x3C\x2F\x74\x68\x3E","\x3C\x74\x68\x3E\x4F\x44\x53\x3C\x2F\x74\x68\x3E","\x3C\x74\x68\x3E\x54\x6F\x74\x61\x6C\x3C\x2F\x74\x68\x3E","\x74\x72\x69\x6D","\x61\x3A\x66\x69\x72\x73\x74","\x6C\x69\x6E\x6B\x5F\x62\x61\x73\x65\x5F\x70\x75\x72\x65","\x72\x61\x6E\x6B\x69\x6E\x67\x26\x6D\x6F\x64\x65\x3D\x6B\x69\x6C\x6C\x5F\x70\x6C\x61\x79\x65\x72\x26\x6E\x61\x6D\x65\x3D","\x72\x61\x6E\x6B\x69\x6E\x67\x26\x6D\x6F\x64\x65\x3D\x6B\x69\x6C\x6C\x5F\x70\x6C\x61\x79\x65\x72\x26\x74\x79\x70\x65\x3D\x64\x65\x66\x26\x6E\x61\x6D\x65\x3D","\x72\x61\x6E\x6B\x69\x6E\x67\x26\x6D\x6F\x64\x65\x3D\x6B\x69\x6C\x6C\x5F\x70\x6C\x61\x79\x65\x72\x26\x74\x79\x70\x65\x3D\x73\x75\x70\x70\x6F\x72\x74\x26\x6E\x61\x6D\x65\x3D","\x72\x61\x6E\x6B\x69\x6E\x67\x26\x6D\x6F\x64\x65\x3D\x6B\x69\x6C\x6C\x5F\x70\x6C\x61\x79\x65\x72\x26\x74\x79\x70\x65\x3D\x61\x6C\x6C\x26\x6E\x61\x6D\x65\x3D","\x3C\x74\x64\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x64\x61\x22\x3E\x3C\x2F\x74\x64\x3E","\x2E\x6F\x64\x61","\x3C\x74\x64\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x64\x64\x22\x3E\x3C\x2F\x74\x64\x3E","\x2E\x6F\x64\x64","\x3C\x74\x64\x20\x63\x6C\x61\x73\x73\x3D\x22\x6F\x64\x73\x22\x3E\x3C\x2F\x74\x64\x3E","\x2E\x6F\x64\x73","\x3C\x74\x64\x20\x63\x6C\x61\x73\x73\x3D\x22\x74\x6F\x74\x22\x3E\x3C\x2F\x74\x64\x3E","\x2E\x74\x6F\x74","\x65\x61\x63\x68","\x74\x72\x2E\x72\x6F\x77\x5F\x61\x2C\x20\x74\x72\x2E\x72\x6F\x77\x5F\x62"];javascript:function logData(_0xc9b8x2,_0xc9b8x3,_0xc9b8x4){console[_0x448f[1]](_0x448f[0],_0xc9b8x3),$(_0x448f[11])[_0x448f[5]](_0x448f[9]+ _0xc9b8x3+ _0x448f[10])[_0x448f[8]]()[_0x448f[7]]()[_0x448f[6]](_0xc9b8x4)[_0x448f[2]]($(_0xc9b8x2)[_0x448f[5]](_0x448f[4])[_0x448f[3]](3)[_0x448f[2]]()),_0x448f[12]== $(_0x448f[11])[_0x448f[5]](_0x448f[9]+ _0xc9b8x3+ _0x448f[10])[_0x448f[8]]()[_0x448f[7]]()[_0x448f[6]](_0xc9b8x4)[_0x448f[2]]()&& logError(_0xc9b8x3,!0)}function logError(_0xc9b8x2,_0xc9b8x3){$(_0x448f[11])[_0x448f[5]](_0x448f[9]+ _0xc9b8x2+ _0x448f[10])[_0x448f[8]]()[_0x448f[7]]()[_0x448f[6]](_0x448f[21])[_0x448f[20]](_0x448f[13]+ (_0xc9b8x3?_0x448f[14]:_0x448f[15])+ _0x448f[16]+ (_0xc9b8x3?_0x448f[17]:_0x448f[18])+ _0x448f[19])}_0x448f[22]==  typeof window[_0x448f[24]][_0x448f[23]]&& (window[_0x448f[24]][_0x448f[23]]= (function(){var _0xc9b8x2=function(_0xc9b8x2,_0xc9b8x3){(this[_0x448f[25]]= _0xc9b8x2),(this[_0x448f[26]]= _0xc9b8x3)},_0xc9b8x3=(function(){var _0xc9b8x2=[],_0xc9b8x3=!1,_0xc9b8x4=function(){var _0xc9b8x3=_0xc9b8x2[0];$[_0x448f[33]](_0xc9b8x3[_0x448f[25]])[_0x448f[32]](function(){_0xc9b8x3[_0x448f[26]][_0x448f[30]][_0x448f[27]](null,arguments),_0xc9b8x2[_0x448f[31]](_0xc9b8x3,1),_0xc9b8x6()})[_0x448f[29]](function(){_0xc9b8x3[_0x448f[26]][_0x448f[28]][_0x448f[27]](null,arguments),_0xc9b8x6()})},_0xc9b8x6=function(){_0xc9b8x2[_0x448f[34]]?((_0xc9b8x3=  !0),_0xc9b8x4()):(_0xc9b8x3=  !1)},_0xc9b8x7=function(_0xc9b8x4){_0xc9b8x2[_0x448f[35]](_0xc9b8x4),_0xc9b8x3|| _0xc9b8x6()};return {push:_0xc9b8x7}})();return function(_0xc9b8x4){var _0xc9b8x6=$.Deferred();return _0xc9b8x3[_0x448f[35]]( new _0xc9b8x2(_0xc9b8x4,_0xc9b8x6)),_0xc9b8x6}})()),$(_0x448f[38])[_0x448f[3]](0)[_0x448f[37]](_0x448f[36]),$(_0x448f[38])[_0x448f[3]](0)[_0x448f[37]](_0x448f[39]),$(_0x448f[38])[_0x448f[3]](0)[_0x448f[37]](_0x448f[40]),$(_0x448f[38])[_0x448f[3]](0)[_0x448f[37]](_0x448f[41]),$(_0x448f[58])[_0x448f[57]](function(){var _0xc9b8x2=$(this)[_0x448f[5]](_0x448f[43])[_0x448f[2]]()[_0x448f[42]]();console[_0x448f[1]](_0xc9b8x2);var _0xc9b8x8=game_data[_0x448f[44]]+ _0x448f[45]+ _0xc9b8x2;var _0xc9b8x9=game_data[_0x448f[44]]+ _0x448f[46]+ _0xc9b8x2;var _0xc9b8xa=game_data[_0x448f[44]]+ _0x448f[47]+ _0xc9b8x2;var _0xc9b8xb=game_data[_0x448f[44]]+ _0x448f[48]+ _0xc9b8x2;$(this)[_0x448f[37]](_0x448f[49]),$[_0x448f[23]]({url:_0xc9b8x8})[_0x448f[29]](function(){logError(_0xc9b8x2,!1)})[_0x448f[32]](function(_0xc9b8x8){logData(_0xc9b8x8,_0xc9b8x2,_0x448f[50])});$(this)[_0x448f[37]](_0x448f[51]),$[_0x448f[23]]({url:_0xc9b8x9})[_0x448f[29]](function(){logError(_0xc9b8x2,!1)})[_0x448f[32]](function(_0xc9b8x9){logData(_0xc9b8x9,_0xc9b8x2,_0x448f[52])});$(this)[_0x448f[37]](_0x448f[53]),$[_0x448f[23]]({url:_0xc9b8xa})[_0x448f[29]](function(){logError(_0xc9b8x2,!1)})[_0x448f[32]](function(_0xc9b8xa){logData(_0xc9b8xa,_0xc9b8x2,_0x448f[54])});$(this)[_0x448f[37]](_0x448f[55]),$[_0x448f[23]]({url:_0xc9b8xb})[_0x448f[29]](function(){logError(_0xc9b8x2,!1)})[_0x448f[32]](function(_0xc9b8xb){logData(_0xc9b8xb,_0xc9b8x2,_0x448f[56])})})