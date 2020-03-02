export function countWords(text){
    return text.split(/\W+/u).filter(Boolean).length
}

export function normalizeSpacing(text){
    return text.replace(/\s+/u, ' ').trim()
}

export default class SuperComponent {

}