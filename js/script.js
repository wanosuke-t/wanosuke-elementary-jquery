// ボタンクリックでアラートを表示しよう
// document.querySelector("#js-button-alert").addEventListener("click", function () {
//   alert("おはよう！");
// });
jQuery("#js-button-alert").on("click", function () {
  alert("おはよう！");
});

// アコーディオンメニューを作ろう
jQuery(".js-accordion").on("click", function () {
  jQuery(this).next().slideToggle();
});

// トップへ戻るボタンを作ろう
jQuery("#js-button-top").on("click", function () {
  jQuery("html, body").animate({ scrollTop: 0 }, 500);
});

// ドロワーメニューを作ろう
jQuery("#js-button-drawer").on("click", function () {
  jQuery(this).toggleClass("is-checked");
  jQuery("#js-drawer").slideToggle();
  jQuery("body").toggleClass("is-fixed");
});

// フォームに入力された値をアラートに表示しよう
jQuery("#js-form-name").on("submit", function (e) {
  e.preventDefault();
  const inputName = jQuery("#js-input-name").val();

  if (!inputName) {
    jQuery(".error-message").text("必須項目です");
    return;
  }

  jQuery(".error-message").text("");
  alert(`${inputName}さん、こんにちは。`);
  return false;
});
