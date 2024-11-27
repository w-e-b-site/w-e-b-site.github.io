$(function () {
    $(".books li").on("click", function () {
        let go_page;
        switch (parseInt($(this).find("span").text())) {
            case 1:
                go_page = "/sutra/diamond/";
                break;
            case 2:
                go_page = "/sutra/heart/";
                break;
            case 3:
                go_page = "/sutra/amita/";
                break;
            case 4:
                go_page = "/sutra/UniversalGate/";
                break;
            default:
                alert("불경이 없습니다.");
        }
        location.href = go_page;
    });
    $(".books li").on("mouseenter", function () {
        $(".descript").text($(this).find("p").text());
        $(".descript").show();
    });
    $(".books li").on("mouseleave", function () {
        $(".descript").hide();
    });
});
