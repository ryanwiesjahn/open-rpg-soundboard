import React from 'react'
import { SoundController, SoundControllerContainer } from '../../Sounds'

interface Props {
  name: string
  soundControllers?: SoundController[]
}

export class SoundScapeView extends React.Component<Props> {
  public render() {
    const { name, soundControllers } = this.props

    return (
      <div>
        <h1>{name}</h1>
        <div>
          {soundControllers && (
            soundControllers.map((soundController => (
              <SoundControllerContainer soundController={soundController} />
            )))
          )}
        </div>
      </div>
    )
  }
}
