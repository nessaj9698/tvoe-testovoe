import React from 'react'
import Link from 'next/link'


function LinksList({ links }) {
  return (
    <ul>
         {links.map((link) => (
                <li key={link.title}>
                  <Link href={link.url}>{link.title}</Link>
                </li>
              ))}
    </ul>
  )
}

export default LinksList