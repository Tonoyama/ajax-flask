function getdata() {
    $.ajax({
        type: 'POST',
        url: '/data',
        data: '',
        contentType: 'application/json'
    })
      .done((data) => {
        // データ取得成功
        console.log("success");
        // JSONからデータ抽出
        var data = JSON.parse(data.Result);
        const value = data.value

        $(".title").html("推定人数：" + value);

        if (value > 50) {
            $(".images").attr("src", "../static/images/crowded.png");
        } else {
            $(".images").attr("src", "../static/images/empty.png");
        }

    })
    .fail( (data) => {
        console.log("error");
    });
}