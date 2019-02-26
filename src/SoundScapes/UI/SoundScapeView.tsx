import React from 'react'

interface Props {
  name: string
}

export class SoundScapeView extends React.Component<Props> {
  public render() {
    const { name } = this.props

    return (
      <div>
        <h1>{name}</h1>
      </div>
    )
  }
}
