
$(function() {
    let puvodniPath = $('path').css('fill');

    $('path').on('click', function () {
        $('path').removeClass('aktivniPath');
        $(this).addClass('aktivniPath');
    });
    $('path').on('mouseover', function() {
        $('path').css('fill', puvodniPath);
        $(this).css('fill', '#555');
    });
    $('path').on('mouseleave', function() {
        $(this).css('fill', puvodniPath);
    });
    

    let puvodniRect = $('rect').css('fill');
    
    $('rect').on('click', function () {
        $('rect').css('fill', puvodniRect);
        $(this).css('fill', 'red');
    });
})