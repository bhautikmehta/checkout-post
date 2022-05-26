"use strict";
/****************************
 *  SOME COMMON SVG CONSTANT *
 ****************************/
var SVG_LOADER = '<svg viewBox="0 0 20 20" class="Polaris-Spinner Polaris-Spinner--colorInkLightest Polaris-Spinner--sizeSmall" aria-label="Loading" role="status"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"></path></svg>';
var SVG_DELETE = '<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M16 6a1 1 0 1 1 0 2h-1v9a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V8H4a1 1 0 1 1 0-2h12zM9 4a1 1 0 1 1 0-2h2a1 1 0 1 1 0 2H9zm2 12h2V8h-2v8zm-4 0h2V8H7v8z" fill="#000" fill-rule="evenodd"></path></svg>';

var SVG_MINUS = '<svg class="Polaris-Icon__Svg" viewBox="0 0 80 80" focusable="false" aria-hidden="true"><path d="M39.769,0C17.8,0,0,17.8,0,39.768c0,21.956,17.8,39.768,39.769,39.768   c21.965,0,39.768-17.812,39.768-39.768C79.536,17.8,61.733,0,39.769,0z M13.261,45.07V34.466h53.014V45.07H13.261z" fill-rule="evenodd" fill="#DE3618"></path></svg>';
var SVG_PLUS = '<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20" focusable="false" aria-hidden="true"><path d="M17 9h-6V3a1 1 0 1 0-2 0v6H3a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2" fill-rule="evenodd"></path></svg>';

var SVG_EYE = '<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M17.928 9.628c-.092-.229-2.317-5.628-7.929-5.628s-7.837 5.399-7.929 5.628c-.094.239-.094.505 0 .744.092.229 2.317 5.628 7.929 5.628s7.837-5.399 7.929-5.628c.094-.239.094-.505 0-.744m-7.929 4.372c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.21 0 4 1.791 4 4s-1.79 4-4 4m0-6c-1.104 0-2 .896-2 2s.896 2 2 2c1.105 0 2-.896 2-2s-.895-2-2-2" fill="#000" fill-rule="evenodd"></path></svg>';
var SVG_CLOSE_EYE = '<svg class="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 0 0 2-2c0-.178-.03-.348-.074-.512l5.78-5.78a1 1 0 1 0-1.413-1.415l-2.61 2.61A7.757 7.757 0 0 0 10 4C4.388 4 2.163 9.4 2.07 9.628a1.017 1.017 0 0 0 0 .744c.055.133.836 2.01 2.583 3.56l-2.36 2.36a1 1 0 1 0 1.414 1.415l5.78-5.78c.165.042.335.073.513.073zm-4-2a4 4 0 0 1 4-4c.742 0 1.432.208 2.025.56l-1.513 1.514A2.004 2.004 0 0 0 10 8a2 2 0 0 0-2 2c0 .178.03.347.074.51L6.56 12.026A3.96 3.96 0 0 1 6 10zm10.144-3.144l-2.252 2.252c.065.288.107.585.107.893a4 4 0 0 1-4 4c-.308 0-.604-.04-.892-.107l-1.682 1.68a7.903 7.903 0 0 0 2.573.428c5.612 0 7.836-5.398 7.928-5.628a1.004 1.004 0 0 0 0-.743c-.044-.112-.596-1.438-1.784-2.774z" fill="#000" fill-rule="evenodd"></path></svg>';

/****************************
 *  SOME COMMON SVG CONSTANT*
 ****************************/
/****************************************
 * For Tab start
 ****************************************/
/*
 * @param {string} $className
 * @returns {undefined} show loader
 */
function loading_show($selector) {
    $($selector).addClass("Polaris-Button--loading").html('<span class="Polaris-Button__Content loader_wth"><span class="Polaris-Button__Spinner">' + SVG_LOADER + '</span></span>&nbsp;</span>').fadeIn('fast').attr('disabled', 'disabled');
}

/**
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
}

/**
 * loader for table
 * param 1 for selector of table it either id,class or anyting else
 * param 2 generally it is the number of column which our table have
 */
function table_loader(selector,colSpan){
    $(selector).html('<tr><td colspan="'+colSpan+'" style="text-align:center;"><div class="loader-spinner"><svg viewBox="0 0 44 44" class="Polaris-Spinner Polaris-Spinner--colorTeal Polaris-Spinner--sizeLarge" role="status"><path d="M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"></path></svg></div></td></tr>')
}

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

/* It is used to display loader in graph */
function graph_loader(selector) {
    $(selector).html('<div class="loader-spinner"><svg viewBox="0 0 44 44" class="Polaris-Spinner Polaris-Spinner--colorTeal Polaris-Spinner--sizeLarge" role="status"><path d="M15.542 1.487A21.507 21.507 0 0 0 .5 22c0 11.874 9.626 21.5 21.5 21.5 9.847 0 18.364-6.675 20.809-16.072a1.5 1.5 0 0 0-2.904-.756C37.803 34.755 30.473 40.5 22 40.5 11.783 40.5 3.5 32.217 3.5 22c0-8.137 5.3-15.247 12.942-17.65a1.5 1.5 0 1 0-.9-2.863z"></path></svg></div>')
}

$(document).ready(function () {

    /****************************************
     *      Data Table Listing page         *
     ****************************************/
    $('table[data-listing="true"]').each(function () {
        var tableId = $(this).attr('id');
        __loadApiListData(tableId);
    });

    var flashMsg = getCookie("flash_msg");
    var flashClass = getCookie("flash_class");
    /* used to display flash message according to cookie set */
    if (flashMsg != '') {
        setCookie('flash_msg', '', -2);
        flashNotice(flashMsg, flashClass);
    }
});

