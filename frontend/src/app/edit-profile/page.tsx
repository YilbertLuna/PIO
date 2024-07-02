'use client'

import { Input } from "@/components/Input"

export default function EditProfile() {

    return(
        <div className="flex flex-col h-dvh md:h-screen justify-center items-center gap-5">
            <h1 className="text-3xl font-semibold text-gray-900">Edit Profile</h1>
            <div className="flex justify-center items-center bg-color1 rounded-lg px-11 py-7 shadow-lg">
                <form className=" flex flex-col justify-center items-center space-y-5" onSubmit={ e=> {
                    e.preventDefault()
                }}>
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="name">
                            Name
                        </label>
                        <Input
                            type="text"
                            id="name"
                            name="name"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700" htmlFor="bio">
                            Bio
                        </label>
                        <textarea name="bio" id="bio" className="block w-80 rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 sm:text-sm sm:leading-6"/>
                    </div>
                    <div>
                        <button
                            type="submit"
                            className="flex justify-center rounded-md bg-color2 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-color3 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Update Profile
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}