

$("#add-btn").on("click", function(event) {
    event.preventDefault()
    var title = $("#title").val().trim()
    var seasons = parseInt($("#seasons").val().trim())
    var episodes = parseInt($("#episodes").val().trim())
    var minutes = parseInt($("#minutes").val().trim())
    var runtime = Math.floor(seasons*episodes*minutes/60)

    $.ajax({method: "POST", url:"/api/shows/new", data: {
        title:title,
        seasons:seasons,
        episodes: episodes,
        minutes:minutes,
        runtime: runtime
    }}).then(function() {
        location.reload()
    })
})

$(document).on("click", ".binged", function() {
    var id = $(this).parent().attr('id')
    $.ajax({method: 'PUT', url:"/api/shows/" + id}).then(function(res) {
        location.reload()
    })
})

$(document).on("click", ".remove", function() {
    var id = $(this).parent().attr('id')
    $.ajax({method: "DELETE", url: "/api/shows/" + id}).then(res => {
        location.reload()
    })
})