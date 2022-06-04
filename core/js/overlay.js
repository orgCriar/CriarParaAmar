

        let open = document.querySelector('.active');
        let close = document.querySelector('.exit');
        let menu_none = document.querySelector('.overlay_none_menu')
        let tl = gsap.timeline();

        tl.to('.overlay', {opacity: 1, x:0, scale:1, pointerEvents: 'auto', duration: .3})
        tl.to('.stagger', {x: 0, opacity: 1, stagger: .2}, "-=.3")
        tl.pause();

        open.addEventListener('click', () => {
            menu_none.style.display = 'none';
        });

        open.addEventListener('click', () => {
            tl.play();
        });

        close.addEventListener('click', () => {
            tl.reverse();
            menu_none.style.display = 'flex';
        });

    