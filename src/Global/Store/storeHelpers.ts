import { Reducer, AnyAction } from 'redux'
import { ThunkDispatch } from 'redux-thunk'
import { AppState } from '../../App/store/AppState'

export type Dispatch = ThunkDispatch<AppState, null, AnyAction>

type HandlerFunction<TState> = (action: any) => TState
interface HandlerFunctionsMap<TState> {
  [key: string]: HandlerFunction<TState>
}
export type StateToHandlerFunctionsMap<TState> = (state: TState) => HandlerFunctionsMap<TState>

export function createReducers<TState>(
  initialState: TState,
  handlerFunctionMaps: StateToHandlerFunctionsMap<TState> | Array<StateToHandlerFunctionsMap<TState>>,
): Reducer<TState> {
  return function reducer(state: TState = initialState, action: AnyAction) {
    let handlers: any

    if (Array.isArray(handlerFunctionMaps)) {
      handlers = handlerFunctionMaps.reduce((result, handlerFunctionMap) => {
        return {
          ...result,
          ...handlerFunctionMap(state),
        }
      }, {})
    } else {
      handlers = handlerFunctionMaps(state)
    }

    if (handlers.hasOwnProperty(action.type)) {
      return handlers[action.type](action)
    } else {
      return state
    }
  }
}
