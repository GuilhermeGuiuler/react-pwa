import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { initializeFirebase } from './push-notification'

import '@ionic/core/css/core.css'

/* Basic CSS for apps built with Ionic */
import '@ionic/core/css/normalize.css'
import '@ionic/core/css/structure.css'
import '@ionic/core/css/typography.css'

/* Optional CSS utils that can be commented out */
import '@ionic/core/css/padding.css'
import '@ionic/core/css/float-elements.css'
import '@ionic/core/css/text-alignment.css'
import '@ionic/core/css/text-transformation.css'
import '@ionic/core/css/flex-utils.css'
import '@ionic/core/css/display.css'

import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

initializeFirebase()
serviceWorker.register()
