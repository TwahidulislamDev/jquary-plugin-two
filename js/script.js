// Venobox code Start 
new VenoBox({
    selector: '.my-image-links',
    numeration: true,
    infinigall: true,
    share: true,
    spinner: 'rotating-plane'
});
// Venobox code End

new VenoBox({
    selector: '.my-video-links',
});

// Mexitup part start 
var containerEl = document.querySelector('.filterMixitUp');

var mixer = mixitup(containerEl, {
    multifilter: {
        enable: true
    },
    animation: {
        effects: 'fade translateZ(-100px)'
    }
});
// Mexitup part End 