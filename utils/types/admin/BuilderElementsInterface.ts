export interface ITextElement {
    label : string
    name : string
    required : boolean
    value? : string
}
export interface ITextAreaElement {
    label : string
    name : string
    required : boolean
    value? : string
    minRows? : number
    maxRows? : number
}
export interface IImageElement {
    label : string
    name : string
    required : boolean
    value? : string
}
export interface ILinkElement {
    label : string
    name : string
    required : boolean
    value? : LinkInterface
}
export interface LinkInterface {
    title : string
    url : string
    target : string
}