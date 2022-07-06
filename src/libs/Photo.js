class Photo {

  constructor(photoProps) {
    const { filename, src, height, width, subheader } = photoProps
    this.filename = filename
    this.src = src
    this.height = height
    this.width = width
    this.subheader = subheader
  }
}

export default Photo