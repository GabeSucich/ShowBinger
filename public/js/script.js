

$("#add-btn").on("click", function (event) {
    event.preventDefault()
    var title = $("#title").val().trim()
    var seasons = parseInt($("#seasons").val().trim())
    var episodes = parseInt($("#episodes").val().trim())
    var minutes = parseInt($("#minutes").val().trim())
    var platform = $("#platform").val().trim().toLowerCase()
    var runtime = Math.floor(seasons * episodes * minutes / 60)

    if (!title || !seasons || !episodes || !minutes || !platform) {
        alert("Make sure to fill out all of the information for your next show!")
    }

    else {
        $.ajax({
            method: "POST", url: "/api/shows/new", data: {
                title: title,
                seasons: seasons,
                episodes: episodes,
                minutes: minutes,
                runtime: runtime,
                platform: platform
            }
        }).then(function () {
            location.reload()
        })
    }
})

$(document).on("click", ".binged", function () {
    var id = $(this).parent().parent().attr('id')
    $.ajax({ method: 'PUT', url: "/api/shows/" + id }).then(function (res) {
        location.reload()
    })
})

$(document).on("click", ".remove", function () {
    var id = $(this).parent().parent().attr('id')
    $.ajax({ method: "DELETE", url: "/api/shows/" + id }).then(res => {
        location.reload()
    })
})

//HandleBars Helpers