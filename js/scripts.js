
document.addEventListener('DOMContentLoaded', function() {
    var questions = document.getElementsByClassName('question');

    for (var i = 0; i < questions.length; i++) {
        var arrow = questions[i].getElementsByClassName('arrow')[0];

        arrow.addEventListener('click', function() {
            var answer = this.parentElement.parentElement.getElementsByClassName('reponse')[0];
            if (answer.style.display === 'none') {
                answer.style.display = 'block';
                this.innerHTML = '&#x25B2;';
            } else {
                answer.style.display = 'none';
                this.innerHTML = '&#x25BC;';
            }
        });
    }
});