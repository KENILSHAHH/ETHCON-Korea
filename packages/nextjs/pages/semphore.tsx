import React from 'react'
import { Identity } from "@semaphore-protocol/identity"
import { Group } from "@semaphore-protocol/group"

const group = new Group(1)
function semphore() {
    async function someWhere(event:any) {
        event.preventDefault()
        const { trapdoor, nullifier, commitment } = new Identity();
        const identity = new Identity("weq");
        console.log(identity.toString());
    }
  return (
      <button onClick={someWhere }>semphore</button>
  )
}

export default semphore