import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { initializeFirebase } from './push-notification'

import * as serviceWorker from './serviceWorker'

ReactDOM.render(<App />, document.getElementById('root'))

initializeFirebase()
serviceWorker.unregister()
