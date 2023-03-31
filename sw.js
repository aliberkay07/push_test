self.addEventListener("push", (e) => {
    console.log("e : =>", e.data)
    const config = {
        body: e.data.text() || "yeni mesaj",
        data: {
            dateOfArrival: Date.now(),
            primaryKey: "1"
        }
    }
    e.waitUntil(self.registration.showNotification("Yeni makale eklendi", config));
})