import $ from "jquery";
import Papa from 'papaparse';
import 'bootstrap/js/index.esm.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../scss/style.scss';

// import 'bootstrap';

//import showContent_action from "./modules/action.js";
//import showContent_assortmentStructure from "./modules/assortmentStructure.js";

// blocks
import './blocks/aside.js';

// module
import "./modules/stock.js";
import "./modules/orderCalculation.js";
import "./modules/promo.js";
import showContent_orderParameters from "./modules/orderParameters.js";
import showContent_promoAz from "./modules/promoAz.js";
import showContent_settingsAz from "./modules/settingsAz.js";
import showContent_BI from "./modules/biBlock.js";

Papa.parse("./data/data_items_24_02.csv", {
  download: true,
  header: true,
  complete: function(results){
    // console.log(results.data) // данные
    // console.log(results.data[0]) // данные
    // console.log(results.meta.fields) // ключи значений
    const [l2, l3, l4, l5, nom, code] = results.meta.fields;
    window.PRODUCTS = {};
    results.data.forEach( (el) => {
      if (!(el[l2] in PRODUCTS) && el[l2] != '' ){
        PRODUCTS[el[l2]] = {}
      }
      if ( PRODUCTS[el[l2]] !== undefined && el[l3] !== undefined && !(el[l3] in PRODUCTS[el[l2]]) ){
        PRODUCTS[el[l2]][el[l3]] = {}
      }
      if ( el[l4] !== undefined && !(el[l4] in PRODUCTS[el[l2]][el[l3]]) ){
        PRODUCTS[el[l2]][el[l3]][el[l4]] = {}
      }
      if ( el[l5] !== undefined && !(el[l5] in PRODUCTS[el[l2]][el[l3]][el[l4]]) ){
        PRODUCTS[el[l2]][el[l3]][el[l4]][[el[l5]]] = []
      } else if (el[l5] !== undefined && el[l5] in PRODUCTS[el[l2]][el[l3]][el[l4]]){
        const item = {};
        item[nom] = el[nom];
        item[code] = el[code];
        PRODUCTS[el[l2]][el[l3]][el[l4]][[el[l5]]].push(item)
      }
    })
    console.log(PRODUCTS)
  }
})

Papa.parse("./data/data_stores_24_02.csv", {
	download: true,
  header: true,
  skipEmptyLines: true,
	complete: function(results) {
    // console.log(results);
    window.WAREHOUSE = results.data.map((el, i) => ({id: i, title: el['Наименование склада']}));
    // console.log(WAREHOUSE);
	}
});

window.configureData = function(data){
  const keys = Object.keys(data[0]);
  let l2 = {};
  data.forEach((el) => {
    const values = Object.values(el);
    if (values[0] in l2){
      l2[values[0]].push()
    }
  })

}

/**
{
    "SPR nom.Уровень2": "05 Продовольственные товары",
    "SPR nom.Уровень3": "0508 Смеси для выпечки и десертов",
    "SPR nom.Уровень4": "050802 Сухие компоненты",
    "SPR nom.Уровень5": "05080203 Ванильный сахар, ванилин",
    "SPR nom.Номенклатура": "Сахар ванильный Цикория 32г",
    "Код ном": 756,
    "": null
}
 */

/*вставка юзера ПЕРЕНЕСЬТИ*/

/*вставка юзера*/

//  window.showContent_stock = function() {
//     fetch('./src/html/stock.html')
//         .then(response => {
//             if (!response.ok) {
//                 throw new Error('Реакция сети ' + response.statusText);
//             }
//             return response.text(); 
//         })
//         .then(html => {
//             document.getElementById('mainContentStock').innerHTML = html;
//         })
//         .catch(error => {
//             console.error('Возникла проблема с операцией выборки: ', error);
//         });
// }



  //Обработка загрузки страницы
//   document.addEventListener('DOMContentLoaded', function() {
//       // Дополнительные настройки
//   });
  






//   document.addEventListener("DOMContentLoaded", function() {
//     const accordion = document.querySelector("#accordionExample");
//     const parametersBlock = document.querySelector(".parameters_orderCalculation");

//     accordion.addEventListener("show.bs.collapse", function() {
//         // Увеличиваем высоту при раскрытии
//         parametersBlock.style.height = "40%";
//     });