function redirect403(){
    window.location = SITE_URL + "admin_panel/";
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var secure = mode == 'local' ? '' : ' Secure';
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None;" + secure;
}

function getCookie(cname) {
    cname = (cname != undefined) ? cname : 'flash_msg';
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
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

var loadApiListDataAjax = null;

var __loadApiListData = function __loadApiListData(tableId, pageno) {
    /* Abort Previous Ajax */
    if (loadApiListDataAjax && loadApiListDataAjax.readyState != 4) {
        loadApiListDataAjax.abort();
    }

    /* Search Keyword */
    var searchKeyword = $("#" + tableId + "SearchKeyword").val();

    /* Search Keyword length */
    var searchKeywordLen = (searchKeyword != undefined) ? searchKeyword.length : 0;

    if (searchKeywordLen == 0 || searchKeywordLen >= 3) {
        var apiName = $('#' + tableId).attr('data-apiName');
        var limit = $("#" + tableId + "Limit").val();
        var from = $('#' + tableId).attr('data-from');
        var methodName = 'get_' + from + '_listing_data';

        var searchFields = $('#' + tableId).attr('data-search');

        pageno = (pageno != undefined) ? pageno : 1;
        loadApiListDataAjax = $.ajax({
            url: "ajax_response.php",
            type: "post",
            dataType: "json",
            data: {
                method_name: methodName,
                api_name: apiName,
                limit: limit,
                pageno: pageno,
                search_keyword: searchKeyword,
                html_table_id: tableId,
                search_fields: searchFields,
                pagination_function: __loadApiListData.name,
            },
            beforeSend: function () {
                var totalTH = $('#' + tableId + ' thead tr th').length;
                table_loader("table#" + tableId + " tbody", totalTH);
            },
            success: function (response) {
                if (response['code'] != undefined && response['code'] == '403') {
                    setCookie('flash_msg', response['msg'], 2);
                    redirect403();
                } else if (response['result'] == 'success') {
                    $('table#' + tableId + ' tbody').html(response['html']);
                    $('#' + tableId + 'Pagination').html(response['pagination_html']);
                    if(response['pagination_html'] == '') {
                        $('#' + tableId + 'Pagination').hide();
                    } else {
                        $('#' + tableId + 'Pagination').show();
                    }
                    if (tableId == 'blockUnblockUserListing'){
                        __loadApiListData('userActivityListing');
                    }
                    /* for popover reintalize and more-less content intalization*/
                } else {
                    flashNotice(response['msg']);
                }
            }
        });
    }

} /* end of __loadApiListData */

/* IW0030- admin panel code start */
/* for take charge based on order*/
var change_charge_order = '0';
$(document).on("click", '.orderChargeStore', function (e) {
//    var is_change = $(this).is(":checked") ? '1' : '0';
    change_charge_order = '1';
//    var store_id = $(this).attr('data-storeid');
//    var store_name = $(this).attr('data-storename');
//    var user_id = $("#current_userid").val();
//    $.ajax({
//        url: "ajax_response.php",
//        type: "post",
//        dataType: "json",
//        data: {method_name: 'change_charges_method',is_change: is_change, store_client_id: store_id,user_id:user_id,store_name:store_name},
//        async: false,
//        success: function (response) {
//            if (response['code'] != undefined && response['code'] == '403') {
//                setCookie('flash_msg', response['msg'], 2);
//                redirect403();
//            } else {
//                flashNotice(response['msg']);
//            }
//        },
//    });
});
/* IW0030- admin panel code end */

/* IW0027 - get store detail for setting page */
$(document).on('click', '.getStoreEvent', function () {
    var frmData = $(this).closest('form').serialize();
    frmData += '&' + $.param({"method_name": 'get_store_settings'});
    var btnText = $('.getStoreEvent').text();
    loading_show('.getStoreEvent');
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: frmData,
        success: function (response) {
            if (response['result'] == 'success') {
                $("#hardReset").prop("checked", false);
                if(response['is_charge_order'] == '1'){
                    $("#onlyDataBase").prop("checked", true);
                }
                $('.getStoreEvent').addClass("get-btn-disabled");
                intalizeEvent();
                flashNotice(response['msg']);
                $("#errorMsgBlock").hide();
                $("#storeCredit").val(response['store_credit']);
                $("#store_discount").val(response['discount']);
                $("#free_trial_date").val(response['free_trial']);
                $(".storeName").val(response['store_name']);
                $("#userActivityListingSearchKeyword").val(response['store_name']);
                __loadApiListData("userActivityListing",'1');
                $(".resetAnalyticBlog").removeClass("is-display");
                $(".changeFreetrial").removeClass("is-display");
                $(".refundBlock").removeClass("is-display");
                $(".userActivityReport").removeClass("is-display");
                if (response['html'] != undefined) {
                    $(".store_summary").html(response['html']);
                }
                $("#store_name").attr('readonly',true);
                $("#resetSearchStore").removeClass("get-btn-disabled");
                $("#storeName").attr("disabled", 'disabled');
            } else if (response['msg_content'] != undefined && response['msg_heading'] != undefined) {
                $("#errorBlockContent").html(response['msg_content']);
                $("#errorBlockHeading").html(response['msg_heading']);
                $("#errorMsgBlock").fadeIn();
                $("html, body").animate({scrollTop: 0}, "slow");
            } else if(response['result'] == 'fail') {
                flashNotice(response['msg']);
                $("#errorMsgBlock").hide();
            }
            loading_hide('.getStoreEvent', btnText);
        }
    });
});

