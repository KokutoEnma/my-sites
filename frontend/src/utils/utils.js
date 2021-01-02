

export const errorlistDecoder = str => {
    let doc = new DOMParser().parseFromString(str, 'text/html');
    let domUL = doc.body.getElementsByClassName('errorlist')
    if (domUL.length === 0) return { error: false, msg: null }
    domUL = domUL[0]
    let errorList = []
    domUL.childNodes.forEach(element => {
        errorList.push(element.innerHTML)
    });
    return { error: true, msg: errorList }
}