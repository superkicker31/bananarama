window.onload = function () {

    const dynastyEpisodes = [
        "9510565",
    ];

    const dynastyContainer = document.getElementById('dynasty-pod-container');
    dynastyEpisodes.forEach(function (episode) {
        var div = document.createElement('div');
        div.innerHTML = "<iframe src='https://podomatic.com/embed/html5/episode/" + episode + "?autoplay=false' height='120' width='100%'frameborder='0' marginheight='0' marginwidth='0' scrolling='no' allowfullscreen>";
        dynastyContainer.append(div);
    });
};