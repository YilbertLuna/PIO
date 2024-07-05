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
export interface publications {
    id: string,
    content: string,
    likes: number,
    createdAt: string,
    updatedAt: string,
    userId: string,
    User: User
}