$(document).on('click', '#LoginUrl', function () {
    var btnText = $('#LoginUrl').text();
    loading_show('#LoginUrl');
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: {
            method_name: "set_user_activity_data",
            store_name : $("#storeName").val(),
            user_id : $("#LoginUserId").val(),
            action : 'User login into store',
        }, success: function (response) {
            if (response['result'] == 'success') {
                __loadApiListData("userActivityListing",'1');
                window.open(response['url'], '_blank');
            } else if (response['result'] == 'fail') {
                flashNotice(response['msg'],'error');
            }
            loading_hide('#LoginUrl', btnText);
        }
    });
});

function intalizeEvent(){
    $('.freeTrialDatePic').datepicker({
        dateFormat: 'yy-mm-dd',
        defaultViewDate: "2020-01-01",
        endDate: new Date(),
        startView: 2,
        autoclose: true,
        multidate: false,
        toggleActive: true,
    });
    $('.calander-icons').click(function() {
        $(".freeTrialDatePic").focus();
    });
}

/* IW0027 : reset search store */
$(document).on("click","#resetSearchStore",function(){
    $(".resetAnalyticBlog").addClass("is-display");
    $(".changeFreetrial").addClass("is-display");
    $(".refundBlock").addClass("is-display");
    $(".userActivityReport").addClass("is-display");
    $("#storeName").prop("disabled", false);
    $('.getStoreEvent').removeClass("get-btn-disabled");
    $("#resetSearchStore").addClass("get-btn-disabled");
    $('form :input').val('');
    $("#errorMsgBlock").fadeOut();
});

/* IW0027 added reset analytics calculation start */
$(document).on('click', '#btnResetAnalytics', function () {
    var hard_reset_val = $("#hardReset").is(":checked") ? '1' : '0';
    if(hard_reset_val == 1){
        $("#confirmHardReset").modal({backdrop: 'static', keyboard: false}, 'show').on('shown.bs.modal');
    }else{
        resetAnalyticsInfo('#btnResetAnalytics',0);
    }
});

$(document).on('click', '#confirmResetData', function () {
    resetAnalyticsInfo('#confirmResetData',1);
});

function resetAnalyticsInfo(btnId,hardResetVal){
    var userId = $("#resetUserId").val();
    var store_name = $("#storeName").val();
    var btnText = $(btnId).text();
    loading_show(btnId);
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: {method_name: "reset_analytics_calculation", user_id: userId, store_name:store_name, is_hard_reset:hardResetVal},
        success: function (response) {
            if(response['result'] == 'success') {
                $("#errorMsgBlock").hide();
                flashNotice(response['msg']);
                __loadApiListData("userActivityListing",'1');
                $("#store_name").val("");
                if(hardResetVal == 1){
                    $('#confirmHardReset').modal('hide');
//                    $('#resetSearchStore').trigger('click');
                }
            }else if (response['msg_content'] != undefined && response['msg_heading'] != undefined) {
                $("#errorBlockContent").html(response['msg_content']);
                $("#errorBlockHeading").html(response['msg_heading']);
                $("#errorMsgBlock").fadeIn();
                $("html, body").animate({scrollTop: 0}, "slow");
            } else if(response['result'] == 'fail') {
                $("#errorMsgBlock").hide();
                flashNotice(response['msg']);
            }
            loading_hide(btnId, btnText);
        },
        error: function () {
            alert('Sorry, Action not Process, Try again.');
        }
    });
}

/* Call klaviyo interface event */
$(document).on('click', '.saveStoreEvent', function () {
    var frmData = $(this).closest('form').serialize();
    var change_activity = "0";
    if(change_charge_order == "1"){
        change_activity = "1";
        var change_charge_val = $("#onlyDataBase").is(":checked") ? '1' : '0';
    }
    frmData += '&' + $.param({"method_name": 'change_free_trial',"need_to_save" : change_activity, "change_charge" : change_charge_val});
    var btnText = $('.saveStoreEvent').text();
    loading_show('.saveStoreEvent');
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: frmData,
        success: function (response) {
            if (response['result'] == 'success') {
                flashNotice(response['msg']);
//                $("#store_name").val("");
//                $("#store_credit").val("");
//                $("#store_discount").val("");
//                $("#free_trial_date").val("");
//                $("#store_name").attr('readonly',false);
                __loadApiListData("userActivityListing",'1');
            } else if (response['msg_content'] != undefined && response['msg_heading'] != undefined) {
                $("#errorBlockContent").html(response['msg_content']);
                $("#errorBlockHeading").html(response['msg_heading']);
                $("#errorMsgBlock").fadeIn();
                $("html, body").animate({scrollTop: 0}, "slow");
            }
            change_charge_order = "0";
            loading_hide('.saveStoreEvent', btnText);
        },
        error: function () {
            alert('Sorry, Action not Process, Try again.');
        }
    });
});

$(document).on('click', '#refundFrmBtnText', function () {
    var frmData = $(this).closest('form').serialize();
    frmData += '&' + $.param({"method_name": 'refund_to_store'});
    var btnText = $('#refundFrmBtnText').text();
    loading_show('#refundFrmBtnText');
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: frmData,
        success: function (response) {
            if (response['result'] == 'success') {
                flashNotice(response['msg']);
                $("#store_name").val("");
                $("#store_description").val("");
                $("#store_credit").val("");
                __loadApiListData("userActivityListing",'1');
            }else if (response['msg_content'] != undefined && response['msg_heading'] != undefined) {
                $("#errorBlockContent").html(response['msg_content']);
                $("#errorBlockHeading").html(response['msg_heading']);
                $("#errorMsgBlock").fadeIn();
                $("html, body").animate({scrollTop: 0}, "slow");
            }
            loading_hide('#refundFrmBtnText', btnText);
        },
        error: function () {
            alert('Sorry, Action not Process, Try again.');
        }
    });
});
/* For change user block or unblock status */
$(document).on("click", '.block_or_unblock', function (e) {
    var user_id = $(this).attr('data-id');
    var user_status = $(this).attr('data-status');
    var thisObj = $(this);
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: {method_name: 'block_or_unblock_user',user_status: user_status, user_id: user_id},
        async: false,
        success: function (response) {
            if (response['code'] != undefined && response['code'] == '403') {
                setCookie('flash_msg', response['msg'], 2);
                redirect403();
            } else {
                if(user_status == 0){
                    thisObj.closest('.icon_block').find('.blockUserBlock').hide();
                    thisObj.closest('.icon_block').find('.unblockUserBlock').show();
                }else{
                    thisObj.closest('.icon_block').find('.unblockUserBlock').hide();
                    thisObj.closest('.icon_block').find('.blockUserBlock').show();
                }
                flashNotice(response['msg']);
            }
        },
    });
});
/* IW0030- admin panel code end */


