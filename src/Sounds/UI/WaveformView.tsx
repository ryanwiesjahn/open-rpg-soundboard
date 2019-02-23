import React from 'react'
import styled from '@emotion/styled'
import ResizeObserver from 'react-resize-observer'
import { Waveform } from '../Models/Waveform'

interface Props {
  fileSrc: string
  className?: string
}

export class WaveformView extends React.Component<Props> {
  private waveform: Waveform
  private containerViewRef: React.RefObject<HTMLDivElement>
  private canvasRef: React.RefObject<HTMLCanvasElement>

  constructor(props: Props) {
    super(props)

    this.waveform = new Waveform(props.fileSrc)
    this.containerViewRef = React.createRef()
    this.canvasRef = React.createRef()
  }

  public componentDidMount() {
    this.draw()
  }

  public render() {
    return (
      <View ref={this.containerViewRef} className={this.props.className}>
        <ResizeObserver onResize={this.draw} />
        <Canvas ref={this.canvasRef} />
      </View>
    )
  }

  private draw = async () => {
    if (!this.waveform) { return }

    const containerView = this.containerViewRef.current
    const canvas = this.canvasRef.current

    if (!canvas || !containerView) { return }

    const width = containerView.clientWidth
    const height = containerView.clientHeight
    
    canvas.width = width
    canvas.height = height
    
    const context = canvas.getContext('2d')
    const color = getComputedStyle(containerView).color

    if (!context) { return }

    context.clearRect(0, 0, width, height)

    if (color) {
      context.fillStyle = color
    }

    const audioBuffer = await this.waveform.getAudioBuffer()
    const data = audioBuffer.getChannelData(0)
    const step = Math.ceil( data.length / width )
    const amp = height / 2
    for (let x = 0; x < width; x++) {
      let min = 1.0
      let max = -1.0
      for (let j = 0; j < step; j++) {
        const datum = data[(x * step) + j]
        if (datum < min) {
          min = datum
        }
        if (datum > max) {
          max = datum
        }
      }
      context.fillRect(x, (1 + min) * amp, 1, Math.max(1, (max - min) * amp))
    }
  }
}

const View = styled.div({
  width: '100%',
  height: '100%',
  overflow: 'hidden',
})

const Canvas = styled.canvas({
  
})
