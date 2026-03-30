$(document).ready(function(){
  // 1. Kotak hadiah jatuh dari atas bila mula-mula buka (Animasi Asal)
  $("#present").addClass("animated bounceInDown");

  // 2. Bila letak mouse (hover), penutup kotak melompat sikit
  $("#present").hover(function(){
      $("#present #top").addClass("animated bounce");
  }, function(){
      $("#present #top").removeClass("animated bounce");
  });

  // 3. BILA KOTAK DIKLIK
  $("#present").on("click", function(){
    $("#present #top").removeClass("animated bounce");
    
    // Penutup kotak terbang ke atas dan hilang
    $("#present #top").addClass("animated bounceOutUp");
    
    $(this).unbind("click");
    $(this).unbind("mouseleave");

    // Kucing melompat naik DAN Ayat meluncur ke kiri selepas 1 saat
    setTimeout(function(){
      // Kucing naik atas kotak
      $("#present #cat").css("top", "-160px");
      
      // AYAT MELUNCUR KE KIRI (Supaya tak kena tutup dengan kucing)
      $("#message").css({
        "opacity": "1",
        "left": "-280px", // Bergerak ke kiri kotak
        "top": "-50px"    // Naik atas sikit supaya selari dengan kucing
      });

    }, 1000);

    // Huruf "HAPPY BIRTHDAY HAKIM IZAFRA" jatuh satu-persatu
    $("#wish").children("div").each(function(index){
      setTimeout(bounceIn.bind(null, $(this)), 2500+index*100)
    });
  });

  function bounceIn(el){
    el.addClass("animated bounceInDown swing");
    setTimeout(function(){
      el.removeClass("bounceInDown").addClass("swing")
    }, 1000);
  }
});