function deleteFromTable(thisObj, tableName, primaryKeyId, pageno, tableId, whatDelete) {
    var showLoader = $(thisObj).data("showLoader");

    var what_delete = (whatDelete == undefined) ? 'Survey' : whatDelete;
    var deleteAjax = function deleteAjax() {
        $.ajax({
            url: "ajax_response.php",
            type: "post",
            dataType: "json",
            data: {method_name: "delete_from_table", table_name: tableName, primary_key_id: primaryKeyId},
            success: function (response) {
                if (response['result'] == 'success') {

                    if (pageno == undefined || pageno <= 0 || response['total_record'] <= 0) {
                        setCookie('flash_msg', response['msg'], 2);
                        window.top.location = window.location.href;
                    } else if (pageno > 0) {
                        flashNotice(response['msg']);
                        __loadApiListData(tableId, pageno)
                    }

                    /* update total shipping method */
                    if (response['total_method'] != undefined) {
                        $('#totalShippingMethod').html(response['total_method']);
                    }
                } else {
                    window.location = 'index.php?shop=' + shop;
                    setCookie('flash_msg', response['msg'], 2);
                }
            }
        });
    }
//    setTimeout(function () {
    var r = confirm(String.format(_E_sfCommonDeleteConfMsg, what_delete));
    if (r == true) {
        if (typeof showLoader != 'undefined' && showLoader == 1) {
            $(thisObj).html('<span class="Polaris-Icon"><span class="Polaris-Button__Spinner"><svg viewBox="0 0 20 20" class="Polaris-Spinner Polaris-Spinner--colorInkLightest Polaris-Spinner--sizeSmall" aria-label="Loading" role="status"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"></path></svg></span><span></span></span>').prop("disabled", true);
        }
        deleteAjax();
    }
//    }, 500);
}

/* SOME COMMON JS FUNCTION */
/* helps to string format (Mostly used in multi language) */
if (!String.format) {
    String.format = function (format) {
        var args = Array.prototype.slice.call(arguments, 1);
        return format.replace(/{(\d+)}/g, function (match, number) {
            return typeof args[number] != 'undefined'
                ? args[number]
                : match
                ;
        });
    };
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var secure = mode == 'local' ? '' : ' Secure';
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=None;" + secure;
}

function changeTableStatus(tableName, primaryKeyId, status, thisObj) {
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: {method_name: "change_table_status", table_name: tableName, primary_key_id: primaryKeyId, status: status},
        success: function (response) {
            if (response['result'] == 'success') {
                /* display flash message */
                flashNotice(response['msg']);
                $(thisObj).attr('onclick', response['onclickfn']).find('.Polaris-custom-icon.Polaris-Icon').html(response['svg_icon']).parent('span').attr('data-hover', response['data_hover']);
            } else {
                flashNotice(response['msg']);
            }
        },
        error: function () {
            //alert('Sorry, Action not Process, Try again.');
        }
    });
}

/* add premade template js function ajax (save_premade_template) */
$(document).on("click", "#premadetemplateFrmBtn", function (e) {
    e.preventDefault();
    var frmData = $(this).closest('form');
    var fd = new FormData(frmData[0]);
    var btnText = $('#premadetemplateFrmBtn').text();
    loading_show('#premadetemplateFrmBtn');
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        data: fd,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            if (response['code'] != undefined && response['code'] == '403') {
                redirect403();
            } else if (response['result'] == 'success') {
                $("#errorMsgBlock").hide();
                setCookie('flash_msg', response['msg'], 2);
                window.open(response['url'], '_top');
            } else if (response['msg_content'] != undefined && response['msg_heading'] != undefined) {
                $("#errorBlockContent").html(response['msg_content']);
                $("#errorBlockHeading").html(response['msg_heading']);
                $("#errorMsgBlock").show();
                $("html, body").animate({scrollTop: 0}, "slow");
            } else {
                flashNotice(response['msg']);
            }
            loading_hide('#premadetemplateFrmBtn', btnText);
        }
    });
});
$(document).on('change',"#desktop_thumbnail", function () {
    var $this = $(this);
    var ext = $this[0].files[0].name.substring($this[0].files[0].name.lastIndexOf('.') + 1);
    if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif" || ext == "bmp") {
        if (typeof (FileReader) != "undefined") {

            var image_holder = $("#desktop_thumbnail_img");

            var reader = new FileReader();
            reader.onload = function (e) {
                image_holder.attr('src', e.target.result);
            }
            reader.readAsDataURL($(this)[0].files[0]);
        } else {
            flashNotice(_E_browserNotSupportFileReader, 'error');
        }
    } else {
        flashNotice(_E_imageFormatErr, 'error');
    }
});