//     accordion.addEventListener("hide.bs.collapse", function() {
//         // Уменьшаем высоту при закрытии
//         parametersBlock.style.height = "20%";
//     });
// });













  // document.addEventListener('DOMContentLoaded', function() {
  //   const menuItems = document.querySelectorAll('.visible');
  
  //   menuItems.forEach(item => {
  //       item.addEventListener('click', function() {
  //           // Удаляем класс 'active' у всех пунктов
  //           menuItems.forEach(i => i.classList.remove('actived'));
  //           // Добавляем класс 'active' к текущему пункту
  //           this.classList.add('actived');
  //       });
  //   });
  // });


  // document.getElementById('burger').addEventListener('click', function() {
//   const menu = document.getElementById('menu');
//   // Переключаем видимость меню
//   if (menu.classList.contains('show')) {
//       menu.classList.remove('show');
//       this.classList.remove('open');
//   } else {
//       menu.classList.add('show');
//       this.classList.add('open');
//   }
// });



////AZ


// var floatSubMenuTimeout, targetFloatMenu, handleSlimScroll = function() {
//   "use strict";
//   $.when($("[data-scrollbar=true]").each(function() {
//     generateSlimScroll($(this))
//   })).done(function() {
//     $('[data-scrollbar="true"]').mouseover()
//   })
// }, /*развернуть/свернуть*/

// handleSidebarMenu = function() { /*открыть и закрыть и только одно подменю активно*/
//   "use strict";
//   let t = $(".sidebar").attr("data-disable-slide-animation") ? 0 : 250;
//   $(".sidebar .nav > .has-sub > a").click(function() {
//     let a = $(this).next(".sub-menu"),
//     e = $(".sidebar .nav > li.has-sub > .sub-menu").not(a);
//     0 === $(".page-sidebar-minified").length && ($(e).closest("li").addClass("closing"), $(e).slideUp(t, function() {
//       $(e).closest("li").addClass("closed").removeClass("expand closing")
//     }), $(a).is(":visible") ? $(a).closest("li").addClass("closing").removeClass("expand") : $(a).closest("li").addClass("expanding").removeClass("closed"), $(a).slideToggle(t, function() {
//       let e = $(this).closest("li");
//       $(a).is(":visible") ? ($(e).addClass("expand"), $(e).removeClass("closed")) : ($(e).addClass("closed"), $(e).removeClass("expand")), $(e).removeClass("expanding closing")
//     }))
//   }), $(".sidebar .nav > .has-sub .sub-menu li.has-sub > a").click(function() {
//     if (0 === $(".page-sidebar-minified").length) {
//       let a = $(this).next(".sub-menu");
//       $(a).is(":visible") ? $(a).closest("li").addClass("closing").removeClass("expand") : $(a).closest("li").addClass("expanding").removeClass("closed"), $(a).slideToggle(t, function() {
//         let e = $(this).closest("li");
//         $(a).is(":visible") ? ($(e).addClass("expand"), $(e).removeClass("closed")) : ($(e).addClass("closed"), $(e).removeClass("expand")), $(e).removeClass("expanding closing")
//       })
//     }
//   })
// },
// handleLocalStorage = function() {
//   "use strict";
//   try {
//     if ("undefined" != typeof Storage && "undefined" != typeof localStorage) {
//       let e = window.location.href;
//       e = (e = e.split("?"))[0];
//       let a = localStorage.getItem(e);
//       if (a) {
//         a = JSON.parse(a);
//         let t = 0;
//         $.when($('.panel:not([data-sortable="false"])').parent('[class*="col-"]').each(function() {
//           let e = a[t],
//           o = $(this);
//           e && $.each(e, function(e, a) {
//             let t = $('[data-sortable-id="' + a.id + '"]').not('[data-init="true"]');
//             if (0 !== $(t).length) {
//               let n = $(t).clone();
//               $(t).remove(), $(o).append(n), $('[data-sortable-id="' + a.id + '"]').attr("data-init", "true")
//             }
//           }), t++
//         })).done(function() {
//           window.dispatchEvent(new CustomEvent("localstorage-position-loaded"))
//         })
//       }
//     } else alert("Your browser is not supported with the local storage")
//   } catch (e) {
//     console.log(e)
//   }
// },

