var config = {
    map: {
        '*': {
            owlcrousel: 'js/owl.carousel.min',
            bootstrap: 'js/bootstrap.min',
            magnificpop: 'js/jquery.magnific-popup.min',
            niceselect: 'js/jquery.nice-select.min',
            popper: 'js/popper.min',
            
        }
    },
    
    "shim": {        
        owlcrousel: {
            deps: ['jquery']
        },
        bootstrap: {
            deps: ['jquery']
        },
        magnificpop: {
            deps: ['jquery']
        },
        niceselect: {
            deps: ['jquery']
        },
        popper: {
            deps: ['jquery']
        }         

     }
 };