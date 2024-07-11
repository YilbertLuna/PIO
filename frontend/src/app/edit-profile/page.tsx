import { EditProfileForm } from "@/components/forms/editProfile"

export default function EditProfile() {

    return(
        <div className="flex flex-col h-dvh md:h-screen justify-center items-center gap-5">
            <h1 className="text-3xl font-semibold text-gray-900">Edit Profile</h1>
            <div className="flex justify-center items-center bg-color1 rounded-lg px-11 py-7 shadow-lg">
                
                <EditProfileForm />
                
            </div>
        </div>
    )
}