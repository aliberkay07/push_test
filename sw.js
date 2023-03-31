self.addEventListener("push", (e) => {
    console.log("e : =>", e.data)
    const config = {
        body: e.data.text() || "yeni mesaj",
        data: {
            dateOfArrival: Date.now(),
            primaryKey: "1"
        },
        icon: "images/main_logo.png",
        vibrate: [100,50,100]
    }
    e.waitUntil(self.registration.showNotification("Yeni makale eklendi", config));
})