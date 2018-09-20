const { expect } = chai

describe('check tests are running', () => {
  it('Check Tests running', () => {
    expect(true).to.equal(true);
  })
})

//Test to see if priceLevel is a function
describe('test priceLevel', () => {
  it('priceLevel exist', () => {
    expect(priceLevel).to.be.a("function")
  })
  it('does it return the correct output', () => {
    expect(priceLevel()).to.equal(Free)
  })
})

//Test to see if priceLevel is a function
describe('test openClosed', () => {
  it('openClosed exist', () => {
    expect(openClosed).to.be.a("function")
    })
  })

//   it('does it create materialize card element', () => {
//     let div = createCards("param1", "param2" )
//     expect(div.children.length).to.equal(2)
//     expect(div.children[0]).to.equal('IMG')
//     expect(div.children[1]).to.equal('DIV')
//     expect(div.className).to.equal('media')
//
//     let h5 = div.children[1].children[0]
//     expect(h5.tagname).to.equal('H5')
//     expect(h5.tagname).to.equal('H5')
//     expect(h5.innerText).to.equal('title')
//
//   })
