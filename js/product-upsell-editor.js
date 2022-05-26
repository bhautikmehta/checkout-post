/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

/* Include common js */
/*var com_script = document.createElement('script');
com_script.src = SITE_URL + 'js/common-custom.js';
document.head.appendChild(com_script);*/
var SVG_LOADER_LARGE = '<svg viewBox="0 0 44 44" class="Polaris-Spinner Polaris-Spinner--colorTeal Polaris-Spinner--sizeLarge" role="status"><path d="M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"></path></svg>';

function componentsInit() {
    /* Drop downs for select picker */
    $('.select-picker').selectpicker('refresh');
    /* Dropdown for image picker */
    $("#template_images").imagepicker({hide_select: true});
    /* range slider */
    $('.font-slider').bootstrapSlider();
    $('.collection-slider').bootstrapSlider();
    /* editor initialize */
    
//    $.FroalaEditor.DefineIconTemplate('left_align', '<i class="fa fa-align-left" aria-hidden="true"></i>');
//    $.FroalaEditor.DefineIcon('left_align', {NAME: 'left_align', template: 'left_align'});
//    $.FroalaEditor.RegisterCommand('left_align', {
//        title: 'Left align',
//        focus: true,
//        undo: true,
//        showOnMobile: true,
//        refreshAfterCallback: true,
//        callback: function (cmd, val) {
//            this.align.apply('left');
//        },
//        refresh: function ($btn) {
//        }
//        
//    });
//    
//    $.FroalaEditor.DefineIconTemplate('center_align', '<i class="fa fa-align-center" aria-hidden="true"></i>');
//    $.FroalaEditor.DefineIcon('center_align', {NAME: 'center_align', template: 'center_align'});
//    $.FroalaEditor.RegisterCommand('center_align', {
//        title: 'Center align',
//        focus: true,
//        undo: true,
//        showOnMobile: true,
//        refreshAfterCallback: true,
//        callback: function (cmd, val) {
//            this.align.apply('center');
//        },
//        refresh: function ($btn) {
//        }
//    });
//    
//    $.FroalaEditor.DefineIconTemplate('right_align', '<i class="fa fa-align-right" aria-hidden="true"></i>');
//    $.FroalaEditor.DefineIcon('right_align', {NAME: 'right_align', template: 'right_align'});
//    $.FroalaEditor.RegisterCommand('right_align', {
//        title: 'Right align',
//        focus: true,
//        undo: true,
//        showOnMobile: true,
//        refreshAfterCallback: true,
//        callback: function (cmd, val) {
//            this.align.apply('right');
//        },
//        refresh: function ($btn) {
//       }
//    });
//
//    $('.live-update-textarea').froalaEditor({
//        key: 'ND2D1D2F4mH4A15C10D6E2E5D3D2D3H3c1njvlxmbtuuA6kfg==',
//        align: 'right',
//        fontSize: ['12', '14', '16', '18', '24'],
//        heightMin: 60,
//        heightMax: 120,
//        charCounterCount: false,
//        toolbarButtons: ['fontSize', 'bold', 'left_align', 'center_align', 'right_align'],
//        toolbarButtonsMD: ['fontSize', 'bold', 'left_align', 'center_align', 'right_align'],
//        toolbarButtonsSM: ['fontSize', 'bold', 'left_align', 'center_align', 'right_align'],
//        toolbarButtonsXS: ['fontSize', 'bold', 'left_align', 'center_align', 'right_align'],
//    });
//    $('.live-update-textarea').on('froalaEditor.focus', function (e, editor) {
//        console.log('focus..');
//        froala_flag = false;
//        var target = $(this).data('key');
//        $("." + target).addClass('change-text-live');
//        $("." + target).css({backgroundColor: "#dbe9ff"});
//        setTimeout(function () {
//            $("." + target).css({backgroundColor: ""});
//        }, 1200)
//        setTimeout(function () {
//            $("." + target).removeClass('change-text-live');
//        }, 1500)
//    });
//
//    $('.live-update-textarea').on('froalaEditor.contentChanged', function (e, editor) {
//        console.log('contentChanged');
//        setCookieLax('is_updated', 'TRUE');
//        froala_flag = true;
//        var eleInpName = $(this).attr('name');
//        var target = $(this).data('key');
//        var content = editor.html.get();
//        $("." + target).html(content);
//        if($(this).attr('name') == 'product_description') {
//            if($("." + target).next('div').hasClass('dummyDesc') && content == ''){
//                $("." + target).next('div').css('display', '');
//                $("." + target).hide();
//            } else if (content == '') {
//                $('.pre-product-discription .addFromApi').show();
//                $('.feat_prod_description_dummay').hide();
//                $("." + target).hide();
//            } else {
//                $('.pre-product-discription .addFromApi').hide();
//                $('.feat_prod_description_dummay').hide();
//                $("." + target).show();
//            }
//        } else if($(this).attr('name') == 'product_title') {
//            /* Product upsell section product-title preview */
//            if (content == '') {
//                $('.cppu-product-title').show();
//                $("." + target).hide();
//            } else {
//                $('.cppu-product-title').hide();
//                $("." + target).show();
//            }
//            //previewObj.find('.prdouctTitle').html(content);
//        } else if($(this).attr('name') == 'timer_expire_message'){
//            if($("."+target).hasClass('hidden') && $(".isDisplayTimer").hasClass('hidden')){
//                $("."+target).removeClass('hidden');
//            }
//            if(content == ''){
//                $("."+target).addClass('hidden');
//            }
//        }
//        $('#saveTemplate').removeAttr('disabled'); 
//         setValueOfferDataFrm(eleInpName, content);
//    });
}
$(document).ready(function () {
  componentsInit();
   
});
function init_tooltips() {
    tippy('[data-tippy-content]', {
        arrow: false,
        size: "regular",
        duration: 0
    });
}
$(document).on('click', '.changeView', function () {
    $(".Polaris-Popover__PopoverOverlay").toggleClass("Polaris-Popover__PopoverOverlay--open").toggle();
});
// outer click of view button
$(document).mouseup(function(e)
{
    var container = $(".width-80-top-bar");

    // if the target of the click isn't the container nor a descendant of the container
    if (!container.is(e.target) && container.has(e.target).length === 0)
    {
        $(".Polaris-Popover__PopoverOverlay").removeClass("Polaris-Popover__PopoverOverlay--open").hide();
    }
});
$(document).on('click', '#mobile-view', function (e) {
    $('#preview-content').css({'width': '375px'});
    $('.changeView').find("svg").html('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M3 1.5C3 0.7 3.7 0 4.5 0H15.5C16.3 0 17 0.7 17 1.5V18.5C17 19.3 16.3 20 15.5 20H4.5C3.7 20 3 19.3 3 18.5V1.5ZM5 2H15V16H5V2ZM9 17C8.73478 17 8.48043 17.1054 8.29289 17.2929C8.10536 17.4804 8 17.7348 8 18C8 18.2652 8.10536 18.5196 8.29289 18.7071C8.48043 18.8946 8.73478 19 9 19H11C11.2652 19 11.5196 18.8946 11.7071 18.7071C11.8946 18.5196 12 18.2652 12 18C12 17.7348 11.8946 17.4804 11.7071 17.2929C11.5196 17.1054 11.2652 17 11 17H9Z" fill="#5C5F62"></path></svg>');
    var secondary_options = $("#secondary_options option:selected").val();
    var layout = $(".widget_layout option:selected").val();
    $("#large_design_status").val('1');
    if (layout == '0') {
        $('.pct-large .pre-modal-content').addClass('pct-large-mobile-view');
    } else {
        $('.pct-extra-large .pre-modal-content').addClass('pct-extra-large-mobile-view');
        secondary_options = (secondary_options == '2') ? '3' : secondary_options;
    }
    setTimeout( function () {
        $('.mainSlickSilder').slick('destroy');
        $('.secondSlider').slick('destroy');
        FC_silder_reinit(secondary_options, 'CALL FROM MOBILE RESPONSIVE');
    }, 100);
    $('#mobile-view').addClass("Polaris-ActionList--active");
    $('#desktop-view').removeClass("Polaris-ActionList--active");
    $('#full_screen').removeClass("Polaris-ActionList--active");
    $("#left-panel-sidebar").show();
});
$(document).on('click', '#desktop-view', function (e) {
    $('#preview-content').css({'width': '100%', });
    $('.changeView').find("svg").html('<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M2.5 1C2.10218 1 1.72064 1.15804 1.43934 1.43934C1.15804 1.72064 1 2.10218 1 2.5V13.5C1 13.8978 1.15804 14.2794 1.43934 14.5607C1.72064 14.842 2.10218 15 2.5 15H7C7 15.525 6.985 15.793 6.856 16.053C6.736 16.292 6.44 16.663 5.553 17.106C5.34995 17.2076 5.18754 17.3753 5.09247 17.5816C4.99741 17.7878 4.97535 18.0202 5.02993 18.2406C5.08451 18.461 5.21247 18.6563 5.39277 18.7943C5.57308 18.9323 5.79499 19.0049 6.022 19H13.978C14.2068 19.0042 14.4301 18.9302 14.6111 18.7902C14.792 18.6502 14.9197 18.4525 14.973 18.23C15.0256 18.0073 15.0003 17.7732 14.9013 17.5669C14.8024 17.3605 14.6356 17.1944 14.429 17.096C13.556 16.657 13.263 16.29 13.144 16.053C13.014 15.793 13 15.525 13 15H17.5C17.8978 15 18.2794 14.842 18.5607 14.5607C18.842 14.2794 19 13.8978 19 13.5V2.5C19 2.10218 18.842 1.72064 18.5607 1.43934C18.2794 1.15804 17.8978 1 17.5 1H2.5ZM11.383 17C11.3738 16.9824 11.3648 16.9648 11.356 16.947C10.999 16.233 10.999 15.527 11 15.052V15H9V15.052C9 15.527 9.001 16.233 8.644 16.947C8.63518 16.9648 8.62618 16.9824 8.617 17H11.383ZM17 11H3V13H17V11Z" fill="#5C5F62"/></svg>');
    var secondary_options = $("#secondary_options option:selected").val();
    var layout = $(".widget_layout option:selected").val();
    $("#large_design_status").val('0');
    if (layout == '0') {
        $('.pct-large .pre-modal-content').removeClass('pct-large-mobile-view');
    } else {
        $('.pct-extra-large .pre-modal-content').removeClass('pct-extra-large-mobile-view');
    }
    setTimeout( function () {
        $('.mainSlickSilder').slick('destroy');
        $('.secondSlider').slick('destroy');
        FC_silder_reinit(secondary_options, 'CALL FROM MOBILE RESPONSIVE');
    }, 100);
    $('#desktop-view').addClass("Polaris-ActionList--active");
    $('#mobile-view').removeClass("Polaris-ActionList--active");
    $('#full_screen').removeClass("Polaris-ActionList--active");
    $("#left-panel-sidebar").show();
});
$(document).on('click', '#full_screen', function (e) {
    $('#preview-content').css({'width': '100%', });
    $('.changeView').find("svg").html('<svg viewBox="0 0 20 20" class="Polaris-Icon__Svg_375hu" focusable="false" aria-hidden="true"><path d="M16.707 6.293l3 3a.998.998 0 0 1 0 1.414l-3 3a.997.997 0 0 1-1.631-.324 1 1 0 0 1 .217-1.09L16.586 11H12a1 1 0 1 1 0-2h4.586l-1.293-1.293a1 1 0 1 1 1.414-1.414zm-13.414 0a1 1 0 1 1 1.414 1.414L3.414 9H8a1 1 0 0 1 0 2H3.414l1.293 1.293a1.003 1.003 0 0 1 0 1.414 1 1 0 0 1-1.414 0l-3-3a.998.998 0 0 1 0-1.414l3-3z"></path><path d="M1 1.5A1.5 1.5 0 0 1 2.5 0h15A1.5 1.5 0 0 1 19 1.5V6l-2-2V2H3v2L1 6V1.5zM17 18v-2l2-2v4.5a1.5 1.5 0 0 1-1.5 1.5h-15A1.5 1.5 0 0 1 1 18.5V14l2 2v2h14z"></path></svg>');
    var secondary_options = $("#secondary_options option:selected").val();
    var layout = $(".widget_layout option:selected").val();
    $("#large_design_status").val('0');
    if (layout == '0') {
        $('.pct-large .pre-modal-content').removeClass('pct-large-mobile-view');
    } else {
        $('.pct-extra-large .pre-modal-content').removeClass('pct-extra-large-mobile-view');
    }
    setTimeout( function () {
        $('.mainSlickSilder').slick('destroy');
        $('.secondSlider').slick('destroy');
        FC_silder_reinit(secondary_options, 'CALL FROM MOBILE RESPONSIVE');
    }, 100);
    $(this).addClass("Polaris-ActionList--active");
    $("#left-panel-sidebar").hide();
    $('#mobile-view').removeClass("Polaris-ActionList--active");
    $('#desktop-view').removeClass("Polaris-ActionList--active");
});
/* Rebuy synch button click from feature product */
$(document).on('click', '.FPRebuySynchBtnClick', function (e) {
    var id = $(this).closest('form').data('id');
    var response = Rebuy_status_chk(id);
    if (response == 1) {
//        $("#rebuyMsg_" + id).html(_E_rebuy_installed).css('color', 'green').show();
        $(".rebuySynchBtn").hide();
        $("#FPSucessMsg").show();
        $("#FPHelpMsg").hide();
        $("#rebuyMsg").hide();
    } else {
        $("#rebuyMsg").html(_E_rebuy_not_installed).css('color', 'red').show();
        $("#FPHelpMsg").show();
        $("#FPHelpMsgText").html("Rebuy");
    }
});
/* display Controls of thank you page */
$('#editor-menu-toggle').click(function (e) {
    e.preventDefault();
    var sideBar = $("#left-panel-sidebar");
    var sideBarToggle = $("#editor-menu-toggle");
    var nprogress =  $("#nprogress");
    var sideBarView = $("#customize-view-list");
    if (sideBar.css('margin-left') === '0px') {
        sideBar.css({"margin-left": "-300px"});
        sideBarView.css({'left': "10px"})
        $("body").css({"min-width": "100%"});
        sideBarToggle.addClass("closed");
    } else {
        sideBar.css({"margin-left": "0px"});
        sideBarView.css({'left': "310px"})
        $("body").css({"min-width": "640px"});
        sideBarToggle.removeClass("closed");
    }
});
var rbSyncAjx;
function Rebuy_status_chk() {
    var response = 0;
    /* Abort previous ajax call and work with last one */
    if (rbSyncAjx && rbSyncAjx.readyState != 4) {
        rbSyncAjx.abort();
    }
    rbSyncAjx = $.ajax({
        url: SITE_URL + "client/ajax_responce.php",
        type: "post",
        async: false,
        data: {method_name: "rebuy_status_check", shop: shop},
        success: function (resp) {
            response = resp;
        },
    });
    return response;
}
/* Toggle show exclusion tags in feature product*/
$(document).on('click', '.fp_is_show_exclusion_tags_change', function (e) {
    var id = $(this).closest('form').data('id');
    var selected_prod_type = $("#product_type option:selected").val();
    if(selected_prod_type < '3' && $(this).is(':checked')){
        /* Specific product, Expensive or cheapest product */
        $("#exceptionsProduct").show();
        $("#altProductDiv").show();
    }else{
        $("#exceptionsProduct").hide();
        $("#altProductDiv").hide();
    }
    $("#fp_is_show_exclusion_tags_text2").toggle();
    $("#FP-product-tag-div").toggle();
});