$(document).on('change', "#mobile_thumbnail",function () {
    var $this = $(this);
    var ext = $this[0].files[0].name.substring($this[0].files[0].name.lastIndexOf('.') + 1);
    if (ext == "jpg" || ext == "png" || ext == "jpeg" || ext == "gif" || ext == "bmp") {
        if (typeof (FileReader) != "undefined") {
            var image_holder = $("#mobile_thumbnail_img");
            var reader = new FileReader();
            reader.onload = function (e) {
                image_holder.attr('src', e.target.result);
            }
            reader.readAsDataURL($(this)[0].files[0]);
        } else {
            flashNotice(_E_browserNotSupportFileReader, 'error');
        }
    } else {
        flashNotice(_E_imageFormatErr, 'error');
    }
});

function createNewUser(thisObj){
    event.preventDefault();
    var frmObj = $(thisObj);
    var frmData = frmObj.serialize();
    frmData += '&' + $.param({"method_name": 'create_new_user'});
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        data: frmData,
//        contentType: false,
//        processData: false,
        dataType: "json",
        success: function (response) {
            console.log(response);
            if(response['result']=='success'){
                flashNotice(response['msg']);
                __loadApiListData("blockUnblockUserListing");
                $('#userCreateModel').modal('hide');
            }else if (response['msg_content'] != undefined && response['msg_heading'] != undefined) {
                $("#errorBlockContent").html(response['msg_content']);
                $("#errorBlockHeading").html(response['msg_heading']);
                $("#errorMsgBlock").show();
                $("html, body").animate({scrollTop: 0}, "slow");
            } else {
                flashNotice(response['msg']);
            }
        }
    });
}

