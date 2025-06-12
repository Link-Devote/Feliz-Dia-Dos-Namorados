const dates = ["2022-05-02", "2022-10-09", "2022-11-01", "2006-12-06"]

function convertDays(d) {
    const today = new Date()
    today.setHours(0, 0, 0, 0)

    const date = new Date(d)
    date.setHours(0, 0, 0, 0)

    const dif = Math.floor((today - date) / (1000 * 60 * 60 * 24))

    return dif
}


function constructDate(id) {
    const day = [convertDays(dates[0]), convertDays(dates[1]), convertDays(dates[2]), convertDays(dates[3])]

    let strDay = String(day[id]).slice(0, 6).padStart(6, '0')

    const container = document.getElementById(id)

    for (let i = 0; i < strDay.length; i++) {
        const span = document.createElement("span")
        span.textContent = strDay[i]
        container.appendChild(span)

        if (i < strDay.length - 1) {
            const hr = document.createElement("hr")
            container.appendChild(hr)
        }
    }
}

for (let d = 0; d <= 3; d++) {
    constructDate(d)
}