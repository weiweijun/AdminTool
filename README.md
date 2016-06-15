# AdminTool
config
gulp, gulp-connect, gulp-open, livereload
browserify, reactify, vinyl-source-stream
gulp-concat, gulp-eslint

Skeleton done

Create our first components
Setup custom routing
Create centralized layout

Props - like HTML attributes, but immutable: this.props.username, getDefaultProps
State - holds mutable state: this.state.username
Parent pass state child via props
Dynamic child components
Lifecycle functions

componentWillMount:
when: Before initial render, both client and server
why: Good spot to set initial state

componentDidMount:
when: After render
why: Access DOM, integrate with frameworks, set timers, AJAX requests

componentWillReceiveProps
when: When receiving new props. Not called on initial render.
why: Set state before a render

shouldComponentUpdate
when: Before render when new props or state are being received. Not called on initial render.
why: Performance. Return false to void unnecessary re-renders.

componentWillUpdate
when: Immediately before rendering when new props or state are being received. Not called on initial render
why: prepare for an update

componentDidUpdate
when: After component's updates are flushed to the DOM. Not called for the initial render
why: Work with the DOM after an update

componentWillUnmount
when: Immediately before component is removed from the DOM
why: Cleanup

Porps: pass data to child components
State: Data in controller view
Lifecycle: Handle bootstrapping and third party integrations

propType give us a way to declare our expectations for a given component. Only run in dev version of React

React router

Any input with a value is a controller component
Create reusable inputs
Saved data via AJAX calls in controller view
Programmatically redirected after save via React Router
Used Toastr to display notifications
Added validataion
Used PropType to declare expectations
Used willTransitionForm to protect from losing work
Populated form in componentWillMount

Actions -> Dispatcher -> Store -> React View            unidirection data flow
Delete User - Notify everyone who care - hold app state, UI never interact data directly, and the data never updates
the UI directly

Actions payload has a type and data
Dispatcher: Central Hub - there is only one, hold list of callbacks, broadcasts payload to registered callbacks, send
actions to stores
Store: Holds app state, logic, data retrieval, not a model - contains models. Registers callbacks with dispatcher. Uses
Node's EvnentEmitter. Store is the only thing knows how to update data. Most important part of Flux. actions and  Dispatcher
dont know how to update data, only stores knows how

web api    <->  Action -> send action payload -> dispatcher -> send action payload -> store received data -> updates storage and files
                    |
change event -> React view