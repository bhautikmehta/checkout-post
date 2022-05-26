//top header dropdown
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("cppu-show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.cppu-display-view-btn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('cppu-show')) {
                openDropdown.classList.remove('cppu-show');
            }
        }
    }
}

//modal open
function popUpwidget() {
    var x = document.getElementById("cppuPopup");
    if (x.style.display === "none") {
        x.style.display = "block";
    } else {
        x.style.display = "none";
    }
}
//modal outer click call
$(document).on('click', function (e) {
    var x = document.getElementById("cppuPopup");
    if (x.style.display === "block" && e.target.id !== "cppuaddBtn") {
        popUpwidget();
    }
});

//sidebar menu open and close
function toggleSidebar(ref){
    document.getElementById("left-panel-sidebar").classList.add('active');
}

$('#closeMenubar').on('click', function(){
    $('.cppu-sidenav').removeClass('active');
});

