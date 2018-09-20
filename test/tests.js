const { expect } = chai

describe('check tests are running', () => {
  it('Check Tests running', () => {
    expect(true).to.equal(true);
  })
})

//Test to see if it is a function
describe('test priceLevel', () => {
  it('priceLevel exist', () => {
    expect(priceLevel).to.be.a("function")
  })
//   it('does it return a div dom element', () => {
//     let div = createCards("param1", "param2" )
//     expect(div.tagName).to.equal("DIV")
//   })
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
 })
