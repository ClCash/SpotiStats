import React from 'react'

function layout({ children}: { children: React.ReactNode})  {
  return (
    <div>
        <div>layout</div>
        <div>{children}</div>
    </div>

  )
}

export default layout