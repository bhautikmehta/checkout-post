/* SOME COMMON SVG CONSTANT START */
var SVG_LOADER = '<svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7.229 1.173a9.25 9.25 0 1011.655 11.412 1.25 1.25 0 10-2.4-.698 6.75 6.75 0 11-8.506-8.329 1.25 1.25 0 10-.75-2.385z"></path></svg>';
var SVG_DELETE = '<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M16 6a1 1 0 1 1 0 2h-1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8H4a1 1 0 1 1 0-2h12zM9 4a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H9zm2 12h2V8h-2v8zm-4 0h2V8H7v8z" fill="#000" fill-rule="evenodd"></path></svg>';

var SVG_MINUS = '<svg class="Polaris-Icon__Svg" viewBox="0 0 80 80" focusable="false" aria-hidden="true"><path d="M39.769,0C17.8,0,0,17.8,0,39.768c0,21.956,17.8,39.768,39.769,39.768   c21.965,0,39.768-17.812,39.768-39.768C79.536,17.8,61.733,0,39.769,0z M13.261,45.07V34.466h53.014V45.07H13.261z" fill-rule="evenodd" fill="#DE3618"></path></svg>';
var SVG_PLUS = '<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9h-6V3a1 1 0 1 0-2 0v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2" fill-rule="evenodd"></path></svg>';

/* Affilates page to integrate*/
// var affilatesUrl = SITE_URL + "affiliates/views/ajax_response.php";
// var smsbumpLearnVideo = SITE_URL + "learn_video/smsbump.html";
/* SOME COMMON SVG CONSTANT END */

/* Common function of custom.js and editor-custom.js */
/**
 * @param {string} cname = cookie name
 * @param {string} cvalue = cookie value
 * @param {type} exdays = experi in days
 * @returns {undefined}
 */
function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var secure = mode == 'local' ? '' : ' Secure';
    var expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None;" + secure;
}
/*
 * @param {type} cname = cookiename
 * @returns {String}
 */
function getCookie(cname) {
    cname = (cname != undefined) ? cname : 'flash_msg';
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}
/*
 * @param string $message
 * @returns {undefined} show flash message
 */
function flashNotice($message, $class) {
    $class = ($class != undefined) ? $class : '';

    var flashMsgHtml = '<div class="inline-flash-wrapper animated bounceInUp inline-flash-wrapper--is-visible ourFlashMsg"><div class="inline-flash ' + $class + '  "><p class="inline-flash__message">' + $message + '</p></div></div>';

    if ($('.ourFlashMsg').length) {
        $('.ourFlashMsg').remove();
    }
    $("body").append(flashMsgHtml);

    setTimeout(function () {
        if ($('.ourFlashMsg').length) {
            $('.ourFlashMsg').remove();
        }
    }, 3000);
}
/*
 * @param {string} $className
 * @returns {undefined} show loader
 */
function loading_show($selector) {
    var width = $($selector).width();
    $($selector).addClass("Polaris-Button--loading" ).html('<span class="Polaris-Button__Spinner"><span class="Polaris-Spinner Polaris-Spinner--sizeSmall">' + SVG_LOADER + '</span><span role="status"><span class="Polaris-VisuallyHidden">Loading</span></span></span>').fadeIn('fast').attr('disabled', 'disabled');
    $($selector).width(width);
}
/*
 * @param {string} $className
 * @param {string} $buttonName
 * @returns {undefined} hide loader
 */
