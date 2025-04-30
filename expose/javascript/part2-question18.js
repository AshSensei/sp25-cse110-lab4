setInterval(() => {
    let d = new Date();
    let time = d.toLocaleDateString();
    console.log(time + ' time:' + d.getHours() + ' hours, ' + d.getMinutes() + ' minutes, ' + d.getSeconds() + ' seconds');
}, 1000)