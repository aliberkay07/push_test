window.addEventListener('load', async () =>{
    const aboneol = document.querySelector('#aboneol')

    const sw = await navigator.serviceWorker.register("./sw.js");
    console.log("serbice worker =>", sw);
    aboneol.addEventListener('click', async () => {
        
        const serviceWorker = await navigator.serviceWorker.ready;
        const cliendID = await serviceWorker.pushManager.subscribe({
            userVisibleOnly: true,
            applicationServerKey: "BAJofqCfr_ztf2ZXJYa7rz1XEjEirEKgP1dJ9Mln5PslYR-eJhnTLALWYaZyHrTMxTiYr7uakXQvZ-WxOr40Q2M",

        });

        console.log(cliendID);
        console.log(JSON.stringify(cliendID));


    })


})