function loading_hide($selector, $buttonName, $buttonIcon) {
    if ($buttonIcon != undefined) {
        $buttonIcon = '<span class="Polaris-Button__Icon"><span class="Polaris-Icon">' + $buttonIcon + '</span></span>'
    } else {
        $buttonIcon = '';
    }
    $($selector).removeClass("Polaris-Button--loading").html('<span class="Polaris-Button__Content">' + $buttonIcon + '<span>' + $buttonName + '</span></span>').removeAttr("disabled");
    $($selector).css('width','');
}
function init_tooltips(){
    tippy('[data-tippy-content]', {
        arrow: true,
        placement: "top-end",
    });
}
$(document).ready(function () {
    init_tooltips();
    int_spectrum();

    if($('.RCT-fixed-scroll').length > 0){
        var $navBar = $('.RCT-fixed-scroll');
        var navPos = $navBar.offset().top;
        // on scroll
        $(window).scroll(function() {
            // get scroll position from top of the page
            var scrollPos = $(this).scrollTop();
            $navBar.removeClass('fixed-scroll');
            if (scrollPos == "0" && scrollPos == navPos) {
                $navBar.removeClass('fixed-scroll');
            }else if (scrollPos >= navPos) {
                $navBar.addClass('fixed-scroll');
            }else{
                $navBar.removeClass('fixed-scroll');
            }
        });
    }

    /* For flash message */
    var flashMsg = getCookie("flash_msg");
    var flashClass = getCookie("flash_class");
    /* used to display flash message according to cookie set */
    if (flashMsg != '') {
        setCookie('flash_msg', '', -2);
        flashNotice(flashMsg, flashClass);
    }
    /* Rule Drop down change */
    $(document).on('change', '.onChangeMethod', function () {
        var qNo = $(this).attr('data-qno');
        var ddValue = $(this).val();

        $(this).siblings(".answerType").val(ddValue);
        if (parseInt(ddValue) > 1) {
            $('#optionsForQuestion' + qNo).show();
        } else {
            $('#optionsForQuestion' + qNo).hide();
        }

        /* this function called after all completed (RUN) */
        fnRemoveOptionBtn(qNo);
    });
    $(document).on('move.spectrum', ".spectrum_color_picker_editor", function (e, color) {
        var targetEl = $(this).siblings(".__spectrum_color");
        var hexVal = color.toHexString();
        targetEl.val(hexVal);
    });

});
function color_picker_editor(thisObj) {
    var __for = $(thisObj).attr('for');
    $("#our_" + __for).spectrum({
        showInput: false,
        showInitial: true,
        showAlpha: false,
        showButtons: false,
        preferredFormat: "hex"
    });
}
function fnRemoveOptionBtn(qNo) {
    var questionOptions = $(".optionBtn[data-qNo='" + qNo + "']");
    /* for remove button hide show*/
    if (questionOptions != undefined) {
        if (questionOptions.length > 1) {
            questionOptions.show();
        } else {
            questionOptions.hide();
        }
    }

}

/* Tool tips modal display/manage */
function displayTooltipsPopup(file_name,DISPLAY_REVIEW='none') {
    /* Ajax call for check popup will display after required time exceeded */
    $.get('../tooltips_template/' + file_name + '.html', function (data) {
        var mapObj = {
            TB_TXT_UPSELL_EDITOR:_E_UPSELL_EDITOR,
            TB_TXT_REVIEW_ON_APP:_E_REVIEW_ON_APP,
            TB_TXT_LEAVE_US_REIEW:_E_LEAVE_US_REIEW,
        }
        data = data.replace(/TB_TXT_UPSELL_EDITOR|TB_TXT_LEAVE_US_REIEW|TB_TXT_LEAVE_US_REIEW/gi, function(matched){
            return mapObj[matched];
        });
        var html_content = data;
        /* Set whole content in modal body */
        $('#tooltipsPopup-modal .modal-body').html(html_content);
        var tt_header = $('#tooltipsPopup-modal .modal-body').find('div.TooltipHeader').html();
        var tt_footer = $('#tooltipsPopup-modal .modal-body').find('div.TooltipFooter').html();
        $("#tooltipsPopup-modal .modal-header .ttModalHeaderText").html(tt_header);
        $("#tooltipsPopup-modal .modal-footer .ttModalFooterText").html(tt_footer);
        $('#tooltipsPopup-modal .modal-body').find('div.TooltipHeader').remove();
        $('#tooltipsPopup-modal .modal-body').find('div.TooltipFooter').remove();
        /* Hide review star from the popup when already given rating */
        if(DISPLAY_REVIEW == "none"){
            $(".toopTipsFooterStar").hide();
            $(".TooltipThankuMsg").hide();
        }
        $('#tooltipsPopup-modal').modal('show');
    });
}

/* common function of custom.js and triggerbase_custom.js */
function int_spectrum() {
    $(".color-picker").spectrum({
        showInput: true,
        showInitial: true,
        showAlpha: true,
        showButtons: false,
        preferredFormat: "rgb"
    });
}
/* SVG class add and remove function START */
$.fn.addSvgClass = function(className) {
    var attr
    this.each(function() {
        attr = $(this).attr('class')
        if(attr.indexOf(className) < 0) {
            $(this).attr('class', attr+' '+className+ ' ')
        }
    })
};

$.fn.removeSvgClass = function(className) {
    var attr
    this.each(function() {
        attr = $(this).attr('class')
        attr = attr.replace(className , ' ')
        $(this).attr('class' , attr)
    })
};
/* SVG class add and remove function END */

