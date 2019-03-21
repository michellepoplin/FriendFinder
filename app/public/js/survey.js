function filledForm() {
    let filledIn = true;
    $('.control-form').each(function () {
        if ($(this).val() === '') {
            filledIn = false;
        }
    });
    $('custom-select').each(function () {
        if ($(this).val() === '') {
            filledIn = false;
        }
    });
    return filledIn;
}

function getFormData() {
    return {
        name: $('#name').val(),
        photo: $('#imageLink').val(),
        scores: [
            $('#question1').val(),
            $('#question2').val(),
            $('#question3').val(),
            $('#question4').val(),
            $('#question5').val(),
            $('#question6').val(),
            $('#question7').val(),
            $('#question8').val(),
            $('#question9').val(),
            $('#question10').val(),
        ].map(Number),
    };
}

function postFormData(formData) {
    $.post('/api/friends', formData, response => {
        showFriendModal(response);
    });
}

function showFriendModal(response) {
    $('#friendName').text(response.name);
    $('#friendImg').attr('src', response.photo);
    $('#results-modal').modal('toggle');
}

$('#submit').on('click', event => {
    event.preventDefault();
    if (!filledForm()) {
        alert('Looks like you missed something, please complete all fields.');
    } else {
        postFormData(getFormData());
    }
});