/* Open slider from iframe and some other places */
function openSlideFromIframe(goTo, carousel) {
    if(goTo != 'section-0') {
        var data_id = goTo;
        $('.carousel-inner .item').each(function (index) {
            if ($(this).data('id') == goTo) {
                goTo = index;
                return false;
            }
        });
        $('a[href="#sections"]').tab('show');
        $("#preconvertSettingsCarousel").carousel(0);
        $('#checkOutPPCarousel').carousel(goTo);
        if (data_id != 'add-section' && data_id != 'image-library' && data_id != 'collection-list' && data_id != 'product-list') {
            $('.section-add-things').attr('data-slide-to', data_id);
            $('#backtosection').val(data_id);
        }
    }
}

$(document).on('click', '#checkOutPPCarousel .slide-to', function (e) {
    e.preventDefault();
    var goTo;
    if ($(this).data('back') != undefined) {
        goTo = $('#backtosection').val();
    } else {
        goTo = $(this).data('slide-to');
    }
    if (goTo == 'image-library') {
        $('#img-id').val($(this).data('section-id'));
        $('#img-section').val($(this).data('section'));
        $('#img-src').val($(this).data('image'));
        $('#social-profile-logo-id').val($(this).data('social-id'));
        componentsInit();
    } else if (goTo == 'collection-list') {
        $('.dataSectName').attr('data-section', $(this).data('sect-name'));
        $('#element-id').val($(this).data('element-id'));
        $('#section-id').val($(this).data('section-id'));
    } else if (goTo == 'product-list') {
        $('#element-id').val($(this).data('element-id'));
        $('#section-id').val($(this).data('section-id'));
        $('#section_preFix').val($(this).data('section-pre-fix'));
    }
    openSlideFromIframe(goTo);
});