$(document).on("click","#popupModalBtn",function(){
    $("#errorMsgBlock").hide();
    $("#createNewUsers").find("input").val('').end();
});
/* IW0039:: Admin banner start */
function nestable() {
    $('#nestable').nestable({
        group: 1,
        maxDepth: 1
    });
}
$(document).on("click", ".addNewBannerMenu", function (e) {
    $(".new_loading_show").html('<span class="Polaris-Button__Content"><span class="Polaris-Button__Spinner"><svg viewBox="0 0 20 20" class="Polaris-Spinner Polaris-Spinner--colorInkLightest Polaris-Spinner--sizeSmall" aria-label="Loading" role="status"><path d="M7.229 1.173a9.25 9.25 0 1 0 11.655 11.412 1.25 1.25 0 1 0-2.4-.698 6.75 6.75 0 1 1-8.506-8.329 1.25 1.25 0 1 0-.75-2.385z"></path></svg></span><span>Loading</span></span>').fadeIn('fast').addClass('Polaris-Button--loading').attr('disabled', 'disabled');
    $.get("banner_template.html",function (response) {
        var number = 0;
        if($("#itemForMainMenu").find('li').length != 0) {
            number = $("#itemForMainMenu").find('li:last').find('.menu_position').val();
        }
        var d = new Date();
        response = response.replace(new RegExp('AB:ORDER_NUMBER', 'g'), ++number + '.');
        response = response.replace(new RegExp('AB:BANNER_DATE', 'g'), d.getFullYear()+'-'+(("0" + (d.getMonth() + 1)).slice(-2))+'-'+("0" + (d.getDate())).slice(-2));
        $("#itemForMainMenu").append(response);
        $('.addMainMenu').last().find('.menu_position').val(number);
        $('#nestable').nestable('destroy');
        $('#nestable').nestable('reinit');
        $('span').find('.Polaris-Button__Spinner').parent().removeClass('Polaris-Button--loading').remove();
    });
});
$(document).on("click", ".toggleMenuItem", function (e) {
    $(this).closest('li').toggleClass("dd-collapsed");
});
$(document).on("click", ".bannerSummryTitle", function (e) {
    if(!$(this).closest('li').hasClass("dd-collapsed")){
        $(this).closest('li').removeClass("dd-collapsed");
    }else{
        $(this).closest('li').addClass("dd-collapsed");
    }
});
$(document).on("click", ".removeBanner", function (e) {
    var banner_id = $(this).closest('li').data('banner-id');
    if(banner_id == undefined) {
        $(this).closest("li").remove();
    } else {
        var thisObj = this;
        var deleteBanner = function deleteBannerFun() {
            $.ajax({
                url: "ajax_response.php",
                type: "post",
                dataType: "json",
                data: {method_name: 'remove_banner', banner_id: banner_id},
                success: function (response) {
                    if(response['result'] == 'success') {
                        $(thisObj).closest("li").remove();
                    }
                    flashNotice(response['msg']);
                }
            });
        }
        var r = confirm(String.format(_E_sfCommonDeleteConfMsg, 'banner'));
        if (r == true) {
            deleteBanner();
        }
    }
});
$(document).on("click", ".enableDisableBanner", function (e) {
    var banner_id = $(this).closest('li').data('banner-id');
    var status = $(this).data('status');
    if(banner_id == undefined) {
        if(status == 0) {
            $(this).data('status','1').html('<span class="Polaris-Button__Content tip" data-hover="Enable"><span class="Polaris-Icon"><svg class="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 0 0 2-2c0-.178-.03-.348-.074-.512l5.78-5.78a1 1 0 1 0-1.413-1.415l-2.61 2.61A7.757 7.757 0 0 0 10 4C4.388 4 2.163 9.4 2.07 9.628a1.017 1.017 0 0 0 0 .744c.055.133.836 2.01 2.583 3.56l-2.36 2.36a1 1 0 1 0 1.414 1.415l5.78-5.78c.165.042.335.073.513.073zm-4-2a4 4 0 0 1 4-4c.742 0 1.432.208 2.025.56l-1.513 1.514A2.004 2.004 0 0 0 10 8a2 2 0 0 0-2 2c0 .178.03.347.074.51L6.56 12.026A3.96 3.96 0 0 1 6 10zm10.144-3.144l-2.252 2.252c.065.288.107.585.107.893a4 4 0 0 1-4 4c-.308 0-.604-.04-.892-.107l-1.682 1.68a7.903 7.903 0 0 0 2.573.428c5.612 0 7.836-5.398 7.928-5.628a1.004 1.004 0 0 0 0-.743c-.044-.112-.596-1.438-1.784-2.774z" fill="#000" fill-rule="evenodd"></path></svg></span></span>');
        } else {
            $(this).data('status','0').html('<span class="Polaris-Button__Content tip" data-hover="Disable"><span class="Polaris-Icon"><svg class="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M17.928 9.628c-.092-.229-2.317-5.628-7.929-5.628s-7.837 5.399-7.929 5.628c-.094.239-.094.505 0 .744.092.229 2.317 5.628 7.929 5.628s7.837-5.399 7.929-5.628c.094-.239.094-.505 0-.744m-7.929 4.372c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.21 0 4 1.791 4 4s-1.79 4-4 4m0-6c-1.104 0-2 .896-2 2s.896 2 2 2c1.105 0 2-.896 2-2s-.895-2-2-2" fill="#000" fill-rule="evenodd"></path></svg></span></span>');
        }
    } else {
        var thisObj = this;
        $.ajax({
            url: "ajax_response.php",
            type: "post",
            dataType: "json",
            data: {method_name: 'enable_disable_banner', banner_id: banner_id, status: status},
            success: function (response) {
                if(response['result'] == 'success') {
                    if(status == 0) {
                        $(thisObj).data('status','1').html('<span class="Polaris-Button__Content tip" data-hover="Enable"><span class="Polaris-Icon"><svg class="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M10 12a2 2 0 0 0 2-2c0-.178-.03-.348-.074-.512l5.78-5.78a1 1 0 1 0-1.413-1.415l-2.61 2.61A7.757 7.757 0 0 0 10 4C4.388 4 2.163 9.4 2.07 9.628a1.017 1.017 0 0 0 0 .744c.055.133.836 2.01 2.583 3.56l-2.36 2.36a1 1 0 1 0 1.414 1.415l5.78-5.78c.165.042.335.073.513.073zm-4-2a4 4 0 0 1 4-4c.742 0 1.432.208 2.025.56l-1.513 1.514A2.004 2.004 0 0 0 10 8a2 2 0 0 0-2 2c0 .178.03.347.074.51L6.56 12.026A3.96 3.96 0 0 1 6 10zm10.144-3.144l-2.252 2.252c.065.288.107.585.107.893a4 4 0 0 1-4 4c-.308 0-.604-.04-.892-.107l-1.682 1.68a7.903 7.903 0 0 0 2.573.428c5.612 0 7.836-5.398 7.928-5.628a1.004 1.004 0 0 0 0-.743c-.044-.112-.596-1.438-1.784-2.774z" fill="#000" fill-rule="evenodd"></path></svg></span></span>');
                    } else {
                        $(thisObj).data('status','0').html('<span class="Polaris-Button__Content tip" data-hover="Disable"><span class="Polaris-Icon"><svg class="Polaris-Icon__Svg" viewBox="0 0 20 20"><path d="M17.928 9.628c-.092-.229-2.317-5.628-7.929-5.628s-7.837 5.399-7.929 5.628c-.094.239-.094.505 0 .744.092.229 2.317 5.628 7.929 5.628s7.837-5.399 7.929-5.628c.094-.239.094-.505 0-.744m-7.929 4.372c-2.209 0-4-1.791-4-4s1.791-4 4-4c2.21 0 4 1.791 4 4s-1.79 4-4 4m0-6c-1.104 0-2 .896-2 2s.896 2 2 2c1.105 0 2-.896 2-2s-.895-2-2-2" fill="#000" fill-rule="evenodd"></path></svg></span></span>');
                    }
                }
                flashNotice(response['msg']);
            }
        });
    }
});
$(document).on('click','.saveAdminBanner',function(){
    var position = ($(this).closest('li').index())+1;
    var status = $(this).closest('li').find('.enableDisableBanner').data('status');
    var frmObj = $(this).closest('form');
    var frmData = frmObj.serialize();
    var thisObj = $(this);
    frmData += '&' + $.param({"arrange_banner": position, "status": status});
    if($(this).closest('li').data('banner-id') != undefined) {
        frmData += '&' + $.param({"banner_id": $(this).closest('li').data('banner-id')});
    }
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: frmData,
        beforeSend: function () {
            loading_show(thisObj);
        },
        success: function (response) {
            if(response['result'] == 'success') {
                $("#errorMsgBlockAdminBanner").hide();
                thisObj.closest('li').find('.summary-title-wt').html(thisObj.closest('form').find('input[name="banner_name"]').val());
                if(thisObj.closest('li').data('banner-id') == undefined) {
                    thisObj.closest('li').data('banner-id',response['banner_id']);
                }
                thisObj.closest('li').addClass('dd-collapsed');
                flashNotice(response['msg']);
            }else if (response['msg_content'] != undefined && response['msg_heading'] != undefined) {
                $("#errorBlockContentAdminBanner").html(response['msg_content']);
                $("#errorBlockHeadingAdminBanner").html(response['msg_heading']);
                $("#errorMsgBlockAdminBanner").fadeIn();
                $("html, body").animate({scrollTop: 300}, "slow");
            } else {
                flashNotice(response['msg']);
            }
            loading_hide('.saveAdminBanner', _E_save);
        }
    });
});
function change_trigger_position(thisobj) {
    var old_index = thisobj.find('.menu_position').val();
    var current_index = (thisobj.index())+1;
    thisobj.attr('data-order',current_index);
    thisobj.find('.menu_position').val(current_index);
    thisobj.find('.order_number').html(current_index + '.');
    var currentObj = '';
    var position_arr = {};
    position_arr[thisobj.data('banner-id')] = (thisobj.index())+1;
    if(old_index > current_index) {
        currentObj = thisobj.next();
        for(var i=current_index; i<old_index; i++) {
            currentObj.attr('data-order',((currentObj.index())+1));
            currentObj.find('.menu_position').val((currentObj.index())+1);
            currentObj.find('.order_number').html((currentObj.index())+1 + '.');
            if(currentObj.data('banner-id') != undefined) {
                position_arr[currentObj.data('banner-id')] = (currentObj.index())+1;
            }
            currentObj = currentObj.next();
        }
    } else {
        currentObj = thisobj.prev();
        for(var j=current_index; j>old_index; j--) {
            currentObj.attr('data-order',((currentObj.index())+1));
            currentObj.find('.menu_position').val((currentObj.index())+1);
            currentObj.find('.order_number').html((currentObj.index())+1 + '.');
            if(currentObj.data('banner-id') != undefined) {
                position_arr[currentObj.data('banner-id')] = (currentObj.index())+1;
            }
            currentObj = currentObj.prev();
        }
    }
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: {method_name: 'change_banner_position',position_arr: position_arr}
    });
}
function displayBanners() {
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: {
            method_name: 'display_banners',
        },
        success: function (response) {
            if(response['result'] == 'success') {
                $('#itemForMainMenu').html(response['html']);
            }
        }
    });
}
$(document).on('click','.openStorePopup',function(){
    $("#store_list_modal").modal({backdrop: 'static', keyboard: false}, 'show');
    $('#popupBannerId').val($(this).data('id'));
    displayStoreInPopup();
});
$(document).on('click','.storelist_closemodal_btn',function(){
    $("#listModalDataSearchKeyword").val('');
});
function displayStoreInPopup(limit, pageNo) {
    var searchKeyword = $("#listModalDataSearchKeyword").val();
    var searchKeywordLen = (searchKeyword != undefined) ? searchKeyword.length : 0;
    if (searchKeywordLen == 0 || searchKeywordLen >= 3) {
        var pageno = (pageNo != undefined || pageNo == '') ? pageNo : 1;
        var banner_id = $('#popupBannerId').val();
        $.ajax({
            url: "ajax_response.php",
            type: "post",
            dataType: "json",
            data: {method_name: 'display_store_in_popup',banner_id: banner_id, pageno: pageno, search_keyword:searchKeyword},
            beforeSend: function () {
                var totalTH = $('#listModalData thead tr th').length;
                table_loader("table#listModalData tbody", totalTH);
            },
            success: function (response) {
                if(response['result'] == 'success') {
                    $('#listModalDataPagination').html(response['pagination_html']);
                    $('table#listModalData tbody').html(response['html']);
                }
            }
        });
    }
}

