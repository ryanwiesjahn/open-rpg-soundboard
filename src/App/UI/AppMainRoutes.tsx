import React from 'react'
import { Switch, Route } from 'react-router'
import { APP_ROUTES } from '../appRoutes'
import { SoundScapeContainer } from '../../SoundScapes/UI/SoundScapeContainer';

export class AppMainRoutes extends React.Component {
  public render() {
    return (
      <Switch>
        <Route exact path={APP_ROUTES.ROOT} render={() => (
          <div>
            Home
          </div>
        )} />
        <Route path={APP_ROUTES.SOUND_SCAPE} component={SoundScapeContainer} />
      </Switch>
    )
  }
}