/* Save SECTION form on changes */
$(document).on('change', '.section_field_update', function () {
    console.log('section_field_update');
    console.log($(this));
    var content = $(this).val();
    var eleInpName = $(this).attr('name');
    var elementLoadIframe = $(this).data('loadiframe');
    var secClass = $(this).data('class');
    var frmObj = $(this).closest("form");
    var data_key = $(this).data('key');
    var section_name = $(this).data('section');
    var tagName = $(this).prop("tagName");
    data_key = (typeof data_key !== 'undefined') ? data_key : '';
    var targetEl = $(".cppu-post-editor-frame").find("[data-key='" + data_key + "']");
    var previewObj = $(".cppu-post-editor-frame");
    if ($(this).hasClass('offer-title-preview')) {
        content = (content == '') ? _E_OFFER_NAME : content;
        $(this).val(content);
        $('.offerText').html(content);
    }
    if($(this).attr('type') == 'checkbox') {
        if($(this). prop("checked") == false){
            content = '0';
        }else{
            content = '1';
        }
    }
    if (tagName != "div" && tagName != "DIV") {
        if(!$(this).hasClass('load_from_db')) {
            setValueOfferDataFrm(eleInpName, content, secClass);
        } else {
            $(this).removeClass('load_from_db');
        }
    }
    if ($(this).hasClass('update_text_visibility')) {
        /* Product upsell section update preview title position without ajax */
        var editorVal = $(this).closest('form').find('[name="product_title"]').val();
        var displayClass = '';
        if ($(this).val() == 2) {
            $(".titleAboveImage").hide();
            $(".titleBelowImage").show();
        }
        if ($(this).val() == 1) {
            $(".titleAboveImage").show();
            $(".titleBelowImage").hide();
        }
    }else if (section_name == 'feat_prod') {
        var title_variant = $("#feat_prod_variant option:selected").text();
        var variant_id = $("#feat_prod_variant").val();
        if (title_variant && variant_id != 0) {
            //$(".offerPreviewBody").find(".title_variant").text(title_variant);
            $("#default_variant_text").val(title_variant);
        } else if (variant_id == 0) {
            $(".offerPreviewBody").find(".title_variant").text('0');
            $("#default_variant_text").val('0');
        }
    }else if($(this).hasClass('common_update_visibility')) {
        /* Display none css */
        var cssVal = (content == '0') ? 'none' : '';
        previewObj.find("."+data_key).css('display', cssVal);
    }else if($(this).hasClass('main_product_image')) {

        if($(this).val() == '1'){
            $("#section_product_image").hide();
            setValueOfferDataFrm($('.main-image').attr('name'), '');
        }
        if($(this).val() == '2'){
            $("#section_product_image").show();
            setValueOfferDataFrm($('.main-image').attr('name'), $('.main-image').val());
        }
    } else if($(this).hasClass('description_visibility')) {       /* Product upsell section display description preview without ajax */
        var editorVal = $(this).closest('form').find('[name="product_description"]').val();
        if(content == '1') {
            console.log(data_key);
            if(previewObj.find("." + data_key ).next('div').hasClass('dummyDesc') && editorVal == ''){
                previewObj.find("." + data_key ).next('div').css('display', '');
            } else if(editorVal != ''){
                previewObj.find("."+data_key).css('display', '');
                previewObj.find(".featProd_description").css('display', 'none');
            } else {
                previewObj.find("."+data_key).css('display', 'none');
                previewObj.find(".featProd_description").css('display', '');
            }
        } else {
            previewObj.find("."+data_key).css('display', 'none');
            previewObj.find(".featProd_description").css('display', 'none');
            previewObj.find(".feat_prod_description_dummay").css('display', 'none');
        }

    }else if($(this).hasClass('widget_title_position')){
        if($(this).val() == '0'){
            previewObj.find('.widgetTitleAbove').css('display','block');
            previewObj.find('.widgetTitlebelow').css('display','none');
        }
        if($(this).val() == '1'){
            previewObj.find('.widgetTitleAbove').css('display','none');
            previewObj.find('.widgetTitlebelow').css('display','block');
        }
    } else if($(this).hasClass('update_display_visibility')) {
        $('.upsell-price').show();
        /* product upsell section update price preview without ajax */
        if (!$('.productUpsellLayout .pre-price').hasClass('sold_out')) {
            var cssVal = (content == '0') ? 'none' : '';
        }
        var allow_discount = $(this).closest('form').find("[name='is_allow_discount']").val();
        var discount_value = $(this).closest('form').find("[name='discount_value']").val();
        var discount_over_value = $(this).closest('form').find("[name='discount_over_order_value']").val();
        var isDiscount = (previewObj.find(".discountPrice").hasClass('Discount_removed')) ? false : $(this).closest('form').find("[name='is_show_discounted_price']").prop('checked');
        var isProductPrice = $(this).closest('form').find("[name='is_show_product_price']").prop('checked');
        var isComparePrice = $(this).closest('form').find("[name='is_show_compare_price']").prop('checked');
        var productPrice = previewObj.find(".productPrice").attr('data-value');
        var productCmpPrice = previewObj.find(".productCmpPrice").attr('data-value');
        var productDiscountPrice = previewObj.find(".discountPrice").attr('data-value');
        previewObj.find("." + data_key).css('display', cssVal);
        if(previewObj.find(".discountPrice").hasClass('Discount_removed')) {
            previewObj.find(".discountPrice").hide();
        }
        if (Math.floor(discount_value) != 0 && allow_discount == '1' && isDiscount == true && previewObj.find(".discountPrice").is(":hidden") == false) {
            previewObj.find(".discountPrice").prevAll().css('text-decoration', 'line-through');
        } else if (isProductPrice == true) {
            previewObj.find(".productPrice").css('text-decoration', '').prev().css('text-decoration', 'line-through');
            previewObj.find(".productPrice").show();
        } else if (isComparePrice == true) {
            previewObj.find(".productCmpPrice").css('text-decoration', '').show();
        }
        if (!$('.productUpsellLayout .pre-price').hasClass('sold_out')) {
            if ((isComparePrice == true && isProductPrice == true && parseFloat(productCmpPrice) == parseFloat(productPrice)) || parseFloat(productCmpPrice) < parseFloat(productPrice)) {
                previewObj.find(".productCmpPrice").hide();
            }
            if (parseFloat(productDiscountPrice) == parseFloat(productPrice)) {
                if(((isComparePrice == true && isProductPrice == false) || (isComparePrice == false && isProductPrice == false)) && isDiscount == true && previewObj.find(".discountPrice").hasClass('Discount_removed') == false) {
                    previewObj.find(".discountPrice").show();
                    previewObj.find(".productPrice").css('text-decoration', 'line-through');
                    if (isProductPrice == false) {
                        previewObj.find(".productCmpPrice").css('text-decoration', 'line-through');
                    }
                } else if ((isComparePrice == true && productCmpPrice == 0) || isProductPrice == true) {
                    previewObj.find(".discountPrice").hide();
                    previewObj.find(".productPrice").css('text-decoration', 'unset');
                    if (isProductPrice == false) {
                        previewObj.find(".productCmpPrice").css('text-decoration', 'unset');
                    }
                }
            }
            if(isDiscount == false && isProductPrice == false && isComparePrice == true) {
                previewObj.find(".productCmpPrice").show();
            }
            if(productPrice < 1) {
                if(isDiscount == true && Number(productDiscountPrice) >= Number(discount_over_value) && previewObj.find(".discountPrice").hasClass('Discount_removed') == false) {
                    previewObj.find(".discountPrice").show();
                    previewObj.find(".productPrice").hide();
                    previewObj.find(".productCmpPrice").hide();
                } else if(isProductPrice == true) {
                    previewObj.find(".productPrice").show();
                    previewObj.find(".productCmpPrice").hide();
                } else if(isComparePrice == true) {
                    previewObj.find(".productCmpPrice").show();
                }
            }
            // if (isDiscount == true && isProductPrice == true && isComparePrice == true && Math.floor(discount_value) == 0) {
            //     previewObj.find(".discountPrice").css('display', 'none');
            // }
            // if (parseFloat(productPrice) == parseFloat(productCmpPrice)) {
            //     if (isProductPrice == true) {
            //         previewObj.find(".productPrice").css('display', '');
            //         if(Math.floor(discount_value) == 0){
            //             previewObj.find(".discountPrice").css('display', 'none');
            //             previewObj.find(".discountPrice").prevAll().css('text-decoration', '');
            //         }
            //         previewObj.find(".productCmpPrice").css('display', 'none');
            //     } else if (isComparePrice == true && isProductPrice != true) {
            //         previewObj.find(".productCmpPrice").css('display', '');
            //         if(Math.floor(discount_value) == 0){
            //             previewObj.find(".discountPrice").css('display', 'none');
            //         }
            //         previewObj.find(".productPrice").css('display', 'none');
            //     } else if (isDiscount == true && isProductPrice != true && isComparePrice != true && Math.floor(discount_value) == 0) {
            //         previewObj.find(".discountPrice").css('display', '');
            //     }
            // } else if (isComparePrice == true && parseFloat(productCmpPrice) < parseFloat(productPrice)) {
            //     previewObj.find(".productCmpPrice").css('display', 'none');
            // }else if (parseFloat(productDiscountPrice) == parseFloat(productPrice) && Math.floor(discount_value) == 0) {
            //     if (isDiscount == true && isProductPrice != true) {
            //         if (previewObj.find(".productUpsellLayout  .upsell-price  .product-compare-api-price").is(":hidden") == true && previewObj.find(".productUpsellLayout  .upsell-price  .product-price").is(":hidden") == true) {
            //             previewObj.find(".productPrice").css('text-decoration', '');
            //         } else if (previewObj.find(".productUpsellLayout  .upsell-price  .product-compare-api-price").is(":hidden") == false && previewObj.find(".productUpsellLayout  .upsell-price  .product-price").is(":hidden") == false || previewObj.find(".productUpsellLayout  .upsell-price  .product-compare-api-price").is(":hidden") == false && previewObj.find(".productUpsellLayout  .upsell-price  .product-price").is(":hidden") == true) {
            //             previewObj.find(".productCmpPrice").css('text-decoration', 'line-through');
            //         }
            //         previewObj.find(".discountPrice").css('display', '');
            //     } else {
            //         if (previewObj.find(".productUpsellLayout  .upsell-price  .product-compare-api-price").is(":hidden") == true && previewObj.find(".productUpsellLayout  .upsell-price  .product-price").is(":hidden") == false || previewObj.find(".productUpsellLayout  .upsell-price  .product-compare-api-price").is(":hidden") == false && previewObj.find(".productUpsellLayout  .upsell-price  .product-price").is(":hidden") == false) {
            //             previewObj.find(".productPrice").css('text-decoration', '');
            //         }
            //         previewObj.find(".discountPrice").css('display', 'none');
            //     }
            // } else if (parseFloat(productDiscountPrice) == parseFloat(productCmpPrice) && Math.floor(discount_value) == 0) {
            //     if (isDiscount == true && isComparePrice != true) {
            //         previewObj.find(".discountPrice").css('display', '');
            //     } else {
            //         previewObj.find(".discountPrice").css('display', 'none');
            //     }
            // }
            //
            // if (isComparePrice == true && parseFloat(productCmpPrice) < parseFloat(productPrice) && isProductPrice != true && isDiscount == true) {
            //     previewObj.find(".discountPrice").css('display', '');
            // }
        }

    }else if($(this).hasClass('add-timer-widget')) {
        if($(this).prop('checked') == true) {
            $("#addTimerBlock").show();
        } else {
            $("#addTimerBlock").hide();
        }
    }  else if ($(this).hasClass('days') || $(this).hasClass('hours') || $(this).hasClass('minute') || $(this).hasClass('seconds')) {
        var timer_style = $('#selectTimerStyle').val();
        startWidgetTimer(0, timer_style);
    } else if($(this).hasClass('display_timer_position') && $(this).attr('id') == 'timerPosition') {
        var position_arr = ['timer_above_widget', 'timer_below_widget', 'timer_above_button', 'timer_below_button'];
        $(".widgetTimerBlock").addClass('is-display-timer').removeClass("isDisplayTimerPosition");
        $("." + position_arr[content]).removeClass('is-display-timer').addClass("isDisplayTimerPosition");
    } else if($(this).hasClass('timer-text-position') && $(this).attr('id') == 'timerTextPosition') {
        $(".timerText").css('display', 'none');
        $("."+content+"TimerText").css('display', 'block');
        (content == '1' || content == '2') ? $(".widgetTimerBlock").addClass('timer_sidebar_position')
            : $(".widgetTimerBlock").removeClass('timer_sidebar_position');
    } else if($(this).hasClass('display_discount')) {
        if (content == '1') {
            $('.discount_sub_part').show();
            $('#discounted_price_div_portion').show();
        } else {
            $('.discount_sub_part').hide();
            $('#discounted_price_div_portion').hide();
        }
    } else if($(this).hasClass('timer_text_update') && $(this).closest('form').find('.select-timer-type option:selected').val() == '0') {
        var day_text = $(this).closest('form').find('.day_text').val();
        var hr_text = $(this).closest('form').find('.hour_text').val();
        var min_text = $(this).closest('form').find('.minute_text').val();
        var sec_text = $(this).closest('form').find('.second_text').val();
        var days_time = $(this).closest('form').find('.display_timer_settings.days').val();
        var hours_time = $(this).closest('form').find('.display_timer_settings.hours').val();
        $(".widgetTimerBlock").find('.style1_timer_saperator').show();
        $(".widgetTimerBlock").find('.style1_timer_saperator_text').hide();
        if (((days_time > 0 && (day_text != '' || hr_text != '' || min_text != '' || sec_text != '')) || (hours_time > 0 && (hr_text != '' || min_text != '' || sec_text != '')) || (min_text != '' || sec_text != ''))) {
            $(".widgetTimerBlock").find('.style1_timer_saperator').hide();
            $(".widgetTimerBlock").find('.style1_timer_saperator_text').show();
        }
    } else if($(this).hasClass('select-timer-type')){
        $("#addTimerBlock").find('.timerBorderColor').show();
        $("#addTimerBlock").find('.timerStateColor').show();
        $("#addTimerBlock").find('.timer_label_text_block').show();
        $("#addTimerBlock").find('.timerStyleBgColor').html(_E_TIMER_BG_COLOR);
        $("#addTimerBlock").find('.timerStyleTextColor').html(_E_TIMER_TEXT_COLOR);
        var timer_style = $("#selectTimerStyle").val();
        if(timer_style == "0"){
            $("#addTimerBlock").find('.timerStateColor').hide();
        } else if(timer_style == "1"){
            $("#addTimerBlock").find('.timerStateColor').hide();
            $("#addTimerBlock").find('.timerBorderColor').hide();
        } else if(timer_style == "2"){
            $("#addTimerBlock").find('.timer_label_text_block').hide();
            $("#addTimerBlock").find('.timerStyleBgColor').html(_E_TIMER_PAST_BG_COLOR);
            $("#addTimerBlock").find('.timerStyleStateColor').html(_E_TIMER_LEFT_BG_COLOR);
        }
    }
    componentsInit();
    var isLoadTime = $(this).data('load-time');
    if (isLoadTime != "yes" && tagName != "div" && tagName != "DIV") {
        if (elementLoadIframe == 'yes') {
            frmObj.submit();
        }
    } else {
        $(this).data('load-time', 'no');
    }
});

/* image upload for TEMPLATE*/
$(document).on('change', '#image-upload', function () {
    var $this = $(this);
    var file = $this[0].files[0];
    var reader = new FileReader();
    reader.onloadend = function () {
        $('.image_picker_selector').prepend('<li><div class="thumbnail" style="pointer-events: none;background: #fff;"><img class="image_picker_image" src="../../assets/img/loader.gif"></div></li>');
    }
    reader.readAsDataURL(file);
    var fd = new FormData();
    fd.append('image', $this[0].files[0]);
    fd.append('method_name', 'image_upload');
    fd.append('shop', shop);
    $.ajax({
        type: "POST",
        url: SITE_URL + "client/theme-selector.php",
        data: fd,
        contentType: false,
        processData: false,
        dataType: "script",
    });
});

