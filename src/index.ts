import { pexec } from 'is-running-process'
import { sleep } from 'time-helpers'

export type TDoRestarta = {
  cmd: string
  cb: (result: string) => void
}

let killed = false

export async function doRestarta(opts: TDoRestarta) {
  const { cmd, cb } = opts

  if (killed) {
    return cb('Killed')
  }
  killed = true

  pexec(cmd, async () => {
    cb('APPLICATION RESTARTED: success')
  })

  cb(`DoRestarta!\n ${cmd}\n`)
  await sleep(1e3)
  process.kill(process.pid)
  process.exit()
}
