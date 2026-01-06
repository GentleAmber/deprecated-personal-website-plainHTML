$(document).ready(function () {
  // Underline the current page on navbar & disable it
  const current = window.location.pathname;

  $(".navbar-items-col a").each(function () {
    const id = $(this).attr("id");
    if (current.indexOf(id) > -1) {
      $(this).addClass("nav-item-highlight");
    }
  });

  // For dropdown menu on phones
  $("#dropdown-btn").on("click", function() {
    if ($(".navbar-dropdown-items").css("display") == "none") {
      $(".navbar-dropdown-items").css("display", "block");
      $("#dropdown-btn-img").attr("src", "./images/dropdown-arrow-active-svg.svg");
    } else if ($(".navbar-dropdown-items").css("display") == "block") {
      $(".navbar-dropdown-items").css("display", "none");
      $("#dropdown-btn-img").attr("src", "./images/dropdown-arrow-svg.svg");
    }
  })

  function idExtract(dropdownId) {
    let indexOfHyphen = dropdownId.indexOf('-');

    const extractedString = dropdownId.slice(0, indexOfHyphen);
    return extractedString;
  }

  $(".navbar-dropdown-items a").each(function () {
    const id = $(this).attr("id");
    const extracted = idExtract(id);

    if (current.includes(extracted)) {
      $(this).css("color", "#ff3f95");
    }
  });

  

});