/* LIVE UPDATE SECTION OF TEXT */
$(document).on('keyup paste', '.section_field_update.live-update-text', function () {
    console.log('keyup');
    var target = $(this).data('key');
    var content = $(this).val();
    console.log(content);
    var previewObj = $(".cppu-post-editor-frame");
    previewObj.find("." + target).html(content);
    if ($(this).hasClass('offer-title-preview')) {
        $('.offerText').html(content);
    }
    if ($(this).hasClass('chk_pp_sub_total_text')) {
        $('.sub_total_text').html(content);
    }
    if ($(this).hasClass('chk_pp_taxes_text')) {
        $('.taxes_text').html(content);
    }
    if ($(this).hasClass('chk_pp_total_text')) {
        $('.total_text').html(content);
    }
    if ($(this).hasClass('chk_pp_quantity_text')) {
        $('.qty_text').html(content);
    }
    if ($(this).hasClass('chk_pp_timer_offer_text')) {
        $('.offer-timer-title').html(content);
    }
    if ($(this).hasClass('chk_pp_minute_text')) {
        $('.minute_text').html(content);
    }
     if ($(this).hasClass('chk_pp_second_text')) {
        $('.second_text').html(content);
    }
    if($(this).attr('name') == 'product_description') {
        if($("." + target).next('div').hasClass('dummyDesc') && content == ''){
            $("." + target).next('div').css('display', '');
            $("." + target).hide();
        } else if (content == '') {
            $('.productDescBlock .addFromApi').show();
            $('.feat_prod_description_dummay').hide();
            $("." + target).hide();
        } else {
            $('.pre-product-discription .addFromApi').hide();
            $('.feat_prod_description_dummay').hide();
            $("." + target).show();
        }
    } else if($(this).attr('name') == 'product_title') {
        /* Product upsell section product-title preview */
        if (content == '') {
            $('.cppu-product-title').show();
            $("." + target).hide();
        } else {
            $('.pre-product-title').hide();
            $("." + target).show();
        }
        //previewObj.find('.prdouctTitle').html(content);
    } else if($(this).attr('name') == 'timer_expire_message'){
        if($("."+target).hasClass('hidden') && $(".isDisplayTimer").hasClass('hidden')){
            $("."+target).removeClass('hidden');
        }
        if(content == ''){
            $("."+target).addClass('hidden');
        }
    }
});

/* called when some one select option to change collection,product etc...*/
var isSearchFeatureProduct = 0;
var isSearchFeatureCollection = 0;
$(document).on('click', '.selectFrmSlideTo', function (event) {
    var thisObj = $(this);
    var dataSectionName = $(this).attr('data-id');
//    var coll_ser_val = $("#feat_coll_src").val().length;
    /* Here we go for fetch the product or collection listing for selecte in relatede widget */
    load_iframe = 'yes';
    if (dataSectionName == 'feature-collection' || dataSectionName == 'collection-list') {
        $("#dataSectionName").val($(this).attr('data-sect-name'));
    }
    if (dataSectionName == 'product-list' && isSearchFeatureProduct == 0) {
        $("#feat_prod_src").trigger('input'); /*trigger for call the search_feature_product() */
        isSearchFeatureProduct = 1;
    } else if ((dataSectionName == 'feature-collection' || dataSectionName == 'collection-list') && (isSearchFeatureCollection == 0 || coll_ser_val > 0)) {
        coll_ser_val > 0 ? $("#feat_coll_src").val('') : '';
        $("#feat_coll_src").trigger('input'); /*trigger for call the searchFeatureCollections() */
        isSearchFeatureCollection = 1;
    }

});
/* end collection hide/show div */
/* default variant option selection toggle */
$(document).on('click', '.show_variant_change', function (e) {
    var type = $('#product_type').val();
    if(type != '1') {
        $("#feat_prod_variant_div").toggle();
    }
});

/* Toggle Feature product quantity */
$(document).on('click', '.show_feat_prod_quantity', function (e) {
    $("#qty_picker").toggle();
    $("#qty_err_msg").toggle();
});
/* Hide/Show product description editor on feature product section */
$(document).on('click', '.isShowFeatureProdDesc', function () {
    $(".featureProdDescEditor").toggle();
});

$(document).on('change', 'select.select-discount-type', function (event) {
    event.preventDefault();
    var current = $(this);
    if (current.val() == '2') {
        current.closest('form').find('.discount-percentage').show();
        current.closest('form').find('.discount-fixed-amount').hide();
    } else if (current.val() == '1' || current.val() == '3') {
        current.closest('form').find('.discount-percentage').hide();
        current.closest('form').find('.discount-fixed-amount').show();
    }
    current.closest('form').find('.discount-value').show();
    current.closest('form').find('.priceOptDDBlock').show().find('select[name="display_price_opt"]').val('0').trigger('change');
});
/* Font Slider*/
$(document).on('change', '.font-slider.font-size-slider', function (slideEvt) {
    var target = $(this).data('key');
    var size = $(this).val();
    size = size+'px';
    var previewObj = $(".offerPreviewBody");
    var targetEl = previewObj.find("."+target);
    $(targetEl).css({fontSize: size});
});

$(document).on('slide', '.font-slider', function (slideEvt) {
    $(this).siblings('.range-label').html(slideEvt.value + 'px');
});
$(document).on('change', '.font-slider', function (slideEvt) {
    $(this).siblings('.range-label').html(slideEvt.value.newValue + 'px');
});
$(document).on('slideStop', '.font-slider', function () {
    var frmObj = $(this).closest("form");
    var elementLoadIframe = $(this).data('loadiframe');
    elementLoadIframe = (typeof elementLoadIframe == 'undefined')? 'yes':elementLoadIframe;
    load_iframe = elementLoadIframe;
    frmObj.data('loadiframe', elementLoadIframe);
    var secName = $(this).attr('data-common-section');
    var secVal = $(this).val();
    setValueOfferDataFrm(secName, secVal);
    if(load_iframe == "yes"){
        //frmObj.submit();
    }
});
$(document).on('change', ".showOrHide", function () {
    var showHide = $(this);
    var showHideTargetClass = showHide.attr('data-showOrHideTarget');
    if (showHide.is(':checked')) {
        $('.'+showHideTargetClass).show();
        $('.freeShippingText').html(_E_FREE_SHIPPING_LABLE);
    }else {
        $('.'+showHideTargetClass).hide();
        $('.freeShippingText').html('<p class="SkeletonBodyText"></p>');
    }
});

$(document).on('click', '.changeProQty', function () {
    var qty = $(this).closest('.upsellQtyBlock').find('.productQty').val();
    if ($(this).data('id') == 'plus') {
        $(this).closest('.upsellQtyBlock').find('.productQty').val(parseInt(qty) + 1);
    } else {
        if (qty > 1) {
            $(this).closest('.upsellQtyBlock').find('.productQty').val(parseInt(qty) - 1);
        } else {
            $(this).closest('.upsellQtyBlock').find('.productQty').val(1);
        }
    }
    $(this).closest('.upsellQtyBlock').find('.productQty').trigger('change');
});

$(document).on('click', '.toggle_feature_product_price', function (e) {
    $(this).parent().parent().next().toggle();
    $(this).parent().parent().next().next().toggle();
});

/* Personalized recommendation install button click from feature product and feature collection */
$(document).on('click','.personalizedInstallBtnClick', function (e){
    var type = $(this).closest('form').data('type');

    $("."+type+"PersonalizedSynchBtn").show();
    $("."+type+"PersonalizedInstallBtn").hide();
});
/* Personalized recommendation status check button click from feature collection and feature product */
$(document).on('click', '.personalizedSynchBtnClick', function (e) {
    var type = $(this).closest('form').data('type');
    var response = Personalized_status_chk();
    if (response == 1) {
        /* Installed */
//        $("#" + type + "PersonalizedMsg_" + row_id).html(_E_personalized_installed).css('color', 'green').show();
        $("." + type + "PersonalizedSynchBtn").hide();
        $("#" + type + "SucessMsg").show();
        $("#" + type + "HelpMsg").hide();
        $("#" + type + "PersonalizedMsg").hide();
    }else if (response == 2) {
        /* Installed but integration disabled */
        $("#" + type + "PersonalizedMsg").html(_E_personalized_disabled).css('color', 'red').show();
        $("." + type + "PersonalizedSynchBtn").show();
    } else {
        /* Not installed */
        $("#" + type + "PersonalizedMsg").html(_E_personalized_not_installed).css('color', 'red').show();
        $("#" + type + "HelpMsgText").html('Personalized');
        $("#" + type + "HelpMsg").show();
    }
});
/* Rebuy install button click from feature collection and feature product*/
$(document).on('click', '.rebuyInstallBtnClick', function (e) {
    var type = $(this).closest('form').data('type');

    $("."+type+"RebuySynchBtn").show();
    $("."+type+"RebuyInstallBtn").hide();
});
/* Rebuy synch button click from feature collection */
$(document).on('click', '.rebuySynchBtnClick', function (e) {
    var type = $(this).closest('form').data('type');
    var response = Rebuy_status_chk();
    if (response == 1) {
//        $("#" + type + "RebuyMsg_").html(_E_rebuy_installed).css('color', 'green').show();
        $("." + type + "RebuySynchBtn").hide();
        $("#" + type + "RebuyMsg").hide();
        $("#" + type + "SucessMsg").show();
        $("#" + type + "HelpMsg").hide();
    } else {
        $("#" + type + "RebuyMsg").html(_E_rebuy_not_installed).css('color', 'red').show();
        $("#" + type + "HelpMsg").show();
        $("#" + type + "HelpMsgText").html("Rebuy");
    }
});
var rbSyncAjx;
function Rebuy_status_chk() {
    var response = 0;
    /* Abort previous ajax call and work with last one */
    if (rbSyncAjx && rbSyncAjx.readyState != 4) {
        rbSyncAjx.abort();
    }
    rbSyncAjx = $.ajax({
        url: SITE_URL + "client/ajax_responce.php",
        type: "post",
        async: false,
        data: {method_name: "rebuy_status_check", shop: shop},
        success: function (resp) {
            response = resp;
        },
    });
    return response;
}
var prsnlzSyncAjx;
function Personalized_status_chk() {
    var response = 0;
    /* Abort previous ajax call and work with last one */
    if (prsnlzSyncAjx && prsnlzSyncAjx.readyState != 4) {
        prsnlzSyncAjx.abort();
    }
    prsnlzSyncAjx = $.ajax({
        url: SITE_URL + "client/ajax_responce.php",
        type: "post",
        async: false,
        data: {method_name: "personalized_status_check", shop: shop},
        success: function (resp) {
            response = resp;
        },
    });
    return response;
}
/* wiser install button click from feature product and feature collection */
$(document).on('click','.wiserInstallBtnClick', function (e){
    var type = $(this).closest('form').data('type');

    $("."+type+"WiserSynchBtn").show();
    $("."+type+"WiserInstallBtn").hide();
});
/* wiser status check button click from feature collection and feature product */
$(document).on('click', '.wiserSynchBtnClick', function (e) {
    var row_id = $(this).closest('form').data('id');
    var type = $(this).closest('form').data('type');
    var response = Wiser_status_chk(row_id);
    if (response == 1) {
        /* Installed */
//        $("#" + type + "WiserMsg_").html(_E_wiser_installed).css('color', 'green').show();
        $("." + type + "WiserSynchBtn").hide();
        $("#" + type + "WiserMsg").hide();
//        $("#" + type + "WiserHelpMsg").show();
        $("#" + type + "SucessMsg").show();
        $("#" + type + "HelpMsg").hide();
    }else {
        /* Not installed */
        $("#" + type + "WiserMsg").html(_E_wiser_not_installed).css('color', 'red').show();
        $("#" + type + "HelpMsgText").html('Wiser');
        $("#" + type + "HelpMsg").show();
    }
});
/* Wiser install status check */
var wiserSyncAjx;
function Wiser_status_chk(row_id) {
    var response = 0;
    /* Abort previous ajax call and work with last one */
    if (wiserSyncAjx && wiserSyncAjx.readyState != 4) {
        wiserSyncAjx.abort();
    }
    wiserSyncAjx = $.ajax({
        url: SITE_URL + "client/ajax_responce.php",
        type: "post",
        async: false,
        data: {method_name: "wiser_status_check", shop: shop},
        success: function (resp) {
            response = resp;
        },
    });
    return response;
}
/* Recomatic install button click from feature collection and feature product */
$(document).on('click', '.recomaticInstallBtnClick', function (e) {
    var type = $(this).closest('form').data('type');
    $("." + type + "RecomaticSynchBtn").show();
    $("." + type + "RecomaticInstallBtn").hide();
});
/* Recomatic synch button */
$(document).on('click', '.recomaticSynchBtnClick', function (e) {
    var type = $(this).closest('form').data('type');
    var response = Recomatic_status_chk();
    if (response == 1) {
//        $("#" + type + "RecomaticMsg_").html(_E_recomatic_installed).css('color', 'green').show();
        $("." + type + "RecomaticSynchBtn").hide();
        $("#" + type + "RecomaticMsg").hide();
        $("#" + type + "SucessMsg").show();
        $("#" + type + "HelpMsg").hide();
    } else {
        $("#" + type + "RecomaticMsg").html(_E_recomatic_not_installed).css('color', 'red').show();
        $("#" + type + "HelpMsgText").html('Recomatic');
        $("#" + type + "HelpMsg").show();
    }
});
var recomaticSyncAjx;
function Recomatic_status_chk(row_id) {
    var response = 0;
    /* Abort previous ajax call and work with last one */
    if (recomaticSyncAjx && recomaticSyncAjx.readyState != 4) {
        recomaticSyncAjx.abort();
    }
    recomaticSyncAjx = $.ajax({
        url: SITE_URL + "client/ajax_responce.php",
        type: "post",
        async: false,
        data: {method_name: "recomatic_status_check", shop: shop},
        success: function (resp) {
            response = resp;
        },
    });
    return response;
}

