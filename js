// Animation de la Bento Grid
gsap.from(".bento-item", {
    scrollTrigger: {
        trigger: ".grid",
        start: "top 80%",
        toggleActions: "play none none reverse"
    },
    y: 100,
    opacity: 0,
    duration: 1,
    stagger: 0.15, // Effet de cascade entre les produits
    ease: "power4.out"
});
