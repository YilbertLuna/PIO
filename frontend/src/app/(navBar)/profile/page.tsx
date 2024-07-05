'use client'

import Image from "next/image"
import { useState, useEffect } from "react";
import Link from 'next/link'

import { User, publications } from "@/interface";
import { Post } from "@/components/post";

export default function Profile(): JSX.Element {

    const [userInfo, setUserInfo] = useState<User>()
    const [post, setPost] = useState<publications[]>()
    const [success, setSuccess] = useState<boolean>(false)
    const [err, setErr] = useState()

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

    useEffect(() => {
      async function getPost() {
        const res = await fetch('http://localhost:6060/api/getMyPublications', {
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

    return(
      <div className="flex flex-col justify-center items-center space-y-10 md:ml-40 ml-4 mr-4 mt-28 md:mt-2">
          
          <div className="flex flex-col w-full justify-center items-center space-y-4">
              <div className="flex flex-row w-80 md:w-[400px] mt-11 lg:w-[600px] justify-between items-center">
                  <div className="flex flex-col justify-center items-start space-x-2 space-y-2">
                      <p className="text-xl font-medium">{userInfo?.name}</p>
                      <p className="text-sm font-normal">{userInfo?.bio}</p>
                  </div>
                  
                  <figure>
                      <Image src="/FotoPerfil.jpg" alt="PIO logo" width={100} height={100} className="rounded-full"/>
                  </figure>
              </div>

              <div className="flex flex-row justify-center items-center w-full space-x-11">
                  <p>Followers {userInfo?.followers}</p>
                  <p>Following {userInfo?.followings}</p>
              </div>

              <Link href="/edit-profile" className="bg-color2 rounded-xl p-4 text-lg font-semibold">Edit Profile</Link>
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
    </div>
  )
}