$(document).on('click', '.integration_close', function () {
    $(this).closest('.successMsgRemove').hide();
});

$(document).on('submit', 'form', function () {
    var frmObj = $(this);
    var save_button_status = $("#save_button_status").val();
    if (save_button_status != '1') {
        $('#saveTemplateForm').removeAttr('disabled');
        $('.saveTemplate').attr('disabled', false);
    }


    var frmData = $(this).serialize();
    frmData += '&' + $.param({shop: shop,'is_editor': 1});

    $.ajax({
        type: $(this).attr("method"),
        url: $(this).attr('action'),
        data: frmData,
        dataType: "script",
        success: function (data) {
            if (save_button_status != '1') {
                $('#save_template').removeAttr('disabled');
                template_unsave();
            }
            $("#save_button_status").val('0');
        },
        complete: function (response) {
            $(this).closest("form").removeAttr('data-loadiframe');
            if($("#undoSyncThemeDataBlock").length){
                var p_id = getParameterByName('id','');
                dismissUndo(btoa(p_id));
            }
            init_tooltips();
        }
    });
    return false;
});

function secondaryProductImageChange(thisObj) {
    var secOpt = $(thisObj).val();
    var id = $(thisObj).data('id');
    if (secOpt > 1) {
        $('#arrowColor').show();
    } else {
        $('#arrowColor').hide();
    }
}

$(document).on('keyup paste', '.section_field_update.live-update-textarea', function () {
     console.log('keyup');
    var target = $(this).data('key');
    console.log(target);
    var content = $(this).val();
    console.log(content);
    $("." + target).html(content);
    if($(this).attr('name') == 'product_description') {
        if($("." + target).next('div').hasClass('dummyDesc') && content == ''){
            $("." + target).next('div').css('display', '');
            $("." + target).hide();
        } else if (content == '') {
            $('.featProd_description').show();
            $('.featProd_description').hide();
            $("." + target).hide();
        } else {
            $('.featProd_description').hide();
            $('.featProd_description').hide();
            $("." + target).show();
        }
    }  else if($(this).attr('name') == 'widget_title') {
        /* Product upsell section product-title preview */
        if (content == '') {
            $('.cppu-product-title').show();
            $("." + target).hide();
        } else {
            $('.cppu-product-title').hide();
            $("." + target).show();
        }
        //previewObj.find('.prdouctTitle').html(content);
    } else if($(this).attr('name') == 'product_title') {
        /* Product upsell section product-title preview */
        if (content == '') {
            $('.pre-product-title .addFromApi').show();
            $("." + target).hide();
        } else {
            $('.pre-product-title .addFromApi').hide();
            $("." + target).show();
        }
        //previewObj.find('.prdouctTitle').html(content);
    } else if($(this).attr('name') == 'timer_expire_message'){
        if($("."+target).hasClass('hidden') && $(".isDisplayTimer").hasClass('hidden')){
            $("."+target).removeClass('hidden');
        }
        if(content == ''){
            $("."+target).addClass('hidden');
        }
    }
});
/* Trigger on Feature product type change */
function changeFeatProdType(thisObj) {
    var prodType = $(thisObj).val();
    var id = $(thisObj).data('id');
    var exclusion_tags_is_checked = $(".fp_is_show_exclusion_tags_change").is(':checked');
    $("#FPPersonalizedMsg").hide();
    $("#FP_Personalized").hide();
    $('#FPWiserIntegration').hide();
    $("#FPSucessMsg").hide();
    $("#FPHelpMsg").hide();
    $('#featProdNote').hide();
    $('#collapseProduct').hide();
    $("#FP_Rebuy").hide();
    $('#altProductDiv').hide();
    $('#excludeProductByTags').show();
    $("#alternate_option" + " option[value=1]").hide();
    $("#exceptions_product_lable_product").hide();
    $('#FPRecomaticIntegration').hide();
    $("#alternate_options_div").hide();
    $('.importProductApiData').hide();
    $('#productFromoriginalOrder').show();
    if (prodType == '0') {
        /* Specific product */
        // $('#alternate_option').val('1');
        $("#exceptionsProduct").show();
        $('#feat_prod_variant_main').show();
        $('#collapseProduct').show();
        $('#altProductDiv').hide();
        /* alternate (exception) */
        $('#excludeProductByTags').hide();
        $("#alternate_options_div").show();
        $("#alternate_option" + " option[value=1]").show();
        /* Toggle label */
        $("#exceptions_product_lable_tag").hide();
        $("#exceptions_product_lable_product").show();
        $('#featProdNote').show();
        changeAlternateOptionType($('#alternate_option'));
        $('.importProductApiData').show();
        $('#productFromoriginalOrder').hide();
    }
    else if(prodType == '1' || prodType == '2' || prodType == '3'){
        /* Shopify recommendation and Expensive product and cheapest product */
        if(prodType != '3'){
            /* Expensive product and cheapest product */
            $('#alternate_option').val('0');
            $("#alternate_option").change();
            if(exclusion_tags_is_checked){
                $("#exceptionsProduct").show();
                $("#altProductDiv").show();
            }else{
                $("#exceptionsProduct").hide();
                $("#altProductDiv").hide();
            }
            $("#fp_is_show_exclusion_tags_msg2").hide();
            $("#exceptions_product_lable_tag").show();
            $("#alternate_options_div").show();
            $('#productFromoriginalOrder').hide();
        }else{
            /* Shopify recommendation */
            $("#exceptions_product_lable_tag").hide();
            $("#fp_is_show_exclusion_tags_msg2").hide();
            /* set text according order option selected */
            if ($('#is_show_order_product').is(':checked')){
                $("#fp_is_show_exclusion_tags_msg2").show();
            }else{
                $("#fp_is_show_exclusion_tags_msg2").hide();
            }
            $("#alternate_options_div").hide();
        }
        $('#feat_prod_variant_main').hide();
        $('#collapseProduct').hide();
        /* alternate (exception) */
        $('#excludeProductByTags').show();
        var alternateOpt = $('#alternate_option').val();
        if (alternateOpt == '1') {
            $("#alternate_option").val('2');
        }
    }
    else if(prodType == '4'){
        /* Rebuy recommendation */
        $(thisObj).parent().parent().append('<img class="FP_loader" src="../assets/img/loader.gif" style="height:150px">');
        $("#FP_Rebuy").show();
        $('#excludeProductByTags').show();
        /* Toggle label */
        $("#exceptions_product_lable_tag").hide();
        $("#exceptions_product_lable_product").hide();
        /*Hide Recomatic*/
        $("#FPRecomaticIntegration").hide();

        $('#collapseProduct').hide();
        $('#altProductDiv').hide();
        $("#alternate_options_div").hide();
        var alternateOpt = $('#alternate_option').val();
        if (alternateOpt == '1') {
            $("#alternate_option").val('2');
        }
        /* set text according order option selected */
        if ($('#is_show_order_product').is(':checked')){
            $("#fp_is_show_exclusion_tags_msg2").show();
        }else{
            $("#fp_is_show_exclusion_tags_msg2").hide();
        }
        /* Rebuy status check and hide show according */
        drop_down_chane_check_app_status(thisObj, 'Rebuy', id);
        $(".FP_loader").remove();
    }
    else if(prodType == '5'){
        /* Recomatic recommendation */
        $('#FPRecomaticIntegration').show();
        $('#excludeProductByTags').show();
        /* Toggle label */
        $("#exceptions_product_lable_tag").hide();
        $("#exceptions_product_lable_product").hide();
        /* Hide Rebuy */
        $("#FP_Rebuy").hide();

        $('#collapseProduct').hide();
//        $('#collapseCollection' + id).hide();
        $('#altProductDiv').hide();
        $("#alternate_options_div").hide();

        var alternateOpt = $('#alternate_option').val();
        if (alternateOpt == '1') {
            $("#alternate_option").val('2');
        }
        /* set text according order option selected */
        if ($('#is_show_order_product').is(':checked')){
            $("#fp_is_show_exclusion_tags_msg2").show();
        }else{
            $("#fp_is_show_exclusion_tags_msg2").hide();
        }
        /* Recomatic status check and hide show according */
        drop_down_chane_check_app_status(thisObj, 'Recomatic', id);
        $(".FP_loader").remove();
    }
    else if(prodType == '6'){
        /* Personalized recommendation */
        $('#FP_Personalized').show();
        $('#excludeProductByTags').show();
        /* recomatic hide */
        $('#FPRecomaticIntegration').hide();
        /* Toggle label */
        $("#exceptions_product_lable_tag").hide();
        $("#exceptions_product_lable_product").hide();
        /* Hide Rebuy */
        $("#FP_Rebuy").hide();

        $('#collapseProduct').hide();
//        $('#collapseCollection' + id).hide();
        $('#altProductDiv').hide();
        $("#alternate_options_div").hide();
        var alternateOpt = $('#alternate_option').val();
        if (alternateOpt == '1') {
            $("#alternate_option").val('2');
        }
        /* Personalized status check and hide show according */
        drop_down_chane_check_app_status(thisObj, 'Personalized', id);
        $(".FP_loader").remove();
    }
    else if(prodType == '10'){
        /* Wiser recommendation */
        $('#FPWiserIntegration').show();
        /* Toggle label */
        $("#exceptions_product_lable_tag").hide();
        $("#exceptions_product_lable_product").hide();
        /* Hide Rebuy */
        $("#FP_Rebuy").hide();
        $('#collapseProduct').hide();
        $('#altProductDiv').hide();
        $("#alternate_options_div").hide();
        var alternateOpt = $('#alternate_option').val();
        if (alternateOpt == '1') {
            $("#alternate_option").val('2');
        }
        /* Personalized status check and hide show according */
        drop_down_chane_check_app_status(thisObj, 'Wiser', id);
        $(".FP_loader").remove();
    }
    else if(prodType == '7'){
        $('#excludeProductByTags').hide();
        $("#exceptionsProduct").hide();
        $('#productFromoriginalOrder').hide();

    }
}

