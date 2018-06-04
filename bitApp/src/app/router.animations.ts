import {trigger, state, animate, style, transition, query, group} from '@angular/animations';

export function routerTransition() {
  return intento2();
  // return jcAnimation();
  // return slideToRight();
  // return fadeInAnimation();
}

/////////////////////////////////////////////// Intento 1
export const fadeAnimation =
  trigger('fadeAnimation', [
    transition('* => *', [
      query(':enter',
        [
          style({ opacity: 0 })
        ],
        { optional: true }
      ),
      query(':leave',
        [
          style({ opacity: 1 }),
          animate('0.5s', style({ opacity: 0 }))
        ],
        { optional: true }
      ),
      query(':enter',
        [
          style({ opacity: 0 }),
          animate('0.5s', style({ opacity: 1 }))
        ],
        { optional: true }
      )
    ])
  ]);

export const fadeInAnimation2 =
  trigger('fadeInAnimation', [
    // route 'enter' transition
    transition(':enter', [

      // styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 1 }))
    ]),
  ]);

function fadeInAnimation () {
  return trigger('routerTransition', [
  transition('* => *', [
    query(':enter', [
      style({ opacity: 0 })
    ], { optional: true }
    ),
    group([
      query(':leave', [
        animate(300, style({ opacity: 0 }))
      ],
        { optional: true }
      ),
      query(':enter', [
        style({ opacity: 0 }),
        animate(300, style({ opacity: 1 }))
      ],
        { optional: true }
      )
    ])
  ])
]);
}

function jcAnimation() {
  return trigger('routerTransition', [
    state('active', style({
      opacity: 1
    })),
    state('active', style({
      opacity: 0
    })),
    transition('inicio => consultar', animate('600ms ease-out')),
    transition('consultar => inicio', animate('1000ms ease-in'))
  ]);
}

function fadeInAnimation3 () {
  return trigger('routerTransition', [
    // route 'enter' transition
    transition('*<=>*', [

      // styles at start of transition
      style({ opacity: 0 }),

      // animation and styles at end of transition
      animate('.3s', style({ opacity: 1 }))
    ]),
  ]);
}
/////////////////////////////////////////////

function slideToRight() {
  return trigger('routerTransition', [
    state('void', style({ width: '100%'}) ),
    state('*', style({ width: '100%'}) ),
    transition(':enter', [
      style({transform: 'translateX(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateX(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateX(100%)'}))
    ])
  ]);
}

function slideToLeft() {
  return trigger('routerTransition', [
    state('void', style({ position: 'fixed', width: '100%' })),
    state('*', style({ position: 'fixed', width: '100%' })),
    transition(':enter', [
      style({ transform: 'translateX(100%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(0%)' }))
    ]),
    transition(':leave', [
      style({ transform: 'translateX(0%)' }),
      animate('0.5s ease-in-out', style({ transform: 'translateX(-100%)' }))
    ])
  ]);
}

function slideToBottom() {
  return trigger('routerTransition', [
    state('void', style({position: 'fixed', width: '100%', height: '100%'}) ),
    state('*', style({position: 'fixed', width: '100%', height: '100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(-100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(100%)'}))
    ])
  ]);
}

function slideToTop() {
  return trigger('routerTransition', [
    state('void', style({position: 'fixed', width: '100%', height: '100%'}) ),
    state('*', style({position: 'fixed', width: '100%', height: '100%'}) ),
    transition(':enter', [
      style({transform: 'translateY(100%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(0%)'}))
    ]),
    transition(':leave', [
      style({transform: 'translateY(0%)'}),
      animate('0.5s ease-in-out', style({transform: 'translateY(-100%)'}))
    ])
  ]);
}

function intento1() {
  return trigger('routerTransition', [
    transition('* <=> *', [
      // Initial state of new route
      query(':enter',
        style({
          // opacity: 0,
          position: 'fixed',
          width: '100%',
          transform: 'translateX(-200%)'
        }),
        { optional: false }),
      // move page off screen right on leave
      query(':leave',
        animate('500ms ease',
          style({
            opacity: 0,
            position: 'fixed',
            width: '100%',
            transform: 'translateX(200%)'
          })
        ),
        { optional: false }),
      // move page in screen from left to right
      query(':enter',
        animate('500ms ease',
          style({
            opacity: 1,
            transform: 'translateX(50%)'
          })
        ),
        { optional: false }),
    ])
  ]);
}

function intento2() {
  return trigger('routerTransition', [
    transition('* => *', [
      style({ opacity: 0 }),
      animate('500ms', style({ opacity: 1 }))
    ])
    // transition('* => fadeOut', [
    //   style({ opacity: 1}),
    //   animate('500ms', style({ opacity: 0 }))
    // ])
  ]);
}
