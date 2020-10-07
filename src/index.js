'use strict'
import copyNodeContent from './scripts/copyNodeContent'
import promise from './scripts/promise'

const form = document.getElementById('form')
const input = document.getElementById('input')
const submit = document.getElementById('submit')
const output = document.getElementById('output')
const copyBtn = document.getElementById('copy')
const clearBtn = document.getElementById('clear')

// function to run with textarea input
const manipulateInput = input => {
  const formOutput = input
                      .split('')
                      .filter(char => char !== ' '
                              && char !== '"'
                              && char.length > 0)
  
  const lastItem = formOutput[formOutput.length -1]
  // regex replace argument will remove all line-breaks
  return lastItem === ',' || lastItem === ''
         ? formOutput.slice(0, -1).join('').replace(/(\r\n|\n|\r)/gm, "")
         : formOutput.join('').replace(/(\r\n|\n|\r)/gm, "")
}

// run manipulateInput function with fetched input value
if(submit) {
  submit.addEventListener('click', e => {
    e.preventDefault()
    const { value } = input
  
    value &&
    promise(value).then(() => {
      return manipulateInput(value)
    }).then((value) => {
      return output.innerHTML = `<div class="output-value">${value}</div>`
    })
  })
}

// clears textarea input and scopes output fields
const clear = () => {
  input.value = ''
  output.innerHTML = 'Output will display here'
}

if(clearBtn) clearBtn.addEventListener('click', clear)

// copies scopes from output
if(copyBtn) copyBtn.addEventListener('click',e => {
  e.preventDefault()
  copyNodeContent(output, 'blink')
})

export { manipulateInput }