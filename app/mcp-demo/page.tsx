import { auth } from "@/auth"
import { redirect } from "next/navigation"
import { McpDemoClient } from "./mcp-demo-client"

export default async function McpDemoPage() {
  const session = await auth()
  
  if (!session) {
    redirect('/auth/signin?callbackUrl=/mcp-demo')
  }

  return <McpDemoClient />
}
