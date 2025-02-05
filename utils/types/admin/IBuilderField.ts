export interface IBuilderField {
    title : string
    type : FieldType;
    required? : boolean
    subFields? : IBuilderField[]
    minRows? : number
    maxRows? : number
}

export enum FieldType {
    Email = "email",
    Text = "text",
    Password = "password",
    Number = "number",
    Date = "date",
    TextArea = "textarea",
    Editor = "rich-text",
    Repeater = "repeater",
    Image = "image",
    Json = "Json",
    Link = "Link"
}