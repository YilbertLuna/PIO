'use client'
import { useState, useEffect } from "react";

import { publications } from "@/interface";
import { Post } from "@/components/post";
import { CreatePost } from "@/components/createdPost";
import { User } from "@/interface";

export default function Home() {

  const [userInfo, setUserInfo] = useState<User>()
  const [post, setPost] = useState<publications[]>()
  const [success, setSuccess] = useState<boolean>(false)
  const [err, setErr] = useState()

  useEffect(() => {
    async function getPost() {
      const res = await fetch('http://localhost:6060/api/getpublications', {
        method: 'GET',
        credentials: 'include',
      })
      const data = await res.json()

      if(res.status === 200) {
        setPost(data)
        setSuccess(true)
        return
      }

      setSuccess(false)
      setErr(data)
    }

    getPost()
  }, [])

  useEffect(() => {
    async function getUserInfo() {
      const res = await fetch('http://localhost:6060/api/profile', {
        method: 'GET',
        credentials: 'include',
      })
      const data = await res.json()
      
      if(res.status === 200) {
        setUserInfo(data)
        return
      }
    }

    getUserInfo()
  }, [])

  return (
    <main className="flex flex-col justify-center items-center space-y-10 md:ml-40 ml-4 mr-4 mt-28">

        <div className="flex flex-col">
          <p className="flex flex-col space-y-2">
            <span>
              {userInfo?.name}
            </span>
            <span>
              What are you thinking about?
            </span>
          </p>
          <CreatePost />
        </div>

        {success === false && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <p className="text-red-600 text-center">{err}</p>
              </div>
            </div>
          )
        }

        {success && post?.length === 0 && (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-4">
                <p className="text-xl font-semibold text-center">No hay publicaciones</p>
              </div>
            </div>
          )
        }
         
        {success && post?.map((post, id) => {
            return(
              <div key={id} className="flex flex-col justify-center items-center w-80 sm:w-[460px] space-y-5 shadow-md p-10 rounded-xl bg-clip-border bg-color1">
                <Post content={post.content} name={post?.User.name} userId={post.userId} likes={post.likes}/>
              </div>
            )
          })
        }
    </main>
  );
}
