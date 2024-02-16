import { auth } from "@/lib/auth"
import { redirect } from "next/navigation"

async function LoggedoutLayout({ children }) {
    const session = await auth()
    if (session?.user) {
        redirect("/")
    }
    return children
}

export default LoggedoutLayout
