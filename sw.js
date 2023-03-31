self.addEventListener("pash", (e) => {
    const config = {
        body: "mesaj içeriği",
        data: {
            dateOfArrival: Date.now(),
            primaryKey: "1"
        }
    }
    e.waitUntil(self.registration.showNotification("Yeni makale eklendi", config));
})