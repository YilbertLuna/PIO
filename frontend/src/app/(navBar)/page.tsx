'use client'
import { useState, useEffect } from "react";

import { publications } from "@/interface";
import { Post } from "@/components/post";

export default function Home() {

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

  return (
    <main className="flex flex-col justify-center items-center space-y-10 md:ml-40 ml-4 mr-4 mt-28">
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
