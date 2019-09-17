const githubhook = require('githubhook');
const fetch = require('node-fetch')
const github = githubhook({
    host: '0.0.0.0',
    port: 5000,
    path: '/githubhook',
    secret: 'balinux',
    logger: console
})

github.listen();

github.on('tesdeploy:refs/head/master', function (data) {
    console.log('triggered event')
    // tambah perintah gitpull

})

github.on('*', function (event, repo, ref, data) {
    // console.log('data:', data.commits[0].message)
    const dataArray = data.commits;
    dataArray.forEach(element => {

        fetch("https://api.telegram.org/bot<TOKEN>/sendMessage", {
            body: `chat_id=<ID TELEGRAM>&text=pak le sedang melakukan autodeploy github ${event}\n- *repository :* ${repo}\n- *commit message :* ${element.message}\n- *url commit :* ${element.url}&parse_mode=Markdown`,
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            method: "POST"
        })
    });

});
