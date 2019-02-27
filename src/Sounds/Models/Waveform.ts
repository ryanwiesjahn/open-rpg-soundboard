const audioContext = new AudioContext();

export interface WaveformParams {
  fileSrc: string
}

export class Waveform implements WaveformParams {
  public readonly fileSrc: string
  private _audioBuffer?: AudioBuffer

  constructor(params: WaveformParams) {
    this.fileSrc = params.fileSrc
  }

  public async getAudioBuffer(): Promise<AudioBuffer> {
    if (!this._audioBuffer) {
      const response = await fetch(this.fileSrc, { cache: 'no-store'})
      const buffer = await response.arrayBuffer()
      this._audioBuffer = await audioContext.decodeAudioData(buffer)
    }
    return this._audioBuffer
  }
}
