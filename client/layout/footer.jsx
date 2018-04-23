import className from '../assets/styles/footer.styl'
export default {
  data () {
    return {
      author: 'uyoung'
    }
  },
  render () {
    return (
      <div id={className.footer}>
        <span>written by {this.author}</span>
      </div>
    )
  }
}
