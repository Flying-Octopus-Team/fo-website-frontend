class TextUtil {

  public static fixHangingConjunctions(text: string): string {
    const lettersToReplace = ['a', 'i', 'o', 'u', 'w', 'z', 'A', 'I', 'O', 'U', 'W', 'Z']
    lettersToReplace.forEach(letter => {
      let textSplit = text.split(' ' + letter + ' ')
      text = textSplit.join(' ' + letter + '&nbsp;')
    })
    return text
  }

}

export default TextUtil