/* iw0030- when change banner rules so hide/show textbox */
$(document).on("click", '.banner_rules', function (e) {
    $(this).closest('.addMainMenu').find('.x_impression_mer').hide();
    if($(this).val() == '1'){
        $(this).closest('.addMainMenu').find('.x_impression_mer').show();
    }
    var banner_position = $(this).children("option:selected").attr('data-text');
    $(this).closest('.addMainMenu').find('.banner_rules_text').text(banner_position);
});

/* When change banner name so also change text in table */
$(document).on("change", ".banner_name_block", function (e) {
    var banner_name = $(this).val();
    $(this).closest('.addMainMenu').find('.banner_name_text').text(banner_name);
});

/* When change banner possition so also change possition text in table */
$(document).on("change", ".banner_position_block", function (e) {
    var banner_position = $(this).children("option:selected").attr('data-text');
    $(this).closest('.addMainMenu').find('.banner_position_text').text(banner_position);
});

/* When change banner rules so also change possition text in table */
$(document).on("change", ".banner_position_block", function (e) {
    var banner_position = $(this).children("option:selected").attr('data-text');
    $(this).closest('.addMainMenu').find('.banner_position_text').text(banner_position);
});
$(function () {
    if ($("#dateRangeSpanTempImp").length != 0) {

        var start = moment().subtract(10, 'days');
        var end = moment();

        function cb(startDate, endDate, label) {
            /* callback function */
            $('input[name="daterangeTempImp"]').val(startDate.format('YYYY-MM-DD') + ' To ' + endDate.format('YYYY-MM-DD'));

            if (label == 'Custom Range') {
                $('#dateRangeSpanTempImp').text(startDate.format('YYYY-MM-DD') + ' - ' + endDate.format('YYYY-MM-DD'));
            } else {
                $('#dateRangeSpanTempImp').text(label);
            }

            $('.ranges ul li').eq(0).text(_E_today);
            $('.ranges ul li').eq(1).text(_E_yesterday);
            $('.ranges ul li').eq(2).text(_E_last7Days);
            $('.ranges ul li').eq(3).text(_E_last10Days);
            $('.ranges ul li').eq(4).text(_E_last30Days);
            $('.ranges ul li').eq(5).text(_E_thisMonth);
            $('.ranges ul li').eq(6).text(_E_lastMonth);
        }

        $('input[name="daterangeTempImp"]').val();
        $('.report-daterangepickerTempImp').daterangepicker({
            ranges: {
                'Today': [moment(), moment()],
                'Yesterday': [moment().subtract(1, 'days'), moment().subtract(1, 'days')],
                'Last 7 Days': [moment().subtract(6, 'days'), moment()],
                'Last 10 Days': [moment().subtract(10, 'days'), moment()],
                'Last 30 Days': [moment().subtract(29, 'days'), moment()],
                'This Month': [moment().startOf('month'), moment().endOf('month')],
                'Last Month': [moment().subtract(1, 'month').startOf('month'), moment().subtract(1, 'month').endOf('month')]
            },
            locale: {
                "applyLabel": _E_apply,
                "cancelLabel": _E_cancel,
                "fromLabel": _E_from,
                "toLabel": _E_to,
                "customRangeLabel": _E_custom,
                "daysOfWeek": [
                    _E_cal_su,
                    _E_cal_mo,
                    _E_cal_tu,
                    _E_cal_we,
                    _E_cal_th,
                    _E_cal_fr,
                    _E_cal_sa
                ],
                "monthNames": [
                    _E_january,
                    _E_february,
                    _E_march,
                    _E_april,
                    _E_may,
                    _E_june,
                    _E_july,
                    _E_august,
                    _E_september,
                    _E_october,
                    _E_november,
                    _E_december
                ]},
            "alwaysShowCalendars": true,
            "startDate": start,
            "endDate": end,
            "maxDate": new Date(),
            "opens": "right"
        }, cb);
        cb(start, end, _E_last10Days);
    }
});

