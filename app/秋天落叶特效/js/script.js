/*  Autumn Greeting Card -- js */

(function($) {
  'use strict';

  // declare actors here
  var
    body = $('body'),
    backFallingLeaves = $('#brownLeaf, #orangeLeaf, #redLeaf'),
    textLine1 = $('.text-line-1'),
    textLine2 = $('.text-line-2'),
    textGreeting = $('.text-greeting'),
    treeLeaves = $('[id^=treeleaf]'),
    floorLeaves = $('[id^=floorleaf]'),
    bird = $('#Bird'),
    birdHat = bird.find('#BirdHat'),
    birdEyes = bird.find('#leftEye, #rightEye'),
    nest = $('#NestAndLeaves'),
    tree = $('#tree_trunk'),
    cardContainer = $('.card.container');

  // clear stage
  function clearStage() {
    var clearTl = new TimelineMax();

    clearTl
      .set(backFallingLeaves, {
        autoAlpha: 0
      })
      .set(textLine1, {
        autoAlpha: 0
      })
      .set(textLine2, {
        autoAlpha: 0
      })
      .set(textGreeting, {
        autoAlpha: 0
      })
      .set(bird, {
        y: '+=65',
        autoAlpha: 0
      })
      .set(nest, {
        autoAlpha: 0
      })
      .set(treeLeaves, {
        autoAlpha: 0
      })
      .set(floorLeaves, {
        y: '+=275',
        onComplete: showContainer //callback
      })
      .set(tree, {
        autoAlpha: 0
      });

    function showContainer() {
      cardContainer.show();
    }

    return clearTl;
  }
  // enter floor vegetation

  function enterFloorVegetation() {
    var fleavesTl = new TimelineMax();

    fleavesTl
      .staggerTo(floorLeaves, 1, {
        y: 0,
        ease: Back.easeOut
      }, 0.01)

      .fromTo(tree, 1.1, {
        scaleY: 0.2,
        autoAlpha: 0,
        ease: Back.easeOut,
        transformOrigin: 'center bottom'
      }, {
        scaleY: 1,
        autoAlpha: 1,
      })

      .fromTo(tree, 0.9, {
        scaleX: 0.2,
        autoAlpha: 0,
        tease: Back.easeOut,
        transformOrigin: 'center bottom'
      }, {
        scaleX: 1,
        autoAlpha: 1,
      }, '-=0.9')

    ;

    return fleavesTl;
  }
  // enter tree
  function enterTreestuff() {
    var treeStuffTl = new TimelineMax();

    treeStuffTl
      .staggerFromTo(treeLeaves, 0.5, {
        scale: 0.2,
        autoAlpha: 0,
        transformOrigin: 'center bottom'
      }, {
        scale: 1,
        autoAlpha: 1,
        transformOrigin: 'center bottom'
      }, 0.02) //0.02 staggers each leaf

      .fromTo(nest, 1, {
        y: 0,
        scale: 0.2,
        autoAlpha: 0,
        transformOrigin: 'center center'
      }, {
        y: '-=15',
        scale: 1,
        autoAlpha: 1,
        transformOrigin: 'center center',
        ease: Elastic.easeOut
      }, '+=0.1')

      .to(nest, 0.3, {
        y: "+=15",
        ease: Bounce.easeOut
      }, '-=0.2')

      .add('nest-pop-in')

      .set(birdHat, {
        rotation: 12,
        x: '+=6'
      })

      .to(bird, 1.4, {
        y: '-=39',
        autoAlpha: 1,
        ease: Power4.easeInOut
      }, 'nest-pop-in+= 0.1')

      .add('bird-peeking')

      .set(birdEyes, {
        autoAlpha: 0
      })
      .set(birdEyes, {
        autoAlpha: 1
      }, '+=0.2')
      .set(birdEyes, {
        autoAlpha: 0
      }, '+=0.3')
      .set(birdEyes, {
        autoAlpha: 1
      }, '+=0.4')

      .add('bird-blinks')
      .to(bird, 0.8, {
        y: '-=34',
        ease: Power4.easeInOut
      })
      .to(bird, 0.3, {
        y: '+=8',
        ease: Back.easeInOut
      })
      .to(birdHat, 0.4, {
        y: '-=12',
      }, '-=6')
      .to(birdHat, 0.3, {
        y: 0,
        x: 0,
        rotation: 0,
        onComplete: startBlinking
      }, "-=0.2")

    function startBlinking() {
      var birdBlinksTl = new TimelineMax({
        repeat: -1,
        repeatDelay: 5
      });
      birdBlinksTl
        .set(birdEyes, {
          autoAlpha: 0
        })
        .set(birdEyes, {
          autoAlpha: 1
        }, '+=0.2')
        .set(birdEyes, {
          autoAlpha: 0
        }, '+=1.2')
        .set(birdEyes, {
          autoAlpha: 1
        }, '+=0.2')
    }



    ;



    return treeStuffTl;
  }
  // enter the greeting text
  function enterGreeting() {
    var greetingTl = new TimelineMax();

    greetingTl
      .fromTo(textLine1, 1, {
        y: '-=50',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1,
        onComplete: startLoops
      })

      .fromTo(textLine2, 1, {
        y: '-=25',
        autoAlpha: 0
      }, {
        y: 0,
        autoAlpha: 1
      })

      .staggerFromTo(textGreeting, 0.5, {
        autoAlpha: 0,
        scale: 2,
        transformOrigin: 'center center'
      }, {
        autoAlpha: 1,
        scale: 1
      }, 0.1)

    function startLoops() {
      // bg color loop
      var colors = ['#edcc93', '#f7e3ae', '#f3ebcc', '#edcc93'];

      var bgTl =
        new TimelineMax({
          repeat: -1,
          repeatDelay: 2
        });

      bgTl
        .to(body, 3, {
          backgroundColor: colors[0]
        })
        .to(body, 3, {
          backgroundColor: colors[1]
        }, '+=0.2')
        .to(body, 3, {
          backgroundColor: colors[2]
        }, '+=0.2')
        .to(body, 3, {
          backgroundColor: colors[3]
        }, '+=0.2');

      
      // leaves loop
      // start falling leaves
      (function doFallingLeaves() {
        TweenMax.set(backFallingLeaves, {
          y: -100,
          autoAlpha: 0.2
        });
        TweenMax.to("#brownLeaf", 10 + Math.random() * 10, {
          y: '+=1200',
          autoAlpha: 1,

          onComplete: doneFalling,
          onCompleteParams: ["#brownLeaf"]
        });
        TweenMax.to("#redLeaf", 10 + Math.random() * 10, {
          y: '+=1200',
          autoAlpha: 1,

          onComplete: doneFalling,
          onCompleteParams: ["#redLeaf"]
        });
        TweenMax.to("#orangeLeaf", 10 + Math.random() * 10, {
          y: '+=1200',
          autoAlpha: 1,

          onComplete: doneFalling,
          onCompleteParams: ["#orangeLeaf"]
        });

        function doneFalling(leafId) {
          var range = Math.random() * 800;
          range = range - 400;

          TweenMax.set(leafId, {
            y: -100,
            x: range,
            autoAlpha: 0.2,
            rotation: Math.random() * 360
          });
          TweenMax.to(leafId, 10 + Math.random() * 10, {
            y: '+=1200',
            autoAlpha: 1,

            onComplete: doneFalling,
            onCompleteParams: [leafId]
          });
        }

      })();




    }



    return greetingTl;
  }

  // the GO function ...to kick things all off
  function go() {
    console.log('go..');
    var masterTl = new TimelineMax();

    masterTl
      .add(clearStage(), 'scene-clear-stage')
      .add(enterFloorVegetation(), 'scene-floor-vegetation')
      .add(enterTreestuff(), 'scene-enter-treestuff')
      .add(enterGreeting(), 'scene-enter-greeting');

  }

  go();

})(jQuery);