/* common function of editor-custom.js and triggerbase_custom.js START */
/* Get spedific parameter from URL */
function getUrlParameter(sPageURL, sParam) {
    var sURLVariables = sPageURL.toString().split('?');
    if(sURLVariables[0].indexOf('&') > -1){
        sURLVariables = sURLVariables[0].split('&');
    }
    var sParameterName, i;
    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
}
/* remove url parameter */
function removeParam(parameter)
{
    var url=document.location.href;
    var urlparts= url.split('?');
    if (urlparts.length>=2)
    {
        var urlBase=urlparts.shift();
        var queryString=urlparts.join("?");

        var prefix = encodeURIComponent(parameter)+'=';
        var pars = queryString.split(/[&;]/g);
        for (var i= pars.length; i-->0;)
            if (pars[i].lastIndexOf(prefix, 0)!==-1)
                pars.splice(i, 1);
        url = urlBase+'?'+pars.join('&');
        window.history.pushState('',document.title,url); // added this line to push the new url directly to url bar .
    }
    return url;
}
/* common function of editor-custom.js and triggerbase_custom.js END */
/* common function of custom.js and triggerbase_custom.js START */
function initIframe() {
    $(".wrapper").each(function () {
        var $wrap = $(this);
        function iframeScaler() {
            var wrapWidth = $wrap.width();  /* width of the wrapper */
            var wrapHeight = $wrap.height();
            var childWidth = $wrap.children("iframe").width(); /* width of child iframe */
            var childHeight = $wrap.children("iframe").height(); /* child height */
            var wScale = wrapWidth / childWidth;
            var hScale = wrapHeight / childHeight;
            var scale = Math.min(wScale, hScale); /* get the lowest ratio */
            $wrap.children("iframe").css({"transform": "scale(" + scale + ")"}); /* set scale */
        }
        $(window).on("resize", iframeScaler);
        $(document).ready(iframeScaler);
    });
}
/* common function of custom.js and triggerbase_custom.js END */

/* if specify current_url then use it otherwise default */
function getParameterByName(name, url) {
    url = url == '' ? window.location.search : url;
    var match = RegExp('[?&]' + name + '=([^&]*)').exec(url);
    return match && decodeURIComponent(match[1].replace(/\+/g, ' '));
}

/* IW0027 : Display star js START */
function highlightStar(selectedStar,call_from) {
    removeHighlight();
    var starId = (call_from == "Sections")
        ? "#displayStarRatingSection li"
        : (call_from == "General settings")
            ? "#displayStarRatingGeneralset li"
            : (call_from == "popup")
                ? "#displayStarRatingPopUp li"
                : (call_from == "5")
                    ? "#displayStarRatingForStore li"
                    : (call_from == "6")
                        ? "#displayStarRatingForTopbar li"
                        : '#displayStarRating li';
    $(starId).each(function(index) {
        if(selectedStar <= index){
            $(this).removeClass("highlight bannerHighlight");
        }else{
            $(this).addClass("highlight bannerHighlight");
        }
    });
}

function removeHighlight() {
    $('li').removeClass('star_design bannerHighlight highlight');
}