function setValueOfferDataFrm(eleInpName, areaValue, disable) {
    if (typeof disable === "undefined" || disable === null) {
        var save_button_status = $("#save_button_status").val();
        if(save_button_status != '1'){
            $('#saveTemplate').removeAttr('disabled');
            $('#saveTemplate').removeClass('Polaris-Button--disabled')
        }
    }
    if(typeof eleInpName != 'undefined'){
        if ($("#saveTemplateFrm").find("[name='" + eleInpName + "']").length) {
            $("#saveTemplateFrm").find("[name='" + eleInpName + "']").val(window.btoa(unescape(encodeURIComponent(areaValue))));
        } else {
            $("#saveTemplateFrm").append('<input type="hidden" name="' + eleInpName + '" value="' + window.btoa(unescape(encodeURIComponent(areaValue))) + '" />');
        }
    }
}
function saveOfferData(thisObj, offerId) {
    /* check whether the json data are there in page or not */
    var success = false;
    var frmObj = $(thisObj).closest('form');
    var saveTemplateFrm = frmObj.serialize();
    saveTemplateFrm += '&' + $.param({'shop': shop, 'offer_id': offerId, 'method_name': 'offer_save_data', 'is_editor': '1'});
    $.ajax({
        url: SITE_URL + "client/ajax_responce.php",
        type: "POST",
        dataType: "json",
        data: saveTemplateFrm,
        beforeSend: function () {
            $(thisObj).html(SVG_LOADER_LARGE).attr('disabled',true);
        },
        success: function (response) {
            /* check whether click generate revenue or not */
            if (response['result'] == 'success') {
                $('#saveTemplate').attr('disabled', true);
                loading_hide("#saveTemplate",_E_SAVE);
                $("#saveTemplate").attr("disabled","disabled");
                flashNotice(_E_OFFER_SAVED_SUCCESS);
                template_save();
            }
            else {
                loading_hide("#saveTemplate","Publish");
                $("#saveTemplate").attr("disabled","disabled");
                flashNotice(_E_OPERATION_FAILED);
            }
        }
    });
}

/* On change dropdown api call for check application status and display according result (For Feature collection and feature product) */
function drop_down_chane_check_app_status(thisObj, app){
    var type = $(thisObj).closest('form').data('type');
    /* Function call for check application status */
    var response = eval(app+"_status_chk()");
//    if(app == "Rebuy"){
//        var response = Rebuy_status_chk(rsId);
//    }else{
//        var response = Recomatic_status_chk(rsId);
//    }
    var app_constant = _E_rebuy_not_installed;
    if(app == "Recomatic"){
        app_constant = _E_recomatic_not_installed;
    }else if(app == "Personalized"){
        app_constant = _E_personalized_not_installed;
    }else if(app == "Wiser"){
        app_constant = _E_wiser_not_installed;
    }
    if (response == '1') {
        /* Installed */
        $("." + type + app +"SynchBtn").hide();
        $("." + type + app + "InstallBtn").hide();
        $("#" + type + app + "Msg").hide();
        $("#" + type + "SucessMsg").show();
//        if(app == 'Wiser'){
//           $("#" + type + app + "HelpMsg" + rsId).show();
//        }
    } else if(response == '2') {
        /* Installed but integration disabled */
        $("#" + type + app + "Msg").html(_E_personalized_disabled).css('color', 'red').show();
        $("." + type + app + "InstallBtn").hide();
        $("." + type + app + "SynchBtn").show();
    } else {
        /* Not installed */
        $("#" + type + app + "Msg").html(app_constant).show();
        $("." + type + app + "InstallBtn").show();
        $("." + type + app + "SynchBtn").hide();
        $("#" + type + "SucessMsg").hide();
        $("#" + type + "HelpMsg").show();
        $("#" + type + "HelpMsgText").html(app);

    }
}
function changeAlternateOptionType(thisObj) {
    var alternateOpt = $(thisObj).val();
    var id = $(thisObj).data('id');
    var productType = $("#product_type_" + id).data('id');
    if (alternateOpt == '0') {
        /* alternate product */
        $('#altProductDiv').show();
        var section = $(thisObj).data('id');
        var btnHtml = '<div  class="empty-product-container">'
            + '<button class="Polaris-Button select-product slide-to selectFrmSlideTo" data-section-pre-fix="alt_" data-id="product-list" data-slide-to="product-list" data-section="' + section + '" data-section-id="' + id + '" data-element-id="' + id + '" data-fname="sections[alternate_product_id]" type="button">' + _E_select_product + '</button>'
            + '</div>';
        $('#altProductBtn').html(btnHtml);
    } else if(alternateOpt == "2"){
        // setValueTemplateDataForm("sections[24][" + id + "_JSON][alternate_product_id]", 'NULL');
        $('#altProductDiv').hide();
    } else {
        /* display anyway and hide option */
        $('#altProductDiv').hide();
    }
    $(thisObj).selectpicker('refresh');
}
function changeProLayout(thisObj) {
    if($(thisObj).val() == '1') {
        $('.productTitleBlock').hide();
        $('#secondary_options option:last').show();
    } else {
        $('.productTitleBlock').show();
        $('#secondary_options option:last').hide();
        if($("#secondary_options").val() == '2') {
            $('#secondary_options option:eq(1)').prop('selected', true);
            setValueOfferDataFrm($("#secondary_options").attr('name'),'3');
        }
    }
    $('.select-picker').selectpicker('refresh');
    setValueOfferDataFrm($(thisObj).attr('name'),$(thisObj).val());
    $(thisObj).closest('form').submit();
}

$(document).on('move.spectrum', '.text-color-pickers, .price-color-pickers, .button-text-color-pickers', function (e, color) {
    var target = $(this).data('key');
    var rgbVal = color.toRgbString();
    $("."+target).css({color: rgbVal});
});

$(document).on('move.spectrum', '.ty-icon-color-picker,.arrow-color-pickers', function (e, color) {
    var target = $(this).data('key');
    var secName = $(this).attr('name');
    var rgbVal = color.toRgbString();

    if ($(this).hasClass("arrow_color")) {
        var targetEl = '<style>.offer-product-upsell .slick-prev:before{color:' + rgbVal + ';}.offer-product-upsell .slick-next:before{color:' + rgbVal + ';}</style>';
    }
    if ($(this).hasClass("ty-icon-Color")) {
        var targetEl = "<style>.reconvert-checkmark{animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;}@keyframes fill{100% {box-shadow: inset 0px 0px 0px 50px " + rgbVal + ";}</style>";
    }
    $(".offerPreviewBody").closest(".offer-product-upsell").find('style').remove();
    $(".offerPreviewBody").find(".offer-product-upsell").append(targetEl);
});
$(document).on('move.spectrum', '.button-color-pickers', function (e, color) {

    var target = $(this).data('key');
    var rgbVal = color.toRgbString();
    $("."+target).css({backgroundColor: rgbVal});
});

$(document).on('change.spectrum', '.color-picker', function (e, color) {
    if($(this).hasClass('arrow_color')) {
        var style = '<style> .pct .pre-box-content .slick-next:before, .pct .pre-box-content .slick-prev:before { color: '  + $(this).val() + '; } </style>';
        $('.slick_arrow_color').html(style);
    }
    var secName = $(this).attr('name');
    var secVal = $(this).val();
    setValueOfferDataFrm(secName, secVal);
});
$(document).on('move.spectrum', '.border-color-picker', function (e, color) {
    var target = $(this).data('key');
    var rgbVal = color.toRgbString();
    $("."+target).css({border: '1px solid '+rgbVal});
});

var isSelectImgFrmList = 0;
$(document).on('click', '.selectImgFrmList', function(){
    if(!isSelectImgFrmList){
        $.ajax({
            url: SITE_URL + "client/ajax_responce.php",
            type: "post",
            dataType: "html",
            data: {method_name: "load_image_list_on_editor", shop: shop},
            success: function (response) {
                $('#editorImagesList').html(response);
                $("#template_images").imagepicker({hide_select: true});
                isSelectImgFrmList = 1;
            }
        });
    }

});
/* End of load listing data using ajax */

/* Image change for section*/
$(document).on('change', '#template_images', function () {
    var imgSrc = $(this).val();
    var secId = $('#img-id').val();
    var datas = {};
    datas['method_name'] = 'image_updated';
    datas['image'] = imgSrc;
    datas['shop'] = shop;
    datas['is_editor'] = 1;
    $('option:selected', this).removeAttr('selected');
    $.ajax({
        type: "POST",
        url: SITE_URL + "client/ajax_responce.php",
        data: datas,
        dataType: "script",
    });
});

