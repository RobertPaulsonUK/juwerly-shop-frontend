export interface IAuthResponse {
    success: boolean
    user?: {
        id: number;
        name: string;
        email: string;
        role: string;
    }
    token?: string
    message : string
}