/* IW0030 - display sales report billing informaion */
function orderBillingGraph() {
    graph_loader('#orderBillingChart');
    var daterange = $("#daterange").val();
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        dataType: "json",
        data: {method_name: "order_billing_graph", daterange: daterange},
        success: function (response) {
            if (response['result'] == 'success') {
                /* Making order billing charts */
                orderBillingChart(response);
            }
        }
    });
}
/* Making order billing charts */
function orderBillingChart(response) {
    var originalData = response['original_data'],
        compareData = response['compare_data'];

    /*Dynamic formatter */
    var intervalHour = response['interval_hour'];
    var xAxisLabelsFormate = response['xAxis_labels_formate'];
    var tooltipLabelsFormate = response['tooltip_labels_formate'];

    Highcharts.chart('orderBillingChart', {
        chart: {
            marginTop: 25
        },
        title: {
            text: '',
        },
        subtitle: {
            text: '',
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        xAxis: {
            type: 'datetime',
            tickInterval: 3600 * 1000 * intervalHour,
            gridLineDashStyle: 'longdash',
            gridLineWidth: 1,
            labels: {
                formatter: function () {
                    return Highcharts.dateFormat(xAxisLabelsFormate, this.value);
                },
                style: {
                    color: '#89A54E'
                },
            },
            offset: 0,
        },
        tooltip: {
            shared: true,
            headerFormat: '<b>{point.key:' + tooltipLabelsFormate + '}</b><br/><br/>',
            pointFormatter: function () {
                return '<span style="color:' + this.color + '">\u25CF</span>' + ' <b> ' + this.series.name + ' : </b> ' + this.y + '<br/><hr/>';
            },
        },
        credits: {
            enabled: false
        },
        plotOptions: {
            series: {
                colors: ['#9c6ade', '#c4cdd5'],
                connectNulls: true,
            }
        },
        series: [{
            type: 'line',
            name: 'Total stores ',
            data: originalData,
            connectEnds: true,
        },
            {
                type: 'line',
                name: 'Total billing',
                data: compareData,
                connectEnds: true,
            }],
        responsive: {
            rules: [{
                condition: {
                    maxWidth: 500
                },
                chartOptions: {
                    legend: {
                        layout: 'horizontal',
                        align: 'center',
                        verticalAlign: 'bottom'
                    }
                }
            }]
        }

    });
}
/* Create premade funnel start*/
$(document).on("click", "#premadeFunnelFrmBtn", function (e) {
    e.preventDefault();
    var frmData = $(this).closest('form');
    var fd = new FormData(frmData[0]);
    var btnText = $('#premadeFunnelFrmBtn').text();
    loading_show('#premadeFunnelFrmBtn');
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        data: fd,
        contentType: false,
        processData: false,
        dataType: "json",
        success: function (response) {
            if (response['code'] != undefined && response['code'] == '403') {
                redirect403();
            } else if (response['result'] == 'success') {
                $("#errorMsgBlock").hide();
                setCookie('flash_msg', response['msg'], 2);
                window.open(response['url'], '_top');
            } else if (response['msg_content'] != undefined && response['msg_heading'] != undefined) {
                $("#errorBlockContent").html(response['msg_content']);
                $("#errorBlockHeading").html(response['msg_heading']);
                $("#errorMsgBlock").show();
                $("html, body").animate({scrollTop: 0}, "slow");
            } else {
                flashNotice(response['msg']);
            }
            loading_hide('#premadeFunnelFrmBtn', btnText);
        }
    });
});
/* Create premade funnel end*/
/* IW0039: Theme listing start */
function themeListingData() {
    var status = $("#themeType").val();
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        data: {
            method_name: "theme_listing_data",
            status: status,
        },
        dataType: "json",
        success: function (response) {
            if (response['result'] == 'success') {
                $('table#themeListing tbody').html(response['html']);
            }
        }
    });
}
$(document).on("click", ".changeThemeStatus", function (e) {
    var id = $(this).attr('data-id');
    var status = ($(this).prop('checked') == true) ? '1' : '0';
    var thisObj = $(this);
    $.ajax({
        url: "ajax_response.php",
        type: "post",
        data: {
            method_name: "change_theme_status",
            status: status,
            id: id
        },
        dataType: "json",
        success: function (response) {
            if (response['result'] == 'success') {
                if($("#themeType").val() == '0'  || $("#themeType").val() == '1') {
                    setTimeout(function () {
                        thisObj.closest('tr').remove();
                    }, 2000);
                }
            }
            flashNotice(response['message']);
        }
    });
});
/* IW0039: Theme listing end */
