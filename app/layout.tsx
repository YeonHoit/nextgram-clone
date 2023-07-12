import React from "react";
import "./globals.css";
import GithubCorner from "@/components/github-corner/GithubCorner";

export const metadata = {
  title: "NextGramClone",
  description: "A sample Next.js app showing dynamic routing with modals as a route.",
};

export default function Layout(props: { children: React.ReactNode; modal: React.ReactNode }) {
  return (
    <html>
      <body>
        <GithubCorner />
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
