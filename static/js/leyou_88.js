$(function () {

    $('img').each(function () {
        // console.log(1)

        var img_path = $(this).attr('src')
        // console.log(img_path)


        img_path = "{% static '" + 'img/'+img_path + "' %}"

        // console.log(img_path)

        $(this).attr('src',img_path)


    })
    console.log($('body').html())
})