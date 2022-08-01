import React from 'react'

export default function CatPicture({catImg}) {
  return (
    <div>
        <img src={catImg.url} alt ="cat_pic"/>
    </div>
  )
}