function addRating(obj,selectedStar,call_from) {
    $('#reviewStarModal').modal('hide');
    /* call_from : 1 -> Dashboard and others pages, 2 -> Widget popups, 3 -> review popup on dashboard, 4 -> section and generalsetting */
    $("#reviewStarValue").val(selectedStar);

    $(".displayAddReviewpopup").val(call_from);
    var popupName = $(obj).closest("ul").data("popup");
    if(popupName == "above_X_CVR"){
        popupName = "above_"+ABOVE_X_CVR+"_CVR";
    }else if(popupName == "above_X_ROI"){
        popupName = "above_"+ABOVE_X_ROI+"_ROI";
    }
    var starId = (call_from == "Sections")
        ? "#displayStarRatingSection li"
        : (call_from == "General settings")
            ? "#displayStarRatingGeneralset li"
            : (call_from == "popup")
                ? "#displayStarRatingPopUp li"
                : (call_from == "5")
                    ? "#displayStarRatingForStore li"
                    : (call_from == "6")
                        ? "#displayStarRatingForTopbar li"
                        : '#displayStarRating li';

    $(starId).each(function(index) {
        if(selectedStar <= index){
            $(this).removeClass('star_design');
        }else{
            $(this).addClass('star_design');
        }
    });
    if(selectedStar == "5" || (call_from != "1" && call_from !="5" && call_from !="3")){
        if(call_from == "4" && selectedStar < 5){
            $(".additionReviwTxt").removeClass("is-empty-star");
        } else{
            $(".additionReviwTxt").addClass("is-empty-star");
            if(call_from != '6'){
                if(call_from != "2"){
                    $(".TooltipThankuMsg").removeClass("is-empty");
                }else{
                    $(".TooltipThankuMsg").addClass("is-empty");
                    $(".footerStarReview").hide();
                }
            }
            $(".toopTipsFooterStar").addClass("is-empty");
            $.ajax({
                url: "ajax_responce.php",
                type: "post",
                dataType: "json",
                data: {"method_name": 'send_review_mail', 'shop': shop, review: selectedStar, call_from: call_from, popup_name : popupName},
                beforeSend: function () {
                    $(".displayAppProcess").hide();
                    if(call_from == "3"){
                        $('#reviewStarModal').modal('hide');
                    }else{
                        $("#tooltipsPopup-modal .modal-footer .ttModalFooterText").find('.toopTipsFooterStar').hide();
                        $("#tooltipsPopup-modal .modal-footer .ttModalFooterText").find('.TooltipThankuMsg').removeClass('is-empty');
                    }
                },
                success: function (response) {
                    if(response['result']=='success'){
                        DISPLAY_REVIEW = "none";
                        $("#reviwStarAdded").val("1");
                        if(call_from == "1"){
                            $(".displayAppProcess").hide();
                            $("#displayTopbarReview").hide();
                        }else if(call_from == "6"){
                            $(".thankYouMessageTopbar").removeClass("is-empty");
                            $(".displayNewStarReview").addClass("is-empty");
                            flashNotice(response['msg']);
                            setTimeout(function(){
                                $("#displayTopbarReview").hide();
                            },2500);
                        }else{
                            $("#displayTopbarReview").hide();
                        }
                    }
                }
            });
        }
        if(call_from == "1" || selectedStar == "5"){
            window.open(SITE_REVIEW_URL,'_blank');
        }
    }else{
        $(".displayPopupDashboard").val(popupName);
        if(call_from == "1" || call_from == "5" || call_from == "3"){
            $('#modalStar li').each(function(index) {
                if(selectedStar <= index){
                    $(this).removeClass('star_design');
                }else{
                    $(this).addClass('star_design');
                }
            });
            $("#review_model").modal();
        }
    }
}

function resetRating(call_from) {
    var sel_val = $("#reviewStarValue").val();
    var starId = (call_from == "Sections")
        ? "#displayStarRatingSection li"
        : (call_from == "General settings")
            ? "#displayStarRatingGeneralset li"
            : (call_from == "popup")
                ? "#displayStarRatingPopUp li"
                : (call_from == "5")
                    ? "#displayStarRatingForStore li"
                    : (call_from == "6")
                        ? "#displayStarRatingForTopbar li"
                        : '#displayStarRating li';

    $(starId).each(function(index) {
        if(sel_val <= index){
            $(this).removeClass('star_design');
        }else{
            $(this).addClass('star_design');
        }
    });
    $('#modalStar li').each(function(index) {
        if(sel_val <= index){
            $(this).removeClass('star_design');
        }else{
            $(this).addClass('star_design');
        }
    });
}

var stopMultiCall = '0';
$(".additionalReviewSubmit").on("click",function(){
    if(stopMultiCall == "0"){
        stopMultiCall = '1';
        var call_from = $(".sideBarStar").val();
        var Additional_review = $(this).closest(".additionReviwTxt").find(".getAdditionreview").val();
        var selected_star = $("#reviewStarValue").val();
        $.ajax({
            url: "ajax_responce.php",
            type: "post",
            dataType: "json",
            data: {"method_name": 'send_review_mail', 'shop': shop, review: selected_star, call_from: call_from , popup_name : call_from, additional_message : Additional_review},
            beforeSend: function () {
                $(".TooltipThankuMsg").removeClass("is-empty");
                $("#displayTopbarReview").hide();
                $(".toopTipsFooterStar").addClass("is-empty");
            },
            success: function (response) {
                if(response['result']=='success'){
                    $("#reviwStarAdded").val("1");
                    if(call_from == "1"){
                        $(".displayAppProcess").hide();
                    }
                }
            }
        });
    }
});

function closeReviewBanner(thisObj){
    $.ajax({
        url: "ajax_responce.php",
        type: "post",
        dataType: "json",
        data: {"method_name": 'close_review_banner', 'shop': shop},
        success: function (response) {
            if(response['result']=='success'){
                $(".removeClassAfterReview").removeClass("manage-template-cont");
                $(".removeClassAfterReview").removeClass("manage-trigger-cont");
                $(".edit-page-wrap").removeClass("rct-ty-editor-add-banner");
                $(".StarRating-Banner").hide();
            }
        }
    });
}
