function print_object(obj) {
    var res = '<ul>';
    for (var i in obj)
        res += '<li><b>' + i + '</b>:' + obj[i] + '</li>';
    res += '</ul>';
    document.write(res);
}

print_object(document.querySelector('#rect'));