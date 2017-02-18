import Sandpit from 'sandpit'

const playground = () => {
  const sandpit = new Sandpit(document.querySelector('#root'), Sandpit.CANVAS)

  /*
   * 🔥👏💖
   * Build your demo here
   * The code including and after reset() is boilerplate
   * for sandpit-site, and needs to be included.
   * If you need a specific background and text color to
   * make the description readable, edit:
   *   document.querySelector('.overlay').style.color = '#000'
   *   document.querySelector('body').style.background = '#fff'
   * at the bottom of the file
   */

  // Keep the demo in the query string when resetting
  sandpit.reset = () => {
    // Keep the demo
    window.history.replaceState({}, null, `${sandpit._getPathFromUrl()}?demo=${sandpit.settings.demo}`)
    // Reload the page
    window.location.reload()
  }

  // Give a hook back to the sandpit
  playground.prototype.sandpit = sandpit

  // Update the text color of the overlay to be visible
  document.querySelector('.overlay').style.color = '#000'
  document.querySelector('body').style.background = '#fff'
}

export default playground