/* Image remove for section*/
$(document).on('click', '.remove-image', function () {
    var datas = {};
    datas['section'] = $(this).data('section');
    datas['method_name'] = 'image_remove';
    datas['shop'] = shop;
    datas['is_editor'] = 1;

    $.ajax({
        type: "POST",
        url: SITE_URL + "client/ajax_responce.php",
        data: datas,
        dataType: "script",
    });
    $(".offerPreviewBody").find('.mainSilder .defaultImg img').attr('src', '../../assets/img/placeholder.png');
    $(".offerPreviewBody").find('.secondSlider .defaultImg img').attr('src', '../../assets/img/placeholder.png');
});
function feat_prod_collection_load() {
    var count_rebuy_coll, count_recomatic_coll, rebuy_response, recomatic_response, count_personalized_coll, personalized_response, count_wiser_coll, wiser_response,uninstall_text;
    count_recomatic_coll = count_rebuy_coll = count_personalized_coll = count_wiser_coll = 0;
    /* On load loop for feature collection and feature product*/
    $(".featProdLoad").each(function (index) {
        var type = $(this).find('form').data('type');
        var selected_coll_type = $("#product_type").val();
        /* Check selected product type is rebuy */
        if (selected_coll_type == '4') {
            count_rebuy_coll++;
        }else if(selected_coll_type == '5'){
            /* Selected type is recomatic */
            count_recomatic_coll++;
        }else if(selected_coll_type == '6'){
            /* Selected type is personalized */
            count_personalized_coll++;
        }else if(selected_coll_type == '7'){
            /* Selected type is personalized */
            count_wiser_coll++;
        }
    });
    /* For rebuy api call once only */
    if (count_rebuy_coll > 0) {
        rebuy_response = Rebuy_status_chk();
    }
    /* For recomatic api call once only */
    if (count_recomatic_coll > 0) {
        recomatic_response = Recomatic_status_chk();
    }
    /* For personalized api call once only */
    if (count_personalized_coll > 0) {
        personalized_response = Personalized_status_chk();
    }
    /* For personalized api call once only */
//    if (count_personalized_coll > 0) {
//        personalized_response = Personalized_status_chk(last_rebuy_row_id);
//    }
    /* For wiser api call once only */
    if (count_wiser_coll > 0) {
        wiser_response = Wiser_status_chk();
    }
    /* For set all widget according api response */
    $(".featCollLoad, .featProdLoad").each(function (index) {
        var type = $(this).find('form').data('type');
        var selectType = $(this).find('form').attr('data-selectType');
//        var selectArr
        if(type == 'FC'){
            var selectArr = new Array(2,4,5,6);
        }else if(type == 'FP'){
            var selectArr = new Array(4,5,6,7);
        }
        if (rebuy_response == 1 && $.inArray(parseInt(selectType),selectArr) !== -1 && ((type == 'FC' && selectType == '2') || (type == 'FP' && selectType == '4'))) {
            /* Rebuy app installed */
            $("." + type + "RebuySynchBtn").hide();
            $("." + type + "RebuyInstallBtn").hide();
            $("#" + type + "RebuyMsg").hide();
            $("#" + type + "SucessMsg").show();
            $("#" + type + "HelpMsg").hide();
        } else if (rebuy_response == 0 && $.inArray(parseInt(selectType),selectArr) !== -1 && ((type == 'FC' && selectType == '2') || (type == 'FP' && selectType == '4'))){
            /* Rebuy app not installed */
            $("." + type + "RebuySynchBtn").hide();
            $("." + type + "RebuyInstallBtn").show();
//            $("#" + type + "HelpMsg").show();
            uninstall_text = 'Rebuy';
        }
        if (recomatic_response == 1 && $.inArray(parseInt(selectType),selectArr) !== -1 && ((type == 'FC' && selectType == '4') || (type == 'FP' && selectType == '5'))) {
            /* recomatic app installed */
            $("." + type + "RecomaticSynchBtn").hide();
            $("#" + type + "RecomaticMsg").hide();
            $("." + type + "RecomaticInstallBtn").hide();
            $("#" + type + "SucessMsg").show();
            $("#" + type + "HelpMsg").hide();
        } else if (recomatic_response == 0 && $.inArray(parseInt(selectType),selectArr) !== -1 && ((type == 'FC' && selectType == '4') || (type == 'FP' && selectType == '5'))){
            /* recomatic app not installed */
            $("." + type + "RecomaticSynchBtn").hide();
            $("#" + type + "RecomaticMsg").show();
            $("." + type + "RecomaticInstallBtn").show();
//            $("#" + type + "HelpMsg").show();
            uninstall_text = 'Recomatic';
        }
        if (personalized_response == 1 && $.inArray(parseInt(selectType),selectArr) !== -1 && ((type == 'FC' && selectType == '5') || (type == 'FP' && selectType == '6'))) {
            /* personalized app installed */
            $("." + type + "PersonalizedSynchBtn").hide();
            $("#" + type + "PersonalizedMsg").hide();
            $("." + type + "PersonalizedInstallBtn").hide();
            $("#" + type + "SucessMsg").show();
            $("#" + type + "HelpMsg").hide();
        }else if (personalized_response == 2 && $.inArray(parseInt(selectType),selectArr) !== -1 && ((type == 'FC' && selectType == '5') || (type == 'FP' && selectType == '6'))) {
            /* personalized app installed but integration not enabled */
            $("#" + type + "PersonalizedMsg").html(_E_personalized_disabled).css('color', 'red').show();
            $("." + type + "PersonalizedSynchBtn").show();
            $("." + type + "PersonalizedInstallBtn").hide();
        } else if (personalized_response == 0 && $.inArray(parseInt(selectType),selectArr) !== -1 && ((type == 'FC' && selectType == '5') || (type == 'FP' && selectType == '6'))){
            /* personalized app not installed */
            $("." + type + "PersonalizedSynchBtn").hide();
            $("#" + type + "PersonalizedMsg").html(_E_personalized_not_installed).show();
            $("." + type + "PersonalizedInstallBtn").show();
//            $("#" + type + "HelpMsg").show();
            uninstall_text = 'Personalized';
        }
        if (wiser_response == 1 && $.inArray(parseInt(selectType),selectArr) !== -1 && ((type == 'FC' && selectType == '6') || (type == 'FP' && selectType == '7'))) {
            /* recomatic app installed */
            $("." + type + "WiserSynchBtn").hide();
            $("#" + type + "WiserMsg").hide();
            $("." + type + "WiserInstallBtn").hide();
            $("#" + type + "SucessMsg").show();
            $("#" + type + "HelpMsg").hide();
        } else if(wiser_response == 0 && $.inArray(parseInt(selectType),selectArr) !== -1 && ((type == 'FC' && selectType == '6') || (type == 'FP' && selectType == '7'))){
            /* recomatic app not installed */
            $("." + type + "WiserSynchBtn").hide();
            $("#" + type + "WiserMsg").show();
            $("." + type + "WiserInstallBtn").show();
//            $("#" + type + "HelpMsg").show();
            uninstall_text = 'Wiser';
        }
        $("#" + type + "HelpMsgText").html(uninstall_text);
    });
}
feat_prod_collection_load();
/* Function with GraphQL */
var next_page_cursor = xhrtz = '';
function search_feature_product(thisObj) {
    var src_key = $("#feat_prod_src").val();
    var current_id = thisObj.id;
    productPageinfo = $('#pageInfo').val();
    var featureProductsListObj = $("#featureProductsList");
    if (src_key.length > 2 || src_key.length == 0) {
        if (xhrtz && xhrtz.readyState != 4) {
            xhrtz.abort();
        }
        $("#feature_product_not_found").hide();
        xhrtz = $.ajax({
            url: SITE_URL + "client/ajax_responce.php",
            type: "post",
            data: {method_name: "product_list", shop: shop, src_key: src_key, cursor : next_page_cursor,current_id : current_id},
            beforeSend: function () {
                $("#feat_prod_load_btn").hide();
                if (current_id == 'feat_prod_src') {
                    $("#" + current_id + "__spinner").show();
                    featureProductsListObj.hide();
                } else {
                    $("#" + current_id + "__spinner").show();
                }
            },
            success: function (response) {
                featureProductsListObj.show();
                var response = JSON.parse(response);
                if (response.result == "NO_DATA") {
                    featureProductsListObj.html('');
                    $("#feature_product_not_found").show();
                    $("#feat_prod_load_btn").hide();
                } else if (response.result == "success") {
                    $("#feat_prod_load_btn").show();
                    next_page_cursor = response.next_page_cursor;
                    if (current_id != 'feat_prod_load_btn') {
                        featureProductsListObj.html(response.products);
                    } else {
                        featureProductsListObj.append(response.products);
                    }
                    if (response.is_next_page == '0') {
                        $("#feat_prod_load_btn").hide();
                    }
                }
            },
            complete: function (response) {
                $("#" + current_id + "__spinner").hide();
                $("#" + current_id + "__spinner").hide();
            }
        });
    } else {
        return true;
    }
}
/* called when some select product,collection...etc from side bar*/
$(document).on('click', '.select', function (event) {
    event.preventDefault();
    var current = $(this);
    /* check current is for collection or product */
    var $chk_collection = current.data('product-id');
    var datas = {};
    var call_for = '0';
    if ($chk_collection == undefined) {
        var svg = current.children('span.collection-info').children('svg');
        var oldClass = svg.attr('class').replace('collection-selected', '');
        $('li').children('span.collection-info').children('svg').attr('class', oldClass);
        oldClass = oldClass + ' collection-selected';
        svg.attr('class', oldClass);

        var oldClass = svg.attr('class').replace('collection-selected', '');
        $('li').children('span.collection-info').children('svg').attr('class', oldClass);
        oldClass = oldClass + ' collection-selected';
        svg.attr('class', oldClass);
        if($(this).data('section') == 'Feature product') {
            datas['id'] = $('.edit_section').data('id');
            datas['is_editor'] = 1;
            datas['collection_id'] = current.data('collection-id');
            datas['shop'] = current.data('shop');
            datas['method_name'] = 'collection_updated';
            datas['coll_api_name'] = current.data('coll-api-name');
        } else {
            datas['id'] = $('.edit_section').data('id');
            datas['is_editor'] = 1;
            datas['collection_id'] = current.data('collection-id');
            datas['shop'] = current.data('shop');
            datas['method_name'] = 'recommendation_collection_updated';
            datas['coll_api_name'] = current.data('coll-api-name');
        }
    } else {
        call_for = '1';
        var svg = current.children('span.product-info').children('svg');
        var oldClass = svg.attr('class').replace('product-selected', '');
        $('li').children('span.product-info').children('svg').attr('class', oldClass);
        oldClass = oldClass + ' product-selected';
        svg.attr('class', oldClass);

        var oldClass = svg.attr('class').replace('product-selected', '');
        $('li').children('span.product-info').children('svg').attr('class', oldClass);
        oldClass = oldClass + ' product-selected';
        svg.attr('class', oldClass);

        var frmData = $("#segment-form-update").serialize();

        frmData += '&' + $.param({shop: shop,
            "is_editor" :1,
            'image' : current.data('image'),
            'title' : current.data('title'),
            'handle' : current.data('handle'),
            'product_id' : current.data('product-id'),
            'section_preFix': $('#section_preFix').val(),
        });

        frmData = frmData.replace('method_name=updated', 'method_name=product_updated');
        //var element_id = $("#element-id").val();
        //$(".featProd_description").html(current.data('description'));
    }
    if(call_for == '1'){
        datas = frmData;
    }else{
        datas['image'] = current.data('image');
        datas['title'] = current.data('title');
        datas['handle'] = current.data('handle');
        datas['section'] = current.data('section');
        datas['element_id'] = $('#element-id').val();
        datas['section_id'] = $('#section-id').val();
        datas['section_preFix'] = $('#section_preFix').val();
        datas['shop'] = shop;
    }
    $.ajax({
        type: "POST",
        url: SITE_URL + "client/ajax_responce.php",
        data: datas,
        dataType: "script",
    });
});
/* Remove product content */
$(document).on('click', '.remove-product-content', function () {
    var datas = {};
    datas['section'] = $(this).data('section');
    datas['method_name'] = 'product_remove';
    datas['shop'] = $(this).data('shop');
    datas['section_preFix'] = $(this).data('section-pre-fix');
    datas['is_editor'] = 1;
    $.ajax({
        type: "POST",
        url: SITE_URL + "client/ajax_responce.php",
        data: datas,
        dataType: "script",
    });
});

