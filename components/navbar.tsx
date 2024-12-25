"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";
import { Button } from "./ui/button";
import { ModeToggle } from "./mode-toggle";
import { Pen, LogIn } from "lucide-react";

export default function Navbar() {
  const { data: session } = useSession();

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold">
          ModernBlog
        </Link>

        <div className="flex items-center gap-4">
          <ModeToggle />
          
          {session ? (
            <>
              {session.user?.role === "admin" && (
                <Link href="/dashboard">
                  <Button variant="outline" size="sm">
                    <Pen className="mr-2 h-4 w-4" />
                    Dashboard
                  </Button>
                </Link>
              )}
              <Button
                variant="ghost"
                onClick={() => signOut()}
              >
                Sign Out
              </Button>
            </>
          ) : (
            <Button onClick={() => signIn()}>
              <LogIn className="mr-2 h-4 w-4" />
              Sign In
            </Button>
          )}
        </div>
      </div>
    </nav>
  );
}