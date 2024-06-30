export interface Inputs {
    name: string,
    email: string,
    password: string,
}
export interface User {
    id: string,
    name: string,
    email: string,
    bio: string,
    followers: number,
    followings: number,
    createdAt: string,
    updatedAt: string,
}