var is_template_save;

window.onbeforeunload = function () {
    if (is_template_save) {
        return "Did you save your template?"
    }
}
function template_save() {
    is_template_save = false;
}
function template_unsave() {
    is_template_save = true;
}
function isNumberKey(evt){
    var charCode = (evt.which) ? evt.which : event.keyCode
    if (charCode > 31 && (charCode < 48 || charCode > 57) && charCode != 46)
        return false;
    return true;
}
$(document).on("blur", '.set0OnEmpty', function () {
    if ($(this).val().trim().length == 0) {
        $(this).val("0");
        var eleInpName = $(this).attr('name');
        var content = $(this).val();
        if($(this).hasClass('flate_rate')) {
            var target = $(this).data('key');
            $("."+target).html(format_money(parseFloat(content).toFixed(2).toString(), money_format));
        }
        setValueOfferDataFrm(eleInpName, content);
    }
});
var timerInter = '';
var shortcode_date = '';
function startWidgetTimer(call_from, timer_style) {
    if($("#addTimerBlock").length > 0) {
        var days = ($(".days").val() != '') ? $(".days").val() : 0;
        var hours = ($(".hours").val() != '') ? $(".hours").val() : 0;
        var minutes = (($(".minute").val() != undefined) ? (($(".minute").val()) ? $(".minute").val() : 0) : 5);
        var seconds = ($(".seconds").val()) ? $(".seconds").val() : 0;

    } else {
        var days = ($(".countdown-section .days:first").text() != '') ? $(".countdown-section .days:first").text() : 0;
        var hours = ($(".countdown-section .hours:first").text() != '') ? $(".countdown-section .hours:first").text() : 0;
        var minutes = (($(".countdown-section .minutes:first").text() != undefined) ? (($(".countdown-section .minutes:first").text()) ? $(".countdown-section .minutes:first").text() : 0) : 5);
        var seconds = ($(".countdown-section .seconds:first").text()) ? $(".countdown-section .seconds:first").text() : 0;
    }
    days = Number(days);
    hours = Number(hours);
    minutes = Number(minutes);
    seconds = Number(seconds);
    function pad(num, size) {
        num = num.toString();
        while (num.length < size) num = "0" + num;
        return num;
    }
    function secondsToTime(secs) {
        var second = Number(secs);
        var d = parseInt(Math.floor(second / (3600 * 24)));
        var h = parseInt(Math.floor((second % (3600 * 24)) / 3600));
        var m = parseInt(Math.floor((second % 3600) / 60));
        var s = parseInt(Math.floor(second % 60));
        days = d ? pad(d, 2):0;
        hours = d > 0 || h > 0 ? pad(h, 2) : 0;
        minutes = d > 0 || h > 0 || m > 0 ? pad(m, 2) : 0;
        seconds = d > 0 || h > 0 || m > 0 || s > 0 ? pad(s, 2) : 0;
    }
    function timeFormat(day,hour,minute,second) {

        var day = day ? day : 0;
        var hour = hour ? hour : 0;
        var minute = minute ? minute : 0;
        var second = second ? second : 0;
        var timer_seconds = parseInt(day ? day : 0)*24*60*60 + parseInt(hour ? hour : 0)*60*60 + parseInt(minute ? minute : 0)*60 + parseInt(second ? second : 0);
        shortcode_date = timer_seconds;
        return secondsToTime(timer_seconds);
    }
    timeFormat(days,hours,minutes,seconds);
    var reminutes = (minutes >= 10) ? minutes : pad(minutes,2);
    var reseconds = (seconds >= 10) ? seconds : pad(seconds,2);
    $(".isDisplayTimer").removeClass("hidden");
    $(".isDisplayExpireMsg").addClass("hidden");
    $('#addTimerBlock').find('.previewExpireOffer').text("Preview expired offer");
    if($(".productPrice").hasClass('timer_discount_remove')) {
        $(".productPrice").removeClass('timer_discount_remove').hide();
    }
    if (call_from == 0) {
        $(".discountPrice").removeClass('Discount_removed');
        if ($(".discountPrice").hasClass('display-discount-price')) {
            $(".discountPrice").show();
            $(".productCmpPrice").css("text-decoration", "line-through");
            $(".productPrice").css("text-decoration", "line-through");
            $('#product_qty').trigger('change');
        }
    }
    if (timerInter != undefined) {
        clearInterval(timerInter);
    }
    if(timer_style == 2) {
        $('.progressbar').css("width", "0%");
    }

    var dayss = (days >= 10) ? days : pad(days,2);
    $(".widgetTimerBlock .countdown-section .days").html(dayss);
    (days == '' || days == null || days == "0") ? $(".secctionDays").hide() : $(".secctionDays").show();
    var hourss = (hours >= 10) ? hours : pad(hours,2);
    $(".countdown-section .hours").html(hourss);
    ((hours == '' || hours == null || hours == "0") && days <= 0) ? $(".sectionHours").hide() : $(".sectionHours").show();
    $(".countdown-section .minutes").html(reminutes);
    $(".countdown-section .seconds").html(reseconds);
    function calculate() {
        seconds--;
        if (parseInt(seconds) < 0) {
            seconds = 59;
            minutes--;
            if (minutes < 0) {
                hours--;
                minutes = 59;
                if (hours < 0) {
                    days--;
                    hours = 23;
                    if (days < 0) {
                        $(".countdown-section .seconds").html('00');
//                        if(displayTimer != '0'){
                        if ($('#section_timer_expire_message').val() != '') {
                            $(".isDisplayExpireMsg").removeClass("hidden");
                        }
                        $(".isDisplayTimer").addClass("hidden");
//                        }
                        $('.previewExpireOffer').text("Preview live offer");
                        var expirySetting = $("#timerRunOut option:selected").val();
                        if(typeof expirySetting == 'undefined'){
                            expirySetting = $("#timerRunOutSetting").val();
                        }
                        if (expirySetting == "1") {
                            $(".discountPrice").addClass('Discount_removed');
                            if ($(".discountPrice").hasClass('display-discount-price')) {
                                $(".discountPrice").hide();
                                if($(".productPrice").is(":hidden") && $(".productCmpPrice").is(":hidden")) {
                                    $(".productPrice").addClass('timer_discount_remove').css("text-decoration","none").show();
                                } else {
                                    if ($(".productPrice").is(":hidden")) {
                                        $(".productCmpPrice").css("text-decoration", "none");
                                    } else {
                                        $(".productPrice").css("text-decoration", "none");
                                    }
                                }

                            }
                            $('.orderSummeryTotal').text($('.productPrice').text());
                            $('#product_qty').trigger('change');
                        }
                        clearInterval(timerInter);
                        days = 0;
                        hours = 0;
                        minutes = 0;
                        seconds = 0;
                    }
                }
            }
        }
        if (timer_style == 2) {
            var diff = shortcode_date - ((parseInt(days) * 24 * 60 * 60) + (parseInt(hours) * 60 * 60) + (parseInt(minutes) * 60) + (parseInt(seconds)));
            var perc = ((diff / shortcode_date) * 100).toFixed(2);
            $('.progressbar').css("width", perc + "%");
        }
        var dayss = (days >= 10) ? days : pad(days,2);
        $(".countdown-section .days").html(dayss);
        (days == '' || days == null || days == "0") ? $(".secctionDays").hide() : $(".secctionDays").show();
        var hourss = (hours >= 10) ? hours : pad(hours,2);
        $(".countdown-section .hours").html(hourss);
        ((hours == '' || hours == null || hours == "0") && days <= 0) ? $(".sectionHours").hide() : $(".sectionHours").show();
        var minutesss = (minutes >= 10) ? minutes : pad(minutes,2);
        var secondsss = (seconds >= 10) ? seconds : pad(seconds,2);
        $(".countdown-section .minutes").html(minutesss);
        $(".countdown-section .seconds").html(secondsss);
    }
    timerInter = setInterval(calculate, 1000);
}
$(document).on("click",".previewExpireOffer",function(){
    var expirySetting = $("#timerRunOut").val();
    var expireText = $(".isDisplayExpireMsg").text();
    if($.trim(expireText) != ''){
        $(".isDisplayExpireMsg").toggleClass("hidden");
    }
    $(".isDisplayTimer").toggleClass("hidden");
    if($(this).text().indexOf("expired") != -1){
        $(this).text("Preview live offer");
        if(expirySetting == "1" && $(".discountPrice").hasClass('display-discount-price')) {
            $(".discountPrice").hide();
            if($(".productPrice").is(":hidden") && $(".productCmpPrice").is(":hidden")) {
                $(".productPrice").addClass('timer_discount_remove').css("text-decoration","none").show();
            } else {
                if($(".productPrice").is(":hidden")) {
                    $(".productCmpPrice").css("text-decoration","none");
                } else {
                    $(".productPrice").css("text-decoration","none");
                }
            }
        }
    } else {
        $(this).text("Preview expired offer");
        if($(".discountPrice").hasClass('display-discount-price')) {
            $(".discountPrice").show();
            if($(".productPrice").hasClass('timer_discount_remove')) {
                $(".productPrice").removeClass('timer_discount_remove').hide();
            }
            if($(".productPrice").is(":hidden")) {
                $(".productCmpPrice").css("text-decoration","line-through");
            } else {
                $(".productPrice").css("text-decoration","line-through");
            }
        }
    }
});

function htmlSpecialCharacterEncode(text) {
    var map = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
        "’": '&#8217;',
        "‘": '&#8216;',
        "–": '&#8211;',
        "—": '&#8212;',
        "…": '&#8230;',
        '??': '&#8221;',
        "?": '?'
    };
    return text.replace(/[&<>"'’‘–—…??]/g, function(m) { return map[m]; });
};

$(document).on('click','.value_up',function(){
    var input = $(this).closest('.Polaris-TextField').find('input');
    var inputName = $(input).attr('name');
    var dataVal = $(input).val();
    dataVal = parseFloat(dataVal)+1;
    if(inputName == 'discount_value'){
        $(input).val(dataVal.toFixed(2)).trigger('change');
    }else{
        $(input).val(dataVal.toFixed(0)).trigger('change');
    }
});
$(document).on('click','.value_down',function(){
    var input = $(this).closest('.Polaris-TextField').find('input');
    var inputName = $(input).attr('name');
    var dataVal = $(input).val();
    dataVal = parseFloat(dataVal)-1;
    if(dataVal <= 0){
        dataVal = 0;
    }
    if(inputName == 'discount_value'){
        $(input).val(dataVal.toFixed(2)).trigger('change');
    }else{
        $(input).val(dataVal.toFixed(0)).trigger('change');
    }
});
function escapeRegExp(string){
    return string.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