// handleClearSidebarSelection = function() {
//   $(".sidebar .nav > li, .sidebar .nav .sub-menu").removeClass("expand").removeAttr("style")
// },

// handlePageScrollClass = function() {
//   $(window).on("scroll", function() {
//     handleCheckScrollClass()
//   }), handleCheckScrollClass()
// },

// handleMouseoverFloatSubMenu = function(e) {
//   clearTimeout(floatSubMenuTimeout)
// },

// handleMouseoutFloatSubMenu = function(e) {
//   floatSubMenuTimeout = setTimeout(function() {
//     $("#float-sub-menu").remove()
//   }, 150)
// },

// handleSidebarMinifyFloatMenu = function() {
//   $(document).on("click", "#float-sub-menu li.has-sub > a", function(e) {
//     let a = $(this).next(".sub-menu"),
//     t = $(a).closest("li"),
//     r = !1,
//     d = !1;
//     $(a).is(":visible") ? ($(t).addClass("closing"), r = !0) : ($(t).addClass("expanding"), d = !0), $(a).slideToggle({
//       duration: 250,
//       progress: function() {
//         let e = $("#float-sub-menu"),
//         a = $(e).height(),
//         t = $(e).offset(),
//         n = $(e).attr("data-offset-top"),
//         o = $(e).attr("data-menu-offset-top"),
//         i = t.top - $(window).scrollTop(),
//         s = $(window).height();
//         if (r && n < i && (i = n < i ? n : i, $("#float-sub-menu").css({
//           top: i + "px",
//           bottom: "auto"
//         }), $("#float-sub-menu-arrow").css({
//           top: "20px",
//           bottom: "auto"
//         }), $("#float-sub-menu-line").css({
//           top: "20px",
//           bottom: "auto"
//         })), d && s - i < a) {
//           let l = s - o - 22;
//           $("#float-sub-menu").css({
//             top: "auto",
//             bottom: 0
//           }), $("#float-sub-menu-arrow").css({
//             top: "auto",
//             bottom: l + "px"
//           }), $("#float-sub-menu-line").css({
//             top: "20px",
//             bottom: l + "px"
//           })
//         }
//       },
//       complete: function() {
//         $(a).is(":visible") ? $(t).addClass("expand") : $(t).addClass("closed"), $(t).removeClass("closing expanding")
//       }
//     })
//   }), $(".sidebar .nav > li.has-sub > a").hover(function() {
//     if ($("#page-container").hasClass("page-sidebar-minified")) {
//       clearTimeout(floatSubMenuTimeout);
//       let e = $(this).closest("li").find(".sub-menu").first();
//       if (targetFloatMenu == this && 0 !== $("#float-sub-menu").length) return;
//       targetFloatMenu = this;
//       let a = $(e).html();
//       if (a) {
//         let t = $("#sidebar").offset(),
//         n = $("#page-container").hasClass("page-with-right-sidebar") ? $(window).width() - t.left : t.left + 60,
//         o = $(e).height(),
//         i = $(this).offset().top - $(window).scrollTop(),
//         s = $("#page-container").hasClass("page-with-right-sidebar") ? "auto" : n,
//         l = $("#page-container").hasClass("page-with-right-sidebar") ? n : "auto",
//         r = $(window).height();
//         if (0 === $("#float-sub-menu").length ? (a = '<div class="float-sub-menu-container" id="float-sub-menu" data-offset-top="' + i + '" data-menu-offset-top="' + i + '" onmouseover="handleMouseoverFloatSubMenu(this)" onmouseout="handleMouseoutFloatSubMenu(this)">\t<div class="float-sub-menu-arrow" id="float-sub-menu-arrow"></div>\t<div class="float-sub-menu-line" id="float-sub-menu-line"></div>\t<ul class="float-sub-menu">' + a + "</ul></div>", $("#page-container").append(a)) : ($("#float-sub-menu").attr("data-offset-top", i), $("#float-sub-menu").attr("data-menu-offset-top", i), $(".float-sub-menu").html(a)), o < r - i) $("#float-sub-menu").css({
//           top: i,
//           left: s,
//           bottom: "auto",
//           right: l
//         }), $("#float-sub-menu-arrow").css({
//           top: "20px",
//           bottom: "auto"
//         }), $("#float-sub-menu-line").css({
//           top: "20px",
//           bottom: "auto"
//         });
//         else {
//           $("#float-sub-menu").css({
//             bottom: 0,
//             top: "auto",
//             left: s,
//             right: l
//           });
//           let d = r - i - 21;
//           $("#float-sub-menu-arrow").css({
//             top: "auto",
//             bottom: d + "px"
//           }), $("#float-sub-menu-line").css({
//             top: "20px",
//             bottom: d + "px"
//           })
//         }
//       } else $("#float-sub-menu").remove(), targetFloatMenu = ""
//     }
//   }, function() {
//     $("#page-container").hasClass("page-sidebar-minified") && (floatSubMenuTimeout = setTimeout(function() {
//       $("#float-sub-menu").remove(), targetFloatMenu = ""
//     }, 250))
//   })
// },

