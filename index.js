function autoTest() {
    var words = ['Web Developer', 'Web Designer'];
    var i = 0;
    var j = 0;
    var isDeleting = false;
    var t = setInterval(function() {
    var currentWord = words[i];
    var text = $('#text').html();
    var newText;
    if (!isDeleting) {
        newText = currentWord.substring(0, j + 1);
        $('#text').html(newText);
        j++;
        if (newText === currentWord) {
        isDeleting = true;
        setTimeout(function() {
            j--;
        }, 1000);
        }
    } else {
        newText = currentWord.substring(0, j - 1);
        $('#text').html(newText);
        j--;
        if (j === 0) {
        isDeleting = false;
        i++;
        if (i >= words.length) {
            i = 0;
        }
        }
    }
    }, 100);
}