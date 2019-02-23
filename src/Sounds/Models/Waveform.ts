const audioContext = new AudioContext();

export class Waveform {
  private fileSrc: string
  private _audioBuffer?: AudioBuffer

  constructor(fileSrc: string) {
    this.fileSrc = fileSrc
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
