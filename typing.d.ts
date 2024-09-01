import { profile } from "console";
import { type } from "os";

export interface Tweet extends TweetBody{
    _id:string
    _created_at:string
    _updated_at:string
    _rev:string
    _type:"tweet"
    blockTweet:boolean
}
export type TweetBody={
    text:string
    username:string
    profileImg:string
    image:string

}
export type CommentBody={
    comment:string
    profileImg:string
    username:string
    tweet:string
}
export interface Tweet extends TweetBody{
    _id:string
    _created_at:string
    _updated_at:string
    _rev:string
    _type:"comment"
    tweet:{
        ref:string
        _type:"reference"
    }
}
