import { useRouter } from 'next/dist/client/router';
import * as React from 'react';

const UserNamePage = () => {
  const router = useRouter()
  return (
    <div>
      <h1>Hola {router.query.username}</h1>
    </div>
  )
}

export default UserNamePage