// CLEAR_OPTION = "",
// handleSetPageOption = function(e) {
//   e.pageContentFullHeight && $("#page-container").addClass("page-content-full-height"), e.pageSidebarLight && $("#page-container").addClass("page-with-light-sidebar"), e.pageSidebarRight && $("#page-container").addClass("page-with-right-sidebar"), e.pageSidebarWide && $("#page-container").addClass("page-with-wide-sidebar"), e.pageSidebarMinified && $("#page-container").addClass("page-sidebar-minified"), e.pageSidebarTransparent && $("#sidebar").addClass("sidebar-transparent"), e.pageContentFullWidth && $("#content").addClass("content-full-width"), e.pageContentInverseMode && $("#content").addClass("content-inverse-mode"), e.pageBoxedLayout && $("body").addClass("boxed-layout"), e.clearOptionOnLeave && (CLEAR_OPTION = e)
// },
// handleClearPageOption = function(e) {
//   e.pageContentFullHeight && $("#page-container").removeClass("page-content-full-height"), e.pageSidebarLight && $("#page-container").removeClass("page-with-light-sidebar"), e.pageSidebarRight && $("#page-container").removeClass("page-with-right-sidebar"), e.pageSidebarWide && $("#page-container").removeClass("page-with-wide-sidebar"), e.pageSidebarMinified && $("#page-container").removeClass("page-sidebar-minified"), e.pageSidebarTransparent && $("#sidebar").removeClass("sidebar-transparent"), e.pageContentFullWidth && $("#content").removeClass("content-full-width"), e.pageContentInverseMode && $("#content").removeClass("content-inverse-mode"), e.pageBoxedLayout && $("body").removeClass("boxed-layout")
// },

// App = function() {
//   "use strict";
//   var a; // Объявление переменной a
  
//   return {
//     init: function(e) {
//       e && (a = e);
//       this.initLocalStorage();
//       this.initSidebar();
//       // this.initTopMenu();
//       this.initComponent();
//       this.initThemePanel();
//       this.initPageLoad();
//       $(window).trigger("load");
//       a && a.ajaxMode && this.initAjax();
//     },
//     initSidebar: function() {
//       handleSidebarMenu();
//       handleMobileSidebarToggle();
//       handleSidebarMinify();
//       handleSidebarMinifyFloatMenu();
//       // handleToggleNavProfile();
//       // handleToggleNavbarSearch();
//       // (!a || (a && !a.disableSidebarScrollMemory)) && handleSidebarScrollMemory();
//     },
//     initSidebarSelection: function() {
//       handleClearSidebarSelection();
//     },
//     initComponent: function() {
//       (!a || (a && !a.disableDraggablePanel)) && handleSlimScroll();
//       handleUnlimitedTabsRender();
//       handlePanelAction();
//       handleScrollToTopButton();
//       handleAfterPageLoadAddClass();
//       handlePageScrollClass();
//       $(window).width() > 767 && handleTooltipPopoverActivation(); // Исправлено
//     },
//     initLocalStorage: function() {
//       (!a || (a && !a.disableLocalStorage)) && handleLocalStorage();
//     },
//     initAjax: function() {
//       handleAjaxMode(a);
//       $.ajaxSetup({
//         cache: true
//       });
//     },
//     scrollTop: function() {
//       $("html, body").animate({
//         scrollTop: $("body").offset().top
//       }, 0);
//     }
//   };
// }();

// $(document).ready(function() {
//   App.init();
//   Highlight.init();
// // })
