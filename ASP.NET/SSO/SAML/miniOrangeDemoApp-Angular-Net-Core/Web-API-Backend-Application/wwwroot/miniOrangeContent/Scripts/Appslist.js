function service_provider_setting_on_option_active(app, spentityid) {
    var selected_action = document.getElementById("spaction_selected_" + app).value;
    var base_url = document.getElementById("base_url_input_field").value;

    switch (selected_action) {
        case "1":
                window.location.href = base_url + "?ssoaction=config&option=download&appid=" + app;;
            break;
        case "2":
                window.open(base_url + "?ssoaction=metadata&appid=" + app;, "_blank");
            break;
        case "3":
            var popup = document.getElementById("spentitychangemodal")
            popup.style.display = "block";
            var newappid = document.getElementById("newappid");
            newappid.value = app;
            var newspentityid = document.getElementById("newspentityid");
            newspentityid.value = spentityid;
            break;
        default:
            window.location.href = window.location.href;
    }
}