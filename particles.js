tsParticles
    .load({
        id: "tsparticles",
        url: "js/particles.json",
    })
    .then(container => {
        console.log("callback - tsparticles config loaded");
        console.log(container)
    })
    .catch(error => {
        console.error(error);
    });